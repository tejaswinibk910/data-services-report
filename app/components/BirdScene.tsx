'use client'

import { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Bird({ position, delay }: { position: [number, number, number], delay: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const wingLeftRef = useRef<THREE.Mesh>(null)
  const wingRightRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!groupRef.current || !wingLeftRef.current || !wingRightRef.current) return
    
    const time = state.clock.getElapsedTime() + delay
    
    // Gentle floating motion
    groupRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.2
    groupRef.current.position.x = position[0] + Math.sin(time * 0.3) * 0.15
    groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1
    
    // Wing flapping
    const wingFlap = Math.sin(time * 3) * 0.3
    wingLeftRef.current.rotation.z = -0.3 + wingFlap
    wingRightRef.current.rotation.z = 0.3 - wingFlap
  })

  return (
    <group ref={groupRef} position={position}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial 
          color="#001E5F"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 0.2, 0.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color="#001E5F"
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      
      {/* Beak */}
      <mesh position={[0, 0.15, 0.25]} rotation={[Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.05, 0.15, 8]} />
        <meshStandardMaterial color="#FFD82B" />
      </mesh>
      
      {/* Left Wing */}
      <mesh ref={wingLeftRef} position={[-0.2, 0, 0]} rotation={[0, 0, -0.3]}>
        <boxGeometry args={[0.5, 0.05, 0.3]} />
        <meshStandardMaterial 
          color="#003EFF"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      
      {/* Right Wing */}
      <mesh ref={wingRightRef} position={[0.2, 0, 0]} rotation={[0, 0, 0.3]}>
        <boxGeometry args={[0.5, 0.05, 0.3]} />
        <meshStandardMaterial 
          color="#003EFF"
          roughness={0.3}
          metalness={0.2}
        />
      </mesh>
      
      {/* Tail */}
      <mesh position={[0, -0.05, -0.3]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[0.15, 0.03, 0.25]} />
        <meshStandardMaterial 
          color="#0066FD"
          roughness={0.3}
        />
      </mesh>
    </group>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const count = 100
    const positions = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    
    return positions
  }, [])
  
  useFrame((state) => {
    if (!particlesRef.current) return
    particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        color="#FFD82B"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function Birds() {
  return (
    <group>
      <Bird position={[-2.5, 0.5, -3]} delay={0} />
      <Bird position={[2, 0, -2]} delay={1} />
      <Bird position={[0, -0.5, -4]} delay={2} />
      <Bird position={[-1, 1.5, -1]} delay={3} />
      <Particles />
    </group>
  )
}

export default function BirdScene() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#FFD82B" />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} color="#003EFF" />
        <Suspense fallback={null}>
          <Birds />
        </Suspense>
      </Canvas>
    </div>
  )
}
