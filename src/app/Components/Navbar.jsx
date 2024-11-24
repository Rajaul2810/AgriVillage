"use client";
import React, { useContext, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { CiHome, CiLogout, CiUser } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/girl2.jpg";
import log from "../../../public/logo.png";
import { StoreContext } from "../context";
import { useAuth } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  const { userId } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const { cartData } = useContext(StoreContext);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={log}
              alt="logo"
              width={70}
              height={70}
              className="transition-transform hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" text="Home" />
            <NavLink href="/projects" text="Projects" />
            <NavLink href="/products" text="Products" />
            <NavLink href="/events" text="Events" />
            <NavLink href="/training" text="Training" />
            <NavLink href="/contact" text="Contact" />
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <FiShoppingBag className="h-6 w-6 text-gray-700" />
                  {cartData.length > 0 && (
                    <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-emerald-500 text-white text-xs flex items-center justify-center">
                      {cartData.length}
                    </span>
                  )}
                </div>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] mt-3 w-60 p-4 bg-white rounded-lg shadow-xl border border-gray-100"
              >
                <div className="text-center">
                  <p className="font-medium text-gray-800">
                    {cartData.length} Items
                  </p>
                  <Link
                    href="/cartPage"
                    className="mt-3 block w-full py-2 px-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300"
                  >
                    View Cart
                  </Link>
                </div>
              </div>
            </div>

            {/* User Dropdown */}
            {userId ? (
              <UserButton>
                <UserButton.MenuItems>
                  <UserButton.Link
                    label="Dashboard"
                    labelIcon={<CiHome />}
                    href="/dashboard"
                  />
                </UserButton.MenuItems>
              </UserButton>
            ) : (
              <Link href="/sign-in">Login</Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="pt-4 pb-3 space-y-3">
            <MobileNavLink href="/" text="Home" />
            <MobileNavLink href="/projects" text="Projects" />
            <MobileNavLink href="/products" text="Products" />
            <MobileNavLink href="/events" text="Events" />
            <MobileNavLink href="/training" text="Training" />
            <MobileNavLink href="/contact" text="Contact" />
          </div>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, text }) => (
  <Link
    href={href}
    className="relative text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 before:content-[''] before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-emerald-500 before:transition-all hover:before:w-full"
  >
    {text}
  </Link>
);

const MobileNavLink = ({ href, text }) => (
  <Link
    href={href}
    className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition-colors duration-200"
  >
    {text}
  </Link>
);
