import React from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import Form from './Form';




const ContactUs = () => {
    return (
        <div className='container  text-white md:py-15 py-5 justify-between items-start flex flex-col md:flex-row h-full px-3 lg:px-5'>
            <div className="left flex flex-col justify-end gap-6">
                <div className="top">
                    <h2 className='text-2xl lg:text-3xl font-secondary font-medium'>Contact Us</h2>
                    <h1 className='text-3xl lg:text-5xl font-primary py-3'>Have a Project in Mind?</h1>
                    <p className='text-2xl lg:text-3xl font-secondary'>Tell me about it. I'm available for freelance, part-time, or remote opportunities—let’s build something great together</p>
                </div>
                <div className="bottom icons flex items-center gap-5">
                    <FaInstagram className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                    <FaWhatsapp className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                    <IoCallSharp className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                </div>
            </div>
            <div className="left w-full mt-10 md:mt-0">
                <Form />
            </div>
        </div>
    )
}

export default ContactUs