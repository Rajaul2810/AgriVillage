import Image from "next/image";
import React from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { projects } from "../libs/Data.js";
import projectIcon from "../../../public/assets/head/projectIcon.png";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const Projects = () => {
  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
        <p className="text-white text-2xl font-semibold pt-5">PROJECT PAGE</p>
      </div>
      <div className="pt-8 pb-12 bg-gradient-to-b from-green-50 to-white">
        <div className="flex justify-center">
          <Image
            src={projectIcon}
            alt="pro"
            className="drop-shadow-md animate-bounce"
            height={100}
            width={100}
          />
        </div>
        <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-4">
          Our <span className="text-green-600">Projects</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto px-4 mb-10">
          Discover our innovative agricultural projects that combine tradition
          with modern farming techniques
        </p>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative">
                  <Image
                    className="h-56 w-full object-cover"
                    src={item.photo}
                    alt={item.name}
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    {item.bestTimeToVisit}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    {item.name}
                  </h2>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-green-500" />
                      <span className="text-sm">{item.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <FaClock className="text-green-500" />
                      <span className="text-sm">{item.visitingHours}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMoneyBillWave className="text-green-500" />
                      <span className="text-sm">
                        Entry Fee: {item.entryFee}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item?.facilities?.slice(0, 3).map((facility, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                      >
                        <MdOutlineMiscellaneousServices />
                        {facility}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${item.id}`}
                    className="flex w-full text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg transition-all duration-300 items-center justify-center gap-2"
                  >
                    Explore Project
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

export default Projects;
