import React from 'react'
import card1 from './../assets/microsoft2.jpg'
import card2 from './../assets/google2.jpg'
import card3 from './../assets/meta2.jpg'

const ImageSection = () => {
    const ImagesLinks = [
        {
            foto:card1,
            title:"Microsoft"
        },
        {
            foto:card2,
            title:"Google"
        },
        {
            foto:card3,
            title:"Meta"
        },
    ]
    return (
        <div className="container">
            <div className='flex justify-center gap-1 items-center'>
                {ImagesLinks.map((elem, idx) => {
                    return (
                        <div key={idx} className="images group relative h-50 md:h-140 w-full md:hover:w-500 hover:w-180 transition-all duration-700 bg-zinc-400 overflow-hidden rounded-xl">
                            <img src={elem.foto} alt="card1" className='h-full w-full object-cover' />
                            <div className="h-30 w-30 justify-center items-center bg-black rounded-full absolute group hover:bg-zinc-400 transition-all duration-150 z-10 top-1/2 left-1/2 -translate-x-5 -translate-y-5 group-hover:flex hidden">
                            <h1 className='text-2xl text-cyan-300 font-primary'>{elem.title}</h1>
                            </div>
                        </div>

                    )
                })
                }

            </div>
        </div>
    )
}

export default ImageSection