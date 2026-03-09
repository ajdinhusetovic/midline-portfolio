"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "About", id: "about-us" },
    { label: "Services", id: "services" },
    { label: "Process", id: "our-process" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-0"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Image
              src="/1.svg"
              width={120}
              height={40}
              alt="MidlineCode Logo"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-700 hover:text-[#87CEEB] font-medium transition-colors hover:cursor-pointer"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-2.5 hover:cursor-pointer bg-slate-900 text-white font-bold rounded-lg hover:bg-[#87CEEB] transition-all"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden text-slate-900 text-3xl"
            onClick={() => setIsOpen(true)}
          >
            <HiMenu />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-50 bg-white p-6 lg:hidden"
          >
            <div className="flex justify-end mb-12">
              <button
                onClick={() => setIsOpen(false)}
                className="text-4xl text-slate-900"
              >
                <HiX />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="text-2xl font-bold text-slate-900"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsFormOpen(true);
                }}
                className="px-8 py-4 bg-[#87CEEB] text-slate-900 font-bold rounded-xl hover:cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
