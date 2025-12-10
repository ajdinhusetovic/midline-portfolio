"use client";

import { motion, useInView } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import ContactForm from "./ContactForm";

interface ProcessCardProps {
  number: string;
  title: string;
  text: string;
}

const ProcessCard = ({ number, title, text }: ProcessCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // updates visibility dynamically
      },
      {
        threshold: 1, // trigger when 60% visible
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="flex items-center">
      <div className="relative overflow-hidden p-6 bg-white transition-all duration-500 w-full rounded-lg mt-8">
        {/* Blue animated background */}
        <motion.div
          className="absolute inset-0 bg-darkblue-100 z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)" }}
          initial={{ x: "-100%" }}
          animate={{ x: isVisible ? "0%" : "-100%" }} // now it goes back when out of view
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div className="relative z-10">
          <h1
            className={`text-2xl md:text-4xl transition-colors duration-300 ${
              isVisible ? "text-white" : "text-slate-900"
            }`}
          >
            <span className="text-4xl md:text-6xl transition-colors duration-300 text-blue-400">
              {number}
            </span>{" "}
            | {title}
          </h1>
          <p
            className={`text-lg w-11/12 ml-2 lg:ml-8 mt-2 transition-colors duration-300 ${
              isVisible ? "text-white" : "text-slate-600"
            }`}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

const OurProcess = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="our-process"
      className="text-slate-900 max-w-[90%] xl:max-w-7xl mx-auto mt-24"
    >
      {/* Header */}
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-7xl font-bold text-center">
          Our Process
        </h1>
        <p className="text-center text-lg md:text-2xl text-slate-700 font-medium">
          We follow a simple and transparent process to make your project
          stress-free from start to finish.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[90%] lg:max-w-4xl mx-auto flex flex-col gap-4 mt-20">
        <ProcessCard
          number="01"
          title="Discovery"
          text="We start by understanding your goals, ideas, and vision. We’ll
          discuss what you need, what problems to solve, and what success
          looks like."
        />

        <ProcessCard
          number="02"
          title="Planning & Design"
          text="We create a clear roadmap and design direction. Every layout,
          color, and feature is planned with purpose."
        />

        <ProcessCard
          number="03"
          title="Development"
          text="We bring your project to life using modern tools — ensuring
          speed, security, and scalability."
        />

        <ProcessCard
          number="04"
          title="Launch & Support"
          text="Once your site is live, we provide ongoing support, updates,
          and improvements so you can focus on growth."
        />
      </div>

      {/* CTA */}
      <div className="w-full flex items-center justify-center">
        <motion.button
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="text-slate-900 cursor-pointer text-md md:text-lg border shadow-lg hover:bg-[#87CEEB] my-12 font-semibold p-4 rounded md:w-[30%] lg:w-[30%] m-auto"
        >
          Bring Your Idea to Life
        </motion.button>

        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </section>
  );
};

export default OurProcess;
