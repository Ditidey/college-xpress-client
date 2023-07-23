import React, { useEffect, useState } from 'react';
import SecTitle from '../../components/shared/SecTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaRev } from 'react-icons/fa';

const Ranks = () => {
    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch(`https://college-xpress-server.vercel.app/reviews`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDetail(data)
            })
    }, [])
    return (
        <div className='md:p-10 p-2 bg-blue-50 mt-5'>
            <SecTitle title={"Students' Reviews"}></SecTitle>
         
            < div className='grid md:grid-cols-3 mt-5'>  
           
                {
                    detail?.map(de =>  
                        < div key={de._id} className='p-5  mx-auto w-full md:w-[450px] shadow-2xl'> 
                         
                               <p className='text-center font-bold text-xl'>{de.college}</p>
                               
                                <p className='  mt-2 text-justify'>{de.review}</p>
                                <p className='text-center pt-4'>{de.name}</p>
                                <div className='flex justify-center mt-3'>
                                <FaRev className='text-blue-800 w-10 h-10 text-center'></FaRev>
                                <FaRev className='text-blue-800 w-10 h-10 text-center'></FaRev>
                                </div>
                     
                                
                                </div>
                    )
                }
  
            </div>
        </div>
    );
};

export default Ranks;