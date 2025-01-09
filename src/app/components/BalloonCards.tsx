"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";


interface Product {
  src: string;
  text: string;
  subtext: string;
  pricing: string;
  description: string;
  path: string;
}

const cardData: Product[] = [
  
  {
    src: "",
    text: "Gold",
    subtext: "Accomodates up to __ guests",
    pricing: "starting at $500",
    description: "Transform your event with our Gold Balloon Package, featuring enhanced balloon bouquets, clusters, and table centerpieces in various colors and styles. This package includes a medium-sized balloon arch with creative designs and decorative balloon columns for entryways or stage areas that will be sure to amaze.",
    path: "/goldballoon"
  },
  {
    src: "",
    text: "Platinum",
    subtext: "Accomodates up to __ guests",
    pricing: "starting at $1000",
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
    <div className="relative flex flex-col items-center justify-center mx-auto my-0 pb-8 px-8 max-lg:px-8 bg-black">
      <h1 className="font-kalnia text-white text-center text-4xl lg:text-6xl mb-12 ">Balloon Packages</h1>
      <div className="w-4/5 max-lg:w-full mx-auto my-0">
        <div className="relative mt-6 max-lg:mt-0 mb-11 grid grid-cols-cards gap-12">
          {cardData.map((card, index) => (
            <Carditems
              key={index}
              product={card}
              src={card.src}
              text={card.text}
              subtext={card.subtext}
              pricing={card.pricing}
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
