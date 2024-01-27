
import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { events } from "../libs/Data.js";
import projectIcon from "../../../public/assets/head/projectIcon.png";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";


const Events = () => {
  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat ">
        <p className=" text-white text-2xl font-semibold pt-5">Event PAGE</p>
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
        <h1 className=" text-center text-4xl font-extrabold">
          আমাদের <span className=" text-green-500">ইভেন্ট</span> সমূহ
        </h1>
        <div className=" flex justify-center  px-4 sm:px-4 md:px-12 mt-12">
          <div className=" gap-4 w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {events.map((item) => (
              <div
                key={item.id}
                className="  items-center p-3 shadow-md rounded-md bg-white border-b-4 border-green-400"
              >
                <div className="relative">
                  <Image
                    className=" rounded-lg place-self-center h-96 w-full "
                    src={item.photo}
                    alt="h"
                  />
                  <div className=" w-fit p-2 rounded-e-full absolute top-0 border bg-green-500 m-1">
                    <h1 className=" font-bold ">{item.name}</h1>
                    <div className=" flex  gap-2 ">
                      <FaMapMarkerAlt size={15} />
                      <p className=" text-xs font-semibold">{item.address}</p>
                    </div>
                  </div>
                </div>

                <Link
                  className="btn rounded-md mt-2 shadow-sm border bg-white w-full hover:bg-lime-400"
                  href={`/events/${item.id}`}
                >
                  <span className=" flex justify-center gap-5 items-center p-2 ">
                    Explore Event <BsArrowRightCircle />
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

export default Events;

