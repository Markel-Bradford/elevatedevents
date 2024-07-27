"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const imageUrl = "/decor.jpg";

  return (
    <div className="max-w-full lg:min-h-[100vh] max-lg:min-h-[60vh] flex justify-center items-center bg-white mx-auto max-lg:px-0 max-lg:flex-col">
      <div className="fixed justify-end w-[100%] lg:w-full">
        <Image
          width={1920}
          height={1080}
          priority
          src={imageUrl}
          alt="Decor by Felicia"
          className="object-cover flex"
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
