"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const GlobeCanvas: React.FC = () => {
  // Load texture only in render (client-side)
  const earthTexture = new THREE.TextureLoader().load(
    "https://unpkg.com/three-globe/example/img/earth-clouds.png"
  );

  return (
    <Canvas>
      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />

      {/* Stars background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      <Suspense fallback={null}>
        {/* Earth Sphere */}
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial map={earthTexture} />
        </mesh>
      </Suspense>

      {/* Controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        rotateSpeed={0.3}
        autoRotate={true}
        autoRotateSpeed={0.2}
      />
    </Canvas>
  );
};

export default GlobeCanvas;
