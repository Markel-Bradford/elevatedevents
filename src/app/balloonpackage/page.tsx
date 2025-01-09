"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface BalloonImages {
  src: string;
}

const balloonImgs: BalloonImages[] = [
  { src: "balloonimgs/blackbackdrop.jpg" },
  { src: "balloonimgs/largegreenarch.jpg" },
  { src: "balloonimgs/bbshowercluster.jpg" },
  { src: "balloonimgs/emeraldarch.jpg" },
  { src: "balloonimgs/whiteredarch.jpg" },
  { src: "balloonimgs/peppermintarch.jpg" },
  { src: "balloonimgs/bluecluster.jpg" },
  { src: "balloonimgs/boycluster.png" },
  { src: "balloonimgs/kidsbackdrop.jpg" },
  { src: "balloonimgs/schoolcluster.jpg" },
  { src: "balloonimgs/pastelcluster.png" },
  { src: "balloonimgs/halloweenbg.jpg" },
  { src: "balloonimgs/purplearch.jpg" },
  { src: "balloonimgs/purplecluster.jpg" },
  { src: "balloonimgs/pinkbackdrop.jpg" },
];

const Page: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const toNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % balloonImgs.length);
  };

  const toPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + balloonImgs.length) % balloonImgs.length
    );
  };

  useEffect(() => {
    const interval = setInterval(toNextSlide, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      <div className="max-w-full xl:min-h-[100vh] md:min-h-[60vh] max-md:min-h-[45vh]  flex justify-center items-center bg-black mx-auto max-lg:px-0 max-lg:flex-col">
        <div className="fixed max-w-[1499px] justify-end w-[100%] lg:w-full">
          <Image
            width={1920}
            height={1080}
            priority
            src="/balloonimgs/redarch.JPG"
            alt="Basic event balloon decorations by Felicia"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center relative w-full text-white font-kalnia animate-fade">
          <h1 className="text-[9vw] font-bold lg:text-[7vw] text-center">
            Balloon Package
          </h1>
          <h2 className="text-[6vw] lg:text-[4vw] font-semibold text-center">
            Contact us for pricing
          </h2>
        </div>
      </div>
      <div className="relative bg-black">
        <h3 className=" relative text-center text-5xl max-lg:text-3xl font-bold pt-12 max-lg:pb-6">
        What&apos;s included:
        </h3>
      </div>
      <div
        className="max-w-[1500px] mx-auto py-24 px-6 h-full bg-black flex items-center justify-center relative 
            max-xl:flex-col-reverse max-lg:pt-0 max-lg:pb-12">
        <div
          className="flex w-1/2 h-[600px] flex-nowrap overflow-hidden translate-x-slides
              max-xl:w-full max-xl:h-1/2">
          {balloonImgs.map((item, index) => {
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
                max-lg:text-2xl max-xl:text-7xl max-xl:left-8 max-sm:top-[74%] max-xl:top-[64%]">
            &#10094; {/* Left arrow */}
          </button>
          <button
            onClick={toNextSlide}
            className="absolute text-5xl right-1/2 top-1/2 font-extrabold transform -translate-y-1/2 opacity-60 bg-black text-gray-200 p-2 hover:text-amber-400 duration-200
                max-lg:text-2xl max-xl:text-7xl max-xl:right-8 max-sm:top-[74%] max-xl:top-[64%]">
            &#10095; {/* Right arrow */}
          </button>
        </div>
        <div
          className="w-1/2 max-xl:w-full h-full flex flex-col px-12 max-xl:pt-0 pt-6
              max-xl:pb-12 max-lg:px-2">
          <ul className="px-3 list-image-star leading-10 text-3xl max-md:text-lg">
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Clusters:</span> Elegant balloon
              clusters to accent your party and decor.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Bouquets:</span> Beautifully arranged
              balloon bouquets to enhance table decor.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Arches:</span> Incredible arches that
              can serve as elegant entryways or the perfect photo backdrops.
            </li>
            <li className="pb-3 max-lg:pb-1.5">
              <span className="font-bold">Setup and Teardown:</span> Our team
              will handle the setup before the event and the teardown afterward,
              ensuring a hassle-free experience for you.
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="bg-black relative flex items-center justify-center pb-12">
             <EmailBtn />
            </div> */}
    </div>
  );
};

export default Page;
