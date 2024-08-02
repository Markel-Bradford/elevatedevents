"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";


interface Product {
  src: string;
  text: string;
  subtext: string;
  description: string;
  path: string;
}

const cardData: Product[] = [
  {
    src: "",
    text: "Silver - $250",
    subtext: "Up to 30 guests",
    description: "Add a touch of elegance to your event with our Silver Balloon Package. This package includes basic balloon bouquets and clusters in your chosen colors, accompanied by a small, but eye catching, balloon arch that is perfect for entryways or photo backdrops for a fun and delightful experience for you and your guests.",
    path: "/silverballoon"
  },
  {
    src: "",
    text: "Gold - $500",
    subtext: "Up to __ guests",
    description: "Transform your event with our Gold Balloon Package, featuring enhanced balloon bouquets, clusters, and table centerpieces in various colors and styles. This package includes a medium-sized balloon arch with creative designs and decorative balloon columns for entryways or stage areas that will be sure to amaze.",
    path: "/goldballoon"
  },
  {
    src: "",
    text: "Platinum - $1000",
    subtext: "Up to __ guests",
    description: "Create an extraordinary event with our Platinum Balloon Package, offering luxury balloon bouquets, clusters, and elaborate table centerpieces with custom designs. This package includes a large, intricate balloon arch with stunning patterns and themes, premium balloon columns, and custom balloon sculptures.",
    path: "/platinumballoon"
  },
];

const BalloonCards: React.FC = () => {

  useEffect(() => {
    // Preload all images
    const preloadImages = (images: Product[]) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image.src;
      });
    };

    preloadImages(cardData);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] mx-auto my-0 py-16 px-8 max-lg:px-8 bg-black">
      <h1 className="font-kalnia text-white font-bold text-center text-4xl lg:text-[3.8vw] mb-12 ">Balloon Packages</h1>
      <div className="w-4/5 max-lg:w-full mx-auto my-0">
        <div className="relative mt-6 max-lg:mt-0 mb-11 grid grid-cols-cards gap-12">
          {cardData.map((card, index) => (
            <Carditems
              key={index}
              product={card}
              src={card.src}
              text={card.text}
              subtext={card.subtext}
              description={card.description}
              path={card.path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BalloonCards;
