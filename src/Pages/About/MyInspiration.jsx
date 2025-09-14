import React from 'react'
import Carousal from './Carousal'

const MyInspiration = () => {
  return (
    <div className='py-10'>
        <div className="container flex flex-col gap-10 px-3 lg:px-5 py-10">
            <h1 className='text-5xl md:text-[6vw] lg:text-5xl font-primary font-medium'>My inspirations and interests</h1>
            <div className="flex flex-col md:flex-row gap-10 justify-between">
                <h2 className='text-xl lg:text-2xl font-secondary'>Inspiration strikes me in the quiet moments — during early morning jogs along the Thames Path, while exploring the latest exhibit at the Tate Modern.</h2>
                <h2 className='text-xl lg:text-2xl font-secondary'>I'm an avid photographer, capturing life's unplanned moments, and a sci-fi enthusiast, always intrigued by the blend of technology and human imagination.</h2>
            </div>
            <div className="slider">
                <Carousal/>
            </div>
            <h1 className='text-5xl font-primary font-medium'>Looking ahead</h1>
            <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
                <h2 className='text-2xl font-secondary text-zinc-800'>As I immerse deeper into the world of UX/UI design, I'm particularly excited about the potential of integrating sustainable practices into digital design, thereby embedding a layer of environmental responsibility directly into the user experience.</h2>
                <h2 className='text-2xl font-secondary text-zinc-800'>I dream of contributing to projects that not only look good but also do good — for people and the planet. I'm also keen on exploring how AI can further personalize user experiences without losing the human touch.</h2>
            </div>
        </div>
    </div>
  )
}

export default MyInspiration