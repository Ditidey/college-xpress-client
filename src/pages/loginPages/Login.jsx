import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import useTitle from '../../hooks/useTitle';
import SecTitle from '../../components/shared/SecTitle';

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
        <div className='md:p-10 p-2'>
         
            <SecTitle title={'Login Please'}></SecTitle>
            <p className='text-red-700 font-bold text-center text-2xl'>{error}</p>
           
            <form onSubmit={handleSubmit(handleOnSubmit)} className='w-1/2 space-y-3 mx-auto bg-slate-100 p-10 ps-56 m-8 shadow-xl rounded-xl py-14'>
                <label htmlFor="" className='font-mono ms-2 mt-2'>Email</label><br />
                <input type='email' defaultValue={user?.email} {...register("email", { required: true, required: "Email Address is required"})} className="p-3 w-full max-w-xs"/> <br />

                 <label htmlFor="" className='font-mono ms-2 '>Password</label> <br />
                <input type='password' {...register("password", { required: true, maxLength: 6 })} className="p-3 w-full max-w-xs"/> <br />
                 
                {errors.password && <span>This field is required</span>}

                <input type="submit" value='Login' className="p-3 text-white w-2/4 bg-blue-800 px-10 mt-6 ms-4"/>
            </form>
            
            <button onClick={handleGoogleLogin} className=" text-orange-400 md:ms-96 md:ps-64 ">Login with Google</button>
            <p className=' text-center mt-4 mb-10 text-blue-600'>New to CollegeXpress? <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Login;