"use client";

import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none mix-blend-multiply opacity-60">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        {/* Warm dusty rose particles */}
        <Sparkles 
          count={150} 
          scale={12} 
          size={3} 
          speed={0.2} 
          opacity={0.4} 
          color="#d69f9a" 
        />
        {/* Soft sage particles */}
        <Sparkles 
          count={100} 
          scale={10} 
          size={5} 
          speed={0.15} 
          opacity={0.3} 
          color="#b8bba3" 
        />
        {/* Subtle gold particles */}
        <Sparkles 
          count={50} 
          scale={8} 
          size={2} 
          speed={0.1} 
          opacity={0.6} 
          color="#c5a059" 
        />
      </Canvas>
    </div>
  );
}
