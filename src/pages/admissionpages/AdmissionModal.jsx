import React from 'react';
import Swal from 'sweetalert2';

const AdmissionModal = ({openModal, closeModal, info}) => {
    const handleEnrollStudents = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const age = event.target.age.value;
        const address = event.target.address.value;
        const date = event.target.date.value;
        const phone = event.target.phone.value;
        const image = event.target.image.value;
        const subject = event.target.subject.value;
        const enrollInfo={
            name, email, age, address, date,phone, 
            image, subject, college: info.collegeName, fee:info.admissionFee, collegeId:info._id,
            collegeImage: info.collegeImage, research: info.researchCount, teacher: info.teachersCount,
            students: info.students
         }
         fetch('http://localhost:5000/enroll', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(enrollInfo)
         })
         .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    timer: '1500',
                    text: 'You booked an admission successfully',
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
            <h2 className="text-xl font-bold mb-4">Book your admission</h2>
            <form action="" onSubmit={handleEnrollStudents}>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Image:</label>
                <input type="text" name='image' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Email:</label>
                <input type="email" name='email' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Age:</label>
                <input type="text" name='age' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Address:</label>
                <input type="text" name='address' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Phone Number:</label>
                <input type="text" name='phone' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Subject:</label>
                <input type="text" name='subject' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Birth of Date:</label>
                <input type="date" name='date' className='border-b-2 mb-3 px-4' /> <br />

                <input type="submit" value="Submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4" />
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

export default AdmissionModal;