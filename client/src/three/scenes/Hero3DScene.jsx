import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingIcosahedron } from '../components/FloatingIcosahedron.jsx';
import { ParticleField } from '../components/ParticleField.jsx';

export function Hero3DScene() {
  return (
    <div className="w-full h-full min-h-[380px] lg:min-h-[480px] relative pointer-events-none">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 7], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00f0ff" />
          <pointLight position={[-10, -10, -5]} intensity={0.8} color="#a855f7" />
          <FloatingIcosahedron position={[0, 0, 0]} />
          <ParticleField count={100} />
        </Canvas>
      </Suspense>
    </div>
  );
}
