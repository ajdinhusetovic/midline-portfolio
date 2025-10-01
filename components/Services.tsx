"use client";

import React from "react";
import { Monitor, WandSparkles, Smartphone } from "@deemlol/next-icons";

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
  return (
    <section className="relative h-screen w-full px-6 flex flex-col justify-center items-center bg-transparent mt-42 lg:mt-0 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-9xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-2xl lg:text-3xl text-gray-300 font-semibold">
          We help businesses grow with creative and effective digital solutions
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-bold text-blue-500 mb-3 flex flex-row items-center justify-center gap-5">
              <span>{service.icon}</span> {service.title}
            </h3>
            <p className="text-white text-xl font-semibold">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
