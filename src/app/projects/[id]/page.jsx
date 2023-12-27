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

import img1 from "../../../../public/assets/girl.jpg";
import Image from "next/image";
import { projects } from "../../projects/page.jsx";

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
        <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
          <p className=" text-white text-2xl font-semibold pt-5 blur-none">
            Project Details
          </p>
        </div>
        <div className="">
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
        {change == "info" && information(params)}
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
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start timeline-box rounded-md">
                First Macintosh computer
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">iMac</div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr className="bg-primary" />
              <div className="timeline-start timeline-box">iPod</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box">iPhone</div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start timeline-box">Apple Watch</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
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
                  <div
                    key={review.id}
                    className=" shadow-sm rounded-md p-3 bg-white h-fit"
                  >
                    <p className=" text-xs text-justify pb-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quas reiciendis aperiam expedita doloremque perferendis
                      incidunt distinctio neque, corporis non iusto?
                    </p>
                    <hr />
                    <div className=" flex justify-between items-center">
                      <Image
                        src={review.photo}
                        alt=""
                        className=" rounded-full shadow-sm h-12 w-12"
                      />
                      <div className="">
                        <h1 className=" text-md font-bold">Rajaul Hira</h1>
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

const information = (params) => {
  const project = projects.find((pd) => pd.id == params.id);
  //console.log(project)
  return (
    <div className=" p-5">
      <div className=" flex justify-center">
        <div className=" w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-5">
          <Image src={project.photo} alt="" className=" h-96 w-full" />
          <div>
            <h1 className=" text-lg font-bold">Project Name: {project.name}</h1>
            <p>Location: {project.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
