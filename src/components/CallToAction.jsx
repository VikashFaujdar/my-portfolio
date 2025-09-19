import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {

    const CTARef = useRef();
    
    useGSAP(()=>{
        
        const CtaTitle = SplitText.create(".cta h1", {
            type:"words"
        })

        const CtaSubTitle = SplitText.create(".cta p", {
            type:"words"
        })

        const ctaTl = gsap.timeline({
            scrollTrigger:{
                trigger:CTARef.current,
            }
        })

        ctaTl.from(CtaTitle.words,{
            y:50,
            opacity:0,
            stagger:0.3,
            duration:0.5
        })

        ctaTl.from(CtaSubTitle.words,{
            y:50,
            opacity:0,
            stagger:0.3,
            duration:0.5
        })
    })


    return (
        <div ref={CTARef} className="text-white bg-zinc-600 w-full py-20 my-10">
            <div className="container cta px-3 lg:px-5">
                <h1 className='text-4xl md:text-[5vw] lg:text-6xl font-primary font-medium'>Interested in connecting?</h1>
                <p className='text-2xl  py-5 font-secondary'>Let’s talk projects, collaborations, or anything design!</p>
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