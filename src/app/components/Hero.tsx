"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  // const [currentImage, setCurrentImage] = useState("/platimgs/orangetable.jpg"); // Initial image
  // const [windowWidth, setWindowWidth] = useState<number | null>(null); // Initialize with null


  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     // Set initial window width
  //     setWindowWidth(window.innerWidth);

  //     const handleResize = () => {
  //       setWindowWidth(window.innerWidth);
  //     };

  //     const handleScroll = () => {
  //       const scrollPosition = window.scrollY;
  //       const windowHeight = window.innerHeight;

  //       // Conditional logic based on screen width
  //       if (windowWidth !== null && windowWidth <= 768) {
  //         // Mobile Logic
  //         if (scrollPosition < windowHeight * 1.5) {
  //           setCurrentImage("/platimgs/orangetable.jpg");
  //         } else if (scrollPosition < windowHeight * 3.5) {
  //           setCurrentImage("/platimgs/blackplates.jpg");
  //         } else {
  //           setCurrentImage("/silverimgs/greenballooncenter.jpg");
  //         }
  //       } else if (windowWidth !== null && windowWidth <= 1024) {
  //         // Tablet Logic
  //         if (scrollPosition < windowHeight * .6) {
  //           setCurrentImage("/platimgs/orangetable.jpg");
  //         } else if (scrollPosition < windowHeight * 2.2) {
  //           setCurrentImage("/platimgs/blackplates.jpg");
  //         } else {
  //           setCurrentImage("/silverimgs/greenballooncenter.jpg");
  //         }
  //       } else if (windowWidth !== null) {
  //         // Desktop Logic
  //         if (scrollPosition < windowHeight * .9) {
  //           setCurrentImage("/platimgs/orangetable.jpg");
  //         } else if (scrollPosition < windowHeight * 2.8) {
  //           setCurrentImage("/platimgs/blackplates.jpg");
  //         } else {
  //           setCurrentImage("/silverimgs/greenballooncenter.jpg");
  //         }
  //       }
  //     };

  //     // Add scroll and resize event listeners
  //     window.addEventListener("scroll", handleScroll);
  //     window.addEventListener("resize", handleResize);

  //     // Cleanup on unmount
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }
  // }, [windowWidth]);

  return (
    <div className="max-w-[1500px] lg:min-h-[75vh]  flex justify-center items-center mx-auto max-lg:px-0 max-lg:flex-col">
      <div className="w-[100%] max-lg:h-full lg:w-full flex items-center justify-center">
        <Image
          width={1920}
          height={1080}
          priority
          src="/platimgs/blackplates.jpg"
          alt="Decor by Felicia"
          className="flex w-1/3 mx-auto border-8"
        />
        <Image
          width={1920}
          height={1080}
          priority
          src="/platimgs/orangetable.jpg"
          alt="Decor by Felicia"
          className="flex w-1/3 mx-auto border-8"
        />
        <Image
          width={1920}
          height={1080}
          priority
          src="/silverimgs/greenballooncenter.jpg"
          alt="Decor by Felicia"
          className="flex w-1/3 mx-auto border-8"
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
