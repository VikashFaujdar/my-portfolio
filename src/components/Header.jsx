import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu3Line } from "react-icons/ri";
import gsap from 'gsap';


const Header = () => {

    const [showToggle, setshowToggle] = useState(true)
    
    
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
    <div className='bg-[#1E1E1E] text-white flex items-center relative'>
        <div className="container h-15 flex items-center justify-between px-4 lg:px-0 py-5">
            <div className="logo">
                <Link to={'/'}>
                <h2>Vikash Kumar</h2>
                </Link>
            </div>
            <div className="middle hidden  md:flex items-center justify-center gap-10 font-secondary text-sm">
                <Link className='hover:text-blue-500 transition-all duration-300' to={'/'}>home</Link>
                <Link className='hover:text-blue-500 transition-all duration-300' to={'/about'}>About</Link>
                <Link className='hover:text-blue-500 transition-all duration-300' to={'/gallery'}>Gallery</Link>
                <Link className='hover:text-blue-500 transition-all duration-300' to={'/projects'}>Projects</Link>
                <Link className='hover:text-blue-500 transition-all duration-300' to={'/contact'}>Contact</Link>
            </div>
            <div className="h-full mobnav w-full bg-black fixed top-15 py-4 -left-[100%] md:hidden font-secondary flex flex-col pl-4 gap-5 text-3xl">
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/'}>Home</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/about'}>About</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/gallery'}>Gallery</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/projects'}>Projects</Link>
                <Link onClick={handleToggle} className='Links overflow-hidden' to={'/contact'}>Contact</Link>
            </div>
            <div className="right flex items-center gap-6">
               <Link to={'/contact'} ><button className='cursor-pointer border-1 border-zinc-500 px-4 py-1'>Hire Me</button></Link>
               <RiMenu3Line className='md:hidden size-8' onClick={handleToggle}/>
            </div>
        </div>
    </div>
  )
}

export default Header