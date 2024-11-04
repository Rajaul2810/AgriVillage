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
      <div className="pt-8 pb-12 bg-green-50 text-black">
        <div className=" flex justify-center ">
          <Image
            src={projectIcon}
            alt="pro"
            className=" drop-shadow-md"
            height={100}
            width={100}
          />
        </div>
        <h1 className=" text-center text-3xl font-extrabold">
          Our <span className=" text-green-500">Events</span>
        </h1>
        <div className=" flex justify-center my-10">
          <div className=" gap-5 w-11/12 md:w-8/12  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {events.map((item) => (
              <div
                key={item.id}
                className="  items-center p-3 shadow-sm rounded-sm bg-white h-fit border"
              >
                <div className="">
                  <div className=" w-full p-2 bg-yellow-400  rounded-sm shadow-lg mb-5 rounded-b-2xl">
                    <h1 className=" font-bold text-center ">{item.name}</h1>
                    <div className=" flex  gap-2 justify-center">
                      <FaMapMarkerAlt size={15} />
                      <p className=" text-xs font-semibold">{item.address}</p>
                    </div>
                  </div>
                  <Image
                    className=" rounded-sm place-self-center h-40 w-full "
                    src={item.photo}
                    alt="h"
                  />
                  <p className=" text-justify py-5 text-sm">{item.description.slice(0,100)}</p>
                </div>

                <Link
                  className="btn rounded-sm mt-2 shadow-sm border w-full bg-gradient-to-r from-green-500 to-lime-500"
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
