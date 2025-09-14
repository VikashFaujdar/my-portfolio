import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='text-white py-10'>
            <div className="container px-3 lg:px-5">
                <div className="footerTop md:flex justify-between items-center gap-10">
                    <div className="left w-full md:flex items-center justify-start gap-30">
                        <div className="logo text-center">
                            <h1 className='text-4xl font-primary font-medium'>Vikash Kumar</h1>
                        </div>
                        <div className="links flex justify-between items-center md:gap-10 mt-5 md:mt-0">
                            <Link to={'/projects'} className='text-2xl md:text-[3vw] lg:text-[2vw] font-secondary font-medium'>Projects
                            </Link>
                            <Link to={'/resume'} className='text-2xl md:text-[3vw] lg:text-[2vw] font-secondary font-medium'>Resume</Link>
                            <Link to={'/about'} className='text-2xl md:text-[3vw] lg:text-[2vw] font-secondary font-medium'>About</Link>
                        </div>
                    </div>
                    <hr className='my-5 border-2 md:hidden' />
                    <div className="right mt-3">
                        <div className="icons flex justify-evenly md:gap-8">
                            <FaInstagram className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                            <FaWhatsapp className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                            <IoCallSharp className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer