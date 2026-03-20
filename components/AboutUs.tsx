"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const AboutUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="about-us"
      className="relative py-24 lg:py-32 overflow-hidden bg-white"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-[#87CEEB]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-slate-100 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full xl:w-1/2 relative"
          >
            <div className="relative z-10 rounded-3xl bg-slate-50 p-3 border border-slate-200/60 shadow-2xl">
              <Image
                src="/map-team.svg"
                alt="MidlineCode Global Reach"
                width={600}
                height={600}
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>

            <div className="absolute -bottom-10 -right-4 lg:right-10 z-20 bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white shadow-xl max-w-[240px] hidden md:block">
              <p className="text-[#87CEEB] font-bold text-3xl mb-1">Global</p>
              <p className="text-slate-600 text-sm font-medium leading-tight">
                Delivering high-performance digital solutions across the U.S.
                and Europe.
              </p>
            </div>

            <div className="absolute -top-6 -left-6 h-32 w-32 border-t-4 border-l-4 border-[#87CEEB]/30 rounded-tl-3xl -z-10" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full xl:w-1/2 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <span className="text-[#87CEEB] font-bold tracking-widest uppercase text-sm mb-4">
                Our Mission
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Custom Code. <br />{" "}
                <span className="text-[#87CEEB]">Measurable Results.</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                From our roots in{" "}
                <span className="font-semibold text-slate-900 underline decoration-[#87CEEB] decoration-2 underline-offset-4">
                  Fayetteville, North Carolina
                </span>
                , MidlineCode has grown into a versatile digital powerhouse. We{" "}
                {"don't"} just install templates; we architect the technical
                engines that power modern brands.
              </p>

              <p>
                Our philosophy is simple:{" "}
                <span className="font-bold text-slate-900">
                  Precision in Code, Excellence in Design.
                </span>{" "}
                We move beyond standard limitations to provide{" "}
                <span className="text-slate-900 font-medium">
                  custom-coded solutions
                </span>{" "}
                that offer superior speed, security, and scalability for
                businesses that refuse to settle for average.
              </p>

              {/* Enhanced Pill Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                {[
                  "Fayetteville Local Presence",
                  "Performance-Driven Coding",
                  "Custom-Coded Architectures",
                  "Strategic UX Design",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 group hover:border-[#87CEEB]/30 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#87CEEB] shadow-[0_0_8px_rgba(135,206,235,0.8)]" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wide group-hover:text-slate-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block px-10 py-4 bg-slate-900 text-white font-bold rounded-xl transition-all hover:bg-[#87CEEB] hover:scale-105 hover:shadow-xl hover:shadow-[#87CEEB]/20 text-center cursor-pointer"
              >
                Start Your Custom Project
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Overlay */}
      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
};

export default AboutUs;
