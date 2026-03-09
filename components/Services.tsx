"use client";

import React, { useState } from "react";
import { Monitor, WandSparkles } from "@deemlol/next-icons";
import { IoMegaphoneOutline } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Monitor size={32} className="text-[#87CEEB]" />,
    title: "Web Development",
    description:
      "High-performance, custom-coded websites built with React and Next.js. We focus on speed, scalability, and seamless user experiences that convert visitors into customers.",
  },
  {
    icon: <IoMegaphoneOutline size={32} className="text-[#87CEEB]" />,
    title: "Digital Marketing & SEO",
    description:
      "Data-driven strategies to scale your reach. From specialized SEO audits to targeted Meta and Google ads, we ensure your business ranks high and stays visible.",
  },
  {
    icon: <WandSparkles size={32} className="text-[#87CEEB]" />,
    title: "Graphic Design",
    description:
      "Premium brand identities and marketing assets. We craft professional logos, social media kits, and print materials that communicate your brand's value clearly.",
  },
  {
    icon: <FaCamera size={32} className="text-[#87CEEB]" />,
    title: "Photography & Production",
    description:
      "Professional in-house content production. We provide high-end photography for products, staff profiles, and marketing campaigns to give your site a polished edge.",
  },
  {
    icon: <FiShare2 size={32} className="text-[#87CEEB]" />,
    title: "Social Media Management",
    description:
      "Complete social media oversight. We handle content scheduling, audience engagement, and growth strategies to keep your brand relevant across all platforms.",
  },
];

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Animation variants for the container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  // Animation variants for individual cards
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-[#87CEEB] font-bold tracking-widest uppercase text-sm mb-4">
            Our Expertise
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">
            Scalable Solutions for <br /> Modern Businesses.
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            We provide the technical and creative infrastructure needed to grow.
            From Fayetteville to the global market, our services are tailored
            for impact.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#87CEEB]/20 transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="mb-6 p-3 bg-slate-50 rounded-xl group-hover:bg-[#87CEEB]/10 transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#87CEEB] transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed font-medium">
                {service.description}
              </p>
            </motion.div>
          ))}

          {/* Special CTA Card */}
          <motion.div
            variants={itemVariants}
            className="bg-[#87CEEB] p-10 rounded-2xl flex flex-col justify-between text-white"
          >
            <h4 className="text-2xl font-bold leading-tight">
              Ready to start your next project with us?
            </h4>
            <button
              onClick={() => setIsFormOpen(true)}
              className="mt-8 bg-white text-slate-900 font-bold py-4 px-6 rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
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
