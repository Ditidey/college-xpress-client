import React from 'react';
import Swal from 'sweetalert2';

const EditProfileModal = ({openModal, closeModal, info}) => {

    const handleEditProfile = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const uni = event.target.uni.value;
        const address = event.target.address.value;
        const blood = event.target.blood.value;
        const result = event.target.result.value;
     
        const reviewInfo={
            name, email, uni, address, blood, result
             
         }
         fetch(`https://college-xpress-server.vercel.app/users/${info?.email}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewInfo)
         })
         .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.upsertedCount > 0) {
                Swal.fire({
                    icon: 'success',
                    timer: '1500',
                    text: 'Edited successfully',
                    showConfirmButton: false,
                })
            }
        })
       closeModal()
        event.target.reset();
    }
    return (
        <div className={`fixed inset-0 z-10 flex items-center justify-center  ${openModal ? '' : 'hidden'}`}>
        <div className="bg-white w-96 p-6 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Your Profile</h2>
            <form action="" onSubmit={handleEditProfile}>
                <label htmlFor="">Name:</label>
                <input type="text" defaultValue={info.displayName} name='name' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Email:</label>
                <input type="email" defaultValue={info.email} name='email' className='border-b-2 mb-3 px-4' /> <br />               
                <label htmlFor="">University:</label>
                <input type="text" name='uni' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Address:</label>
                <input type="text" name='address' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Result:</label>
                <input type="text" name='result' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Blood Group:</label>
                <input type="text" name='blood' className='border-b-2 mb-3 px-4' /> <br />

                <input type="submit" value="Save" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4" />
            </form>

            <button
                className="bg-red-800 hover:bg-red-400  text-white mt-4 ms-72 px-3 rounded  bottom-0"
                onClick={closeModal}
            >
                x
            </button>
        </div>
    </div>
    );
};

export default EditProfileModal;