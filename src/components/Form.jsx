import React from 'react'

const Form = () => {
    return (
        <div className='border-1 border-white w-full h-full lg:p-8 p-5 rounded-3xl'>
            <form action="submit" className='w-full flex flex-col items-center gap-8 py-5'>
                <div className="dts flex flex-col md:flex-row w-full md:justify-between gap-4">
                    <div className="name flex flex-col w-full">
                        <label htmlFor="full name " className='text-xl mb-2 font-secondary'>Full Name</label>
                        <input type="text" placeholder='Enter your full name' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md' />
                    </div>
                    <div className="contact flex flex-col w-full">
                        <label htmlFor="contact" className='text-xl mb-2 font-secondary'>
                            Contact
                        </label>
                        <input type="number" placeholder='Enter your contact no.' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md' />
                    </div>
                </div>
                <div className="dts flex flex-col md:flex-row w-full md:justify-between gap-4">
                    <div className="email flex flex-col w-full">
                        <label htmlFor="email" className='text-xl mb-2 font-secondary'>
                            Email
                        </label>
                        <input type="email" placeholder='Enter your email' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md' />
                    </div>
                    <div className="project flex flex-col w-full">
                        <label htmlFor="Project-Type" className='text-xl mb-2 font-secondary'>
                            Project Type
                        </label>
                        <input type="text" placeholder='Enter your project type' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md' />
                    </div>
                </div>
                <div className="message w-full">
                    <label htmlFor="message" className='text-xl font-secondary'>Message</label>
                    <textarea name="message" id="message" rows={4} placeholder='Share your thaughts !' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md'></textarea>
                </div>
                <div className="btn w-full flex md:justify-end justify-center mt-2">
                    <button className='bg-white text-black text-xl py-2 px-5 rounded-md justify-self-end font-secondary'>Leave a message</button>
                </div>
            </form>
        </div>
    )
}

export default Form