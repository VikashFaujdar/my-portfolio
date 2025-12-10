import React, { useState } from 'react';
import card1 from '../../assets/cynthia.png';
import card2 from '../../assets/inme.png';
import card3 from '../../assets/miracles.png';
import card4 from '../../assets/lakshya.png';
import card5 from '../../assets/sundown.png';
import card6 from '../../assets/usability.png';
import gsap from 'gsap';

const Hero = () => {

    const [show, setShow] = useState(false)

    const Projects = [
        {
            Image: card1,
            Title: "Creating Cynthia Ugwu Portfolio clone",
            subTitle: "Elevating the user experience of a renowned fitness tracker app through a strategic.",
            link: `https://cynthiaugwucreatedbyvikashkumar.netlify.app/`
        },
        {
            Image: card2,
            Title: "Internship project: Inme Summer camps",
            subTitle: "Creating a website for a tour and traveling company or organization.",
            link: `https://inme.in/`
        },
        {
            Image: card3,
            Title: "Redesign project: Miracles Health Care",
            subTitle: "Creating the front-end for the miracles health care hospital at dixinfotech sevices llp.",
            link: `https://www.miracleshealth.com/`
        },
        {
            Image: card4,
            Title: "Redesign project: Lakshya Computer Coaching",
            subTitle: "Revolutionizing the educational website designed to enhance computer knowledge interactive learning and peer collaboration.",
            link: `https://computer-classes-vikash-fauzdar.vercel.app/`
        },
        {
            Image: card5,
            Title: "Redesign project: Sundown Studio",
            subTitle: "Creating the clone of sundown studio and increase my knowledge how to do responsive or many more things related to the css.",
            link: `https://sundownstudio-by-vikashkumar.netlify.app/`
        },
        {
            Image: card6 ,
            Title: "Redesign project: Usability Hub",
            subTitle: "Creating the clone of Usability hub and increase my knowledge how to do responsive or many more things related to the css.",
            link: `https://usability-hub-by-vikash-kumar.vercel.app/`
        },
    ]



    return (
        <div className='text-black h-full'>
            <div className="container min-h-screen h-full pt-30 pb-20 gap-2 flex flex-col items-start justify-center px-3 lg:px-5">
                <h1 className='text-4xl font-secondary font-medium'>Selected project</h1>
                <p className='text-2xl font-secondary my-3 max-w-170'>Selected projects showcasing thoughtful design solutions in education, fitness, and social networking.</p>
                <div className="grid grid-col md:grid-cols-2 gap-5 my-5">

                    {
                        Projects.map((elem, idx) => {
                            return (
                                <div key={idx} className="card flex bg-transparent flex-col overflow-hidden rounded-md">
                                    <a href={elem.link} target="_blank" rel="noopener noreferrer" className='relative group rounded-xl overflow-hidden w-full'>
                                        <div className="circle h-20 w-20 hidden rounded-full text-black text-xl top-[30%] left-[30%] md:left-[40%] md:top-[30%] bg-[#D9CFC7] absolute translate-x-1/2 translate-y-1/2 z-10 group-hover:flex items-center justify-center font-primary hover:bg-black hover:text-white transition-all duration-300">
                                            <h1>open</h1>
                                        </div>
                                        <img src={elem.Image} alt="card Image" className='rounded-xl h-100 w-full group-hover:scale-105 transition-all duration-300 object-cover object-center' />
                                    </a>
                                    <div className="dts flex flex-col gap-2 py-3">
                                        <h1 className='text-2xl sm:text-[5vw] md:text-[4vw] lg:text-4xl font-secondary font-medium'>{elem.Title}</h1>
                                        <h3 className='text-xl lg:text-2xl font-secondary font-normal my-3'>{elem.subTitle}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Hero