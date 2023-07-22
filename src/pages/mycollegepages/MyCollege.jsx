import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import SecTitle from '../../components/shared/SecTitle';
import AddReview from './AddReview';

const MyCollege = () => {
    const { user } = useContext(contextProvider);
    const [student, setStudent] = useState()
    const [reviewModal, setReviewModalOpen] = useState(false)
    const [st, setSt] = useState({})

    useEffect(() => {
        fetch(`https://college-xpress-server.vercel.app/students?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setStudent(data)
            })
    }, [])
    const handleReview = st => {
        setReviewModalOpen(true)
        setSt(st)
    }
    const reviewClose = () => {
        setReviewModalOpen(false)
    }
    return (
        <div className='md:p-10 p-2'>
            <div>
                <SecTitle title={'Your college info'} subtitle={'Every data is confidential, stay risk free'}></SecTitle>
            </div>
            <div>

                <div className='mt-10'>

                    <div>

                        {
                            student?.map(st =>
                                <div key={st._id} className='flex justify-around md:p-10 bg-blue-50 my-5'>
                                    <div className='w-1/2'>
                                        <h2 className='font-bold text-2xl'>Personal Information</h2>
                                        <img src={st.image} alt="" className='w-24 h-24 rounded-2xl' />
                                        <h2 className='font-bold text-xl'>{st.name}</h2>
                                        <p>Email: {st.email} <span className='ms-6'>Phone: {st.phone}</span></p>
                                        <p>Birth of Date: {st.date} <span className='ms-6'>Age: {st.age}</span></p>
                                    </div>
                                    <div className='w-1/2'>
                                        <h2 className='font-bold text-2xl'>College Information</h2>
                                        <img src={st.collegeImage || ''} alt="" className='w-24 h-24 rounded-2xl' />
                                        <h2 className='font-bold text-xl'>{st.college}</h2>
                                        <p>Subject: {st.subject} <span className='ms-6'>Fee: {st.fee}</span></p>
                                        <p>Students: {st.students} <span className='ms-6'>Teacher: {st.teacher}</span></p>
                                        <button onClick={() => handleReview(st)} className='bg-blue-800 text-white p-3 mt-5'>Add a review</button>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>
                <AddReview openModal={reviewModal} closeModal={reviewClose} st={st}></AddReview>
            </div>
        </div>
    );
};

export default MyCollege;