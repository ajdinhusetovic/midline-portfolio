"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiCpu,
  FiShield,
  FiLock,
  FiSettings,
  FiShare2,
} from "react-icons/fi";

const WhyUs = () => {
  return (
    <main className="pt-32 pb-24 bg-white mt-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Header */}
        <div className="max-w-4xl mb-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tighter">
            Your Website is your <br />
            <span className="text-blue-400">Competitive Edge.</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            In a digital-first world, a &quot;good enough&quot; website
            isn&apos;t enough. We build technical engines that outperform
            templates, outrank competitors, and turn clicks into long-term
            revenue.
          </p>
        </div>

        {/* The "Facts" Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FiCpu className="text-blue-400" /> Performance & Speed
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Google&apos;s algorithm prioritizes &quot;Core Web Vitals.&quot;
                A site that loads slowly isn&apos;t just annoying; it&apos;s
                invisible. Our Next.js architecture ensures sub-second load
                times, reducing bounce rates by up to 40%.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <FiBarChart2 className="text-blue-400" /> Conversion Psychology
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Design is more than &quot;looking pretty.&quot; We use data and
                UX principles to guide your customers&apos; eyes exactly where
                you want them: the &quot;Contact&quot; button.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-blue-500/10">
            <h3 className="text-2xl font-bold mb-8 text-blue-400">
              Template vs. MidlineCode
            </h3>
            <ul className="space-y-6">
              {[
                {
                  label: "Ownership",
                  t: "Rented Assets",
                  m: "100% Client-Owned",
                },
                { label: "Speed", t: "Bloated/Slow", m: "Instant (Next.js)" },
                { label: "SEO", t: "Generic", m: "Semantically Perfect" },
                { label: "Scalability", t: "Limited", m: "Unlimited" },
              ].map((item) => (
                <li
                  key={item.label}
                  className="border-b border-white/10 pb-4 flex justify-between items-center text-sm"
                >
                  <span className="font-bold">{item.label}</span>
                  <div className="flex gap-4 text-right">
                    <span className="text-slate-500 line-through hidden sm:inline">
                      {item.t}
                    </span>
                    <span className="text-blue-400 font-bold">{item.m}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* The "Pillars" Section - Replaces the big text block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <FiLock className="text-blue-400" />,
              title: "Full Ownership",
              desc: "You own the source code, the data, and the deployment. No platform lock-in, ever.",
            },
            {
              icon: <FiSettings className="text-blue-400" />,
              title: "Tailored Payment Models",
              desc: "Whether you prefer a one-time investment or a managed monthly partnership, we have a plan that fits your cash flow.",
            },
            {
              icon: <FiShare2 className="text-blue-400" />,
              title: "National Reach",
              desc: "Optimized for global performance, whether your client is in NC or NYC.",
            },
            {
              icon: <FiShield className="text-blue-400" />,
              title: "Future Proof",
              desc: "Built on modern stacks that won't be obsolete in two years.",
            },
          ].map((pillar, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-white transition-all group"
            >
              <div className="text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WhyUs;
