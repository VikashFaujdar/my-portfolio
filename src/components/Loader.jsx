import React, { useState } from 'react'
import loaderImage from '../assets/loader.gif'

const Loader = () => {

  const [ShowLoader, setShowLoader] = useState(false);

  window.addEventListener("load", ()=>{
    console.log(ShowLoader);
    setShowLoader(!ShowLoader);
    console.log(ShowLoader)
  })

  return (
    <div className={ShowLoader==false ? 'h-screen w-screen fixed bg-black  flex items-center justify-center z-50' : 'h-screen w-screen hidden items-center justify-center'}>
        <img src={loaderImage} alt="loader" className='rounded-full'/>
    </div>
  )
}

export default Loader