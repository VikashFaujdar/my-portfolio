import React from 'react'
import card1 from './../assets/card1.png'
import card2 from './../assets/card2.png'
import card3 from './../assets/gradeProject.png'

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
                        <div key={idx} className="images group relative h-50 md:h-100 w-full md:hover:w-500 hover:w-180 transition-all duration-700 bg-red-400 overflow-hidden rounded-xl">
                            <img src={elem.foto} alt="card1" className='h-full w-full object-cover' />
                            <h1 className='absolute z-10 top-1/2 left-1/2 -translate-x-5 -translate-y-5 text-4xl text-cyan-300 font-primary group-hover:block hidden'>{elem.title}</h1>
                        </div>

                    )
                })
                }

            </div>
        </div>
    )
}

export default ImageSection