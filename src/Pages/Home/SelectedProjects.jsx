import React, { useRef } from 'react'
import project1 from '../../assets/lakshya.png'
import project2 from '../../assets/inme.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const SelectedProjects = () => {

    const SelectedRef = useRef()

    useGSAP(()=>{
        const SelectedTl = gsap.timeline({
            scrollTrigger:{
                trigger:SelectedRef.current,
                start:"top 70%",
                end:"bottom 100%",
                scrub:true,
                duration:1,
            }
        });

        SelectedTl.from(".top h1", {
            y:50,
            opacity:0,
        })

        SelectedTl.from(".top p", {
            y:50,
            opacity:0
        })

        SelectedTl.from(".bottom .projectCard1",{
            y:100,
            opacity:0,
        })

        SelectedTl.from(".bottom .projectCard2",{
            y:100,
            opacity:0,
        })
    })

    return (
        <div ref={SelectedRef} className='text-white py-5'>
            <div className="container px-3 lg:px-5">
                <div className="top">
                    <h1 className='font-primary text-[10vw] md:text-[5vw] lg:text-6xl'>Selected Projects</h1>
                    <p className='text-2xl font-secondary py-3 max-w-162'>Explore my selected projects, showcasing my dedication to innovative and heartfelt design.</p>
                </div>
                <div className="bottom grid col md:grid-cols-2 gap-10 md:gap-5 mt-10">
                    <div className="projectCard1 flex flex-col gap-3 md:gap-5">
                        <a href="https://computer-classes-vikash-fauzdar.vercel.app/" target="_blank" rel="noopener noreferrer" className='relative group transition-all duration-500'>
                        <div className="h-20 w-20 hidden group-hover:flex transition-all duration-500 hover:bg-zinc-950 bg-zinc-200 backdrop-blur-xl rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  justify-center items-center text-black hover:text-white">
                            <h1 className='text-xl font-primary'>Open</h1>
                        </div>
                        <img src={project1} alt="project1" />
                        </a>
                        <h2 className='text-3xl md:text-[3vw] lg:text-5xl font-primary'>Redesign project: Lakshya Computer Coaching </h2>
                        <p className='text-xl font-secondary md:text-2xl '>Elevating the user experience of a Computer coaching center based in Aligarh.</p>
                    </div>
                    <div className="projectCard2 flex flex-col gap-3 md:gap-5">
                        <a href="https://inme.in/" target="_blank" rel="noopener noreferrer" className='relative group transition-all duration-500' >
                        <div className="h-20 w-20 hidden group-hover:flex transition-all duration-500 hover:bg-zinc-950 bg-zinc-200 backdrop-blur-xl rounded-full absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]  justify-center items-center text-black hover:text-white">
                            <h1 className='text-xl font-primary'>Open</h1>
                        </div>
                        <img src={project2} alt="project2" />
                        </a>
                        <h2 className='text-3xl font-primary lg:text-5xl md:text-[3vw] '>Internship project: Inme Summer Camp</h2>
                        <p className='text-xl font-secondary md:text-2xl'>Designing a website or a web application of a company which provide the camping or the touring services for the college or schools.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectedProjects