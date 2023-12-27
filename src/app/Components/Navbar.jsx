"use client";
import React, { useState } from "react";
import {
  BsBagDash,
  BsTelephoneFill,
  BsYoutube,
  BsFacebook,
  BsLinkedin,
  BsMenuButtonWideFill,
  BsFillBackspaceFill,
} from "react-icons/bs";
import { CiHome, CiLogout, CiUser } from "react-icons/ci";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/girl2.jpg";
import log from "../../../public/logo.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className=" pt-2 pb-2 absolute z-10 w-full">
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
          <nav className=" flex justify-between w-full lg:w-3/4 md:w-full rounded-b-3xl rounded-t-2xl bg-white shadow-md h-16 me-2 ms-2 ">
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
              <Image
                className=" rounded-full bg-white"
                src={log}
                alt="logo"
                height={70}
                width={80}
              />
            </div>
            <div className=" hidden md:block">
              <div className=" flex justify-center items-center gap-5 h-16 text-gray-500">
                <p>
                  <Link
                    activeclass="home"
                    href="/"
                    className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                  >
                    হোম
                  </Link>
                </p>
                <Link
                  activeclass="projects"
                  href="/projects"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  প্রজেক্ট
                </Link>
                <Link
                  activeclass="products"
                  href="/products"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                 প্রোডাক্ট
                </Link>
                <Link
                  activeclass="event"
                  href="/event"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  ইভেন্ট
                </Link>
                <Link
                  activeclass="contact"
                  href="/contact"
                  className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
                >
                  যোগাযোগ
                </Link>
              </div>
            </div>

            <div className=" flex justify-between items-center me-10">
              {/* <div className="indicator me-10">
                <span className="indicator-item badge badge-secondary">2</span>
                <p className=" bg-gradient-to-r from-green-500 to-lime-400 rounded-full p-2">
                  <BsBagDash color="white" />
                </p>
              </div> */}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                  <div className="indicator">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                  </div>
                </label>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                >
                  <div className="card-body">
                    <span className="font-bold text-lg">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                      <button className="btn bg-gradient-to-r from-green-600 to-lime-400 text-white  btn-block">
                        View cart
                      </button>
                    </div>
                  </div>
                </div>
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
                    <Link
                      href="/dashboard/profile"
                      className="flex items-center gap-2"
                    >
                      <CiUser /> Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/dashboard"
                      className=" flex items-center gap-2"
                    >
                      <CiHome />
                      Dashboard
                    </Link>
                  </li>
                  <hr className="mt-2 pb-2" />
                  <li>
                    <a className=" flex items-center gap-2">
                      <CiLogout />
                      Logout
                    </a>
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
                হোম
              </Link>
            </p>
            <Link
              activeclass="/projects"
              href="/projects"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              প্রজেক্ট
            </Link>
            <Link
              activeclass="/products"
              href="/products"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              প্রোডাক্ট
            </Link>
            <Link
              activeclass="/event"
              href="/about"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              ইভেন্ট
            </Link>
            <Link
              activeclass="/contact"
              href="/contact"
              className=" cursor-pointer hover:bg-gradient-to-r from-green-600 to-lime-400 p-2 rounded-md hover:text-white font-semibold "
            >
              যোগাযোগ
            </Link>
          </div>
        )}
      </section>
    </section>
  );
};
