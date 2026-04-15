"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import ContactForm from "@/components/ContactForm"; // Adjust this path to your actual component location

const projects = [
  {
    title: "K&S Designs & Builds",
    category: "Construction & Remodeling",
    description:
      "A premium, high-conversion platform built for a North Carolina-based construction firm. Focused on lead generation and high-end visual storytelling.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/ks-website.png",
    link: "#",
  },
  {
    title: "The Chicken Brand",
    category: "Concept // Restaurant Branding",
    description:
      "A visually striking website and brand identity for a trendy fried chicken restaurant. Emphasizes bold design and seamless user experience.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/chicken-website.png",
    link: "https://the-chicken-brand.vercel.app/",
  },
];

const ProjectsPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <main className="pt-32 pb-24 bg-white min-h-screen mt-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="max-w-3xl mb-20">
            <h1 className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
              Digital <span className="text-blue-400">Engines.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              We don&apos;t just build websites; we build scalable digital
              infrastructure. Every project is custom-coded for speed, SEO, and
              massive growth.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-slate-50 rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-2 block">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 tracking-tight italic">
                        {project.title}
                      </h3>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white rounded-2xl text-slate-900 hover:bg-blue-400 hover:text-white transition-all shadow-sm border border-slate-100 cursor-pointer"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-slate-600 mb-8 flex-grow leading-relaxed font-medium">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 bg-white border border-slate-200 text-slate-500 text-xs font-bold rounded-full uppercase tracking-tight"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* The "Performance Over WordPress" Banner */}
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="max-w-xl text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                Ready to leave the <br />
                <span className="text-blue-400">templates behind?</span>
              </h2>
              <p className="text-slate-400 text-lg font-medium">
                We focus on clean code and artisan design that outranks and
                outperforms standard web builders. Your project is next.
              </p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="px-12 py-6 bg-blue-500 hover:bg-blue-400 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 text-lg uppercase tracking-widest active:scale-95 cursor-pointer"
            >
              Let&apos;s Build Together
            </button>
          </div>
        </div>
      </main>

      <ContactForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default ProjectsPage;
