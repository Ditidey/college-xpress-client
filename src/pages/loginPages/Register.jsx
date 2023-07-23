import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';
import { contextProvider } from '../../AuthProvider';
import SecTitle from '../../components/shared/SecTitle';


const Register = () => {
    useTitle('register')
    const [error, setError] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { userCreate, updateUser, googleLogin } = useContext(contextProvider)
    const navigate = useNavigate();

    const handleOnSubmit = data => {
         console.log(data.email, data.photoURL)

        userCreate(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setError('')

                updateUser(data.name, data.photoURL)
                    .then(() => { })
                    .catch(error => {
                        setError(error.message)
                    })
                Swal.fire({
                    title: 'Registration Successful!',
                    text: 'You can see college details and enroll class',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

                navigate('/');

            })
            .catch(error => {
                setError(error.message)
            })
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log(result)
                navigate('/')
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className='md:p-10 p-2 my-10'>

            <SecTitle title={'Create Account'}></SecTitle>
          
            <p className='text-red-700 font-bold text-center text-2xl  p-2'>{error}</p>

            <form onSubmit={handleSubmit(handleOnSubmit)} className='md:w-1/2 w-full mt-5 md:mx-auto bg-slate-100 md:p-10 p-3 md:ps-56 md:m-8 shadow-xl rounded-xl py-14'>
                <label htmlFor="" className='font-mono ms-2 '>Name</label><br />
                <input type='text' defaultValue="name" {...register("name", { required: true, required: "Name is required" })} className="p-3 w-full max-w-xs" /> <br />
                <label htmlFor="" className='font-mono ms-2 '>Photo</label><br />
                <input type='text'   {...register("photoURL", { required: true, required: "Photo is required" })} className="p-3 w-full max-w-xs" /> <br />
                <label htmlFor="" className='font-mono ms-2'>Email</label><br />
                <input type='email' defaultValue="email@gmail.com" {...register("email", { required: true, required: "Email Address is required" })} className="p-3 w-full max-w-xs" /> <br />

                <label htmlFor="" className='font-mono ms-2'>Password</label> <br />
                <input type='password' {...register("password", { required: true  })} className=" p-3  w-full max-w-xs" /> <br />

                {errors.password && <span>This field is required</span>} <br />

                <input type="submit" value='Register' className="btn w-2/4 p-3 bg-blue-800  mt-6 ms-4 text-white " />
            </form>

            <button onClick={handleGoogleLogin} className="  md:ps-52 ps-20 md:ms-96  text-yellow-500">Login with Google</button>

            <p className='text-center mt-4 mb-5 text-blue-700'>Already registered? <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default Register;