import React from 'react'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'

const Contact = () => {
    return (
        <section className=''>
            <div className='page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat'>
                <p className=' text-white text-2xl font-semibold pt-5 blur-none'>CONTACT US</p>
            </div>
            <div className=' flex justify-center items-center pt-20 pb-20 p-5 bg-lime-50'>
                <div className='w-full md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center '>
                    <div className='pb-5'>
                        <p className=' text-md font-serif italic text-green-400'>Contact Detail</p>
                        <p className=' text-3xl font-extrabold  text-black'>Contact us</p>

                        <p className=' text-md pb-5 pt-2'>Send us a note and we will be in touch shortly.</p>
                        <div className=' mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white'>
                            <p className=' bg-gradient-to-r from-green-600 to-lime-500 p-3 w-10 h-10 rounded-full  shadow-indigo-500/50 shadow-md'><FiMapPin color='white' /></p>
                            <div className=' ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Address:</p>
                                <p className=' text-sm'>Jagannath University, Dhaka 1100</p>
                            </div>
                        </div>
                        <div className='mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white'>
                            <p className=' bg-gradient-to-r from-green-600 to-lime-500 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md'><FiMail color='white' /></p>
                            <div className=' ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Mailbox:</p>
                                <p className=' text-sm'>rajaulkarim2810@gmail.com</p>
                            </div>
                        </div>
                        <div className=' mb-2 flex p-3 shadow-lg me-1 rounded-lg bg-white'>
                            <p className=' bg-gradient-to-r from-green-600 to-lime-500 p-3 w-10 h-10 rounded-full shadow-indigo-500/50 shadow-md'><FiPhone color='white' /></p>
                            <div className='ms-5 text-gray-500'>
                                <p className=' font-bold text-black'>Our Phone:</p>
                                <p className=' text-sm'>+88 01776030787</p>
                            </div>
                        </div>

                    </div>
                    <div className='shadow-md rounded-md p-5 bg-gradient-to-r from-green-400 to-lime-300 w-full'>
                        <form action="">
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Name</label><br />
                                <input className='  p-3 bg-green-200 w-full rounded-md' type="text" name='name' required placeholder='Enter name' />
                            </div>
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Email</label><br />
                                <input className=' bg-green-200 p-3  w-full rounded-md' type="text" name='email' placeholder='Enter email' />
                            </div>
                            <div className='pb-4 pt-4'>
                                <label htmlFor="">Message</label><br />
                                <textarea className=' bg-green-200 p-3  w-full rounded-md' type="text" name='message' placeholder='Enter message' rows={2} />
                            </div>
                            <input className='btn bg-gradient-to-r from-green-600 to-lime-500 border-none shadow-green-500/50 shadow-lg py-3 px-4 w-40  rounded-3xl text-white font-bold transform hover:scale-105 duration-150 cursor-pointer' type="button" value='SEND' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact