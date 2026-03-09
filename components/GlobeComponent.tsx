"use client";

import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";

interface Arc {
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  color: [string, string];
}

const HeroGlobe: React.FC<{ width?: string; height?: string }> = ({
  width = "100%",
  height = "400px",
}) => {
  const globeRef = useRef<Globe | null>(null);
  const [arcsData, setArcsData] = useState<Arc[]>([]);

  useEffect(() => {
    // Generate random arcs
    const N = 20;
    const arcs: Arc[] = [...Array(N)].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["red", "white", "blue", "green"][Math.floor(Math.random() * 4)],
        ["red", "white", "blue", "green"][Math.floor(Math.random() * 4)],
      ],
    }));
    setArcsData(arcs);
  }, []);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 2 }, 0);
    }
  }, []);

  return (
    <div style={{ width, height }}>
      <Globe
        ref={globeRef}
        width={typeof window !== "undefined" ? window.innerWidth : 400} // fallback
        height={parseInt(height)}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        backgroundColor="transparent" // transparent background
        autoRotate={true}
        autoRotateSpeed={0.5}
        arcsData={arcsData}
        arcColor="color"
        arcDashLength={() => Math.random()}
        arcDashGap={() => Math.random()}
        arcDashAnimateTime={() => Math.random() * 4000 + 500}
      />
    </div>
  );
};

export default HeroGlobe;
