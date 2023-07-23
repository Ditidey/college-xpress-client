import React, { useEffect, useState } from 'react';
import SecTitle from '../../components/shared/SecTitle';
import AdmissionModal from './AdmissionModal';
import { FaArrowCircleRight } from 'react-icons/fa';

const AdmissionPage = () => {
    const [colleges, setColleges] = useState([]);
    const [modalOpen, setModal] = useState(false);
    const [col, setCol] = useState({})
    useEffect(() => {
        fetch(`https://college-xpress-server.vercel.app/colleges`)
            .then(res => res.json())
            .then(data => {
                setColleges(data)
            })
    }, [])

    const handleModal = col =>{
        setModal(true)
        setCol(col)
    }
    const handleClose = ()=>{
        setModal(false)
    }
    return (
        <div className='md:p-10 p-2 my-10'>
            <div>
                <SecTitle title={'Admission is going on'} subtitle={'Select your college and book soon'}></SecTitle>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-10 mt-10'>
                {
                    colleges?.map(col =>
                        <div key={col._id} className='md:w-[250px] w-full h-[300px] shadow-lg' style={{ backgroundImage: `url(${col.collegeImage})` }}>
                            <div className='w-full mx-auto   flex justify-center items-center'>
                                <h2 onClick={()=>handleModal(col)} className='text-2xl inline-flex font-bold bg-blue-50 p-6 h-[100px] w-full'>{col.collegeName}  </h2>
                            </div>
                            <button onClick={()=>handleModal(col)} className='bg-blue-800 text-white p-3 px-6 w-full mt-40 font-bold shadow-xl hover:bg-blue-400 mb-10'>Enroll Now</button>
                        </div>
                    )
                }
            </div>
            <AdmissionModal openModal={modalOpen} closeModal={handleClose} info={col}></AdmissionModal>
        </div>
    );
};

export default AdmissionPage;