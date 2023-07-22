import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CollegeDetails = () => {
    const {id} = useParams();
    const [college, setCollege] = useState({})
    const { collegeName, collegeImage, collegeRating, admissionDate, researchCount, students, departments, events, sports, shortDescription, admissionFee, teachersCount, _id } = college;
    console.log(id, college)
    useEffect(() => {
        fetch(`https://college-xpress-server.vercel.app/college/${id}`)
            .then(res => res.json())
            .then(data => {
                setCollege(data)
            })
    }, [])
    return (
        <div className=' p-10 bg-blue-50'>
            <div className='text-center'>
                <img src={collegeImage} alt="" className='w-44 h-44 rounded-full mx-auto'/>
                <h2 className='font-bold text-3xl mt-3'>{collegeName}</h2>
                <p className='mb-3'>{shortDescription}</p>
                <p className='text-orange-400'>Research: {researchCount}</p>
                <p>Teachers: {teachersCount}  <span className='ms-8'>Students: {students} </span></p>
                <p>Admission Date: {admissionDate} <span className='ms-8'>Admission Fee: {admissionFee}</span></p>
                <p className='font-bold my-6'>Admission Process: Go to <Link to='/admission-page' className='text-blue-500'>admission page</Link> <br /> See the details and book your preferable college.</p>
                <div className='grid grid-cols-3 md:grid-cols-7 mx-auto mt-5 md:ms-64'>
                    <p className='text-xl font-bold my-2 text-center'>Departments</p>
                    {
                        departments?.map((de, i) => 
                        <div key={de.i} className='w-32 h-32 text-center rounded-full p-3 py-12 border-2 bg-blue-300'>
                                <p>{de}</p>
                        </div>)
                    }
                </div>
               <div className='md:flex justify-between'>
               <div className='mx-auto mt-5'>
                    <h2 className='text-xl font-bold my-2'>Events are going on</h2>
                    {
                        events?.map((de, i) => 
                        <div key={de.i} className='text-justify '>
                                <li>{de}</li>
                        </div>)
                    }
                </div>
                <div className='mx-auto mt-5'>
                    <h2 className='text-xl font-bold my-2'>Sports are going on</h2>
                    {
                        sports?.map((de, i) => 
                        <div key={de.i} className=' text-justify  '>
                                <li>{de}</li>
                        </div>)
                    }
                </div>
               </div>

            </div>
        </div>
    );
};

export default CollegeDetails;