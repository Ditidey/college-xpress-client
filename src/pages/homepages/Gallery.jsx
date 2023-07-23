import React from 'react';
import grad from '../../../public/grad.webp'
import grad1 from '../../../public/grad1.webp'
import grad2 from '../../../public/grad3.webp'
import grad4 from '../../../public/grad4.jpg'
import grad5 from '../../../public/grad5.jpg'
import grad6 from '../../../public/grad6.jpg'
import grad7 from '../../../public/grad7.jpg'
import grad8 from '../../../public/grad8.jpg'
import grad9 from '../../../public/grad9.jpg'
import grad10 from '../../../public/grad10.jpg'
import grad11 from '../../../public/grad11.jpg'
import grad12 from '../../../public/grad12.jpg'
import grad13 from '../../../public/grad13.jpg'
import grad14 from '../../../public/grad14.jpg'
import grad15 from '../../../public/grad15.jpg'
import grad16 from '../../../public/grad16.jpg'
import grad18 from '../../../public/grad18.jpg'
import SecTitle from '../../components/shared/SecTitle';

const Gallery = () => {
    return (
        <div className='md:p-10 p-2 w-full mx-auto h-full mb-60 md:mb-32 mt-5'>
            <SecTitle title={'Happy Graduates'}></SecTitle>
            <div className='grid md:grid-rows-3 gap-4 mt-5 bg-blue-50'>
                <div className='md:flex'>
                    <div className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'><img src={grad} alt="" className='w-full h-full'/></div>
                    <div  className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'>
                        <div><img src={grad1} alt="" className='w-full h-[259px] m-1 '/></div>
                        {/* <div> <img src={grad2} alt="" className='w-full h-full m-1'/></div> */}
                    </div>
                    <div className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'><img src={grad4} alt="" className='w-full h-full'/></div>
                    <div  className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'>
                        <div><img src={grad5} alt="" className='w-full h-full m-1'/></div>
                        <div> <img src={grad6} alt="" className='w-full h-[320px] m-1 mt-20 border-8 rounded-xl border-blue-200'/></div>
                    </div>
                </div>
                <div className='md:flex'>
                     
                    <div  className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'>
                        <div><img src={grad7} alt="" className='w-full h-[280px] m-1 '/></div>
                        {/* <div> <img src={grad8} alt="" className='w-full h-full m-1'/></div> */}
                    </div>
                    <div className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'><img src={grad13} alt="" className='w-full h-full'/></div>
                    {/* <div  className='w-[320px] h-[300px] m-2'>
                        <div><img src={grad9} alt="" className='w-full h-full m-1'/></div>
                        <div> <img src={grad10} alt="" className='w-full h-[180px] m-1'/></div>
                    </div> */}
                    <div className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'><img src={grad14} alt="" className='w-full h-full'/></div>
                </div>
                <div className='md:flex'>
                    
                    <div  className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'>
                        <div><img src={grad11} alt="" className='w-full h-[290px] m-1'/></div>
                        <div> <img src={grad12} alt="" className='w-full h-[250px] m-1 border-8 rounded-xl border-blue-200'/></div>
                    </div>
                    <div className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'><img src={grad15} alt="" className='w-full h-full'/></div>
                    <div className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'>
                        <img src={grad16} alt="" className='w-full h-full'/></div>
                    <div  className='w-[320px] h-[300px] m-2 border-8 rounded-xl border-blue-200'>
                        <div><img src={grad13} alt="" className='w-full h-[280px] m-1'/></div>
                        <div> <img src={grad18} alt="" className='w-[320px] h-full m-1 mt-4 border-8 rounded-xl border-blue-200'/></div>
                    </div>
                </div>
                 
            </div>
        </div>
    );
};

export default Gallery;