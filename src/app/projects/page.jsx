"use client"
import Image from 'next/image'
import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import vill from '../../../public/assets/head.jpg'
import sorisa from '../../../public/assets/sorisa.jpg'
import sun from '../../../public/assets/sunflower.jpg'
import { BsArrowRightCircle } from 'react-icons/bs'

const projects = [
    {
        id: 1,
        name: 'AgriVillage',
        address: 'Noupara, Mymensingh',
        photo:vill,
    },
    {
        id: 2,
        name: 'Sorisha Vari',
        address: 'Savar, Dhaka',
        photo:sorisa,
    },
    {
        id: 3,
        name: 'Golapgram',
        address: 'Savar, Dhaka',
        photo:sun,
    },
]

const Projects = () => {
    return (
        <section>
            <div className='page_banner h-72 relative grid place-content-center bg-cover bg-center bg-no-repeat '>
                <p className=' text-white text-2xl font-semibold pt-5'>PROJECT PAGE</p>
            </div>
            <div className='pt-12 pb-12 bg-green-50'>
                <h1 className=' text-center text-4xl font-extrabold'>Explore Our Projects</h1>
                <div className=' flex justify-center  px-4 sm:px-4 md:px-12 mt-12'>
                    <div className=' gap-4 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            projects.map(item =>
                                    <div key={item.id} className=' group/item items-center p-3 shadow-sm rounded-md bg-white hover:shadow-lg'>
                                        <Image className=' rounded-lg place-self-center h-3/4 w-full ' src={item.photo} alt="h" width={300} />
                                        <h1 className=' font-bold text-center pt-3'>{item.name}</h1>
                                        <div className=' flex justify-center gap-2 '>
                                            <FaMapMarkerAlt size={15} color='green' />
                                            <p className=' text-xs font-semibold text-gray-400'>{item.address}</p>
                                        </div>
                                        <a class=" group/edit group-hover/item:visible invisible" href="#">
                                            <span class="group-hover/edit:text-gray-200 flex items-center justify-around bg-gradient-to-r from-green-600 to-lime-500 p-2 rounded-md text-gray-50 mt-2 shadow-md">Explore Project <BsArrowRightCircle color='white'/></span>
                                        </a>
                                    </div>
                            )
                        }
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects