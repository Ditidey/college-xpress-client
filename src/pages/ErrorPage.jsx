import { Link, useRouteError } from 'react-router-dom';
import lottieError from '../../public/animation_lkcwtko5.json';
import Lottie from "lottie-react";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='bg-red-300 h-[1000px] p-10'>
            <Link to='/' className=" bg-blue-800 p-3 ms-4 mt-10 text-white ">Back to home page</Link> <br />
            <p className="my-4 text-red-900 mt-5 text-xl p-2 ms-3 ">Error! {error.statusText || error.message}.</p>
            <Lottie animationData={lottieError} className='h-[600px] md:w-[600px] mx-auto' />
        </div>
    );
};

export default ErrorPage;