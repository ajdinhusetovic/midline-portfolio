"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-4 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-white font-bold text-4xl hidden lg:block">
            MidlineCode
          </div>

          {/* Center Nav - Desktop */}
          <div
            className="hidden lg:flex space-x-8 px-6 py-3 rounded-4xl 
                        bg-white/8 backdrop-blur-md border border-white/2"
          >
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-blue-400 transition text-lg font-semibold"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Button */}
          <div className="hidden lg:block">
            <button className="px-6 py-3 rounded-4xl bg-white text-black font-semibold transition text-lg">
              + Become a Client
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-black/70 backdrop-blur-md`}
      >
        <div className="px-4 pt-4 pb-6 space-y-4 flex flex-col items-center">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setIsOpen(false); // close mobile menu
              }}
              className="text-white text-lg hover:text-blue-400 transition"
            >
              {item}
            </button>
          ))}

          <button className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            + Become a Client
          </button>
        </div>
      </div>
    </nav>
  );
}
