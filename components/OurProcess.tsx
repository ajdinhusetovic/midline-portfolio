"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "We deep dive into your business goals. By identifying your unique pain points and target audience, we define the roadmap for a high-performance digital solution.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    text: "Before writing code, we map out the user experience. We create wireframes and UI systems that prioritize conversion, accessibility, and brand consistency.",
  },
  {
    number: "03",
    title: "Custom Development",
    text: "This is where we build. Using modern stacks like Next.js and Tailwind, we craft bespoke code optimized for speed, SEO, and long-term scalability.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    text: "Deployment is just the start. We conduct final quality assurance, performance testing, and provide ongoing support to ensure your growth is continuous.",
  },
];

const OurProcess = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="our-process"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-400/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Our Method
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Transparent, Focused, <br /> and Results-Driven.
          </h3>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We’ve eliminated agency bloat to focus on what matters: building
            technical engines that deliver real value to your brand.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative p-8 md:p-12 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 group"
            >
              {/* Numbering with "Tech" styling */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-blue-400 font-black text-4xl tracking-tighter transition-transform group-hover:scale-110 duration-500">
                  {step.number}
                </span>
                <div className="h-[2px] w-8 bg-blue-100 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500" />
              </div>

              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-base font-medium">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="bg-slate-50 border border-slate-100 p-12 rounded-[3rem] max-w-4xl mx-auto shadow-sm">
            <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Have a complex problem? <br className="hidden md:block" /> Let’s
              architect a solution.
            </h4>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Whether you need a full-stack app or a high-converting site, we’re
              ready to build.
            </p>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-12 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-slate-900/10"
            >
              Launch Your Project
            </button>
          </div>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default OurProcess;
