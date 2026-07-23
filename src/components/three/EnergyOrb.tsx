"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Environment } from "@react-three/drei";

export function EnergyOrb() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      <Canvas 
        camera={{ position: [0, 0, 3] }}
        dpr={[1, 2]} 
        gl={{ antialias: false, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[2, 5, 2]} intensity={2} />
        <Environment preset="sunset" />
        <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
          <Sphere args={[1, 100, 100]} scale={1.2}>
            <MeshDistortMaterial
              color="#e6d5d1" // dusty-rose tint
              attach="material"
              distort={0.4} // amount of distortion
              speed={2} // speed of distortion
              roughness={0.2}
              metalness={0.1}
              transparent
              opacity={0.9}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  );
}
