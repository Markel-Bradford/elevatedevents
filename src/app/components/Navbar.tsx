"use client"
import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Toggle dropdown menu visibility
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-black h-24 flex justify-center items-center text-xl sticky top-0 z-[1000] shadow-[0_4px_8px_rgba(255,255,255,0.2)]">
      <div className="flex justify-center items-center h-20 max-w-[1500px] w-4/5 max-lg:justify-between font-kalnia">
        <Link
          href="/home"
          className="flex justify-self-start items-center cursor-pointer no-underline"
        >
          <Image
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
            src="/logo.png"
            priority
            alt="Elevated Events Logo"
          />
        </Link>
        <div
          className="hidden max-lg:contents max-lg:absolute max-lg:right-5 text-3xl cursor-pointer"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
        <ul
          className={`${
            click ? "left-0 bg-black z-105" : "left-[-110%]"
          } inline-block w-screen h-screen absolute top-[95px] opacity-100 transition-all duration-500 ease lg:flex lg:static lg:w-auto lg:h-auto lg:opacity-100 lg:bg-transparent lg:shadow-none lg:ml-auto`}
        >
          <li className="h-24 max-lg:h-16">
            <Link
              href="/home"
              className="max-lg:flex justify-center max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-amber-400 flex items-center no-underline px-4 h-full hover:border-b-amber-400 hover:border-b-solid hover:border-b-[4px] transition-all"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>

          <li className="h-24 max-lg:h-16">
            <Link
              href="/about"
              className="max-lg:flex justify-center max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-amber-400 flex items-center no-underline px-4 h-full hover:border-b-amber-400 hover:border-b-solid hover:border-b-[4px] transition-all"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li className="h-24 max-lg:h-16">
            <Link
              href="/contact"
              className="max-lg:flex justify-center max-lg:w-full max-lg:text-center max-lg:p-8 max-lg:hover:bg-black max-lg:hover:text-white text-amber-400 flex items-center no-underline px-4 h-full hover:border-b-amber-400 hover:border-b-solid hover:border-b-[4px] transition-all"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          {/* Dropdown menu for packages */}
          <li
            className="relative h-24 max-lg:h-16 text-center text-amber-400 cursor-pointer flex items-center justify-center no-underline px-4 max-lg:hover:text-white hover:border-b-amber-400 hover:border-b-solid hover:border-b-[4px] transition-all"
            onClick={toggleDropdown}
          >
            Packages
            <ul
              className={`absolute left-0 lg:-left-8 w-48  max-lg:w-full top-full bg-black shadow-lg transition-opacity duration-300 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 hidden"
              }`}
              style={{ zIndex: 1000 }}
            >
              <li className="bg-zinc-950 text-lg hover:border-b-solid hover:border-b-2 hover:border-b-amber-400 h-16 flex items-center justify-center hover:text-white ">
                <Link
                  href="/silver"
                  className="block p-2 text-amber-400"
                  onClick={closeMobileMenu}
                >
                  Silver Event
                </Link>
              </li>
              <li className="bg-zinc-950 text-lg hover:border-b-solid hover:border-b-2 hover:border-b-amber-400 h-16 flex items-center justify-center hover:text-white ">
                <Link
                  href="/gold"
                  className="block p-2 text-amber-400"
                  onClick={closeMobileMenu}
                >
                  Gold Event
                </Link>
              </li>
              <li className="bg-zinc-950 text-lg hover:border-b-solid hover:border-b-2 hover:border-b-amber-400 h-16 flex items-center justify-center hover:text-white ">
                <Link
                  href="/platinum"
                  className="block p-2 text-amber-400"
                  onClick={closeMobileMenu}
                >
                  Platinum Event
                </Link>
              </li>
              <li className="bg-zinc-950 text-lg hover:border-b-solid hover:border-b-2 hover:border-b-amber-400 h-16 flex items-center justify-center hover:text-white ">
                <Link
                  href="/silverballoon"
                  className="block p-2 text-amber-400"
                  onClick={closeMobileMenu}
                >
                  Silver Balloons
                </Link>
              </li>
              <li className="bg-zinc-950 text-lg hover:border-b-solid hover:border-b-2 hover:border-b-amber-400 h-16 flex items-center justify-center hover:text-white ">
                <Link
                  href="/goldballoon"
                  className="block p-2 text-amber-400"
                  onClick={closeMobileMenu}
                >
                  Gold Balloons
                </Link>
              </li>
              <li className="bg-zinc-950 text-lg hover:border-b-solid hover:border-b-2 hover:border-b-amber-400 h-16 flex items-center justify-center hover:text-white ">
                <Link
                  href="/platinumballoon"
                  className="block p-2 text-amber-400"
                  onClick={closeMobileMenu}
                >
                  Platinum Balloons
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
