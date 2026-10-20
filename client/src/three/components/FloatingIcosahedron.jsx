import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function FloatingIcosahedron({ position = [0, 0, 0], mouse = { x: 0, y: 0 } }) {
  const groupRef = useRef();
  const innerRef = useRef();
  const outerWireframeRef = useRef();

  useFrame((state, delta) => {
    // Check for reduced motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const speedMultiplier = prefersReducedMotion ? 0.05 : 1;

    if (groupRef.current) {
      // Smoothly tilt toward mouse target with damping
      const targetRotationX = (mouse.y * 0.4);
      const targetRotationY = (mouse.x * 0.4);

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotationX,
        0.05
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      );
    }

    if (innerRef.current) {
      innerRef.current.rotation.x += delta * 0.2 * speedMultiplier;
      innerRef.current.rotation.y += delta * 0.3 * speedMultiplier;
    }

    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.x -= delta * 0.15 * speedMultiplier;
      outerWireframeRef.current.rotation.y -= delta * 0.25 * speedMultiplier;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Outer subtle geometric wireframe */}
      <mesh ref={outerWireframeRef}>
        <icosahedronGeometry args={[2.3, 1]} />
        <meshBasicMaterial
          color="#00f0ff"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Middle cyan geometric ring */}
      <mesh>
        <torusGeometry args={[2.7, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Inner metallic glowing cyber core */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          roughness={0.25}
          metalness={0.85}
        />
      </mesh>
    </group>
  );
}
