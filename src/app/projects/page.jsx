"use client"
import Image from 'next/image'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Projects = () => {
    return (
        <section>
            <div className='page_banner h-72 relative grid place-content-center bg-cover bg-center bg-no-repeat '>
                <p className=' text-white text-2xl font-semibold pt-5'>PROJECT PAGE</p>
            </div>
            <div className='pt-12 pb-12 bg-green-50'>
                <h1 className=' text-center text-4xl font-extrabold'>Explore Our Project</h1>
                <div className=' flex justify-center  px-4 sm:px-4 md:px-12 mt-12'>
                    <div className=' gap-4 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                        <div className=' flex justify-center'>
                            <div className=' group/item items-center p-3 shadow-md rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/head.jpg" alt="h" height={100} width={400} />
                                <h1 className=' font-bold text-center pt-3'>AgriVillage</h1>
                                <div className=' flex justify-center text-gray-400'>
                                    <FaMapMarkerAlt size={15} />
                                    <p className=' text-xs font-semibold'>Address:Noupara , Mymensingh</p>
                                </div>
                                <a class="group/edit invisible hover:bg-slate-200 group-hover/item:visible ..." href="#">
                                    <span class="group-hover/edit:text-gray-700 ...">Call</span>

                                </a>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3 shadow-md  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/sorisa.jpg" alt="h" height={100} width={400} />
                                <h1 className=' font-bold text-center pt-3'>Sorisa</h1>
                                <div className=' flex justify-center text-gray-400'>
                                    <FaMapMarkerAlt size={15} />
                                    <p className=' text-xs font-semibold'>Address: Savar, Dhaka</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3 shadow-md  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <Image className=' flex-shrink-0 rounded-lg place-self-center ' src="/../public/assets/couplelove.jpg" alt="h" height={100} width={400} />
                                <h1 className=' font-bold text-center pt-3'>GolapGram</h1>
                                <div className=' flex justify-center text-gray-400'>
                                    <FaMapMarkerAlt size={15} />
                                    <p className=' text-xs font-semibold'>Address: Savar, Dhaka</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects