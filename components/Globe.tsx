"use client";

import dynamic from "next/dynamic";

// Dynamically import so it only runs on client
const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), { ssr: false });

const Globe: React.FC = () => {
  return (
    <div className="w-full h-[500px]">
      <GlobeCanvas />
    </div>
  );
};

export default Globe;
