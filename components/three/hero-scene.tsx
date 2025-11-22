'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Network node component
function NetworkNode({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.15, 0]} />
        <meshStandardMaterial
          color="#ff6b35"
          emissive="#ff6b35"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Connection lines between nodes
function ConnectionLines() {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const points = [];
    const nodePositions = [
      [-2, 1, -1], [2, 1.5, -2], [0, -1, -1.5],
      [-1.5, -0.5, -2], [1.5, 0, -1], [0, 2, -2],
    ];

    // Connect nodes
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        if (Math.random() > 0.5) {
          points.push(new THREE.Vector3(...nodePositions[i] as [number, number, number]));
          points.push(new THREE.Vector3(...nodePositions[j] as [number, number, number]));
        }
      }
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#00d4ff" transparent opacity={0.3} />
    </lineSegments>
  );
}

// Central sphere with distortion
function CentralSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#0a1628"
        emissive="#ff6b35"
        emissiveIntensity={0.1}
        metalness={0.9}
        roughness={0.1}
        distort={0.3}
        speed={2}
      />
    </mesh>
  );
}

// Main scene component
function Scene() {
  const nodePositions: [number, number, number][] = [
    [-2, 1, -1], [2, 1.5, -2], [0, -1, -1.5],
    [-1.5, -0.5, -2], [1.5, 0, -1], [0, 2, -2],
  ];

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ff6b35" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />

      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      <CentralSphere />
      <ConnectionLines />

      {nodePositions.map((pos, i) => (
        <NetworkNode key={i} position={pos} />
      ))}
    </>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
