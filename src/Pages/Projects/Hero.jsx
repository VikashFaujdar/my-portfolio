import React from 'react';
import grade from '../../assets/gradeProject.png'
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.png';

const Hero = () => {

    const Projects = [
        {
            Image: card1,
            Title: "Redesign project: fitness tracker App Revamp",
            subTitle: "Elevating the user experience of a renowned fitness tracker app through a strategic."
        },
        {
            Image: card2,
            Title: "Internship project: social dining app design",
            subTitle: "Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype."
        },
        {
            Image: grade,
            Title: "Redesign project: fitness tracker App Revamp",
            subTitle: "Revolutionizing the educational ecosystem with a mobile app designed to enhance interactive learning and peer collaboration."
        }
    ]



    return (
        <div className='text-black h-full'>
            <div className="container min-h-screen h-full pt-30 pb-20 gap-2 flex flex-col items-start justify-center px-3 lg:px-5">
                <h1 className='text-4xl font-secondary font-medium'>Selected project</h1>
                <p className='text-2xl font-secondary my-3 max-w-170'>Selected projects showcasing thoughtful design solutions in education, fitness, and social networking.</p>
                <div className="grid grid-col md:grid-cols-2 gap-5 my-5">

                    {
                        Projects.map((elem) => {
                            return (
                                <div className="card flex bg-transparent flex-col overflow-hidden rounded-md">
                                    <img src={elem.Image} alt="card Image" className='rounded-xl h-100 object-cover object-center' />
                                    <div className="dts flex flex-col gap-2 py-3">
                                        <h1 className='text-2xl sm:text-[5vw] md:text-[4vw] lg:text-4xl font-secondary font-medium'>{elem.Title}</h1>
                                        <h3 className='text-xl lg:text-2xl font-secondary font-normal my-3'>{elem.subTitle}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Hero