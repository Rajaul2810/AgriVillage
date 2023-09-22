"use client";
import Link from "next/link";
import { FiCamera, FiInfo, FiMapPin, FiPackage, FiUsers } from "react-icons/fi";

export default function DetailsLayout({ children }) {
  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
        <p className=" text-white text-2xl font-semibold pt-5 blur-none">
          Dashboard
        </p>
      </div>
      <div className="">
        <div className=" flex justify-center">
          <ul className="menu  menu-vertical lg:menu-horizontal bg-base-200 shadow-md rounded-box">
            <li >
              <a className=" flex"> <FiInfo/>Information</a>
            </li>
            <li >
              <a className=" flex"> <FiMapPin/>Location</a>
            </li>
            <li >
              <a className=" flex"> <FiPackage/>Tour Plan</a>
            </li>
            <li >
              <a className=" flex"> <FiCamera/>Gallery</a>
            </li>
            <li className="">
              <a className=" flex"> <FiUsers/>Review</a>
            </li>
          </ul>
        </div>
        <main className=" ml-10 w-full"> {children}</main>
      </div>
    </section>
  );
}
