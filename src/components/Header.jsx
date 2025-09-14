import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import loader from '../assets/loader.gif'
import { useGSAP } from '@gsap/react';


const Header = () => {

    const [showToggle, setshowToggle] = useState(true);

    useGSAP(()=>{
        const SplittedLogo = SplitText.create(".logoName",{
            type:"chars",
        })
        gsap.from(SplittedLogo.chars,{
            y:20,
            opacity:0,
            duration:0.1,
            stagger:0.2,
        })
    })

    
    
    const handleToggle = () => {
        setshowToggle(!showToggle);
        if (showToggle==true) {
            gsap.to(".mobnav",{
                left:"0",
                duration:0.3
            })
            gsap.from(".Links", {
                y:100,
                duration:0.3,
                delay:0.5,
                stagger:0.2,
                opacity:0
            })
        } else {
            gsap.to(".mobnav",{
                left:"-100%",
                duration:0.3
            })
        }
    }

  return (
    <div className='bg-[#1E1E1E] header fixed top-0 left-0 right-0 text-white flex items-center z-50'>
        <div className="container relative flex items-center justify-between px-3 lg:px-5 md:py-5 py-4">
            <div className="logo flex items-center justify-center">
                <Link to={'/'} className='flex justify-center items-center gap-2'>
                <img src={loader} alt="loader" className='h-10 rounded-full hidden md:block' />
                <h2 className='font-primary logoName font-medium text-2xl hover:text-black relative hover:bg-transparent group overflow-hidden z-10 transition-all duration-500'>Vikash Kumar
                    <div className="absolute h-full w-full bg-zinc-300 top-0 -left-40 -z-10 group-hover:left-0 transition-all duration-500"></div>
                </h2>
                </Link>
            </div>
            <div className="middle desknav hidden  md:flex items-center justify-center lg:gap-15 md:gap-8 font-secondary text-md">
                <Link className='relative transition-all duration-300 overflow-hidden group' to={'/'}>Home
                <div className="underLine absolute w-full h-full border-b-2 border-white top-0 -left-18 group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link className='relative transition-all duration-300 overflow-hidden group' to={'/about'}>About
                <div className="underLine absolute w-full h-full border-b-2 border-white top-0 -left-18 group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link className='relative transition-all duration-300 overflow-hidden group' to={'/gallery'}>Gallery
                <div className="underLine absolute w-full h-full border-b-2 border-white top-0 -left-18 group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link className='relative transition-all duration-300 overflow-hidden group' to={'/projects'}>Projects
                <div className="underLine absolute w-full h-full border-b-2 border-white top-0 -left-18 group-hover:left-0 transition-all duration-300"></div>
                </Link>
                <Link className='relative transition-all duration-300 overflow-hidden group' to={'/contact'}>Contact
                <div className="underLine absolute w-full h-full border-b-2 border-white top-0 -left-18 group-hover:left-0 transition-all duration-300"></div>
                </Link>
            </div>
            <div className="h-full mobnav w-full bg-black fixed top-15 py-10 -left-[100%] md:hidden z-50 font-primary flex flex-col pl-4 gap-9 text-5xl">
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/'}>Home</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/about'}>About</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/gallery'}>Gallery</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/projects'}>Projects</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/contact'}>Contact</Link>
            </div>
            <div className="right flex items-center gap-3">
               <Link to={'/contact'} ><button className='relative font-secondary cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white text-md transition-all group duration-300 overflow-hidden z-20 rounded-sm hover:bg-transparent'>Hire Me
                <div className="btn-animation absolute w-full h-full group-hover:bottom-0 bg-black -z-10 -bottom-8 transition-all duration-500 left-0"></div>
                <div className="btn-animation-2 absolute w-full h-full group-hover:top-0 bg-black -z-10 -top-8 transition-all duration-500 left-0"></div>
                </button></Link>
               {
                   showToggle == true ? <RiMenu3Line className='md:hidden size-8' onClick={handleToggle}/>: <IoCloseSharp className='md:hidden size-8' onClick={handleToggle} />
               }
            </div>
        </div>
    </div>
  )
}

export default Header