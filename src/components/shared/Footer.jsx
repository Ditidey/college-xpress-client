import React from 'react';
import logo from '../../../public/logo.png'
import { FaFacebook, FaYoutube, FaTwitterSquare, FaLinkedin, FaThumbsUp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-slate-300'>
         
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 shadow-xl">
                <div className="  flex  justify-evenly pt-5">

                    <div >
                        <img src={logo} alt="" className='w-16 h-16' /> <br />
                        <p className='mt-0 pt-0' ><span className='font-semibold text-xl'> CollegeXpress </span> 
                          <br /> Dublin, Ireland <br />Providing reliable educational services since 2023</p>
                     
                    </div>

                    <div>
                    <a className="link link-hover text-sm">About us</a> <br />
                    <a className="link link-hover text-sm">Contact</a> <br />
                    <a className="link link-hover text-sm">Jobs</a> <br />
                  
                        {/* <span className="footer-title">Subscription</span> */}
                        <input type="text" className="  w-full border-b-4" />
                        <button className="inline-flex">Subscribe Us
                            <FaThumbsUp className='ms-3 h-5'></FaThumbsUp></button>
                    </div>
                </div>
                <p className='pt-4 font-thin text-black text-center text-xs'>Copyright © 2023 - All right reserved by CollegeXpress Ltd</p>
                <div className="md:text-center">
                    <div className="flex justify-center space-x-4 pt-5">
                        <FaFacebook className='w-6 h-6 text-blue-500'></FaFacebook>
                        <FaLinkedin className='w-6 h-6 text-blue-500'></FaLinkedin>
                        <FaTwitterSquare className='w-6 h-6 text-blue-500'></FaTwitterSquare>
                        <FaYoutube className='w-6 h-6 text-red-500'></FaYoutube>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;