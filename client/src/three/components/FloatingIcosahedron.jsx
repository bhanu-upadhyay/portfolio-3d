import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingIcosahedron({ position = [0, 0, 0] }) {
  const meshRef = useRef();
  const wireframeRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.25;
      meshRef.current.rotation.y += delta * 0.35;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.15;
      wireframeRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <group position={position}>
      {/* Outer wireframe geometry */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Inner metallic glowing core */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 0]} />
        <meshStandardMaterial
          color="#1e1b4b"
          emissive="#3b82f6"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}
