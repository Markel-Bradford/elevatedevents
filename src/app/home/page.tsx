import React from "react";
import PackageCards from "../components/PackageCards";
import BalloonCards from "../components/BalloonCards";
import Hero from "../components/Hero";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-black">
      <Hero />
      <div className="flex flex-col items-center justify-center relative lg:px-8 bg-black pb-6 min-h-[100vh]">
        <h1 className="font-kalnia text-center max-lg:py-6 py-12 px-3 text-4xl lg:text-[3.8vw] font-bold">
          Let us bring your event to life
        </h1>
        <p className=" leading-10 max-md:pt-0 pt-6 text-3xl max-lg:text-2xl max-md:text-xl max-md:leading-8 max-lg:px-6 px-32">
          Welcome to Elevated Events, where we transform your most elegant event
          dreams into unforgettable realities. Our mission is to create
          extraordinary experiences tailored to your unique vision and style,
          whether you&apos;re planning an intimate gathering, a lavish wedding,
          or a corporate gala. At Elevated Events, we understand that every
          event is a reflection of your personal or brand identity, and our team
          of dedicated professionals is committed to bringing your vision to
          life with creativity and meticulous attention to detail. <br />
          <br /> From the initial concept to the final flourish, we take care of
          every aspect of planning and execution, allowing you to focus on
          enjoying your celebration. Our comprehensive services include venue
          selection, design and decor, catering, entertainment, logistics, and
          more, ensuring a seamless and stress-free experience for you and your
          guests. With a passion for innovation and a commitment to excellence,
          Elevated Events is your partner in crafting memorable moments that
          leave a lasting impression. Let us elevate your event to new heights
          {/* and make it a truly remarkable occasion. <br />
          <br /> As one of the leading event planning companies in the Alabama
          area, Elevated Events prides itself on delivering top-quality services
          tailored to the local community. Our extensive knowledge of the
          region&apos;s most stunning venues and trusted vendors allows us to provide
          exceptional experiences that showcase the charm and beauty of Alabama.
          Whether you're hosting a sophisticated soirée in Birmingham, a rustic
          outdoor wedding in the countryside, or a corporate function in
          Huntsville, our team&apos;s local expertise ensures that every detail is
          perfectly executed. Choose Elevated Events for your Alabama event, and
          experience the perfect blend of elegance, professionalism, and
          Southern hospitality. */}
        </p>
      </div>
      <div className="min-h-[90vh] max-lg:min-h-[50vh]"></div>
      <PackageCards />
      <div className="min-h-[90vh] max-lg:min-h-[50vh]"></div>
      <BalloonCards />
    </div>
  );
};

export default page;
