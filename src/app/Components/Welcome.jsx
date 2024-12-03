import Image from 'next/image'
import React from 'react'
import wel from '../../../public/projects/TeaGardensEco-Tour_7.jpg'
import village from '../../../public/assets/sunflower.jpg'
import { BsFillCheckCircleFill, BsArrowRightCircle } from 'react-icons/bs'
import { FaLeaf, FaSeedling, FaStore, FaTractor, FaUsers } from 'react-icons/fa'
import Link from 'next/link'

const Welcome = () => {
    return (
        <section className='bg-gradient-to-b from-green-50 to-white'>
            <div className='container mx-auto md:w-10/12 px-4 py-4 md:py-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
                    {/* Image Grid with SVG Decorations */}
                    <div className='relative grid grid-cols-6 grid-rows-5 gap-3 md:gap-4 h-[400px] md:h-[500px] lg:h-[600px] order-2 lg:order-1'>
                        {/* Enhanced Background Pattern */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <svg width="100%" height="100%" className="opacity-10">
                                <defs>
                                    <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                        <circle cx="2" cy="2" r="1" fill="#22c55e"/>
                                    </pattern>
                                    <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#22c55e" stopOpacity="0.1"/>
                                        <stop offset="100%" stopColor="#16a34a" stopOpacity="0.05"/>
                                    </linearGradient>
                                </defs>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"/>
                                <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-gradient)"/>
                            </svg>
                        </div>

                        <div className='col-span-4 row-span-3 relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out group'>
                            <Image 
                                src={village}
                                alt='Farm view'
                                className='object-cover w-full h-full brightness-95 group-hover:brightness-105 group-hover:scale-110 transition-all duration-700'
                                placeholder='blur'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all duration-500'></div>
                            {/* Enhanced Corner Decoration */}
                            <svg className="absolute top-0 right-0 w-20 h-20 text-white opacity-40 group-hover:opacity-60 transition-opacity" viewBox="0 0 100 100">
                                <path d="M100,0 Q100,100 0,100 Q55.2285,100 100,0" fill="currentColor"/>
                            </svg>
                        </div>

                        <div className='col-span-3 col-start-4 row-span-3 row-start-3 relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out group'>
                            <Image 
                                src={wel}
                                alt='Farmer'
                                className='object-cover w-full h-full brightness-95 group-hover:brightness-105 group-hover:scale-110 transition-all duration-700'
                                placeholder='blur'
                                priority
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/20 transition-all duration-500'></div>
                            {/* Enhanced Wave Decoration */}
                            <svg className="absolute bottom-0 left-0 w-full h-16 text-white opacity-40 group-hover:opacity-60 transition-opacity" viewBox="0 0 100 25">
                                <path d="M0,15 C25,35 75,-5 100,15 L100,25 L0,25 Z" fill="currentColor"/>
                            </svg>
                        </div>
                    </div>

                    {/* Content - Enhanced responsiveness and visual hierarchy */}
                    <div className='space-y-6 md:space-y-8 order-1 lg:order-2'>
                        <div>
                            <span className='inline-block px-4 py-2 rounded-full bg-green-100 text-green-600 font-semibold text-sm mb-4 transform hover:scale-105 transition-transform'>
                                Welcome to AgriVillage
                            </span>
                            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight mb-4 md:mb-6'>
                                Experience Organic{' '}
                                <span className='text-green-600 relative inline-block'>
                                    Agriculture & Tourism
                                    <span className='absolute bottom-0 left-0 w-full h-1 bg-green-200 transform -skew-x-12'></span>
                                </span>
                            </h1>
                            <p className='text-gray-600 leading-relaxed mb-6 md:mb-8 text-sm md:text-base'>
                                Discover the perfect blend of agricultural tourism and organic products. Experience hands-on farming, learn sustainable practices, and take home natures finest produce.
                            </p>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8'>
                            {[
                                {icon: FaLeaf, color: 'green', title: 'Organic Products', desc: '100% Natural & Fresh'},
                                {icon: FaTractor, color: 'yellow', title: 'Farm Tours', desc: 'Interactive Experience'},
                                {icon: FaUsers, color: 'blue', title: 'Workshops', desc: 'Learn & Grow'},
                                {icon: FaStore, color: 'purple', title: 'Farm Market', desc: 'Direct from Farmers'}
                            ].map((item, index) => (
                                <div key={index} className='bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 transform hover:-translate-y-1'>
                                    <div className={`bg-${item.color}-100 p-3 rounded-full`}>
                                        <item.icon className={`text-${item.color}-600 text-xl`}/>
                                    </div>
                                    <div>
                                        <h3 className='font-semibold text-gray-800'>{item.title}</h3>
                                        <p className='text-sm text-gray-600'>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className='flex flex-wrap gap-3 md:gap-4'>
                            <Link 
                                href='/products' 
                                className='group px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-sm font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300'
                            >
                                Shop Products
                                <BsArrowRightCircle className='group-hover:translate-x-1 transition-transform'/>
                            </Link>
                            <Link 
                                href='/projects' 
                                className='group px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-800 rounded-sm font-semibold flex items-center gap-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300'
                            >
                                Farm Visit
                                <BsArrowRightCircle className='group-hover:translate-x-1 transition-transform'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome