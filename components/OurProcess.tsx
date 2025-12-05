"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { GiArchiveResearch } from "react-icons/gi";
import { RxDoubleArrowDown } from "react-icons/rx";
import ContactForm from "./ContactForm";

const OurProcess = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="our-process"
      className="text-slate-900 max-w-[90%] xl:max-w-7xl mx-auto mt-24"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-7xl lg:text-7xl font-bold text-center">
          Our Process
        </h1>
        <p className="text-center text-lg md:text-2xl text-slate-700 font-medium">
          We follow a simple and transparent process to make your project
          stress-free from start to finish.
        </p>
      </div>

      <div className="max-w-[90%] lg:max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex items-center gap-80 mt-20">
          <div>
            <h1 className="text-2xl md:text-4xl">
              <span className="text-4xl md:text-6xl text-blue-400">01</span> |
              Discovery
            </h1>
            <p className="text-lg text-slate-600 ml-2 lg:ml-8 mt-2">
              We start by understanding your goals, ideas, and vision. We’ll
              discuss what you need, what problems to solve, and what success
              looks like.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl md:text-4xl">
              <span className="text-4xl md:text-6xl text-blue-400">02</span> |
              Planning & Design
            </h1>
            <p className="text-md md:text-lg text-slate-600 ml-2 md:ml-8 mt-2">
              We create a clear roadmap and design direction. Every layout,
              color, and feature is planned with purpose.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <div>
            <h1 className="text-2xl md:text-4xl">
              <span className="text-4xl md:text-6xl text-blue-400">03</span> |
              Development
            </h1>
            <p className="text-md md:text-lg text-slate-600 ml-2 md:ml-8 mt-2">
              We bring your project to life using modern tools — ensuring speed,
              security, and scalability.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-80">
          <div>
            <h1 className="text-2xl md:text-4xl">
              <span className="text-4xl md:text-6xl text-blue-400">04</span> |
              Launch & Support
            </h1>
            <p className="text-md md:text-lg text-slate-600 ml-2 md:ml-8 mt-2">
              Once your site is live, we provide ongoing support, updates, and
              improvements so you can focus on growth.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <motion.button
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          className="text-slate-900 cursor-pointer text-md md:text-lg border shadow-lg hover:bg-[#87CEEB] my-12 font-bold 
           transition-all duration-300 p-4 md:p-4 rounded md:w-[30%] lg:w-[30%] m-auto"
        >
          Bring Your Idea to Life
        </motion.button>
        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </section>
  );
};

export default OurProcess;
