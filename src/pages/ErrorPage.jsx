import lottieError from '../../public/animation_lkcwtko5.json';
import Lottie from "lottie-react";

const ErrorPage = () => {
    return (
        <div className='bg-red-300 h-[1000px]'>
            <Lottie animationData={lottieError} className='h-[600px] md:w-[600px] mx-auto' />
        </div>
    );
};

export default ErrorPage;