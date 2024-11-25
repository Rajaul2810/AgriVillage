"use client"
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaPhoneAlt,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { projects } from "../libs/Data.js";
import projectIcon from "../../../public/assets/head/projectIcon.png";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";

const ProjectCaro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Responsive slides per view
  const getSlideCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  // Update slides per view on window resize
  useEffect(() => {
    const handleResize = () => {
      const newSlideCount = getSlideCount();
      setSlidesPerView(newSlideCount);
      // Reset current slide if it would cause empty view
      const maxSlide = Math.ceil(projects.length / newSlideCount) - 1;
      if (currentSlide > maxSlide) {
        setCurrentSlide(maxSlide);
      }
    };

    // Set initial value
    setSlidesPerView(getSlideCount());

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]); // Added currentSlide as dependency

  const totalSlides = Math.ceil(projects.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleProjects = projects.slice(
    currentSlide * slidesPerView,
    (currentSlide + 1) * slidesPerView
  );

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
          Our <span className="text-green-600 bg-green-100 px-2 rounded">Projects</span>
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto px-4 mb-10">
          Discover our innovative agricultural projects that combine tradition
          with modern farming techniques
        </p>

        <div className="container w-11/12 mx-auto px-4 lg:px-8 relative">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
          >
            <FaChevronRight size={20} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative">
                  <Image
                    className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
                    src={item.photo}
                    alt={item.name}
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm shadow-md">
                    {item?.season}
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-green-600 transition-colors">
                    {item.name}
                  </h2>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                      <FaMapMarkerAlt className="text-green-500" />
                      <span className="text-sm">{item?.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                      <FaClock className="text-green-500" />
                      <span className="text-sm">{item?.time}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 hover:text-green-500 transition-colors">
                      <FaMoneyBillWave className="text-green-500" />
                      <span className="text-sm">
                        Entry Fee: {item?.entryFee}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {item?.facilities?.slice(0, 3).map((facility, index) => (
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
                    href={`/projects/${item.id}`}
                    className="flex w-full text-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg transition-all duration-300 items-center justify-center gap-2 transform hover:scale-105"
                  >
                    Explore Project
                    <BsArrowRightCircle className="animate-pulse" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentSlide === index ? "bg-green-500 w-6" : "bg-green-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCaro;
