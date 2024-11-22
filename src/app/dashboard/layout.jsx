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
  FiSettings,
  FiShoppingCart,
  FiHeart,
  FiMessageSquare,
  FiTruck,
  FiDollarSign,
  FiSearch,
  FiBell,
  FiChevronLeft,
  FiChevronRight
} from "react-icons/fi";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);

  const dashboardUserRoutes = [
    {
      title: "Profile",
      route: "/dashboard/profile", 
      icon: <FiUser className="text-blue-500"/>,
    },
    {
      title: "Orders",
      route: "/dashboard/orderList",
      icon: <FiShoppingCart className="text-green-500"/>,
    },
    {
      title: "Wishlist",
      route: "/dashboard/wishlist",
      icon: <FiHeart className="text-red-500"/>,
    },
    {
      title: "Messages",
      route: "/dashboard/messages",
      icon: <FiMessageSquare className="text-purple-500"/>,
    },
    {
      title: "Order History",
      route: "/dashboard/orderHistory",
      icon: <FiTruck className="text-orange-500"/>,
    },
    {
      title: "Transactions",
      route: "/dashboard/transactions",
      icon: <FiDollarSign className="text-emerald-500"/>,
    },
    {
      title: "Settings",
      route: "/dashboard/settings",
      icon: <FiSettings className="text-gray-500"/>,
    },
    {
      title: "Security",
      route: "/dashboard/password",
      icon: <FiLock className="text-amber-500"/>,
    },
  ];

  const dashboardFormOwnerRoutes = [
    {
      title: "Profile",
      route: "/dashboard/profile",
      icon: <FiUser className="text-blue-500"/>,
    },
    {
      title: "Products",
      route: "/dashboard/productList",
      icon: <FiList className="text-green-500"/>,
    },
    {
      title: "Orders",
      route: "/dashboard/orderList", 
      icon: <FiShoppingCart className="text-orange-500"/>,
    },
    {
      title: "Analytics",
      route: "/dashboard/analytics",
      icon: <FiInfo className="text-purple-500"/>,
    },
    {
      title: "Messages",
      route: "/dashboard/messages",
      icon: <FiMessageSquare className="text-red-500"/>,
    },
    {
      title: "Settings",
      route: "/dashboard/settings",
      icon: <FiSettings className="text-gray-500"/>,
    },
    {
      title: "Security",
      route: "/dashboard/password",
      icon: <FiLock className="text-amber-500"/>,
    },
  ];

  return (
    <section className="min-h-screen">
      {/* <header className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-green-600">AgriVillage</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <div className="flex items-center gap-3">
              <button className="p-2 hover:bg-gray-50 rounded-lg relative">
                <FiBell className="text-gray-600" size={20} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <FiUser className="text-green-600" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-medium text-gray-700">John Doe</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header> */}
      <div className="flex bg-gray-50">
        <div className={`${open ? ' w-52' : 'w-20'} transition-all duration-300 bg-white border-r border-gray-200 min-h-screen shadow-lg`}>
          <button 
            onClick={() => setOpen(!open)}
            className="bg-gray-100 hover:bg-gray-200 transition-colors p-3 rounded-lg mx-auto my-4 block hover:text-green-600"
          >
            {open ? (
              <FiChevronLeft size={20} className="transition-transform duration-300"/>
            ) : (
              <FiChevronRight size={20} className="transition-transform duration-300"/>
            )}
          </button>
          <nav className="px-2">
            {dashboardUserRoutes.map((item, idx) => (
              <Link 
                key={idx} 
                href={item.route}
                className={`
                  flex items-center gap-3 p-3 my-1 rounded-lg
                  hover:bg-gradient-to-r from-green-50 to-emerald-50
                  hover:text-green-600 transition-all duration-200
                  ${!open && 'justify-center tooltip tooltip-right'} 
                `}
                data-tip={!open ? item.title : ''}
              >
                {item.icon}
                {open && <span className="font-medium">{item.title}</span>}
              </Link>
            ))}
          </nav>
        </div>
        <main className="flex-1 p-6 overflow-x-auto bg-gray-50">
          {children}
        </main>
      </div>
    </section>
  );
}
