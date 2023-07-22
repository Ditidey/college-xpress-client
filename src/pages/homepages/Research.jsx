import React, { useEffect, useState } from 'react';
import SecTitle from '../../components/shared/SecTitle';

const Research = () => {

    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/researchs`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setDetail(data)
            })
    }, [])
    return (
        <div className='md:p-10 p-2'>
            <SecTitle title={"Students' Research"}></SecTitle>
            <div className='grid md:grid-cols-3 gap-10 mt-8'>
                {
                    detail?.map(de =>
                        <div key={de._id} className='bg-blue-100 p-6'>
                            <p className='text-center font-bold text-xl'>{de.researchTitle}</p>
                            <p className='text-center'>{de.researcherName}</p>
                            <p className='text-center'>{de.researchCollege}</p>
                            <p className='mb-4 mt-2'>{de.researchSummary.slice(0,200)}</p>
                            <a href={de.websiteLink} target="_blank" rel="noopener noreferrer" className='font-bold pt-4 text-blue-800'>
                                Visit Research Website
                            </a>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Research;