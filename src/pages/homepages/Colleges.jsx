import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SecTitle from '../../components/shared/SecTitle';
import { Rating } from '@smastrom/react-rating';

const Colleges = () => {
    const [colleges, setColleges] = useState([]);
    
    useEffect(() => {
        fetch(`https://college-xpress-server.vercel.app/colleges`)
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })
    }, [])
    return (
        <div className='md:p-10 p-2 mt-5'>
        <SecTitle title={'Find your colleges'} ></SecTitle>
        <div className='mt-10 grid md:grid-cols-3 gap-6 mb-10'>
            {
                colleges?.slice(0, 3).map(col => 
                <div key={col._id} className='md:w-[400px] w-full h-[500px] '>
                    <div>
                        <img src={col.collegeImage} alt="" className='md:w-[400px] w-full h-[300px] hover:scale-110'/>
                    </div>
                    <div className='text-center font-sans pt-3 bg-slate-100 h-[200px]'>
                        <h3 className='font-bold text-xl my-3'> {col.collegeName}</h3>
                        <h3>Coming date: {col.admissionDate}</h3>
                        <h3>Total Research: {col.researchCount}</h3>
                       <p className=''><Rating value={col.collegeRating} style={{ maxWidth: 80 }} readOnly className='ms-40'></Rating></p>
                       <button className='bg-blue-800 text-white p-3 mt-4'><Link to={`/college-details/${col._id}`}>See More</Link></button>
                    </div>
                </div>
                )
            }
        </div>
        <Link to='/college-page' className='text-blue-500 md:ms-96 md:px-20 p-2 shadow-sm font-bold text-xl mt-6'>See more</Link>
    </div>
    );
};

export default Colleges;