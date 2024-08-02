import React from "react";
import PackageCards from "../components/PackageCards";
import BalloonCards from "../components/BalloonCards";
import Hero from "../components/Hero";

const page = () => {
    
  return (
    <div>
      <Hero />
      <div className="relative lg:px-8 bg-black">
        <h1 className="text-center max-lg:py-6 py-12 text-4xl lg:text-[3.8vw] font-bold">
          Let us bring your event to life
        </h1>
        <p className="leading-10 max-md:pt-0 pt-6 text-3xl max-lg:text-2xl max-md:leading-8 max-lg:px-6 max-xl:px-32 px-48">
          Welcome to Elevated Events, where we transform your most elegant event
          dreams into unforgettable realities. Our mission is to create
          extraordinary experiences tailored to your unique vision and style,
          whether you&apos;re planning an intimate gathering, a lavish wedding, or a
          corporate gala. At Elevated Events, we understand that every event is
          a reflection of your personal or brand identity, and our team of
          dedicated professionals is committed to bringing your vision to life
          with creativity and meticulous attention to detail. <br />
          <br /> From the initial concept to the final flourish, we take care of
          every aspect of planning and execution, allowing you to focus on
          enjoying your celebration. Our comprehensive services include venue
          selection, design and decor, catering, entertainment, logistics, and
          more, ensuring a seamless and stress-free experience for you and your
          guests. With a passion for innovation and a commitment to excellence,
          Elevated Events is your partner in crafting memorable moments that
          leave a lasting impression. Let us elevate your event to new heights
          and make it a truly remarkable occasion.
        </p>
      </div>
      <PackageCards />
      <BalloonCards />
    </div>
  );
};

export default page;
