import lottieAni2 from '../../../public/animation_lkcwvho1.json';
import Lottie from "lottie-react";
// import './Hero.css';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
 
const HeroSection = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <>
            <div className='bg-gradient-to-r from-blue-50 to-white md:relative p-2'  >
                <div className='md:w-[90%] mx-auto '>

                    <div className='md:flex md:justify-evenly' >
                        {/* for left side hero section */}
                        <div id='div-one' className='md:items-center mt-10 md:ms-10 w-[280px] md:w-auto' data-aos="fade-left" data-aos-duration="1000">
                            <h2 className='font-bold text-5xl py-5 bg-gradient-to-r from-cyan-400 to-blue-700 text-transparent bg-clip-text'>
                            Your Pathway <br /> <span className='ms-10'>to</span><br />
                                <Typewriter
                                    words={['Academic Success']}
                                    loop={15}
                                    delaySpeed={3000}
                                    typeSpeed={50}
                                    cursor
                                    cursorStyle='.'
                                ></Typewriter>
                            </h2>
                            <p className='text-sm'>Discover a world of comprehensive support, <br /> tailored to meet the needs of every aspiring scholar. From hassle-free <br /> admissions and student counseling to innovative campus facilities and <br /> cutting-edge technology, we've crafted an ecosystem that fosters growth and success. </p>
                            <button className='bg-white text-blue-600 font-bold p-3 my-8 text-2xl shadow-lg rounded-md md:ms-16 hover:bg-blue-200 px-6'><Link to='/admission-page'>Enroll Now</Link></button>
                        </div>

                        {/* right side hero section */}
                   
                        <div id='wavy' className='items-center px-20 bg-white flex' data-aos="fade-up-left" data-aos-duration="1000"  >
                           <div className='md:absolute end-14   '  >
                         
                           <Lottie animationData={lottieAni2} className='h-[400px] md:w-[400px] w-[250px] mx-auto pb-20 -top-16 -translate-x-6' />

                           </div>
                           <div className=' '>
                            <h2 className='text-4xl text-blue-400'>Well service, well learning</h2>
                           </div>
                        </div>
                      
                         
                    </div>
                </div>

               
            </div>


        </>
    );
};

export default HeroSection;