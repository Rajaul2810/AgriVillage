"use client"
import Link from "next/link";
import { useState } from "react";
import {
  FiBookmark,
  FiGrid,
  FiInfo,
  FiList,
  FiLock,
  FiUser,
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false)
  const dashboardUserRoutes = [
    {
      title: "Profile",
      route: "/dashboard/profile",
      icon: <FiUser/>,
    },
    {
      title: "History",
      route: "/dashboard/history",
      icon: <FiInfo/>,
    },
    {
      title: "Order List",
      route: "/dashboard/orderList",
      icon: <FiList/>,
    },
    {
      title: "Show Password",
      route: "/dashboard/password",
      icon: <FiLock/>,
    },
  ];
  const dashboardFormOwnerRoutes = [
    {
      title: "Profile",
      route: "/dashboard/profile",
      icon: <FiUser/>,
    },
    {
      title: "History",
      route: "/dashboard/history",
      icon: <FiInfo/>,
    },
    {
      title: "Order List",
      route: "/dashboard/orderList",
      icon: <FiList/>,
    },
    {
      title: "Show Password",
      route: "/dashboard/password",
      icon: <FiLock/>,
    },
  ];

  return (
    <section>
      <div className="page_banner h-40 relative grid place-content-end bg-cover bg-center bg-no-repeat">
        <p className=" text-white text-2xl font-semibold pt-5 blur-none">
          Dashboard
        </p>
      </div>
      <div className=" flex bg-slate-100">
        <div className={`${open? 'w-60': 'w-24'}  bg-white border-r-[1px] rounded-md text-black shadow-lg `} >
           <div onClick={()=>setOpen(!open)} className=" bg-slate-200 shadow-md rounded-md p-2 w-fit w- h-fit my-5 m-auto hover:text-green-500 cursor-pointer"><p><FiGrid/></p></div>
          <ul className="menu w-full rounded-box pb-60 grid place-content-center">
            {dashboardUserRoutes.map((item, idx) => (
              <li key={idx} className=" border w-full rounded-md shadow-md mt-2 mb-2 hover:bg-gradient-to-r from-green-300 to-lime-300">
                <Link href={item.route} className={`${!open && 'tooltip tooltip-right'}`} data-tip={item.title}>
                   {item.icon}
                   {open && <span>{item.title}</span>} 
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <main className=" w-full my-5 mx-5 overflow-x-scroll bg-slate-100">
          {children}
        </main>
      </div>
    </section>
  );
}
