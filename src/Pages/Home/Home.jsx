import React from 'react'
import HeroSection from './HeroSection'
import SelectedProjects from './SelectedProjects'
import GraduationProject from './GraduationProject'
import ContactUs from '../../components/ContactUs'
import CallToAction from '../../components/CallToAction'

const Home = () => {
  return (
    <div className='S'>
      <HeroSection/>
      <SelectedProjects/>
      <GraduationProject/>
      <ContactUs/>
      <CallToAction/>
    </div>
  )
}

export default Home