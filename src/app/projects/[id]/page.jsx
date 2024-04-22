"use client";
import React, { useState } from "react";
import {
  FiCamera,
  FiInfo,
  FiMapPin,
  FiPackage,
  FiUsers,
  FiStar,
  FiArrowDownRight,
  FiArrowUpRight,
} from "react-icons/fi";

import img1 from "../../../../public/assets/girl.jpg";
import Image from "next/image";
import ProjectInfo from "@/app/Components/ProjectInfo";
import ProjectReview from "@/app/Components/ProjectReview";
import ProjectGallery from "@/app/Components/ProjectGallery";
import ProjectPlan from "@/app/Components/ProjectPlan";

const imgs = [
  {
    id: 1,
    photo: img1,
  },
  {
    id: 2,
    photo: img1,
  },
  {
    id: 3,
    photo: img1,
  },
  {
    id: 4,
    photo: img1,
  },
];
const reviews = [
  {
    id: 1,
    photo: img1,
  },
  {
    id: 2,
    photo: img1,
  },
  {
    id: 3,
    photo: img1,
  },
  {
    id: 4,
    photo: img1,
  },
];

const Details = ({ params }) => {
 
  //console.log(params);
  const [change, setChange] = useState("info");

  return (
    <section className=" bg-slate-100">
      <section>
        <div className="page_banner h-56 relative grid place-content-end bg-cover bg-center bg-no-repeat">
          <p className=" text-white text-2xl font-semibold pt-5 blur-none">
            Project Details
          </p>
        </div>
        <div className=" text-black">
          <div className=" flex justify-center">
            <ul className=" menu menu-horizontal bg-white shadow-md rounded-box">
              <li onClick={() => setChange("info")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 ${
                    change == "info"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  <FiInfo />
                  Information
                </a>
              </li>
              <li onClick={() => setChange("location")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 ${
                    change == "location"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  <FiMapPin />
                  Location
                </a>
              </li>
              <li onClick={() => setChange("plan")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 ${
                    change == "plan"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  <FiPackage />
                  Tour Plan
                </a>
              </li>
              <li onClick={() => setChange("gallery")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 ${
                    change == "gallery"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  <FiCamera />
                  Gallery
                </a>
              </li>
              <li onClick={() => setChange("review")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 ${
                    change == "review"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  <FiUsers />
                  Review
                </a>
              </li>
            </ul>
          </div>
        </div>
        {change == "info" && <ProjectInfo params = {params} />}
        {change == "location" && (
          <div className=" flex justify-center">
            <div className=" w-11/12 mt-5 mb-5">
              <h1 className=" text-4xl mb-10 font-bold text-gray-600">
                Project Location
              </h1>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28677.750421149685!2d90.38114893341546!3d24.755290779365247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564ee2ad25a80f%3A0x62cf0ccd4d0ff620!2sShashi%20Lodge!5e0!3m2!1sen!2sbd!4v1696158911353!5m2!1sen!2sbd"
                width="100%"
                height="450"
                allowFullScreen="yes"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        )}
        {change == "plan" && (
          <ProjectPlan/>
        )}

        {/* gallery */}

        {change == "gallery" && (
          <ProjectGallery imgs={imgs}/>
        )}
        {change == "review" && (
          <ProjectReview reviews = {reviews}/>
        )}
      </section>
    </section>
  );
};



export default Details;
