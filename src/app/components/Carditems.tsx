"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

interface Product {
  src: string;
  text: string;
  description: string;
  path: string
}

interface CardItemsProps {
  product: Product;
  src: string;
  text: string;
  description: string;
  path: string;
}

const Carditems: React.FC<CardItemsProps> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <li
      ref={ref}
      className={classNames(
        "relative flex flex-col shadow-[0_8px_12px_rgba(255,255,255,0.35)] overflow-hidden no-underline bg-slate-100",
        { "animate-fadein": inView, "opacity-0": !inView }
      )}
    >
      <div className="flex flex-col w-full h-full border-amber-400 border-solid border-4 no-underline justify-center items-center p-5">
      <div className="pt-5 pb-10 ">
          <h5 className="text-black text-2xl font-bold overflow-hidden text-center">
            {props.text}
          </h5>
        </div>
        <figure
          className="relative w-full pb-12 text-black text-lg max-lg:text-base overflow-hidden">
          {props.description}
          {/* <Image
            width={500}
            height={350}
            priority
            src={props.src}
            alt="Featured photos"
            className="absolute top-0 right-0 bottom-0 left-0 block w-full h-full object-cover object-center transition-all"
          /> */}
        </figure>
        <div className="flex w-full justify-around items-center gap-4">
          <Link
            className="flex h-14 max-lg:h-[40px] text-center items-center justify-center w-3/5 border-solid border-black border-2 text-white max-lg:text-sm bg-black hover:bg-zinc-700 z-50"
            href={props.path}
          >
            View Product
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Carditems;
