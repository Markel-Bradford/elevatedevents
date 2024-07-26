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
    src: "/abstractshirt.jpeg",
    text: "Silver",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    path: "/silver"
  },
  {
    src: "/mensskinnys.jpeg",
    text: "Gold",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    path: "/gold"
  },
  {
    src: "/womensdenim.jpg",
    text: "Platinum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
    <div className="relative mx-auto my-0 p-16">
      <div className="w-full mx-auto my-0">
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
