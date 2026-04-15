"use client";
import React, { useState } from "react";
import { ArrowDown } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm"; // Import it here too

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen w-full flex flex-col justify-center items-center px-6 text-slate-900 overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-fallback.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
        >
          <source src="/bg_vid_comp.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-white/30 z-[1]" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <span className="block text-blue-500 font-semibold tracking-widest uppercase text-sm mb-4">
            Custom Web Development • North Carolina & Beyond
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            <span className="text-blue-400">We</span> build digital tools that
            help <span className="text-blue-400">your</span> business grow,
            connect, and feel like <span className="text-blue-400">you</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-700 max-w-2xl mx-auto font-medium">
            High-performance Next.js solutions and full-stack applications
            tailored to your brand&apos;s unique identity.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-blue-400 transition-all cursor-pointer shadow-lg"
            >
              Start Your Project
            </button>
          </div>
        </div>

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

      {/* Adding the form here so this button can trigger it directly */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Hero;
