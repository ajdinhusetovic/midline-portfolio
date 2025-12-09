"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

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
      <div className="max-w-[90%] lg:max-w-4xl mx-auto flex flex-col gap-4">
        {/* 01 */}
        <div className="flex items-center gap-80 mt-20">
          <div className="relative overflow-hidden group p-6 bg-white clip-path-diagonal transition-all duration-500">
            <div
              className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              }}
            />
            <div className="relative z-10">
              <h1 className="text-2xl md:text-4xl group-hover:text-white transition-colors">
                <span className="text-4xl md:text-6xl text-blue-400 group-hover:text-white">
                  01
                </span>{" "}
                | Discovery
              </h1>
              <p className="text-lg w-11/12 text-slate-600 ml-2 lg:ml-8 mt-2 group-hover:text-white transition-colors">
                We start by understanding your goals, ideas, and vision. We’ll
                discuss what you need, what problems to solve, and what success
                looks like.
              </p>
            </div>
          </div>
        </div>

        {/* 02 */}
        <div className="flex items-center">
          <div className="relative overflow-hidden group p-6 bg-white clip-path-diagonal transition-all duration-500">
            <div
              className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              }}
            />
            <div className="relative z-10">
              <h1 className="text-2xl md:text-4xl group-hover:text-white transition-colors">
                <span className="text-4xl md:text-6xl text-blue-400 group-hover:text-white">
                  02
                </span>{" "}
                | Planning & Design
              </h1>
              <p className="text-lg w-11/12 text-slate-600 ml-2 lg:ml-8 mt-2 group-hover:text-white transition-colors">
                We create a clear roadmap and design direction. Every layout,
                color, and feature is planned with purpose.
              </p>
            </div>
          </div>
        </div>

        {/* 03 */}
        <div className="flex items-center">
          <div className="relative overflow-hidden group p-6 bg-white clip-path-diagonal transition-all duration-500">
            <div
              className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              }}
            />
            <div className="relative z-10">
              <h1 className="text-2xl md:text-4xl group-hover:text-white transition-colors">
                <span className="text-4xl md:text-6xl text-blue-400 group-hover:text-white">
                  03
                </span>{" "}
                | Development
              </h1>
              <p className="text-lg w-11/12 text-slate-600 ml-2 lg:ml-8 mt-2 group-hover:text-white transition-colors">
                We bring your project to life using modern tools — ensuring
                speed, security, and scalability.
              </p>
            </div>
          </div>
        </div>

        {/* 04 */}
        <div className="flex items-center">
          <div className="relative overflow-hidden group p-6 bg-white clip-path-diagonal transition-all duration-500">
            <div
              className="absolute inset-0 bg-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out z-0"
              style={{
                clipPath: "polygon(0 0, 100% 0, 95% 100%, 0% 100%)",
              }}
            />
            <div className="relative z-10">
              <h1 className="text-2xl md:text-4xl group-hover:text-white transition-colors">
                <span className="text-4xl md:text-6xl text-blue-400 group-hover:text-white">
                  04
                </span>{" "}
                | Launch & Support
              </h1>
              <p className="text-lg w-11/12 text-slate-600 ml-2 lg:ml-8 mt-2 group-hover:text-white transition-colors">
                Once your site is live, we provide ongoing support, updates, and
                improvements so you can focus on growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full flex items-center justify-center">
        <motion.button
          onClick={() => setIsFormOpen(true)}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
          className="text-slate-900 cursor-pointer text-md md:text-lg border shadow-lg hover:bg-[#87CEEB] my-12 font-bold transition-all duration-300 p-4 rounded md:w-[30%] lg:w-[30%] m-auto"
        >
          Bring Your Idea to Life
        </motion.button>

        <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      </div>
    </section>
  );
};

export default OurProcess;
