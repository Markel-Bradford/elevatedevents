"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SilverImages {
  src: string;
}

const silverImgs: SilverImages[] = [
  { src: "silverimgs/outdoordecor.JPG" },
  { src: "silverimgs/outdoorpink.JPG" },
  { src: "silverimgs/pinkandgold.JPG" },
  { src: "silverimgs/bearcenter.JPG" },
  { src: "silverimgs/greenballooncenter.JPG" },
  { src: "silverimgs/birthday.JPG" },
  { src: "silverimgs/constructionbday.JPG" },
  { src: "silverimgs/halloween.JPG" },
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
  }, []);

  return (
    <div>
      <div className="max-w-full lg:min-h-[100vh] max-lg:min-h-[45vh] flex justify-center items-center bg-white mx-auto max-lg:px-0 max-lg:flex-col">
        <div className="fixed justify-end w-[100%] lg:w-full">
          <Image
            width={1920}
            height={1080}
            priority
            src="/silverimgs/pinkandgold.JPG"
            alt="Pink and gold decor by Felicia"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex justify-center items-center relative w-full text-white font-kalnia animate-fade">
          <h1 className="text-[11vw] font-bold lg:text-[7vw] text-center">
            Silver Package
          </h1>
        </div>
      </div>
      <div className="relative bg-black">
      <h3 className=" relative text-center text-5xl max-lg:text-3xl font-bold pt-12 max-lg:pb-6">
            What&apos;s included
          </h3>
        </div>
      <div className="py-24 px-6 h-full bg-black flex items-center justify-center relative 
      max-lg:flex-col-reverse max-lg:pt-0 max-lg:pb-12">
        <div
          className="flex w-1/2 h-[600px] flex-nowrap overflow-hidden translate-x-slides
        max-lg:w-full max-lg:h-full">
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
            className="absolute text-5xl left-0 top-[40%] transform translate-y-1/2 bg-opacity-50 text-white p-2 hover:text-amber-400 duration-200
          max-lg:text-3xl max-lg:left-6 max-lg:top-[62.5%]">
            &#10094; {/* Left arrow */}
          </button>
          <button
            onClick={toNextSlide}
            className="absolute text-5xl right-1/2 top-[40%] transform translate-y-1/2 bg-opacity-50 text-white p-2 hover:text-amber-400 duration-200
          max-lg:text-3xl max-lg:right-6 max-lg:top-[62.5%]">
            &#10095; {/* Right arrow */}
          </button>
        </div>
        <div className="w-1/2 max-lg:w-full h-full flex flex-col px-12 max-lg:pt-0 pt-6
        max-lg:pb-12 max-lg:px-0">
          <ul className="leading-10 list-none text-3xl max-lg:text-lg">
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Decorations:</span> Basic tablecloths
              in a choice of colors, simple centerpieces (e.g., candles or small
              floral arrangements), and balloons in your event&apos;s color
              scheme.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Floral Arrangements:</span> Simple
              floral centerpieces for each table, using seasonal flowers.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Lighting:</span> Basic ambient
              lighting to enhance the atmosphere.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Setup and Teardown:</span> Our team
              will handle the setup before the event and the teardown afterward,
              ensuring a hassle-free experience for you.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
