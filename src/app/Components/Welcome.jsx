import Image from 'next/image'
import React from 'react'
import wel from '../../../public/assets/girl.jpg'
import village from '../../../public/assets/sunflower.jpg'
import { BsFillCheckCircleFill,BsArrowRightCircle } from 'react-icons/bs'
import Link from 'next/link'

const Welcome = () => {
    return (
        <section className=' bg-white'>

            <div className=' flex justify-center items-center pt-20 pb-20 p-5 '>
                <div className='w-full sm:w-2/4 md:w-3/4 grid grid-cols-1 md:grid-cols-2 place-items-center '>
                    <div className=' grid place-items-center'>
                        <Image className=' md: h-80 rounded-s-md' src={village} alt='' />
                        <Image className=' rounded-md md: h-96 col-start-2 col-span-3' src={wel} alt='' />
                    </div>
                    <div className='p-5  w-full '>
                        <p className=' text-sm font-second font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 bg-lime-400'>Welcome to AgriVillage Website</p>
                        <p className=' text-3xl font-extrabold text-black'>Welcome To Organic <br />Agriculture Market</p>
                        <p className=' text-gray-600 text-xs pt-4 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum necessitatibus reiciendis distinctio blanditiis aperiam minima dolore, sed numquam animi.</p>
                        <div>
                            <div className=' flex p-1'>
                                <p><BsFillCheckCircleFill color='green' /></p>
                                <p className=' text-xs ms-2'>Best Tourism Place</p>
                            </div>
                            <div className=' flex p-1'>
                                <p><BsFillCheckCircleFill color='green' /></p>
                                <p className=' text-xs ms-2'>Natural Healthy Products</p>
                            </div>
                            <div className=' flex p-1'>
                                <p><BsFillCheckCircleFill color='green' /></p>
                                <p className=' text-xs ms-2'>Smart Organic Service</p>
                            </div>
                            <div className=' flex p-1'>
                                <p><BsFillCheckCircleFill color='green' /></p>
                                <p className=' text-xs ms-2'>Best Quality Standards</p>
                            </div>
                            <div className=' flex gap-3 items-center pt-4'>
                                <Link href='/products' className=' bg-gradient-to-r from-green-500 to-lime-400 shadow-lg text-xs text-white px-5 py-2 rounded-full transform hover:scale-105 duration-500 flex items-center gap-1'>Buy Product <BsArrowRightCircle/></Link>
                                <Link href='/projects' className=' bg-yellow-400 py-2 px-5 rounded-full shadow-lg text-xs text-black  transform hover:scale-105 duration-500 flex items-center gap-1'>Visit Farm <BsArrowRightCircle/></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Welcome