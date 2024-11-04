import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { projects } from "../libs/Data.js";
import projectIcon from "../../../public/assets/head/projectIcon.png";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat ">
        <p className=" text-white text-2xl font-semibold pt-5">PROJECT PAGE</p>
      </div>
      <div className="pt-8 pb-12 bg-green-50">
        <div className=" flex justify-center ">
          <Image
            src={projectIcon}
            alt="pro"
            className=" drop-shadow-md"
            height={100}
            width={100}
          />
        </div>
        <h1 className=" text-center text-4xl font-extrabold text-black">
          Our <span className=" text-green-500">Projects</span>
        </h1>
        <div className=" flex justify-center  px-4 sm:px-4 md:px-12 mt-12">
          <div className=" w-11/12 md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((item) => (
              <div
                key={item.id}
                className="  items-center p-3 shadow-sm rounded-sm bg-white border"
              >
                <div className="">
                  <Image
                    className=" rounded-sm place-self-center h-40 w-full "
                    src={item.photo}
                    alt="h"
                  />
                  <div className=" w-fit p-2 m-1 text-black">
                    <div className=" flex  gap-2 bg-green-100 rounded-sm p-1 my-2">
                      <FaMapMarkerAlt size={15} color="green" />
                      <p className=" text-xs">{item.address}</p>
                    </div>
                    <h1 className=" font-bold text-center ">{item.name}</h1>
                  </div>
                </div>

                <Link
                  className="btn rounded-sm mt-2 shadow-sm border bg-white w-full hover:bg-lime-400"
                  href={`/projects/${item.id}`}
                >
                  <span className=" flex justify-center gap-5 items-center p-2 ">
                    Explore Project <BsArrowRightCircle />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
