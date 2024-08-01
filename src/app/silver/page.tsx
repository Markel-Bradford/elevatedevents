"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface SilverImages {
  src: string;
}

const silverImgs: SilverImages[] = [
  { src: "/silverimgs/pinkandgold.JPG", },
  { src: "/silverimgs/outdoorpink.JPG" },
  { src: "/silverimgs/outdoordecor.JPG" },
  { src: "/silverimgs/bearcenter.JPG" },
  { src: "/silverimgs/greenballooncenter.JPG" },
  { src: "/silverimgs/birthday.JPG" },
  { src: "/silverimgs/constructionbday.JPG" },
  { src: "/silverimgs/halloween.JPG" },
];

const page: React.FC<SilverImages> = () => {
  const [currentIndex, setCurrentIndex] = useState<number>();

  const carouselInfiniteScroll = () => {
    setCurrentIndex((prevIndex) => {
      console.log("Previous Index:", prevIndex); // Debugging output
      // Ensure that prevIndex is always a valid number
      if (typeof prevIndex !== 'number' || isNaN(prevIndex)) {
        return 0; // Reset to 0 if prevIndex is not a valid number
      }
      return prevIndex === silverImgs.length - 1 ? 0 : prevIndex + 1;
    });
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      carouselInfiniteScroll();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  

  return (
    <div>
      <h1 className="text-center text-4xl my-12 font-bold">
        Silver Event Package
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex w-full h-1/2 flex-nowrap overflow-hidden">
          {silverImgs.map((item, index) => {
            return (
              <Image
                width={1920}
                height={1080}
                className="flex items-center justify-center transition-all w-full  my-0 mx-auto translate-x-[(-${currentIndex * 100}%)]"
                key={index}
                src={item.src}
                alt={`Silver event image ${index + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
