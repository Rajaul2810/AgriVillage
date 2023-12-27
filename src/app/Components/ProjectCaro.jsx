"use client";
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import vill from "../../../public/assets/head.jpg";
import sorisa from "../../../public/assets/sorisa.jpg";
import sun from "../../../public/assets/sunflower.jpg";
import projectIcon from "../../../public/assets/head/projectIcon.png";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "AgriVillage",
    address: "Noupara, Mymensingh",
    photo: vill,
  },
  {
    id: 2,
    name: "Sorisha Vari",
    address: "Savar, Dhaka",
    photo: sorisa,
  },
  {
    id: 3,
    name: "Golapgram",
    address: "Savar, Dhaka",
    photo: sun,
  },
];

const ProjectCaro = () => {
  return (
    <section className="bg-white pt-10 pb-10 min-h-screen">
      <div className=" flex justify-center">
        <Image src={projectIcon} alt="pro" height={100} width={100}/>
      </div>
      <h1 className=" text-center text-4xl font-extrabold">
      আমাদের প্রজেক্ট সমূহ
      </h1>
        <div className="carousel ">
          {projects.map((item) => (
            <div
              className="carousel-item m-2 p-5 w-3/4 md:w-2/6 h-96"
              key={item.id}
            >
              <div className=" relative group/item items-center shadow-xl rounded-md transform hover:scale-105 duration-500 w-full h-full">
                <Image
                  className=" rounded-md place-self-center w-full h-full "
                  src={item.photo}
                  width="100%"
                  height="100%"
                  alt="h"
                />
                <div className=" absolute bottom-1 right-1 bg-gradient-to-r from-green-600 to-lime-400 rounded-md p-2">
                  <h1 className=" font-bold text-sm text-center">
                    {item.name}
                  </h1>
                  <div className=" flex justify-center gap-2">
                    <FaMapMarkerAlt size={15} color="white" />
                    <p className=" text-xs font-semibold text-gray-100">
                      {item.address}
                    </p>
                  </div>
                </div>
              </div>
                
            </div>
          ))}
        </div>
      <p className=" flex justify-center pt-5">
        <Link
          href="/projects"
          className=" bg-yellow-400 py-2 px-5 rounded-full shadow-lg text-xs text-black  transform hover:scale-105 duration-500 flex items-center gap-1"
        >
          More View <BsArrowRightCircle />
        </Link>
      </p>
    </section>
  );
};

export default ProjectCaro;
