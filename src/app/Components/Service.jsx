"use client"
import Image from 'next/image'
import React from 'react'

const Service = () => {
    return (
        <div className='pt-12 pb-12 bg-gray-100'>
            <h1 className=' text-center text-4xl font-extrabold'>Services We Offer</h1>
            <div className=' flex justify-center  px-4 sm:px-4 md:px-6 mt-12'>
                <div className=' gap-4 w-full md:w-3/4 sm:w-full  grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3'>
                    <div className=' flex justify-center'>
                        <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                            <Image className=' rounded-lg place-self-center ' src="/../public/assets/veg.jpg" alt="h" height={100} width={400} />
                            <h1 className=' font-bold text-center pt-3'>Fresh Vegetables</h1>
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                        <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                            <Image className=' rounded-lg place-self-center ' src="/../public/assets/village.jpg" alt="h" height={100} width={400} />
                            <h1 className=' font-bold text-center pt-3'>Visit Farm</h1>
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                        <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                            <Image className=' rounded-lg place-self-center ' src="/../public/assets/head.jpg" alt="h" height={100} width={400} />
                            <h1 className=' font-bold text-center pt-3'>Fresh Vegetables</h1>
                        </div>
                    </div>
                    <div className=' flex justify-center'>
                        <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                            <Image className=' rounded-lg place-self-center ' src="/../public/assets/cow.jpg" alt="h" height={100} width={400} />
                            <h1 className=' font-bold text-center pt-3'>Dairy Products</h1>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Service