import React from 'react';
import Image from '../../assets/Image.png'


const Hero = () => {
    return (
        <div className='h-screen text-white pt-30'>
            <div className="container flex flex-col gap-10 px-3 lg:px-5">
                <h1 className='text-4xl lg:text-5xl font-primary font-medium'>Who I am beyond Design</h1>
                <div className="sections md:flex lg:mt-5">
                    <div className="left my-3 md:w-1/2">
                        <img src={Image} alt="" />
                    </div>
                    <div className="left flex flex-col gap-3 md:w-1/2">
                        <h2 className='text-3xl lg:text-3xl font-secondary font-medium my-3'>More than a UX/UI designer, I'm a storyteller at heart, weaving narratives through my designs.</h2>
                        <p className='text-xl lg:text-2xl font-secondary my-3'>My philosophy? Every app tells a story, and every interface is a journey. I find joy in simple things — a well-crafted espresso, the crisp pages of a new book, and the quiet buzz of a city at dawn.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero