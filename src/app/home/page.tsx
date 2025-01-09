import React from "react";
import PackageCards from "../components/PackageCards";
import BalloonCards from "../components/BalloonCards";
import Hero from "../components/Hero";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col items-center justify-center relative lg:px-8 bg-black z-50">
        <h1 className="text-center max-lg:py-3 py-12 px-3 text-2xl lg:text-6xl animate-fadein font-kalnia">
          Let Us Bring Your Event To Life
        </h1>
        <Image
          src="/whiteaccent.png"
          height={1080}
          width={1920}
          alt=""
          className="w-1/2 -mt-10 mb-8 max-lg:mb-12 max-lg:-mt-2 max-lg:w-4/5"
        />
      </div>
      <Hero />
      <div className="max-w-[1200px] mx-auto my-16">
        <p className=" max-md:pt-0 pt-6 text-xl max-lg:text-xl max-md:text-lg max-md:leading-8 max-md:px-6 max-lg:px-3 min-w-[1025px]:px-32">
          Welcome to Elevated Events, where we bring your dream events to life.
          Whether it&apos;s an intimate gathering, lavish wedding, or corporate gala,
          we create extraordinary experiences tailored to your vision and style.
          Our dedicated team handles every detail—from venue selection and
          design to catering and entertainment—ensuring a seamless, stress-free
          celebration.
          <br />
          <br /> As a leading event planner in Alabama, we pride ourselves on
          local expertise and strong vendor relationships, delivering
          top-quality service and showcasing the state&apos;s charm. Let Elevated
          Events transform your special occasion into an unforgettable, elegant
          experience with a touch of Southern hospitality.
        </p>
      </div>
      <PackageCards />
    </div>
  );
};

export default page;
