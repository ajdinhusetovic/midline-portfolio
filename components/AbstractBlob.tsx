// components/AbstractBlob.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Animate the blob
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <icosahedronGeometry args={[1, 5]} />
      <MeshWobbleMaterial
        color="#00aaff"
        factor={0.6} // wobble intensity
        speed={2} // wobble speed
        roughness={0.2}
        metalness={0.6}
      />
    </mesh>
  );
}

export default function AbstractBlob() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Blob />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
