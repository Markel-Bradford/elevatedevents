"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface PlatinumImages {
  src: string;
}

const silverImgs: PlatinumImages[] = [
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
  { src: "" },
];

const Page: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const toNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % silverImgs.length);
  };

  const toPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + silverImgs.length) % silverImgs.length
    );
  };

  useEffect(() => {
    const interval = setInterval(toNextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="max-w-full xl:min-h-[100vh] md:min-h-[60vh] max-md:min-h-[45vh]  flex justify-center items-center bg-black mx-auto max-lg:px-0 max-lg:flex-col">
        <div className="fixed max-w-[1502px] justify-end w-[100%] lg:w-full">
          <Image
            width={1920}
            height={1080}
            priority
            src=""
            alt="decor by Felicia"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center relative w-full text-white font-kalnia animate-fade">
          <h1 className="text-[9vw] font-bold lg:text-[7vw] text-center">
            Platinum Package
          </h1>
          <h2 className="text-[6vw] lg:text-[4vw] font-semibold text-center">
          Starting at $2500
          </h2>
        </div>
      </div>
      <div className="relative bg-black">
        <h3 className=" relative text-center text-5xl max-lg:text-3xl font-bold pt-12 max-lg:pb-6">
          What&apos;s included
        </h3>
      </div>
      <div
        className="py-24 px-6 h-full bg-black flex items-center justify-center relative 
      max-xl:flex-col-reverse max-lg:pt-0 max-lg:pb-12"
      >
        <div
          className="flex w-1/2 h-[600px] flex-nowrap overflow-hidden translate-x-slides
        max-xl:w-full max-xl:h-1/2"
        >
          {silverImgs.map((item, index) => {
            return (
              <Image
                width={1920}
                height={1080}
                className="object-contain flex-shrink-0 transition-transform duration-500"
                key={index}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                src={`/${item.src}`}
                alt={`Silver event image ${index + 1}`}
                priority
              />
            );
          })}
          <button
            onClick={toPrevSlide}
            className="absolute text-5xl left-0 top-1/2 font-extrabold -translate-y-1/2 opacity-60 bg-black text-gray-200 p-2 hover:text-amber-400 duration-200
          max-lg:text-2xl max-xl:text-7xl max-xl:left-8 max-sm:top-[74%] max-xl:top-[64%]"
          >
            &#10094; {/* Left arrow */}
          </button>
          <button
            onClick={toNextSlide}
            className="absolute text-5xl right-1/2 top-1/2 font-extrabold transform -translate-y-1/2 opacity-60 bg-black text-gray-200 p-2 hover:text-amber-400 duration-200
          max-lg:text-2xl max-xl:text-7xl max-xl:right-8 max-sm:top-[74%] max-xl:top-[64%]"
          >
            &#10095; {/* Right arrow */}
          </button>
        </div>
        <div
          className="w-1/2 max-xl:w-full h-full flex flex-col px-12 max-xl:pt-0 pt-6
        max-xl:pb-12 max-lg:px-2"
        >
          <ul className="px-3 list-image-star leading-10 text-3xl max-md:text-lg">
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Decorations:</span> Luxury tablecloths
              with high-end fabrics, custom-themed decor, and premium
              centerpieces (e.g., elaborate floral arrangements, crystal vases,
              or unique decorative pieces).
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Floral Arrangements:</span> Custom,
              high-end floral arrangements for tables, entryways, and focal
              points, using a mix of premium and exotic flowers.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Lighting:</span> Professional lighting
              design, including uplighting, spotlighting, and custom light
              patterns to create a stunning visual effect.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Additional Decor</span> Chair covers
              and sashes, decorative backdrops, drapery to transform the space,
              and additional decorative elements like chandeliers or hanging
              decor.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Extras:</span> Custom signage for the
              event, decorative props to enhance the theme, and specialty decor
              items like themed table settings or unique centerpieces.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Setup and Teardown:</span> Our full
              team will manage all aspects of setup and teardown, ensuring a
              seamless and stress-free experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
