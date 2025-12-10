"use client";

import { useState } from "react";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="text-slate-600 py-10 px-6 bg-[#122e53] md:mb-5 mt-20 max-w-5xl mx-auto md:rounded">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        {/* Left Side */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-2">MidlineCode</h2>
          <p className="text-gray-200">
            Building fast, modern websites that make businesses stand out.
          </p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <p>
            📧{" "}
            <a
              href="mailto:contact@midlinecode.com"
              className="text-white hover:text-blue-400 transition"
            >
              contact@midlinecode.com
            </a>
          </p>
          <p>
            📞{" "}
            <a
              href="tel:+17325341704"
              className="text-white hover:text-blue-400 transition"
            >
              +17325341704
            </a>
          </p>
          <div>
            <motion.button
              onClick={() => setIsOpen(true)}
              className="border p-2 text-white mt-2 cursor-pointer"
              whileHover={{ scale: 1.1 }}
            >
              Contact Us
            </motion.button>
            <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-400 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} MidlineCode. All rights reserved.
      </div>
    </footer>
  );
}
