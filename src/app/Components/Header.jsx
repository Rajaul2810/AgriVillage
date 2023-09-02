"use client"
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

const Header = () => {
  return (
    <section className='h-screen w-full relative  grid place-content-center bg-cover bg-center head_bg'>
      <div className="">
        <div className=' '>
          <h1 className=' text-yellow-600 text-4xl font-extrabold'>Agriculture Pure</h1>
          <h1 className=' text-yellow-600 text-4xl font-extrabold'>Eco Farming & Tourism</h1>
          <div className=' flex gap-3 items-center mt-3'>
             <Link href='/products' className=' bg-green-600 border-none py-3 px-7 shadow-lg shadow-slate-100/20  rounded-md text-white font-bold transform hover:scale-105 duration-500 flex items-center gap-2'>Buy Product <BsArrowRightCircle/></Link>
             <Link href='/projects' className=' bg-yellow-400 border-none py-3 px-7 shadow-lg shadow-slate-100/20 rounded-md text-black font-bold transform hover:scale-105 duration-500 flex items-center gap-2'>Visit Farm <BsArrowRightCircle /></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header