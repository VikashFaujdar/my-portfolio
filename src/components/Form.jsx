import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


const Form = () => {

    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        const serviceId = 'service_kzqps5p';
        const templateId = 'template_ab5e0ao';
        const publicKey = 'sJbxcnCbWRs7V4dt1';

        const templateParams= {
            from_name: name,
            from_email: email,
            to_name: 'Vikash Kumar',
            message: message,
        };

        emailjs.send(serviceId,templateId,templateParams,publicKey).then((Response)=>{
            console.log('email sent successfully', Response);
        }).catch((error)=>{
            console.log('error sending email', error)
        })

        const userDetails = {
            "Name": name,
            "email": email,
            "message": message
        }

        console.log(userDetails)

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='border-1 border-white w-full h-full lg:p-8 p-5 rounded-3xl'>
            <form onSubmit={submitHandler} className='w-full flex flex-col items-center gap-8 py-5'>
                <div className="dts flex flex-col md:flex-row w-full md:justify-between gap-4">
                    <div className="name flex flex-col w-full">
                        <label htmlFor="full name " className='text-xl mb-2 font-secondary'>Full Name</label>
                        <input
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            type="text" placeholder='Enter your full name' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md font-medium' />
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
                </div>
                <div className="message w-full">
                    <label htmlFor="message" className='text-xl font-secondary'>Message</label>
                    <textarea
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        name="message" id="message" rows={4} placeholder='Share your thaughts !' className='w-full px-2 md:py-2 py-3  rounded-sm bg-white text-black font-secondary outline-none text-md mt-2 font-medium'></textarea>
                </div>
                <div className="btn w-full flex md:justify-end justify-center mt-2">

                    <button type="submit"
                        className='md:hidden font-secondary cursor-pointer border-1 border-zinc-500 px-4 md:px-5 py-1 bg-white text-black hover:text-white text-xl md:text-xl transition-all group duration-300 overflow-hidden rounded-sm hover:bg-transparent'>Leave a message
                    </button>
                    <button type="submit"
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