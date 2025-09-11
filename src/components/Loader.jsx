import React from 'react'
import loaderImage from '../assets/loader.gif'

const Loader = () => {
  return (
    <div className='flex justify-center items-center bg-white fixed top-0 left-0  h-screen w-screen'>
        <img src={loaderImage} alt="loader" className=''/>
    </div>
  )
}

export default Loader