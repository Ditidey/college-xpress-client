import React, { useContext, useEffect, useState } from 'react';
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import { contextProvider } from '../../AuthProvider';
import logo from '../../../public/logo.png'

const NavBar = () => {
    const { user, userLogout } = useContext(contextProvider)
    const [open, setOpen] = useState(false);
    // console.log(user?.displayName, user?.photoURL)

    const handleLogout = () => {
        userLogout()
            .then()
            .catch(er => console.log(er.message))
    }

    return (
        <div className="md:flex md:justify-evenly rounded-2xl shadow-2xl md:px-6 px-2 py-4">
            <div className="flex">
               <Link to='/' className='flex'>
               <img src={logo} alt="" className='w-8 h-8' />
                <a className="btn btn-ghost normal-case text-2xl font-sans font-bold md:ms-2">CollegeXpress</a>
               </Link>
            </div>

            <div className="">
                <div className=" dropdown relative">
                    {
                        open ? <FaTimes onClick={() => setOpen(!open)} className='lg:hidden ms-52'></FaTimes>
                            : <FaBars onClick={() => setOpen(!open)} className='lg:hidden ms-52'></FaBars>
                    }
                    <ul tabIndex={0} className={`md:flex md:space-x-8 md:static mt-3  absolute duration-500 ${open === true ? 'top-6 ms-48 bg-white p-4' : '-top-72 ms-44'}`}>
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Home</NavLink></li>
                        <li><NavLink to='/blog' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Colleges</NavLink></li>
                        <li><NavLink to='/all-toys' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Admission</NavLink></li>
                        {
                            user ? <>
                                <li><NavLink to='/my-toy' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>My college</NavLink></li>
                                <li><NavLink to='/add-toy' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>My classes</NavLink></li>
                                <li onClick={handleLogout} className='btn btn-outline btn-info'>Logout</li>
                                <li className="tooltip" data-tip={user.displayName}>
                                    <img src={user.photoURL} className='w-10 h-10 rounded-full' />
                                </li>

                            </> :
                                <li><Link to='/login' className="btn btn-outline btn-accent py-0">Login</Link></li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;