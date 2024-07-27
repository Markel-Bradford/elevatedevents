"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";


interface Product {
  src: string;
  text: string;
  description: string;
  path: string;
}

const cardData: Product[] = [
  {
    src: "",
    text: "Silver - $675",
    description: "Enhance your event with our Silver Package, offering elegant decorations and top-tier services to ensure a memorable experience for you and your guests. Perfect for those seeking sophistication and style without compromise.",
    path: "/silver"
  },
  {
    src: "/mensskinnys.jpeg",
    text: "Gold - $1275",
    description: "Upgrade your event with our Gold Package, featuring premium decorations and exceptional services designed to captivate and delight your guests. Ideal for creating a refined and unforgettable atmosphere.",
    path: "/gold"
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum - $2500",
    description: "Elevate your event with our most luxurious Platinum Package, featuring the highest-end decorations and services designed to impress and astonish all of your guests. Perfect for those seeking the ultimate in opulence and grandeur.",
    path: "/platinum"
  },
];

const PackageCards: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductPage, setIsProductPage] = useState(false)

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
    <div className="relative mx-auto my-0 p-16 max-lg:px-8 ">
      <div className="w-4/5 max-lg:w-full mx-auto my-0">
        <div className="relative mt-6 max-lg:mt-0 mb-11 grid grid-cols-cards gap-12">
          {cardData.map((card, index) => (
            <Carditems
              key={index}
              product={card}
              src={card.src}
              text={card.text}
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
