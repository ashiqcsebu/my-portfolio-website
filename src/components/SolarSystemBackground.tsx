import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Planet component
const Planet = ({ position, size, color, orbitSpeed, rotationSpeed }: {
  position: [number, number, number];
  size: number;
  color: string;
  orbitSpeed: number;
  rotationSpeed: number;
}) => {
  const planetRef = useRef<THREE.Mesh>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y += orbitSpeed;
    }
    if (planetRef.current) {
      planetRef.current.rotation.y += rotationSpeed;
    }
  });

  return (
    <group ref={orbitRef}>
      <mesh ref={planetRef} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};

// Sun component
const Sun = () => {
  const sunRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (sunRef.current) {
      sunRef.current.rotation.y += 0.005;
    }
  });

  const sunMaterial = useMemo(() => {
    const material = new THREE.MeshBasicMaterial({
      color: '#FFD700',
      transparent: true,
      opacity: 0.8
    });
    return material;
  }, []);

  return (
    <group>
      <mesh ref={sunRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <primitive object={sunMaterial} />
      </mesh>
      <pointLight color="#FFD700" intensity={2} distance={100} />
      <pointLight color="#FFA500" intensity={0.5} distance={200} />
    </group>
  );
};

// Main solar system scene
const SolarSystemScene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Stars 
        radius={300} 
        depth={60} 
        count={1000} 
        factor={7} 
        saturation={0} 
        fade={true}
      />
      
      <Sun />
      
      {/* Mercury */}
      <Planet 
        position={[4, 0, 0]} 
        size={0.3} 
        color="#8C6239" 
        orbitSpeed={0.02} 
        rotationSpeed={0.005}
      />
      
      {/* Venus */}
      <Planet 
        position={[6, 0, 0]} 
        size={0.4} 
        color="#FFC649" 
        orbitSpeed={0.015} 
        rotationSpeed={0.003}
      />
      
      {/* Earth */}
      <Planet 
        position={[8, 0, 0]} 
        size={0.5} 
        color="#6B93D6" 
        orbitSpeed={0.01} 
        rotationSpeed={0.008}
      />
      
      {/* Mars */}
      <Planet 
        position={[10, 0, 0]} 
        size={0.4} 
        color="#CD5C5C" 
        orbitSpeed={0.008} 
        rotationSpeed={0.007}
      />
      
      {/* Jupiter */}
      <Planet 
        position={[14, 0, 0]} 
        size={1.2} 
        color="#D8CA9D" 
        orbitSpeed={0.005} 
        rotationSpeed={0.01}
      />
      
      {/* Saturn */}
      <Planet 
        position={[18, 0, 0]} 
        size={1.0} 
        color="#FAD5A5" 
        orbitSpeed={0.003} 
        rotationSpeed={0.009}
      />
    </>
  );
};

const SolarSystemBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 10, 25], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <SolarSystemScene />
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.2}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
};

export default SolarSystemBackground;