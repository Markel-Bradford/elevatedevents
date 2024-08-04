"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Landing = () => {
  const [click, setClick] =
    useState(false); /*creates opposite state to open and close menu on click*/
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setClick(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 800);
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        click
          ? "animate-fadeout"
          : "fixed bg-black w-full left-0 h-full z-[1001] top-0 cursor-pointer"
      }`}>
      <Link href="/home">
        <video
          src="/ElevatedEvents.mp4"
          playsInline
          autoPlay
          loop
          muted
          preload="auto"
          className="absolute top-24 left-0 right-0 z-[1001] object-contain w-full h-4/5 my-0 mx-auto max-lg:hidden"
        />
        <h1 className="absolute bottom-16 left-0 right-0 text-2xl text-center text-white max-lg:hidden z-[1001] animate-pulse">
          Click to Enter
        </h1>
        <video
          src="/ElevatedMobile.mp4"
          playsInline
          autoPlay
          loop
          muted
          preload="auto"
          className="flex items-center justify-center z-[1001] object-contain w-full h-[100vh] mx-auto lg:hidden"
        />
        <h1 className="absolute bottom-12 left-0 right-0 text-2xl text-center text-white lg:hidden z-[1001] animate-pulse">
          Tap to Enter
        </h1>
      </Link>
    </div>
  );
};

export default Landing;
