"use client";
import React, { useState } from "react";
import {
  FiCamera,
  FiInfo,
  FiMapPin,
  FiPackage,
  FiUsers,
  FiStar,
} from "react-icons/fi";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import img1 from "../../../../public/assets/girl.jpg";
import Image from "next/image";

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
  console.log(params);
  const [change, setChange] = useState("info");
  return (
    <section className=" bg-slate-100">
      <section>
        <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
          <p className=" text-white text-2xl font-semibold pt-5 blur-none">
            Project Details
          </p>
        </div>
        <div className="">
          <div className=" flex justify-center">
            <ul className=" menu menu-horizontal lg:menu-horizontal bg-white shadow-md rounded-box">
              <li onClick={() => setChange("info")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 m-1 ${
                    change == "info"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  {" "}
                  <FiInfo />
                  Information
                </a>
              </li>
              <li onClick={() => setChange("location")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 m-1 ${
                    change == "location"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  {" "}
                  <FiMapPin />
                  Location
                </a>
              </li>
              <li onClick={() => setChange("plan")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 m-1 ${
                    change == "plan"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  {" "}
                  <FiPackage />
                  Tour Plan
                </a>
              </li>
              <li onClick={() => setChange("gallery")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 m-1 ${
                    change == "gallery"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  {" "}
                  <FiCamera />
                  Gallery
                </a>
              </li>
              <li onClick={() => setChange("review")}>
                <a
                  className={` flex hover:bg-gradient-to-r from-green-300 to-lime-300 m-1 ${
                    change == "review"
                      ? "bg-gradient-to-r from-green-300 to-lime-300"
                      : ""
                  }`}
                >
                  {" "}
                  <FiUsers />
                  Review
                </a>
              </li>
            </ul>
          </div>
        </div>
        {change == "info" && <h1>Info</h1>}
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
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "rgb(33, 150, 200)", color: "#fff" }}
              // contentArrowStyle={{
              //   borderRight: "7px solid  rgb(33, 150, 200)",
              // }}
              // dateClassName =""
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FiCamera />}
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<FiPackage />}
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        )}

        {/* gallery */}

        {change == "gallery" && (
          <div className=" flex justify-center mt-5 pb-10">
            <div className=" w-11/12 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {imgs.map((item) => (
                <div key={item.id} className="">
                  <Image
                    src={item.photo}
                    alt=""
                    className=" rounded-sm shadow-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        {change == "review" && (
          <div className=" flex justify-center pt-10 pb-10">
            <div className=" w-11/12 gap-5 grid grid-cols-1 md:grid-cols-3">
              <div className=" gap-3 grid grid-cols-1 md:grid-cols-2 col-span-2 ">
                {reviews.map((review) => (
                  <div key={review.id} className=" shadow-sm rounded-md p-4 bg-white">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas reiciendis aperiam expedita doloremque perferendis
                      incidunt distinctio neque, corporis non iusto?
                    </p>
                    <div className=" flex justify-around items-center pt-3 pb-3">
                      <Image
                        src={review.photo}
                        alt=""
                        className=" rounded-full shadow-sm h-16 w-16"
                      />
                      <div className="">
                        <h1 className=" text-lg font-bold">Rajaul Hira</h1>
                        <p className=" text-sm text-gray-700">hira@gmail.com</p>
                        <p className=" text-yellow-500 flex">
                          <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" shadow-sm p-3 h-fit bg-white rounded-md">
                <div>
                  <p>Name</p>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div>
                  <p>Email</p>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <div>
                  <p>Message</p>
                  <textarea
                    className="textarea textarea-primary w-full max-w-xs"
                    placeholder="message"
                  ></textarea>
                </div>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <button className="btn bg-yellow-300 block mt-5">Submit</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default Details;
