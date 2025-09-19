import React, { useRef } from 'react'
import gradeProject from '../../assets/gradeProject.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const GraduationProject = () => {

    const graduationRef = useRef()

    useGSAP(()=>{
        const GraduationTl = gsap.timeline({
            scrollTrigger:{
                trigger:graduationRef.current,
            }
        })

        GraduationTl.from(graduationRef.current, {
            scale:0,
            opacity:0,
            duration:0.5,
        })

    })

    return (
        <div ref={graduationRef} className='graduation bg-zinc-200 my-10 h-full md:h-150 items-center justify-center  flex flex-col gap-4 md:flex-row'>
            <img src={gradeProject} alt="grade project" className='h-full w-full object-cover' />
            <div className="right px-3 flex flex-col  items-start justify-center pb-5 md:pb-0 min-w-1/2">
                <h1 className='text-5xl md:text-[5vw] lg:text-6xl font-primary my-3 max-w-100'>My graduation project</h1>
                <p className='font-secondary text-2xl md:text-3xl lg:max-w-150'>Revolutionizing the educational ecosystem with a mobile app designed to enhance interactive learning and peer collaboration.</p>
            </div>
        </div>
    )
}

export default GraduationProject