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
    text: "Silver",
    subtext: "Accomodates up to 30 guests",
    pricing: "Starting at $675",
    description: "Enhance your event with basic tablecloths, simple centerpieces (candles or small floral arrangements), and balloons in your color scheme. Enjoy seasonal floral centerpieces and basic ambient lighting. Setup and teardown are included for a hassle-free experience.",
    path: "/silver"
  },
  {
    src: "",
    text: "Gold",
    subtext: "Accomodates up to __ guests",
    pricing: "Starting at $675",
    description: "Elevate your event with enhanced tablecloths, themed decor, elegant centerpieces (larger floral arrangements or lanterns), and custom floral arrangements. Themed lighting and additional decor like chair covers and backdrops are included. Setup and teardown are handled by our team.",
    path: "/gold"
  },
  {
    src: "",
    text: "Platinum",
    subtext: "Accomodates up to __ guests",
    pricing: "Starting at $675",
    description: "Transform your event with luxury tablecloths, custom-themed decor, premium centerpieces, and high-end floral arrangements. Enjoy professional lighting design, additional decor like drapery and chandeliers, and extras such as custom signage and specialty items. Setup and teardown are included.",
    path: "/platinum"
  },
];

const PackageCards: React.FC = () => {

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
    <div className="relative flex flex-col items-center justify-center min-h-[100vh] mx-auto my-0 py-8 px-8 max-lg:px-8 bg-black">
      <h1 className="font-kalnia text-white font-bold text-center text-4xl lg:text-[3.8vw] mb-12">Event Packages</h1>
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

export default PackageCards;
