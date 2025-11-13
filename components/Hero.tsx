"use client"; // make sure this file is client-side

// import dynamic from "next/dynamic";
import React from "react";
import { ArrowDown } from "@deemlol/next-icons";

// const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 text-white"
    >
      <div className="text-5xl md:text-7xl lg:text-8xl text-center flex flex-col gap-4 lg:gap-8 z-10">
        {/* <Typewriter
          options={{
            strings: ["MidlineCode"],
            autoStart: true,
            loop: true,
          }}
        /> */}
        <h1 className="md:w-8/12 w-11/12 mx-auto text-3xl md:text-4xl lg:text-6xl">
          <span className="text-blue-400">We</span> build digital tools that
          help <span className="text-blue-400">your</span> business grow,
          connect, and feel like <span className="text-blue-400">you</span>
        </h1>
      </div>

      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center z-10">
        <span className="text-sm text-[#B0B0B0]">SCROLL</span>
        <ArrowDown size={48} color="#B0B0B0" />
      </div>
    </div>
  );
};

export default Hero;
