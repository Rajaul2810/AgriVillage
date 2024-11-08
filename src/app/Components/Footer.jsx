"use client";
import React from "react";
import {
  BsFacebook,
  BsFillCheckCircleFill,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footer = () => {
  return (
    <section className="h-full bg-contain bg-center footer_bg">
      <div className=" h-auto flex justify-center pt-5 text-black">
        <div className=" w-3/4 bg-slate-100 bg-opacity-95  rounded-sm grid sm:grid-cols-2 md:grid-cols-3 ">
          <div className="m-5">
            <h1 className=" text-lg font-extrabold">AgriVillage</h1>
            <hr className=" text-gray-300 mt-2" />
            <p className=" text-sm">
              SMART-trend Digital <br /> Suite # 4A, House # 3B, Road # 49, Gulshan 2, <br />
              Dhaka 1212, Bangladesh
            </p>
            <h1 className=" text-sm pt-3 pb-2 font-bold">SOCIAL CONNECT</h1>
            <div className="flex items-center gap-4">
              <a
                href=""
                className=" bg-white p-2 rounded-md hover:scale-105 duration-300"
              >
                <BsYoutube size={20} color="green" />
              </a>
              <a
                href=""
                className=" bg-white p-2 rounded-md hover:scale-105 duration-300"
              >
                <BsFacebook size={20} color="green" />
              </a>
              <a
                href=""
                className=" bg-white p-2 rounded-md hover:scale-105 duration-300"
              >
                <BsLinkedin size={20} color="green" />
              </a>
            </div>
          </div>
          <div className="m-5">
            <h1 className=" text-sm font-bold ">SERVICES</h1>
            <hr className=" text-gray-300 mt-2" />
            <div className="flex gap-1 items-center cursor-pointer  hover:translate-x-2  duration-300">
              <BsFillCheckCircleFill color="green" />
              <p className="">Product</p>
            </div>
            <div className="flex  gap-1 items-center cursor-pointer  hover:translate-x-2 duration-300">
              <BsFillCheckCircleFill color="green" />
              <p className="">Food</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer  hover:translate-x-2 duration-300">
              <BsFillCheckCircleFill color="green" />
              <p className="">Agricultural Product</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer  hover:translate-x-2 duration-300">
              <BsFillCheckCircleFill color="green" />
              <p className="">Visit</p>
            </div>
            <div className="flex gap-1 items-center cursor-pointer  hover:translate-x-2 duration-300">
              <BsFillCheckCircleFill color="green" />
              <p className="">Event</p>
            </div>
          </div>
          <div className="m-5">
            <h1 className=" text-sm font-bold ">ESSENTIAL PAGE</h1>
            <hr className=" text-gray-300 mt-2" />
            <div className="flex   gap-1 items-center cursor-pointer transition hover:translate-x-2">
              <BsFillCheckCircleFill color="green" />
              <p className="">Home</p>
            </div>
            <div className="flex   gap-1 items-center cursor-pointer transition hover:translate-x-2">
              <BsFillCheckCircleFill color="green" />
              <p className="">Product</p>
            </div>
            <div className="flex   gap-1 items-center cursor-pointer transition hover:translate-x-2">
              <BsFillCheckCircleFill color="green" />
              <p className="">Project</p>
            </div>
            <div className="flex   gap-1 items-center cursor-pointer transition hover:translate-x-2">
              <BsFillCheckCircleFill color="green" />
              <p className="">About</p>
            </div>
            <div className="flex   gap-1 items-center cursor-pointer transition hover:translate-x-2">
              <BsFillCheckCircleFill color="green" />
              <p className="">Login</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-slate-900 p-5">
        <p className=" text-white text-center">
          &copy; Copyright, {new Date().getFullYear()} by AgriVillage
        </p>
      </div>
    </section>
  );
};

export default Footer;
