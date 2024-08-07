"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState("/decor.jpg"); // Initial image
  const [windowWidth, setWindowWidth] = useState<number | null>(null); // Initialize with null


  useEffect(() => {
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Conditional logic based on screen width
        if (windowWidth !== null && windowWidth <= 768) {
          // Mobile Logic
          if (scrollPosition < windowHeight * 1.5) {
            setCurrentImage("/decor.jpg");
          } else if (scrollPosition < windowHeight * 3.5) {
            setCurrentImage("/silverimgs/pinkandgoldtall.jpg");
          } else {
            setCurrentImage("/goldimgs/pastelpinkandblue.jpg");
          }
        } else if (windowWidth !== null && windowWidth <= 1024) {
          // Tablet Logic
          if (scrollPosition < windowHeight * .6) {
            setCurrentImage("/decor.jpg");
          } else if (scrollPosition < windowHeight * 2.2) {
            setCurrentImage("/silverimgs/pinkandgoldtall.jpg");
          } else {
            setCurrentImage("/goldimgs/pastelpinkandblue.jpg");
          }
        } else if (windowWidth !== null) {
          // Desktop Logic
          if (scrollPosition < windowHeight) {
            setCurrentImage("/decor.jpg");
          } else if (scrollPosition < windowHeight * 2.9) {
            setCurrentImage("/silverimgs/pinkandgoldtall.jpg");
          } else {
            setCurrentImage("/goldimgs/pastelpinkandblue.jpg");
          }
        }
      };

      // Add scroll and resize event listeners
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]);

  return (
    <div className="max-w-[1500px] lg:min-h-[85vh] min-h-[60vh] flex justify-center items-center bg-white mx-auto max-lg:px-0 max-lg:flex-col">
      <div className="fixed w-[100%] max-lg:h-full lg:w-full flex items-center justify-center">
        <Image
          width={1920}
          height={1080}
          priority
          src={currentImage}
          alt="Decor by Felicia"
          className="flex w-full max-w-[1502px] mx-auto"
        />
      </div>
      {/* <div className="leading-10 relative w-full text-white font-kalnia animate-fade">
        <h1 className="text-[11vw] mb-[5%] font-bold lg:mb-[5%] lg:text-[7vw] text-center">
          Elevated Events
        </h1>
        <p className="text-[7vw] font-semibold lg:text-[4vw] text-center">
          By Felicia
        </p>
      </div> */}
      
    </div>
  );
};

export default Hero;
