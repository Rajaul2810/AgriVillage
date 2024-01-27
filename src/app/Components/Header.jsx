"use client"
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

const Header = () => {
  return (
    <section className='h-screen w-full grid place-content-center bg-cover bg-center head_bg'>
      <div className="">
        <div className=' '>
          <h1 className=' text-yellow-600 text-5xl font-extrabold'>Agricultural Tourism</h1>
          <h1 className=' text-yellow-600 text-5xl font-extrabold'>& Eco Farming </h1>
          <div className=' flex gap-3 items-center mt-3'>
             <Link href='/products' className='btn hover:bg-green-700 bg-green-600  py-3 px-7 shadow-lg shadow-slate-100/20  rounded-md text-white font-bold transform hover:scale-105 duration-500 flex items-center gap-2'> অর্ডার প্রোডাক্ট <BsArrowRightCircle/></Link>
             <Link href='/projects' className='btn hover:bg-yellow-500  bg-yellow-400  py-3 px-7 shadow-lg shadow-slate-100/20 rounded-md text-black font-bold transform hover:scale-105 duration-500 flex items-center gap-2'>ভিজিট ফার্ম <BsArrowRightCircle /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header