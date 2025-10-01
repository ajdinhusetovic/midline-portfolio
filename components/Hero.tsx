"use client"; // make sure this file is client-side

import dynamic from "next/dynamic";
import React from "react";
import { ArrowDown } from "@deemlol/next-icons";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Hero = () => {
  return (
    <div className="h-full max-w-7xl mx-auto px-6 text-white flex items-center justify-center">
      <div className="text-7xl lg:text-9xl text-center flex flex-col gap-8">
        <Typewriter
          options={{
            strings: ["MidlineCode"],
            autoStart: true,
            loop: true,
          }}
        />
        <p className="text-2xl lg:text-3xl text-center">
          Defining how your business is seen online.
        </p>
        <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center">
          <span className="text-sm text-[#B0B0B0]">SCROLL</span>
          <ArrowDown size={48} color="#B0B0B0" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
