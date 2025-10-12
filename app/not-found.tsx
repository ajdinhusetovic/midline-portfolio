"use client";

import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();
  return (
    <section className="h-screen flex items-center justify-center text-white">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl flex flex-col lg:flex-row lg:w-full w-[90%] text-center lg:gap-2 items-center">
          <span className="text-6xl text-blue-400">404</span> This page doesn
          {"'"}t exist
        </h1>
        <button
          onClick={() => router.push("/")}
          className="w-[50%] lg:w-[30%] rounded-4xl text-lg font-semibold cursor-pointer hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] transition-all duration-300 bg-white/5 backdrop-blur-sm p-3 mt-8 mx-auto "
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
