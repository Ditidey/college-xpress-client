import React from 'react';
import Swal from 'sweetalert2';

const AddReview = ({openModal, closeModal, st}) => {

    const handleReviews = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const rating = event.target.rating.value;
        const review = event.target.review.value;
     
        const reviewInfo={
            name, email, rating, review, college: st.college, fee:st.fee, collegeId:st.collegeId,
             
         }
         fetch('https://college-xpress-server.vercel.app/reviews', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewInfo)
         })
         .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    icon: 'success',
                    timer: '1500',
                    text: 'Review added successfully',
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
            <h2 className="text-xl font-bold mb-4">Add your positive or negative review</h2>
            <form action="" onSubmit={handleReviews}>
                <label htmlFor="">Name:</label>
                <input type="text" name='name' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Email:</label>
                <input type="email" name='email' className='border-b-2 mb-3 px-4' /> <br />               
                <label htmlFor="">Ratings:</label>
                <input type="text" name='rating' className='border-b-2 mb-3 px-4' /> <br />
                <label htmlFor="">Review:</label>
                <input type="text" name='review' className='border-b-2 mb-3 px-4' /> <br />

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

export default AddReview;