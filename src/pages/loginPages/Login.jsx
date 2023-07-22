import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    useTitle('login')
    const [error, setError] = useState();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {userLogin, googleLogin, user} = useContext(contextProvider);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    
    const handleOnSubmit = data =>{
         console.log(data)
         userLogin(data.email, data.password)
         .then(result =>{
            const loggedUser = result.user;
            navigate(from, {replace:true})
         })
         .catch(error =>{
            setError(error.message);
         })

        };
         
        const handleGoogleLogin = () =>{
            googleLogin()
            .then((result)=>{
                console.log(result)
                navigate(from, {replace:true})
            })
            .catch(error=> setError(error.message))
          }
    return (
        <div>
         
            <p className='text-center font-serif font-bold text-4xl mt-20 text-white'>Please Login </p> <hr className='w-1/2 mt-2 ms-96'/>
            <p className='text-red-700 font-bold text-center text-2xl'>{error}</p>
           
            <form onSubmit={handleSubmit(handleOnSubmit)} className='w-1/2 space-y-3 mx-auto bg-slate-100 p-10 ps-56 m-8 shadow-xl rounded-xl py-14'>
                <label htmlFor="" className='font-mono ms-2 mt-2'>Email</label><br />
                <input type='email' defaultValue={user?.email} {...register("email", { required: true, required: "Email Address is required"})} className="input input-bordered w-full max-w-xs"/> <br />

                 <label htmlFor="" className='font-mono ms-2 '>Password</label> <br />
                <input type='password' {...register("password", { required: true, maxLength: 6 })} className="input input-bordered w-full max-w-xs"/> <br />
                 
                {errors.exampleRequired && <span>This field is required</span>}

                <input type="submit" value='Login' className="btn w-2/4 bg-blue-800 px-10 mt-6 ms-4"/>
            </form>
            
            <button onClick={handleGoogleLogin} className="btn btn-outline btn-warning ms-96 shadow-2xl">Login with Google</button>
            <p className=' text-center mt-4 mb-5 text-blue-200'>New to Creative Creator Toys? <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;