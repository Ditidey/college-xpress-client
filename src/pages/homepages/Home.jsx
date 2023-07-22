import React, { useState } from 'react';
import HeroSection from './HeroSection';
import Ranks from './Ranks';
import Colleges from './Colleges';
import Gallery from './Gallery';
import Research from './Research';
import { Link } from 'react-router-dom';

const Home = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = event => {
        event.preventDefault()
        fetch(`https://college-xpress-server.vercel.app/colleges?collegeName=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(searchResults)
                setSearchResults(data)
            })

    }
    return (
        <div>
            <div className='bg-blue-500 w-full p-3 '>
                <form onSubmit={handleSearch} action="" className='md:ms-36'>
                    <input type="text" name='search' placeholder='college name' value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='p-2 md:ms-96 rounded-md' />

                    <input type="submit" value="Search" className='text-white text-xl font-semibold ms-2' />
                </form>
            </div>
            {
                searchResults && searchResults.length > 0 && <div>
                    {
                        searchResults.map(re => <div key={re._id} className='text-center bg-blue-100 p-6'>
                            <img src={re.collegeImage} alt="" className='w-44 h-44 rounded-full mx-auto' />
                            <h2 className='font-bold text-3xl mt-3'>{re.collegeName}</h2>
                            <p className='mb-3'>{re.shortDescription}</p>
                            <p className='text-orange-400'>Research: {re.researchCount}</p>
                            <p>Teachers: {re.teachersCount}  <span className='ms-8'>Students: {re.students} </span></p>
                            <p>Admission Date: {re.admissionDate} <span className='ms-8'>Admission Fee: {re.admissionFee}</span></p>
                            <button className='bg-blue-800 text-white p-3 mt-4'><Link to={`/college-details/${re._id}`}>See More</Link></button>
                        </div>)
                    }
                </div>
            }
            <HeroSection></HeroSection>
            <Colleges></Colleges>
            <Gallery></Gallery>
            <Research></Research>
            <Ranks></Ranks>
        </div>
    );
};

export default Home;