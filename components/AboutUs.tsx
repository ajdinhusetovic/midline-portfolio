"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link"; // For navigation
import ContactForm from "./ContactForm";

const AboutUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="about-us"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side - Your Map Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full xl:w-1/2 relative"
          >
            <div className="relative z-10 rounded-[2.5rem] bg-slate-50 p-4 border border-slate-200/60 shadow-2xl overflow-hidden group">
              <Image
                src="/map-team.svg"
                alt="MidlineCode Global Infrastructure"
                width={600}
                height={600}
                className="w-full h-auto rounded-[2rem] group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              {/* Subtle glass overlay on map */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/10 to-transparent pointer-events-none" />
            </div>

            {/* Floating Stat - Highlighting National Scale */}
            <div className="absolute -bottom-6 -right-4 lg:right-6 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-slate-100 shadow-2xl max-w-[260px] hidden md:block">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
                <p className="text-blue-500 font-black text-xs uppercase tracking-widest">
                  Live Presence
                </p>
              </div>
              <p className="text-slate-900 text-sm font-semibold leading-snug">
                Engineering custom solutions for clients across{" "}
                <span className="text-blue-500">12+ States</span> and the EU.
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full xl:w-1/2 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm">
                Our Mission
              </h2>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Bridging Tech <br />
                <span className="text-blue-400">& Business.</span>
              </h3>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Headquartered in{" "}
                <span className="text-slate-900 font-semibold">
                  North Carolina
                </span>
                , MidlineCode is a specialized agency dedicated to building
                high-performance digital infrastructure.
              </p>

              <p className="text-base">
                We replace standard templates with{" "}
                <span className="text-slate-900 font-bold italic">
                  bespoke code
                </span>
                . Whether you are a local contractor or a national startup, our
                engines are built for one thing:{" "}
                <b className="font-semibold text-slate-900">speed</b>.
              </p>

              {/* Refined Pill Grid - Optimized for keywords */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                  "NC Based, National Reach",
                  "Full-Stack Engineering",
                  "Next.js Architecture",
                  "Conversion-First Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-tighter">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsFormOpen(true)}
                className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl transition-all hover:bg-blue-500 shadow-lg shadow-slate-900/10"
              >
                Start Your Project
              </button>
              <Link
                href="/about"
                className="px-10 py-4 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl transition-all hover:bg-slate-50 text-center"
              >
                Our Full Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default AboutUs;
