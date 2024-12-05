"use client"

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React from "react";5
import classNames from "classnames";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref:p2, inView:p2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref:p3, inView:p3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex max-lg:flex-col flex-col bg-black mx-auto justify-around items-center min-h-[100vh] max-w-[1500px]">
        <div>
        {/* <Image 
          src="/platimgs/candlecenterpiece.jpg"
          width={1920}
        height={1080}
        priority
        alt=""
        className="object-cover w-full h-full"
        /> */}
        <h1 className="font-kalnia text-7xl text-center">Meet Felicia</h1>
        </div>
      <div className="flex max-lg:flex-col">
      <Image
        src="/aboutfee.JPG"
        width={1920}
        height={1080}
        priority
        alt="About Felicia Cook"
        className="flex w-full max-w-[400px] py-12 animate-fadein"
      />
      <div className="flex py-16 max-lg:pt-4 max-lg:pb-16">
      <p  className={"text-xl leading-8 px-16 max-lg:px-4"}>
        <span ref={ref} className={classNames({"animate-fadein": inView, "opacity-0": !inView})}>
          Welcome to Elevated Events, where we transform your most elegant event
          dreams into unforgettable realities. Our mission is to create
          extraordinary experiences tailored to your unique vision and style,
          whether you&apos;re planning an intimate gathering, a lavish wedding,
          or a corporate gala. At Elevated Events, we understand that every
          event is a reflection of your personal or brand identity, and our team
          of dedicated professionals is committed to bringing your vision to
          life with creativity and meticulous attention to detail.</span> 
          <br />
          <br /> 
          <span ref={p2} className={classNames({"animate-fadein": p2InView, "opacity-0": !p2InView})}>
            From the initial concept to the final flourish, we take care of
          every aspect of planning and execution, allowing you to focus on
          enjoying your celebration. Our comprehensive services include venue
          selection, design and decor, catering, entertainment, logistics, and
          more, ensuring a seamless and stress-free experience for you and your
          guests. With a passion for innovation and a commitment to excellence,
          Elevated Events is your partner in crafting memorable moments that
          leave a lasting impression. Let us elevate your event to new heights
          and make it a truly remarkable occasion.</span> 
          <br />
          <br /> 
          <span ref={p3} className={classNames({"animate-fadein": p3InView, "opacity-0": !p3InView})}>
            As one of the leading event planning companies in the Alabama
          area, Elevated Events prides itself on delivering top-quality services
          tailored to the local community. Our extensive knowledge of the
          region&apos;s most stunning venues and trusted vendors allows us to provide
          exceptional experiences that showcase the charm and beauty of Alabama.
          Whether you&apos;re hosting a sophisticated soirée in Birmingham, a rustic
          outdoor wedding in the countryside, or a corporate function in
          Huntsville, our team&apos;s local expertise ensures that every detail is
          perfectly executed. Choose Elevated Events for your Alabama event, and
          experience the perfect blend of elegance, professionalism, and
          Southern hospitality.
          </span>
        </p>
        </div>
      </div>
    </div>
  );
};

export default About;
