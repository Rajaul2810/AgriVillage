"use client";
import React, { useState } from "react";
import {
  BsBagDash,
  BsArrowRightShort,
  BsTelephoneFill,
  BsYoutube,
  BsFacebook,
  BsLinkedin,
  BsMenuButtonWideFill,
  BsFillBackspaceFill,
} from "react-icons/bs";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import logo from '../../../public/assets/girl2.jpg'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" pt-5 pb-3 absolute z-10 w-full">
      <div className=" hidden md:block">
        <section className=" flex justify-center ">
          <div className="w-full md:w-full md:me-5 md:ms-5 sm:me-5 sm:ms-5 max-sm:ms-7 max-sm:me-7 max-sm:ps-4 md:ps-5  gap-1 grid grid-cols-2 md:grid-cols-4 lg:w-3/5  bg-gradient-to-r from-green-600 to-lime-400 rounded-t-2xl md:rounded-t-full text-white p-1">
            <div className=" flex items-center">
              <MdOutlineEmail />
              <p className=" text-xs">agrivillage@gmail.com</p>
            </div>
            <div className="flex items-center">
              <MdLocationOn />
              <p className=" text-xs">Jagannath University</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneFill />
              <p className=" text-xs">+8801776030787</p>
            </div>
            <div className="flex items-center gap-4">
              <a href="">
                <BsYoutube size={15} />
              </a>
              <a href="">
                {" "}
                <BsFacebook size={15} />
              </a>
              <a href="">
                <BsLinkedin size={15} />
              </a>
            </div>
          </div>
        </section>
      </div>

      <section className="">
        <div className="flex justify-center items-center">
          <nav className=" flex justify-between w-full lg:w-3/4 md:w-full rounded-b-3xl rounded-t-2xl bg-white shadow-md h-16 me-2 ms-2">
            {/* mobile */}
            <div className="ms-10 flex justify-evenly items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-controls="mobile-menu"
                aria-expanded="false"
                className=" text-black p-2"
              >
                {!isOpen ? (
                  <BsMenuButtonWideFill size={20} />
                ) : (
                  <BsFillBackspaceFill size={20} />
                )}
              </button>
            </div>

            <div className=" flex items-center ms-10 max-md:ms-0">
              <h1>Logo</h1>
            </div>
            <div className=" hidden md:block">
              <div className=" flex justify-center items-center gap-5 h-16 text-gray-500">
                <p>
                  <Link
                    activeclass="home"
                    href="/"
                    className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                  >
                    Home
                  </Link>
                </p>
                <Link
                  activeclass="projects"
                  href="/projects"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  Projects
                </Link>
                <Link
                  activeclass="products"
                  href="/products"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  Products
                </Link>
                <Link
                  activeclass="about"
                  href="/about"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  About
                </Link>
                <Link
                  activeclass="contact"
                  href="/contact"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className=" flex justify-between items-center me-10">
              <div className="indicator me-10">
                <span className="indicator-item badge badge-secondary">2</span>
                <p className=" bg-gradient-to-r from-green-500 to-lime-400 rounded-full p-2">
                  <BsBagDash color="white" />
                </p>
              </div>

              {/* <button className=' bg-gradient-to-r from-green-600 to-lime-400  p-2 text-white transform hover:scale-105 duration-500 animate-pulse'>Login <BsArrowRightShort /></button> */}
              {/* <Link
                href="/login"
                className=" cursor-pointer bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md text-white hover:text-white/50 font-semibold "
              >
                Login
              </Link> */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <Image src={logo} alt="logo" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="profile" className="justify-between">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link href='/dashboard'>Dashboard</Link>
                  </li>
                  <hr className="mt-2 pb-2" />
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        {isOpen && (
          <div className="flex flex-col md:hidden justify-center items-center gap-1 p-2 bg-white rounded-lg m-2 text-gray-500">
            <p>
              <Link
                activeclass="/"
                href="/"
                className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
              >
                Home
              </Link>
            </p>
            <Link
              activeclass="/projects"
              href="/project"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              Projects
            </Link>
            <Link
              activeclass="/products"
              href="/products"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              Products
            </Link>
            <Link
              activeclass="/about"
              href="/about"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              About
            </Link>
            <Link
              activeclass="/contact"
              href="/contact"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              Contact
            </Link>
          </div>
        )}
      </section>
    </section>
  );
};
