import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

const Footer = () => {


    useGSAP(()=>{
            const SplittedLogo = SplitText.create(".nameLogo",{
                type:"chars",
            })
            gsap.from(SplittedLogo.chars,{
                y:20,
                opacity:0,
                duration:0.8,
                stagger:0.2,
                repeat:-1
            })
        })

    return (
        <div className='text-white py-10'>
            <div className="container px-3 lg:px-5">
                <div className="footerTop md:flex justify-between items-center gap-10">
                    <div className="left w-full md:flex items-center justify-start gap-30">
                        <div className="logo text-center">
                            <h1 className='text-4xl nameLogo font-primary font-medium'>Vikash Kumar</h1>
                        </div>
                        <div className="links flex justify-between items-center md:gap-10 mt-5 md:mt-0">
                            <Link to={'/projects'} className='text-2xl md:text-[2vw] lg:text-2xl font-secondary font-medium'>Projects
                            </Link>
                            <Link to={'/resume'} className='text-2xl md:text-[2vw] lg:text-2xl font-secondary font-medium'>Resume</Link>
                            <Link to={'/about'} className='text-2xl md:text-[2vw] lg:text-2xl font-secondary font-medium'>About</Link>
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