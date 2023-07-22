import React, { useContext, useEffect, useState } from 'react';
import { contextProvider } from '../../AuthProvider';
import SecTitle from '../../components/shared/SecTitle';
import EditProfileModal from './EditProfileModal';

const ProfilePage = () => {
    const { user } = useContext(contextProvider);
    const [modalOpen, setModalOpen] = useState(false);
    const [detail, setDetail] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDetail(data)
            })
    }, [])
    const handleEdit = () => {
        setModalOpen(true)
    }
    const handleEditClose = () => {
        setModalOpen(false)
    }
    return (
        <div className='md:p-10 p-2 md:relative mb-10'> 
            <SecTitle title={user?.displayName}></SecTitle>
            <button onClick={handleEdit} className='bg-blue-800 text-white p-3  md:absolute md:right-10 md:top-3'>Edit Profile</button>
            <div className='text-justify space-y-2'>
                <img src={user?.photoURL} alt="" className='w-20 h-20 rounded-full mx-auto p-3' />
                <p className='text-center'>Email: {user?.email}</p>
                <div>
                    {
                        detail && detail.length > 0 && <div>
                            {
                                detail.map(de => <div key={de._id}>
                                    <p className='text-center'>Blood Group: {de?.blood}</p>
                                    <p className='text-center'>Address: {de?.address}</p>
                                    <p className='text-center'>College Name: {de?.uni}</p>
                                    <p className='text-center'>Overall Result: {de?.result}</p>
                                </div>)
                            }
                        </div>
                    }
                </div>

            </div>
            <EditProfileModal openModal={modalOpen} closeModal={handleEditClose} info={user}></EditProfileModal>
        </div>
    );
};

export default ProfilePage;