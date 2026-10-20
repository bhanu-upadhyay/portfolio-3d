import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingIcosahedron } from '../components/FloatingIcosahedron.jsx';
import { ParticleField } from '../components/ParticleField.jsx';
import { useSceneMouse } from '../hooks/useSceneMouse.js';

export function Hero3DScene() {
  const mouse = useSceneMouse();
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch (e) {
      setHasWebGL(false);
    }
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full min-h-[340px] flex items-center justify-center p-6 text-center">
        <div className="w-32 h-32 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-2 border-cyan-400 border-dashed animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full min-h-[360px] sm:min-h-[420px] lg:min-h-[460px] relative pointer-events-auto">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-cyan-500/30 border-t-cyan-400 animate-spin" />
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0, 7.2], fov: 42 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} color="#00f0ff" />
          <pointLight position={[-10, -10, -5]} intensity={0.9} color="#a855f7" />
          <FloatingIcosahedron position={[0, 0, 0]} mouse={mouse} />
          <ParticleField count={80} />
        </Canvas>
      </Suspense>
    </div>
  );
}
