import React, { useRef } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import Form from './Form';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';




const ContactUs = () => {

    const ContactRef = useRef();
    
    useGSAP(()=>{
       
        const contactTl = gsap.timeline({
            scrollTrigger:{
                trigger:ContactRef.current,
            }
        });

        contactTl.from(".contact .left", {
            x:-100,
            opacity:0,
            duration:0.5,
        })

        contactTl.from(".contact .right", {
            x:100,
            opacity:0,
            duration:0.5,
        })
    })

    return (
        <div ref={ContactRef} className='container contact  text-white md:py-15 py-5 justify-between items-start flex flex-col md:flex-row h-full px-3 lg:px-5'>
            <div className="left flex flex-col justify-end gap-6">
                <div className="top">
                    <h2 className='text-3xl lg:text-3xl font-secondary  font-medium md:text-[3vw] '>Contact Us</h2>
                    <h1 className='text-4xl lg:text-5xl title font-primary py-3 md:text-[5vw]'>Have a Project in Mind?</h1>
                    <p className='text-2xl lg:text-3xl font-secondary'>Tell me about it. I'm available for freelance, part-time, or remote opportunities—let’s build something great together</p>
                </div>
                <div className="bottom icons flex items-center gap-5">
                    <a href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=nven6ac" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                    </a>
                    <a href="https://wa.me/919027456383" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                    </a>
                    <a href="tel:+919027456383">
                        <IoCallSharp className='size-9 hover:text-blue-300 transition-all duration-300 text-white' />
                    </a>
                </div>
            </div>
            <div className="right w-full mt-10 md:mt-0">
                <Form />
            </div>
        </div>
    )
}

export default ContactUs