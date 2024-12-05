"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import React from "react";
5;
import classNames from "classnames";

const About: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: p2, inView: p2InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: p3, inView: p3InView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="flex max-lg:flex-col flex-col bg-black mx-auto justify-around items-center min-h-[100vh] max-w-[1500px]">
      <div>
        <h1 className="font-kalnia text-6xl mt-4 text-center">Meet Felicia</h1>
        <Image 
          src="/whiteaccent.png"
          width={1920}
        height={1080}
        priority
        alt=""
        className="max-lg:w-1/2 max-sm:w-full w-2/5 mx-auto"
        />
      </div>
      <div className="flex max-lg:flex-col max-lg:items-center">
        <Image
          src="/aboutfee.JPG"
          width={1920}
          height={1080}
          priority
          alt="About Felicia Cook"
          className="flex w-full max-w-[400px] py-12 animate-fadein rounded-t-full"
        />
        <div className="flex justify-center items-center py-16 max-lg:pt-4 max-lg:pb-16">
          <p className={"text-xl leading-8 px-16 max-lg:px-4"}>
            <span
              ref={ref}
              className={classNames({
                "animate-fadein": inView,
                "opacity-0": !inView,
              })}>
              Hi! I&apos;m Felica, a self-made event planner from
              Montgomery, Alabama, with a passion for turning life&apos;s
              special moments into unforgettable experiences. What started as a
              hobby organizing small gatherings for friends and family quickly
              grew into a full-fledged career fueled by creativity, hard work,
              and a deep love for celebrating life&apos;s milestones.
            </span>
            <br />
            <br />
            <span
              ref={p2}
              className={classNames({
                "animate-fadein": p2InView,
                "opacity-0": !p2InView,
              })}>
              I believe that every event—whether a wedding, corporate function,
              or intimate celebration—should reflect the personality and vision
              of my clients. My approach is all about collaboration, attention
              to detail, and a touch of Southern charm. From elegant décor to
              seamless logistics, I handle every aspect of planning with care
              and precision, allowing my clients to relax and enjoy their day.
            </span>
            <br />
            <br />
            <span
              ref={p3}
              className={classNames({
                "animate-fadein": p3InView,
                "opacity-0": !p3InView,
              })}>
              When I&apos;m not planning events, you can find me exploring local
              venues, finding design inspiration in Montgomery&apos;s rich history,
              or enjoying time with loved ones. I&apos;m proud to serve my community
              and bring a fresh perspective to event planning in the Heart of
              Dixie. Let&apos;s work together to create something truly special!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
