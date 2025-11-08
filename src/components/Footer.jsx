import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

const Footer = () => {


    useGSAP(() => {
        const SplittedLogo = SplitText.create(".nameLogo", {
            type: "chars",
        })
        gsap.from(SplittedLogo.chars, {
            y: 20,
            opacity: 0,
            duration: 0.3,
            stagger: 0.2,
            scrollTrigger:{
                trigger:'.Footer',
            }
        })
    })

    return (
        <div className='text-white py-10 Footer'>
            <div className="container px-3 lg:px-5">
                <div className="footerTop md:flex justify-between items-center gap-10">
                    <div className="left w-full md:flex items-center justify-start gap-30">
                        <div className="logo text-center">
                            <h1 className='text-4xl nameLogo font-primary font-medium'>Vikash Kumar</h1>
                        </div>
                        <div className="links flex justify-between items-center md:gap-10 mt-5 md:mt-0">
                            <Link to={'/projects'} className='text-2xl md:text-[2vw] lg:text-xl hover:text-blue-300 transition-all duration-300 font-secondary font-medium'>Projects
                            </Link>
                            <Link to={'/resume'} className='text-2xl md:text-[2vw] lg:text-xl hover:text-blue-300 transition-all duration-300 font-secondary font-medium'>Resume</Link>
                            <Link to={'/about'} className='text-2xl md:text-[2vw] lg:text-xl hover:text-blue-300 transition-all duration-300 font-secondary font-medium' href='#Header'>About</Link>
                        </div>
                    </div>
                    <hr className='my-5 border-2 md:hidden' />
                    <div className="right mt-3">
                        <div className="icons flex justify-evenly md:gap-8">
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
                </div>
            </div>
        </div>
    )
}

export default Footer