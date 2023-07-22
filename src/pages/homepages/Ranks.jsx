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
        <div className='md:p-10 p-2 bg-blue-50'>
            <SecTitle title={"Students' Reviews"}></SecTitle>
         
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mt-5 flex"
            >  
           
                {
                    detail?.map(de =>  
                        <SwiperSlide key={de._id} className='flex'> 
                         <div   className='  mx-auto w-full'> 
                               <p className='text-center font-bold'>{de.college}</p>
                                <p className='text-center'>{de.name}</p>
                                <p className='text-center'>{de.review}</p>
                                <div className='flex justify-center mt-3'>
                                <FaRev className='text-blue-800 w-10 h-10 text-center'></FaRev>
                                <FaRev className='text-blue-800 w-10 h-10 text-center'></FaRev>
                                </div>
                     
                                </div>
                                </SwiperSlide>
                    )
                }
  
            </Swiper>
        </div>
    );
};

export default Ranks;