"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiTrendingUp, FiShield, FiZap, FiTarget } from "react-icons/fi";

const stats = [
  {
    icon: <FiZap className="text-blue-400" size={28} />,
    title: "Performance is Profit",
    description:
      "Every 100ms of latency costs 1% in sales. We architect for sub-second speeds using Next.js to ensure you never lose a lead to a slow loader.",
  },
  {
    icon: <FiTarget className="text-blue-400" size={28} />,
    title: "SEO-First Engineering",
    description:
      "A website is your 24/7 salesperson. Our custom code is semantically built so Google can crawl, index, and rank your business higher than the competition.",
  },
  {
    icon: <FiShield className="text-blue-400" size={28} />,
    title: "Trust & Credibility",
    description:
      "75% of consumers judge a company's credibility by its website design. We provide the 'Big Agency' look at a fraction of the cost.",
  },
  {
    icon: <FiTrendingUp className="text-blue-400" size={28} />,
    title: "Future-Proof Growth",
    description:
      "Templates break. Our bespoke code scales. Whether you're adding a booking system or a client portal, your foundation is built to expand.",
  },
];

const WhyDigitalMatters = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-blue-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
              The Digital Reality
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
              A website isn&apos;t an expense. <br />
              <span className="text-blue-400 italic">
                It&apos;s an investment.
              </span>
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              In a digital-first economy, your website is often the only thing
              standing between a potential client and a competitor. We build the
              tools that make the choice obvious.
            </p>

            {/* CTA to your dedicated /why-us page */}
            <div className="flex items-center gap-6">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all">
                Get a Strategy Call
              </button>
              <a
                href="/why-us"
                className="text-sm font-bold border-b-2 border-blue-400/30 hover:border-blue-400 transition-all pb-1"
              >
                Read the Case for Custom Code
              </a>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/[0.08] transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-500">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDigitalMatters;
