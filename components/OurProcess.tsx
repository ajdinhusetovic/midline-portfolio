"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    text: "We deep dive into your business goals. By identifying your unique pain points and target audience, we define the roadmap for a high performance digital solution.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    text: "Before writing code, we map out the user experience. We create wireframes and UI systems that prioritize conversion, accessibility, and brand consistency.",
  },
  {
    number: "03",
    title: "Custom Development",
    text: "This is where we build. Using modern stacks like Next.js and Tailwind, we craft bespoke code optimized for speed, SEO, and long term scalability.",
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
    <section id="our-process" className="py-24 bg-white lg:py-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-[#87CEEB] font-bold tracking-widest uppercase text-sm mb-4">
            Our Process
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Transparent, Focused, <br /> and Results-Driven.
          </h3>
          <p className="text-lg text-slate-600">
            We’ve refined our workflow to eliminate complexity and focus on what
            matters: delivering value to your brand.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#87CEEB]/30 transition-colors group"
            >
              <div className="text-[#87CEEB] font-black text-5xl mb-6 opacity-50 group-hover:opacity-100 transition-opacity">
                {step.number}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">
                {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => setIsFormOpen(true)}
            className="px-10 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-[#87CEEB] transition-all hover:scale-105 shadow-lg"
          >
            Start Your Project
          </button>
        </div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default OurProcess;
