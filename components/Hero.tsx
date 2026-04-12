"use client";
import React from "react";
import { ArrowDown } from "@deemlol/next-icons";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 text-slate-900 overflow-hidden"
    >
      {/* Background Video with Poster for SEO/Performance */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/hero-fallback.jpg" // Add a static version of your bg
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40" // Lower opacity helps text pop
      >
        <source src="/bg_vid_comp.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text legibility */}
      <div className="absolute inset-0 bg-white/30 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Subtle SEO Keyword - Helps rank for NC/USA without cluttering design */}
        <span className="block text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">
          Custom Web Development • North Carolina & Beyond
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          <span className="text-blue-400">We</span> build digital tools that
          help <span className="text-blue-400">your</span> business grow,
          connect, and feel like <span className="text-blue-400">you</span>
        </h1>

        {/* Added Subtext for Conversion: Tells them WHAT you actually do */}
        <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto">
          High-performance Next.js solutions and full-stack applications
          tailored to your brand&apos;s unique identity.
        </p>

        {/* Added CTA: Don't just make them scroll, give them an action */}
        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-blue-600 transition-all">
            Start Your Project
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center justify-center z-10">
        <span className="text-[10px] font-bold tracking-widest text-slate-500 mb-2">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={32} color="#94a3b8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
