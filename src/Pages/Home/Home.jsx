import React from 'react'
import HeroSection from './HeroSection'
import SelectedProjects from './SelectedProjects'
import GraduationProject from './GraduationProject'

const Home = () => {
  return (
    <div className='S'>
      <HeroSection/>
      <SelectedProjects/>
      <GraduationProject/>
    </div>
  )
}

export default Home