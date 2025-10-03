"use client";

import React, { useState } from "react";
import { Monitor, WandSparkles, Smartphone } from "@deemlol/next-icons";
import ContactForm from "./ContactForm";

const services = [
  {
    icon: <Monitor size={24} color="#4299e1" />,
    title: "Web Development",
    description:
      "Custom websites built to your needs — modern, fast, and responsive.",
  },
  {
    icon: <WandSparkles size={24} color="#4299e1" />,
    title: "Graphic Design",
    description:
      "Eye-catching visuals for your brand, marketing, and digital presence.",
  },
  {
    icon: <Smartphone size={24} color="#4299e1" />,
    title: "Branding",
    description:
      "Crafting a unique identity that makes your business memorable.",
  },
];

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="services"
      className="relative min-h-screen px-6 flex flex-col justify-center items-center bg-transparent md:mt-10 xl:mt-[-80px] max-w-7xl mx-auto"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-2xl lg:text-3xl text-gray-300 font-semibold">
          We help businesses grow with creative and effective digital solutions
        </p>
      </div>

      <div className="grid gap-8 sm:w-[50%] md:w-[50%] xl:w-full md:grid-cols-1 xl:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg lg:text-2xl font-bold text-blue-500 mb-3 flex flex-row items-center justify-center gap-2 lg:gap-4">
              <span>{service.icon}</span> {service.title}
            </h3>
            <p className="text-white text-md font-semibold">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => setIsFormOpen(true)}
          className="text-white mt-12 font-bold bg-blue-400 p-3 md:p-4 rounded-4xl text-lg md:w-[30%] lg:w-[30%] m-auto"
        >
          Start Your Project
        </button>
      </div>
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Services;
