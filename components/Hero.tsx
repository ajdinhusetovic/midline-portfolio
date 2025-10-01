"use client"; // make sure this file is client-side

import dynamic from "next/dynamic";
import React from "react";
import { ArrowDown } from "@deemlol/next-icons";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div className="relative h-screen w-full flex flex-col justify-center items-center px-6 text-white">
      <div className="text-5xl lg:text-9xl text-center flex flex-col gap-4 lg:gap-8 z-10">
        <Typewriter
          options={{
            strings: ["MidlineCode"],
            autoStart: true,
            loop: true,
          }}
        />
        <p className="text-xl lg:text-3xl text-center">
          Defining how your business is seen online.
        </p>
      </div>

      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center z-10">
        <span className="text-sm text-[#B0B0B0]">SCROLL</span>
        <ArrowDown size={48} color="#B0B0B0" />
      </div>
    </div>
  );
};

export default Hero;
