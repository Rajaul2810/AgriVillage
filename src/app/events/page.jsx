import Image from "next/image";
import React from "react";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { events } from "../libs/Data.js";
import projectIcon from "../../../public/assets/head/projectIcon.png";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Events = () => {
  return (
    <section>
      <div className="pt-8 pb-12 bg-gradient-to-b from-green-50 to-white">
        <div className="flex justify-center">
          <Image
            src={projectIcon}
            alt="pro"
            className="drop-shadow-md animate-bounce hover:scale-110 transition-transform"
            height={100}
            width={100}
          />
        </div>
        <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-green-600 bg-green-100 px-2 rounded">Events</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto px-4 mb-10">
          Join us for exciting agricultural festivals and cultural celebrations throughout the year
        </p>

        <div className="container md:w-11/12 mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <Image
                    className="h-64 w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={item.photo}
                    alt={item.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-green-400" />
                      <span className="text-sm">{item.address}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaCalendarAlt className="text-green-500" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaClock className="text-green-500" />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <FaPhoneAlt className="text-green-500" />
                      <span>{item.contact}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.facilities?.slice(0, 3).map((facility, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-green-200 transition-colors"
                      >
                        <MdOutlineMiscellaneousServices />
                        {facility}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/events/${item.id}`}
                    className="flex w-full text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg transition-all duration-300 items-center justify-center gap-2 transform hover:scale-105"
                  >
                    Explore Event
                    <BsArrowRightCircle className="animate-pulse" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
