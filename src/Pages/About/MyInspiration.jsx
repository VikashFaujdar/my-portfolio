import React from 'react'
import Carousal from './Carousal'
import ImageSection from '../../components/ImageSection'

const MyInspiration = () => {
    return (
        <div className='py-5 md:py-10'>
            <div className="container flex flex-col gap-10 px-3 lg:px-5 py-10">
                <h1 className='text-5xl md:text-[6vw] lg:text-5xl font-primary font-medium'>My inspirations and interests</h1>
                <div className="flex flex-col md:flex-row gap-10 justify-between">
                    <h2 className='text-xl lg:text-2xl font-secondary'>Driven by my admiration for the open, dynamic workspaces of Microsoft, Google, and Meta, I’m working toward becoming a software engineer who contributes to world-changing ideas.</h2>
                    <h2 className='text-xl lg:text-2xl font-secondary'>Motivated by the innovative spirit and work environments of Microsoft, Google, and Meta, I aim to build impactful solutions as a future software engineer</h2>
                </div>
                <div className="slider">
                    {/* <Carousal /> */}
                    <ImageSection />
                </div>
                <h1 className='text-5xl font-primary font-medium'>Looking ahead</h1>
                <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
                    <h2 className='text-xl font-secondary text-zinc-800'>As I look forward, I see a future where I contribute to innovative teams like those at Microsoft, Google, and Meta, building technology that inspires the world.</h2>
                    <h2 className='text-xl font-secondary text-zinc-800'>Looking ahead, I aim to join forward-thinking environments like Microsoft, Google, and Meta, where innovation, collaboration, and impact come together</h2>
                </div>
            </div>
        </div>
    )
}

export default MyInspiration