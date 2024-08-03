"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const [currentImage, setCurrentImage] = useState("/decor.jpg"); // Initial image

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition < windowHeight) {
        setCurrentImage("/decor.jpg")
      } else if (scrollPosition < windowHeight * 2.9) {
        setCurrentImage("/silverimgs/pinkandgold.JPG")
      } else {
        setCurrentImage("/silverimgs/constructionbday.JPG")
      };
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  return (
    <div className="max-w-[1500px] lg:min-h-[100vh] min-h-[60vh] flex justify-center items-center bg-white mx-auto max-lg:px-0 max-lg:flex-col">
      <div className="fixed justify-end w-[100%] lg:w-full">
        <Image
          width={1920}
          height={1080}
          priority
          src={currentImage}
          alt="Decor by Felicia"
          className="object-cover flex w-full max-w-[1500px] mx-auto"
        />
      </div>
      <div className="leading-10 relative w-full text-white font-kalnia animate-fade">
        <h1 className="text-[11vw] mb-[5%] font-bold lg:mb-[5%] lg:text-[7vw] text-center">
          Elevated Events
        </h1>
        <p className="text-[7vw] font-semibold lg:text-[4vw] text-center">
          By Felicia
        </p>
      </div>
      
    </div>
  );
};

export default Hero;
