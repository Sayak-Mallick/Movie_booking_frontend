"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSearch, BiUserCircle, BiChevronDown } from "react-icons/bi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const cities = ["Mumbai", "Delhi", "Bengaluru", "Chennai", "Kolkata"];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/80 border-b border-white/10 shadow-lg">
      {/* FULL WIDTH FLEX CONTAINER */}
      <div className="flex items-center h-16 w-full px-4 sm:px-6 lg:px-8">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="shrink-0">
            <Image
              src={logo}
              alt="MovieTime"
              width={120}
              height={40}
              className="w-auto h-8 md:h-10"
              priority
            />
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center flex-1 max-w-md group">
            <div className="relative w-full">
              <BiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
              <input
                type="text"
                placeholder="Search for movies, theatres..."
                className="flex items-center cursor-text w-[calc(100%-16px)] max-w-137.25 bg-white border rounded py-1 pl-4 px-2 pr-4 border-solid border-[rgb(238,238,238)] focus:ring-red-500/50 focus:border-transparent transition-all"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — NOW TOUCHES SCREEN EDGE */}
        <div className="flex items-center gap-3 md:gap-4 ml-auto">

          {/* CITY DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setCityDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-all"
            >
              <span className="text-sm font-medium">{selectedCity}</span>
              <BiChevronDown
                className={`text-lg transition-transform ${
                  cityDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {cityDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setCityDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setSelectedCity(city);
                        setCityDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${
                        selectedCity === city
                          ? "text-red-500 font-medium"
                          : "text-white/80"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* USER MENU */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 text-white/90 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-all"
            >
              <BiUserCircle className="text-2xl" />
              <BiChevronDown
                className={`text-lg transition-transform ${
                  userDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {userDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setUserDropdownOpen(false)}
                />
                <div className="absolute right-0 mt-2 w-48 bg-gray-900/95 backdrop-blur-lg border border-white/10 rounded-xl shadow-2xl py-2 z-50">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/bookings"
                    className="block px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    My Bookings
                  </Link>
                  <hr className="my-2 border-white/10" />
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-sm text-red-400 hover:bg-white/10 transition-colors"
                    onClick={() => setUserDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH */}
      <div className="md:hidden py-3 border-t border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          <BiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors" />
          <input
            type="text"
            placeholder="Search for movies..."
            className="w-full bg-white border border-white/20 rounded py-2 pl-10 pr-4 text-black placeholder-gray-400 focus:outline-none focus:ring-2  focus:ring-red-500/50 focus:border-transparent transition-all"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;