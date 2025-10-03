"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isFormOpen, setIsFormOpen] = useState(false); // contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "About Us", id: "about-us" },
  ];

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Form change handler
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("Your email has been sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
      }
    } catch (err) {
      toast("There was an error sending your email.");
      console.error(err);
    }
  };

  return (
    <>
      <nav className="w-full fixed top-4 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 mt-2 text-white font-bold text-4xl hidden lg:block">
              <Image src={"/2.svg"} width={150} height={150} alt="Logo" />
            </div>

            {/* Center Nav - Desktop */}
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

            {/* Right Button */}
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
        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-md z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center justify-start w-full h-full">
            {/* X button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-4xl text-white font-bold p-6"
            >
              ×
            </button>

            {/* Menu Items */}
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

      {/* Contact Form Slide-In */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 w-full h-screen bg-black/10 backdrop-blur-md z-[100] flex flex-col p-6"
          >
            <button
              onClick={() => setIsFormOpen(false)}
              className="self-end text-3xl text-white font-bold"
            >
              ×
            </button>

            <h2 className="text-4xl lg:text-9xl text-white text-center font-bold mb-6">
              Contact Us
            </h2>
            <form
              onSubmit={handleSubmit}
              className="flex mt-6 flex-col gap-6 max-w-2xl mx-auto w-full text-white text-lg lg:text-3xl"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="border-2 lg:h-24 p-4 rounded-4xl font-bold"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email adress"
                required
                className="border-2 lg:h-24 p-4 rounded-4xl font-bold"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
                className="border-2 resize-none h-40 lg:h-80 p-4 rounded-4xl font-bold"
              />
              <button
                type="submit"
                className="lg:w-[70%] mx-auto px-6 py-3 lg:py-6 rounded-4xl text-lg lg:text-3xl bg-blue-400 cursor-pointer text-white font-semibold hover:bg-blue-700 transition"
              >
                Get in Touch
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
