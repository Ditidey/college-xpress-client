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
        <div className="flex md:justify-evenly rounded-2xl shadow-xl  py-4 p-3 w-full">
            <div className="flex">
                <Link to='/' className='flex'>
                    <img src={logo} alt="" className='w-8 h-8' />
                    <a className="btn btn-ghost normal-case text-2xl font-sans font-bold md:ms-2 me-6">CollegeXpress</a>
                </Link>
            </div>

            <div className="">
                <div className=" md:relative">
                    {
                        open ? <FaTimes onClick={() => setOpen(!open)} className='lg:hidden ps-4  mt-3 w-8'></FaTimes>
                            : <FaBars onClick={() => setOpen(!open)} className='lg:hidden ps-4 mt-3  w-8'></FaBars>
                    }
                    <ul tabIndex={0} className={`md:flex md:space-x-8 md:static mt-3  absolute duration-500 ${open === true ? 'top-10    bg-white p-8' : '-top-72 '}`}>
                        <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Home</NavLink></li>
                        <li><NavLink to='/college-page' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Colleges</NavLink></li>
                        <li><NavLink to='/admission-page' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>Admission</NavLink></li>
                        {
                            user ? <>
                                <li><NavLink to='/my-college' className={({ isActive }) => isActive ? 'text-red-800 font-bold' : ''}>My college</NavLink></li>
                                <li className=" "  >
                                    <NavLink to='/pro-page'> <img src={user.photoURL} className='w-10 h-10 rounded-full' /> <span className='text-xs'>{user?.displayName}</span></NavLink>
                                </li>
                                <li onClick={handleLogout} className='btn btn-outline btn-info'>Logout</li>


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