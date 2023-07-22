import React from 'react';
import HeroSection from './HeroSection';
import Ranks from './Ranks';
import Colleges from './Colleges';
import Gallery from './Gallery';
import Research from './Research';

const Home = () => {
    return (
        <div>
             <div className='bg-blue-500 w-full p-3'>
                <form action="" className='md:ms-36'>
                    <input type="text" name='search' placeholder='college name' className='p-2 md:ms-96 rounded-md'/>
                    <input type="submit" value="Search" className='text-white text-xl font-semibold ms-2'/>
                </form>
             </div>
            <HeroSection></HeroSection>
            <Colleges></Colleges>
            <Gallery></Gallery>
            <Research></Research>
            <Ranks></Ranks>
        </div>
    );
};

export default Home;