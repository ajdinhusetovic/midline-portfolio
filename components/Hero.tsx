"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce), (max-width: 767px)",
    );
    const sync = () => {
      if (media.matches) {
        videoRef.current?.pause();
        setPlaying(false);
      } else {
        videoRef.current
          ?.play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  const toggleVideo = async () => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      try {
        await videoRef.current?.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-[85svh] flex items-center justify-center overflow-hidden bg-slate-50 px-6 pt-32 pb-16 md:pt-36 md:pb-20"
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="none"
        poster="/background.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      >
        <source src="/bg_vid_comp.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-white/60" />
      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-widest mb-5">
            Web design & development • North Carolina
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Web design for{" "}
            <span className="text-blue-700">North Carolina</span> small
            businesses.
          </h1>
          <p className="mt-5 text-lg text-slate-700 leading-relaxed">
            Clear services. A professional look. An easy way to contact you.
            Serving Fayetteville, Charlotte, and businesses across the US.
          </p>
          <div className="mt-6">
            <p className="text-sm font-bold uppercase tracking-widest text-slate-600">
              Business Website
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900">
              Starting at <span className="text-blue-700">$999</span>{" "}
              <span className="text-base font-normal">USD</span>
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Up to five pages • Responsive design • Contact form
            </p>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 text-white px-8 py-3 font-bold hover:bg-blue-700 shadow-lg"
            >
              Request a quote
            </Link>
            <Link
              href="/our-work"
              className="rounded-full border border-slate-300 bg-white px-8 py-3 font-bold text-slate-900 hover:bg-slate-100"
            >
              View our work
            </Link>
          </div>
          <p className="mt-4 text-xs text-slate-600">
            Final pricing depends on scope.{" "}
            <Link
              href="/services"
              className="text-blue-700 underline underline-offset-4"
            >
              See what’s included
            </Link>
            .
          </p>
        </div>
        <div className="hidden lg:block rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
          <div className="px-6 py-4 flex justify-between items-center gap-3 border-b border-slate-100">
            <span className="text-xs uppercase tracking-widest font-bold text-slate-600">
              Selected project
            </span>
            <span className="rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-bold">
              Live website
            </span>
          </div>
          <div className="relative aspect-[1440/683]">
            <Image
              src="/ks-website.webp"
              alt="K&S Designs & Builds construction website designed by Midline Code"
              fill
              fetchPriority="high"
              sizes="(min-width: 1280px) 540px, 45vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-6">
            <p className="text-xl font-bold text-slate-900">
              K&S Designs & Builds
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Construction & remodeling website
            </p>
            <a
              href="https://www.ksbuildsnc.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex py-2 font-bold text-blue-700 underline underline-offset-4"
            >
              Visit live website{" "}
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
      <button
        onClick={toggleVideo}
        type="button"
        aria-label={
          playing ? "Pause background video" : "Play background video"
        }
        className="absolute bottom-4 right-4 rounded-lg border border-slate-300 bg-white/90 px-3 py-2 text-xs text-slate-700"
      >
        {playing ? "Pause background" : "Play background"}
      </button>
    </section>
  );
}
