"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiLayout, FiCode, FiSearch, FiServer, FiEdit3 } from "react-icons/fi";

// Add FiEdit3 to your react-icons/fi imports

const services = [
  {
    icon: <FiLayout className="text-blue-400" />,
    title: "High-End Business Websites",
    description:
      "Designed for authority and trust. We build multi-page sites (MPA) that tell your brand's story while serving as a lead-generation machine.",
    details: [
      "Custom UI/UX Design",
      "Next.js Speed Optimization",
      "Mobile-First Layouts",
      "SEO-Ready Architecture",
    ],
  },
  {
    icon: <FiCode className="text-blue-400" />,
    title: "Interactive Web Features", // Changed from "Custom Web Applications"
    description:
      "When a static site isn't enough. We integrate custom functionality like booking systems, client portals, and dynamic dashboards to automate your workflow.",
    details: [
      "Secure User Authentication",
      "Real-time Database Integration",
      "Custom Booking Flow Logic", // Specific to what you're building
      "Scalable Infrastructure",
    ],
  },
  {
    icon: <FiEdit3 className="text-blue-400" />,
    title: "Brand & Graphic Design",
    description:
      "Visual identity is the soul of your business. We craft modern logos, color palettes, and brand guidelines that stand out in a crowded market.",
    details: [
      "Logo Design & Visual Identity",
      "Brand Style Guides",
      "Marketing Collateral",
      "UI/UX Prototyping",
    ],
  },
  {
    icon: <FiServer className="text-blue-400" />,
    title: "Managed Support & Hosting",
    description:
      "The 'Engine Room' of your digital presence. We take the technical stress off your plate so you can focus on your business.",
    details: [
      "Secure Vercel Hosting",
      "SSL Management",
      "Monthly Security Updates",
      "Priority Technical Support",
    ],
  },
];

const ServicesPage = () => {
  return (
    <main className="pt-32 pb-24 bg-white mt-22">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Area */}
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">
            Digital Solutions <br />
            <span className="text-blue-400">Built to Scale.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We bridge the gap between high-end design and elite engineering.
            From simple landing pages to complex web ecosystems, we build the
            tools that define your digital authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 md:p-14 rounded-[3rem] bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all group"
            >
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {service.title}
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex items-center gap-3 text-slate-900 font-semibold text-sm"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* The "Choice" CTA Section */}
        <div className="mt-24 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Not sure which solution fits?
          </h3>
          <p className="text-slate-400 mb-10 max-w-xl mx-auto">
            Every business is different. We offer custom quotes and flexible
            partnership models to ensure you get exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-blue-500 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all">
              Book a Strategy Call
            </button>
            <button className="px-10 py-4 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/5 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServicesPage;
