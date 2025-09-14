import React from 'react'
import Hero from './Hero'
import MyInspiration from './MyInspiration'
import CallToAction from '../../components/CallToAction'

const About = () => {
  return (
    <div className='bg-[#F3F3F2]'>
      <Hero/>
      <MyInspiration/>
      <CallToAction/>
    </div>
  )
}

export default About