import React, { useState } from 'react';

const Form = () => {

    const [fullname, setFullname] = useState("")
    const [contact, setContact] = useState("")
    const [email, setEmail] = useState("")
    const [project, setProject] = useState("")
    const [message, setMessage] = useState("")

    const submitHandler = (e) => {
        e.preventDefault();
        const userDetails = {
            "Name": fullname,
            "contact": contact,
            "email": email,
            "project Type": project,
            "message": message
        }

        console.log(userDetails)

        setFullname("");
        setContact("");
        setEmail("");
        setMessage("");
        setProject("");
    }

    return (
        <div className='border-1 border-white w-full h-full lg:p-8 p-5 rounded-3xl'>
            <form className='w-full flex flex-col items-center gap-8 py-5'>
                <div className="dts flex flex-col md:flex-row w-full md:justify-between gap-4">
                    <div className="name flex flex-col w-full">
                        <label htmlFor="full name " className='text-xl mb-2 font-secondary'>Full Name</label>
                        <input
                            onChange={(e) => { setFullname(e.target.value) }}
                            value={fullname}
                            type="text" placeholder='Enter your full name' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md font-medium' />
                    </div>
                    <div className="contact flex flex-col w-full">
                        <label htmlFor="contact" className='text-xl mb-2 font-secondary'>
                            Contact
                        </label>
                        <input
                            value={contact}
                            onChange={(e) => { setContact(e.target.value) }}
                            type="number" placeholder='Enter your contact no.' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md font-medium' />
                    </div>
                </div>
                <div className="dts flex flex-col md:flex-row w-full md:justify-between gap-4">
                    <div className="email flex flex-col w-full">
                        <label htmlFor="email" className='text-xl mb-2 font-secondary'>
                            Email
                        </label>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            type="email" placeholder='Enter your email' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md font-medium' />
                    </div>
                    <div className="project flex flex-col w-full">
                        <label htmlFor="Project-Type" className='text-xl mb-2 font-secondary'>
                            Project Type
                        </label>
                        <input
                            value={project}
                            onChange={(e) => { setProject(e.target.value) }}
                            type="text" placeholder='Enter your project type' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md font-medium' />
                    </div>
                </div>
                <div className="message w-full">
                    <label htmlFor="message" className='text-xl font-secondary'>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        name="message" id="message" rows={4} placeholder='Share your thaughts !' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md mt-2 font-medium'></textarea>
                </div>
                <div className="btn w-full flex md:justify-end justify-center mt-2">

                    <button
                        onClick={submitHandler}
                        className='md:hidden font-secondary cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white text-xl md:text-xl transition-all group duration-300 overflow-hidden rounded-sm hover:bg-transparent'>Leave a message
                    </button>
                    <button
                        onClick={submitHandler}
                        className='hidden font-secondary md:block relative cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white md:text-xl text-md transition-all group duration-300 overflow-hidden z-20 rounded-sm hover:bg-transparent'>Leave a message
                        <div className="btn-animation absolute w-full h-full group-hover:bottom-0 bg-black -z-10 -bottom-10 transition-all duration-500 left-0"></div>
                        <div className="btn-animation-2 absolute w-full h-full group-hover:top-0 bg-black -z-10 -top-10 transition-all duration-500 left-0"></div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form