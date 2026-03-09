"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { useRef, useMemo } from "react";
import * as THREE from "three";

// Particle background
function ParticleField({ count = 300 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) pointsRef.current.rotation.y += 0.0005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00aaff" size={0.05} sizeAttenuation />
    </points>
  );
}

// Rotating central shape
function CentralShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.4, 100, 16]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.5}
        metalness={0.6}
        roughness={0.2}
      />
    </mesh>
  );
}

// Orbiting words
function WordOrbit({
  words,
  radius = 4,
}: {
  words: string[];
  radius?: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  const wordPositions = useMemo(() => {
    const positions: { position: [number, number, number]; word: string }[] =
      [];
    const phiStep = Math.PI * (3 - Math.sqrt(5));
    const n = words.length;

    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phiStep * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      positions.push({
        position: [x * radius, y * radius, z * radius],
        word: words[i],
      });
    }
    return positions;
  }, [words, radius]);

  useFrame(() => {
    if (groupRef.current) groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef}>
      {wordPositions.map(({ position, word }, idx) => (
        <Text
          key={idx}
          position={position}
          fontSize={0.4}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
          material-toneMapped={false}
        >
          <meshStandardMaterial emissive="#00ffff" emissiveIntensity={0.5} />
          {word}
        </Text>
      ))}
    </group>
  );
}

// Optional: log viewport size inside Canvas
function ViewportLogger() {
  const { viewport } = useThree();
  // console.log(viewport); // Uncomment to debug viewport size
  return null;
}

export default function CoolWordCloud({ words }: { words: string[] }) {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 20 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />

      <ParticleField count={300} />
      <CentralShape />
      <WordOrbit words={words} radius={4} />

      <OrbitControls enableZoom={false} enablePan={false} />
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          intensity={0.5}
        />
      </EffectComposer>

      <ViewportLogger />
    </Canvas>
  );
}
