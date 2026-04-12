"use client";

import React, { useState } from "react";
import { Monitor, WandSparkles } from "@deemlol/next-icons";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import Link from "next/link"; // For multi-page navigation
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Monitor size={32} className="text-blue-400" />,
    title: "Web Development",
    // SEO-focused description
    description:
      "Custom, high-performance Next.js and React applications designed for speed, security, and global scalability.",
  },
  {
    icon: <IoMegaphoneOutline size={32} className="text-blue-400" />,
    title: "SEO & Performance",
    description:
      "Advanced search engine optimization and technical audits to ensure your business ranks at the top across the US.",
  },
  {
    icon: <WandSparkles size={32} className="text-blue-400" />,
    title: "Brand Identity",
    description:
      "Premium visual systems and graphic design that help your brand stand out in a crowded digital landscape.",
  },
];

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header - Optimized for National Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Software Solutions <br /> Built for the US Market.
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              We provide the digital infrastructure needed to dominate your
              industry. From high-speed web apps to data-driven marketing, we
              tailor our expertise for businesses ready to scale nationally.
            </p>
          </div>

          {/* Link to dedicated services page */}
          <Link
            href="/services"
            className="text-blue-500 font-bold hover:underline mb-2 flex items-center gap-2"
          >
            View All Services <span>→</span>
          </Link>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-slate-50 p-8 rounded-3xl border border-transparent hover:bg-white hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">
                {service.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              {/* Contextual internal link */}
              <Link
                href={`/services#${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-[12px] font-black uppercase tracking-tighter text-slate-400 group-hover:text-blue-400 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          ))}

          {/* High-Impact CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-slate-900 p-8 rounded-3xl flex flex-col justify-between text-white relative overflow-hidden group"
          >
            {/* Subtle glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 blur-[80px] group-hover:bg-blue-500/40 transition-all duration-700" />

            <h4 className="text-2xl font-bold leading-snug z-10">
              Ready to scale <br /> your business?
            </h4>
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-8 bg-blue-400 text-white font-bold py-4 px-6 rounded-2xl hover:bg-blue-500 transition-all z-10 shadow-lg shadow-blue-500/20"
            >
              Get a Free Quote
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default Services;
