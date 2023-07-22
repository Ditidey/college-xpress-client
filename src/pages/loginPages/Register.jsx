import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
 import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { contextProvider } from '../../AuthProvider';
 

const Register = () => {
    useTitle('register')
    const [error, setError] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {userCreate, updateUser, googleLogin} = useContext(contextProvider)
     const navigate = useNavigate();

    const handleOnSubmit = data =>{
        //  console.log(data.email, data.photoURL)
         
         userCreate(data.email, data.password)
         .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            setError('')

            updateUser(data.name, data.photoURL)
            .then(()=>{})
            .catch(error=>{
                setError(error.message)
            })
            Swal.fire({
                title: 'Registration Successful!',
                text: 'You can add, see and update toys',
                icon: 'success',
                confirmButtonText: 'Cool'
            })

            navigate('/');
            
         })
         .catch(error => {
            setError(error.message)
         })
        };

  const handleGoogleLogin = () =>{
    googleLogin()
    .then((result)=>{
        console.log(result)
        navigate('/')
    })
    .catch(error=> setError(error.message))
  }
    return (
        <div>
       

            <p className='text-center font-serif font-bold text-4xl mt-20 text-white'>Please Create Account </p> <hr className='w-1/2 mt-2 ms-96'/>
            <p className='text-red-700 font-bold text-center text-2xl bg-yellow-200 p-2'>{error}</p>
           
            <form onSubmit={handleSubmit(handleOnSubmit)} className='w-1/2   mx-auto bg-slate-100 p-10 ps-56 m-8 shadow-xl rounded-xl py-14'>
                <label htmlFor="" className='font-mono ms-2 '>Name</label><br />
                <input type='text' defaultValue="name" {...register("name", { required: true, required: "Name is required"})} className="input input-bordered w-full max-w-xs"/> <br />
                <label htmlFor="" className='font-mono ms-2 '>Photo</label><br />
                <input type='text'   {...register("photoURL", { required: true, required: "Photo is required"})} className="input input-bordered w-full max-w-xs"/> <br />
                <label htmlFor="" className='font-mono ms-2'>Email</label><br />
                <input type='email' defaultValue="email@gmail.com" {...register("email", { required: true, required: "Email Address is required"})} className="input input-bordered w-full max-w-xs"/> <br />

                 <label htmlFor="" className='font-mono ms-2'>Password</label> <br />
                <input type='password' {...register("password", { required: true, maxLength: 6 })} className="input input-bordered w-full max-w-xs"/> <br />
                 
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value='Register' className="btn w-2/4 bg-blue-800 px-10 mt-6 ms-4 "/>
            </form>

            <button onClick={handleGoogleLogin}  className="btn btn-outline btn-warning ms-96 shadow-2xl">Login with Google</button>
            
            <p className='text-center mt-4 mb-5 text-blue-200'>Already registered? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;