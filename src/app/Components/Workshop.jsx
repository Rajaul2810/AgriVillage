"use client";
import React, { useState } from "react";
import {
  FiArrowUpRight,
  FiMapPin,
  FiClock,
  FiCalendar,
  FiUsers,
} from "react-icons/fi";
import {
  FaChalkboardTeacher,
  FaLeaf,
  FaSeedling,
  FaSun,
  FaUsers,
  FaWater,
  FaTractor,
  FaRecycle,
} from "react-icons/fa";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Workshop = () => {
  const workshops = [
    {
      id: 1,
      title: "Organic Farming Basics",
      description:
        "Learn fundamental techniques of organic farming and sustainable agriculture practices",
      date: "2024-02-15",
      duration: "2 days",
      icon: <FaSeedling className="text-4xl text-green-600" />,
      seats: 20,
      price: 150,
      location: "Online via Zoom",
      type: "Online",
    },
    {
      id: 2,
      title: "Solar Energy for Agriculture",
      description:
        "Explore how to integrate solar power systems in farming operations",
      date: "2024-02-20",
      duration: "3 days",
      icon: <FaSun className="text-4xl text-yellow-500" />,
      seats: 15,
      price: 200,
      location: "Green Tech Center, New York",
      type: "Offline",
    },
    
    {
      id: 4,
      title: "Community Farming Workshop",
      description:
        "Learn collaborative farming techniques and community engagement",
      date: "2024-03-01",
      duration: "1 day",
      icon: <FaUsers className="text-4xl text-blue-500" />,
      seats: 30,
      price: 100,
      location: "Community Garden, Chicago",
      type: "Offline",
    },
    {
      id: 6,
      title: "Irrigation Systems Mastery",
      description:
        "Advanced techniques in water management and irrigation systems",
      date: "2024-03-10",
      duration: "3 days",
      icon: <FaWater className="text-4xl text-blue-600" />,
      seats: 18,
      price: 225,
      location: "Agricultural Institute, Dallas",
      type: "Offline",
    },
    {
      id: 7,
      title: "Farm Equipment Operation",
      description:
        "Hands-on training with modern farming equipment and machinery",
      date: "2024-03-15",
      duration: "5 days",
      icon: <FaTractor className="text-4xl text-red-500" />,
      seats: 12,
      price: 300,
      location: "Farm Tech Center, Houston",
      type: "Offline",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container md:w-10/12 mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Upcoming Workshops
            </h2>
            <p className="text-gray-600 mt-2">
              Join our expert-led training sessions
            </p>
          </div>
          <Link
            href="/training"
            className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
          >
            See More
            <FiArrowUpRight />
          </Link>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="relative"
        >
          <div className="swiper-button-prev !text-white !bg-green-600 !w-10 !h-10 !rounded-full after:!text-lg"></div>
          <div className="swiper-button-next !text-white !bg-green-600 !w-10 !h-10 !rounded-full after:!text-lg"></div>
          {workshops.map((workshop) => (
            <SwiperSlide key={workshop.id}>
              <div className="bg-white rounded-lg shadow-md p-6 h-full mb-10">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex justify-center">{workshop.icon}</div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      workshop.type === "Online"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {workshop.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {workshop.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {workshop.description}
                </p>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiCalendar className="text-green-500" />
                    <span>Date: {workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiClock className="text-green-500" />
                    <span>Duration: {workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiUsers className="text-green-500" />
                    <span>Available Seats: {workshop.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FiMapPin className="text-green-500" />
                    <span>{workshop.location}</span>
                  </div>
                  <p className="text-lg font-bold text-green-600 mt-2">
                    ${workshop.price}
                  </p>
                  <Link
                    href={`/training`}
                    className="mt-4 w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-2 px-4 rounded-md hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Learn More
                    <FiArrowUpRight />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Workshop;
