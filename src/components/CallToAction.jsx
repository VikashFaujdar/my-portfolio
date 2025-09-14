import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
    return (
        <div className="text-white bg-zinc-600 w-full py-20 my-10">
            <div className="container px-3 lg:px-5">
                <h1 className='text-4xl lg:text-6xl font-primary font-medium'>Interested in connecting?</h1>
                <p className='text-2xl  py-5'>Let’s talk projects, collaborations, or anything design!</p>
                <Link to={'/contact'} ><button className='md:hidden font-secondary cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white text-xl md:text-xl transition-all group duration-300 overflow-hidden rounded-sm hover:bg-transparent mr-10'>Book a call
                        </button></Link>
                        <Link to={'/contact'} ><button className='hidden font-secondary md:block relative cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white md:text-xl text-md transition-all group duration-300 overflow-hidden z-20 rounded-sm hover:bg-transparent mr-10'>Book a call
                            <div className="btn-animation absolute w-full h-full group-hover:bottom-0 bg-black -z-10 -bottom-10 transition-all duration-500 left-0"></div>
                            <div className="btn-animation-2 absolute w-full h-full group-hover:top-0 bg-black -z-10 -top-10 transition-all duration-500 left-0"></div>
                        </button></Link>
            </div>
        </div>
    )
}

export default CallToAction