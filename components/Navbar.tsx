"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about-us" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="w-full fixed top-4 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 mt-2 text-white font-bold text-4xl hidden lg:block">
              <Image src={"/2.svg"} width={150} height={150} alt="Logo" />
            </div>

            <div className="hidden lg:flex space-x-8 px-6 py-3 rounded-4xl bg-white/8 backdrop-blur-md border border-white/2">
              {navItems.map((item) => (
                <motion.button
                  whileHover={{ scale: 1.2, transition: { duration: 0.1 } }}
                  whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                  key={item.label}
                  onClick={() => scrollToSection(item.id.toLowerCase())}
                  className="text-white cursor-pointer hover:text-blue-400 transition text-lg font-semibold"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            <div className="hidden lg:block">
              <motion.button
                whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                onClick={() => setIsFormOpen(true)}
                className="px-6 cursor-pointer py-3 hover:bg-blue-400 rounded-4xl bg-white text-black font-semibold transition text-lg"
              >
                + Become a Client
              </motion.button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white text-4xl focus:outline-none"
              >
                {isOpen ? "" : "≡"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-40 flex flex-col items-center justify-center overflow-y-auto transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-start w-full h-full">
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-4xl text-white font-bold p-6"
            >
              ×
            </button>
            <div className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item) => (
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.id.toLowerCase());
                    setIsOpen(false);
                  }}
                  className="text-white text-2xl hover:text-blue-400 transition"
                >
                  {item.label}
                </motion.button>
              ))}
              <button
                onClick={() => setIsFormOpen(true)}
                className="mt-4 cursor-pointer px-6 py-3 rounded-4xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                + Become a Client
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Reusable Contact Form */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
