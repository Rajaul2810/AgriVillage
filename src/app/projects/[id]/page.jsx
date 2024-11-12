"use client";
import React, { useState } from "react";
import {
  FiCamera,
  FiInfo,
  FiMapPin,
  FiPackage,
  FiUsers,
} from "react-icons/fi";

import img1 from "../../../../public/assets/girl.jpg";
import Image from "next/image";
import ProjectInfo from "@/app/Components/ProjectInfo";
import ProjectReview from "@/app/Components/ProjectReview";
import ProjectGallery from "@/app/Components/ProjectGallery";
import ProjectPlan from "@/app/Components/ProjectPlan";

const imgs = [
  { id: 1, photo: img1 },
  { id: 2, photo: img1 },
  { id: 3, photo: img1 },
  { id: 4, photo: img1 },
];
const reviews = [
  { id: 1, photo: img1 },
  { id: 2, photo: img1 },
  { id: 3, photo: img1 },
  { id: 4, photo: img1 },
];

const Details = ({ params }) => {
  const [change, setChange] = useState("info");

  return (
    <section className="bg-slate-100 min-h-screen">
      <section className="container mx-auto py-5">
        <div className="text-black">
          <div className="flex justify-center">
            <ul className="menu menu-horizontal bg-white shadow-md rounded-box overflow-hidden">
              {[
                { id: "info", icon: <FiInfo />, label: "Information" },
                { id: "location", icon: <FiMapPin />, label: "Location" },
                { id: "plan", icon: <FiPackage />, label: "Tour Plan" },
                { id: "gallery", icon: <FiCamera />, label: "Gallery" },
                { id: "review", icon: <FiUsers />, label: "Review" },
              ].map((item) => (
                <li key={item.id} onClick={() => setChange(item.id)}>
                  <a
                    className={`flex items-center gap-2 px-4 py-2 transition-colors duration-300 ${
                      change === item.id
                        ? "bg-gradient-to-r from-green-400 to-lime-400 text-white"
                        : "hover:bg-gradient-to-r from-green-100 to-lime-100"
                    }`}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8">
          {change === "info" && <ProjectInfo params={params} />}
          {change === "location" && (
            <div className="flex justify-center">
              <div className="w-full md:w-3/4 lg:w-2/3 mt-5 mb-5">
                <h1 className="text-3xl mb-6 font-bold text-gray-700">
                  Project Location
                </h1>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28677.750421149685!2d90.38114893341546!3d24.755290779365247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564ee2ad25a80f%3A0x62cf0ccd4d0ff620!2sShashi%20Lodge!5e0!3m2!1sen!2sbd!4v1696158911353!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          )}
          {change === "plan" && <ProjectPlan />}
          {change === "gallery" && <ProjectGallery imgs={imgs} />}
          {change === "review" && <ProjectReview reviews={reviews} />}
        </div>
      </section>
    </section>
  );
};

export default Details;
