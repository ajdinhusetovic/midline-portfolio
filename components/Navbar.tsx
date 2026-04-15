"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Updated to point to actual URLs
  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Why Us?", href: "/why-us" },
    { label: "About", href: "/about-us" }, // Points to home section
    { label: "Our Work", href: "/our-work" }, // Points to home section
    { label: "Process", href: "/#our-process" }, // Points to home section
  ];

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
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer">
            <Image
              src="/1.svg"
              width={120}
              height={40}
              alt="MidlineCode Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-blue-400 font-medium transition-colors cursor-pointer"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-6 py-2.5 cursor-pointer bg-slate-900 text-white font-bold rounded-lg hover:bg-blue-400 transition-all"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            className="lg:hidden text-slate-900 text-3xl cursor-pointer"
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
                className="text-4xl text-slate-900 cursor-pointer"
              >
                <HiX />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-bold text-slate-900"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsFormOpen(true);
                }}
                className="px-8 py-4 bg-blue-400 text-slate-900 font-bold rounded-xl cursor-pointer"
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
