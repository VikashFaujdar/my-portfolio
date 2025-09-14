import React from 'react'
import { Link } from 'react-router-dom'
import homeImage from '../../assets/asset-01.png'
import TypeWriter from '../../components/TypeWriter.jsx'
import Me from '../../assets/me.jpg'

const HeroSection = () => {

    return (
        <div className='flex items-center justify-center text-white pt-25 pb-10  lg:pt-45 lg:pb-30'>
            <div className="container  flex flex-col md:flex-row gap-10 items-center justify-between px-3 lg:px-5">
                <div className="Heroleft w-full md:w-[45%] lg:w-[45%] h-full ">
                    <h3 className='text-2xl subtitle font-secondary text-white font-medium md:py-3 pb-5'>Hello There</h3>
                    <h1 className='text-[10vw] sm:text-4xl md:text-4xl lg:text-5xl font-primary font-medium md:py-3 leading-[1.2]'>I am Vikash Kumar a {<TypeWriter/>} Developer Based in India</h1>
                    <p className='text-2xl md:text-xl text-start md:py-3 py-5 font-secondary'>I craft clean, user-friendly digital experiences. From wireframes to code, I bring ideas to life.</p>
                    <div className="btns flex items-center justify-start py-5">
                        <Link to={'/contact'} ><button className='md:hidden font-secondary cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white text-xl md:text-xl transition-all group duration-300 overflow-hidden rounded-sm hover:bg-transparent mr-10'>Hire Me
                        </button></Link>
                        <Link to={'/contact'} ><button className='hidden font-secondary md:block relative cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white md:text-xl text-md transition-all group duration-300 overflow-hidden z-20 rounded-sm hover:bg-transparent mr-10'>Hire Me
                            <div className="btn-animation absolute w-full h-full group-hover:bottom-0 bg-black -z-10 -bottom-10 transition-all duration-500 left-0"></div>
                            <div className="btn-animation-2 absolute w-full h-full group-hover:top-0 bg-black -z-10 -top-10 transition-all duration-500 left-0"></div>
                        </button></Link>
                        <button className='font-secondary hidden md:block text-md  relative text-xl overflow-hidden group'>My Projects
                            <div className="line border-b-2 border-white absolute w-full h-full top-0 -left-30 group-hover:left-0 transition-all duration-300"></div>
                        </button>
                        <button className='font-secondary md:hidden text-xl border-b-2 pb-1'>My Projects</button>
                    </div>
                </div>
                <div className="Heroright w-full md:w-[45%] lg:w-[40%] h-full md:h-150 overflow-hidden">
                    <img src={Me} alt="homeImage" className='w-full h-full object-cover object-top md:object-center rounded-2xl' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection