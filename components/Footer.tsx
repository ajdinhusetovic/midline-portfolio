"use client";

import React, { useState } from "react";
import ContactForm from "./ContactForm";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 mt-32 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              MidlineCode
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Architecting high-performance digital experiences for ambitious
              brands. From North Carolina to the global stage.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2">
              {["About", "Services", "Process", "Work"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-[#87CEEB] transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold uppercase tracking-wider text-sm">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contact@midlinecode.com"
                className="hover:text-[#87CEEB] transition-colors"
              >
                contact@midlinecode.com
              </a>
              <a
                href="tel:+17325341704"
                className="hover:text-[#87CEEB] transition-colors"
              >
                +1 (732) 534-1704
              </a>
              <button
                onClick={() => setIsOpen(true)}
                className="mt-2 w-fit px-6 py-2 border border-slate-700 rounded-lg hover:border-[#87CEEB] hover:text-[#87CEEB] transition-all"
              >
                Send Us a Message
              </button>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} MidlineCode. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </footer>
  );
}
