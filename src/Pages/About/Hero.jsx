import React from 'react';
import Image from '../../assets/Image.png'


const Hero = () => {
    return (
        <div className='min-h-screen flex items-center justify-between rounded-4xl text-black bg-white pt-30 md:pt-20 pb-20'>
            <div className="container flex flex-col gap-10 px-3 lg:px-5">
                <h1 className='text-5xl md:text-[6vw] lg:text-5xl font-primary font-medium'>Who I am beyond Design</h1>
                <div className="sections md:flex md:gap-8 lg:mt-5">
                    <div className="left my-3 md:w-1/2">
                        <img src={Image} alt="image" className='w-full' />
                    </div>
                    <div className="left flex flex-col lg:gap-3 md:w-1/2">
                        <h2 className='text-2xl lg:text-3xl font-secondary font-medium my-3'>More than a UX/UI designer, I'm a storyteller at heart, weaving narratives through my designs.</h2>
                        <p className='text-xl lg:text-2xl text-zinc-800 font-medium font-secondary my-3'>My philosophy? Every app tells a story, and every interface is a journey. I find joy in simple things — a well-crafted espresso, the crisp pages of a new book, and the quiet buzz of a city at dawn.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero