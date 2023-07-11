"use client"
import Image from 'next/image'
import React from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'
import { TbCurrencyTaka } from 'react-icons/tb'

const Products = () => {
    return (
        <section>
            <div className='page_banner h-72 relative grid place-content-center bg-cover bg-center bg-no-repeat'>
               <p className=' text-white text-2xl font-semibold pt-5'>PRODUCT PAGE</p>
            </div>
            <div className='pt-12 pb-12 bg-gray-50'>
                <h1 className=' text-center text-4xl font-extrabold'>Organic Products</h1>
                <div className=' flex justify-center  px-4 sm:px-4 md:px-6 mt-12'>
                    <div className=' gap-4 w-full md:w-3/4 sm:w-full  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4'>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <div className=' flex justify-between items-center '>
                                    <p className=' bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-xs'>Fresh</p>
                                    <button className=' bg-gray-200 rounded-full px-2 mb-2 py-2'><BsHeartFill color='green' size={10} /></button>
                                </div>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/watermelon.jpg" alt="h" height={100} width={400} />
                                <hr className=' text-gray-300 mt-2' />
                                <h1 className=' font-bold pt-5'>Watermelon</h1>
                                <div className=' flex items-center text-gray-400'>
                                    <TbCurrencyTaka size={15} />
                                    <p className=' text-xs font-semibold'>130.00</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <div className=' flex justify-between items-center '>
                                    <p className=' bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-xs'>Fresh</p>
                                    <button className=' bg-gray-200 rounded-full px-2 mb-2 py-2'><BsHeartFill color='green' size={10} /></button>
                                </div>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/pomegranate.jpg" alt="h" height={100} width={400} />
                                <hr className=' text-gray-300 mt-2' />
                                <h1 className=' font-bold pt-5'>Pomegranate</h1>
                                <div className=' flex items-center text-gray-400'>
                                    <TbCurrencyTaka size={15} />
                                    <p className=' text-xs font-semibold'>230.00</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <div className=' flex justify-between items-center '>
                                    <p className=' bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-xs'>Fresh</p>
                                    <button className=' bg-gray-200 rounded-full px-2 mb-2 py-2'><BsHeartFill color='green' size={10} /></button>
                                </div>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/banana.jpg" alt="h" height={100} width={400} />
                                <hr className=' text-gray-300 mt-2' />
                                <h1 className=' font-bold pt-5'>Banana</h1>
                                <div className=' flex items-center text-gray-400'>
                                    <TbCurrencyTaka size={15} />
                                    <p className=' text-xs font-semibold'>30.00</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <div className=' flex justify-between items-center '>
                                    <p className=' bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-xs'>Fresh</p>
                                    <button className=' bg-gray-200 rounded-full px-2 mb-2 py-2'><BsHeartFill color='green' size={10} /></button>
                                </div>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/strawberries.jpg" alt="h" height={100} width={400} />
                                <hr className=' text-gray-300 mt-2' />
                                <h1 className=' font-bold pt-5'>Strawberries</h1>
                                <div className=' flex items-center text-gray-400'>
                                    <TbCurrencyTaka size={15} />
                                    <p className=' text-xs font-semibold'>150.00</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <div className=' flex justify-between items-center '>
                                    <p className=' bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-xs'>Fresh</p>
                                    <button className=' bg-gray-200 rounded-full px-2 mb-2 py-2'><BsHeartFill color='green' size={10} /></button>
                                </div>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/malta.jpg" alt="h" height={100} width={400} />
                                <hr className=' text-gray-300 mt-2' />
                                <h1 className=' font-bold pt-5'>Malta</h1>
                                <div className=' flex items-center text-gray-400'>
                                    <TbCurrencyTaka size={15} />
                                    <p className=' text-xs font-semibold'>180.00</p>
                                </div>
                            </div>
                        </div>
                        <div className=' flex justify-center'>
                            <div className='items-center p-3  rounded-lg bg-white hover:shadow-lg transform hover:scale-105 duration-500'>
                                <div className=' flex justify-between items-center '>
                                    <p className=' bg-gradient-to-r from-green-600 to-lime-400 py-1 px-2 font-semibold mb-2 rounded-full text-white text-xs'>Fresh</p>
                                    <button className=' bg-gray-200 rounded-full px-2 mb-2 py-2'><BsHeartFill color='green' size={10} /></button>
                                </div>
                                <Image className=' rounded-lg place-self-center ' src="/../public/assets/papaya.jpg" alt="h" height={100} width={400} />
                                <hr className=' text-gray-300 mt-2' />
                                <h1 className=' font-bold pt-5'>Papaya</h1>
                                <div className=' flex items-center text-gray-400'>
                                    <TbCurrencyTaka size={15} />
                                    <p className=' text-xs font-semibold'>120.00</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Products