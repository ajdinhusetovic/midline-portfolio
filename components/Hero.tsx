"use client";
import React from "react";
import { ArrowDown } from "@deemlol/next-icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 text-slate-900 overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white z-[5]" />
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/bg_vid_comp.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="text-5xl md:text-7xl lg:text-7xl text-center flex flex-col gap-4 lg:gap-8 z-10">
        <h1 className="md:w-8/12 w-11/12 mx-auto text-3xl md:text-4xl lg:text-6xl text-slate-900">
          <span className="text-blue-400">We</span> build digital tools that
          help <span className="text-blue-400">your</span> business grow,
          connect, and feel like <span className="text-blue-400">you</span>
        </h1>
      </div>

      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center z-10">
        <span className="text-sm text-slate-900">SCROLL</span>
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={48} color="#B0B0B0" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
