"use client";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";

// 3D Silver Robotic Hand Model Component with Scroll Rotation
function RoboticHandModel({ scrollProgress }: { scrollProgress: any }) {
  const { scene } = useGLTF("/models/hands.glb");
  const modelRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    // Apply silver material to all meshes in the scene
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#C0C0C0",
          metalness: 0.9,
          roughness: 0.1,
          envMapIntensity: 1.2,
        });
      }
    });
  }, [scene]);

  // Apply scroll-based rotation to the 3D model
  useFrame(() => {
    if (modelRef.current && scrollProgress) {
      const progress = scrollProgress.get();
      modelRef.current.rotation.x = -0.2 + Math.sin(progress * Math.PI * 2) * 0.3;
      modelRef.current.rotation.y = -0.3 + Math.cos(progress * Math.PI * 2) * 0.4;
      modelRef.current.rotation.z = 0.1 + progress * 0.2;
    }
  });

  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={[6, 6, 6]} 
      position={[3, -1, 0]}
      rotation={[-0.2, -0.3, 0.1]}
    />
  );
}

// Loading fallback for 3D model
function ModelLoader() {
  return (
    <mesh position={[3, -1, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#C0C0C0" metalness={0.9} roughness={0.1} />
    </mesh>
  );
}

export default function LegacyAISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const handRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Check if hand is in view
  const isHandInView = useInView(handRef, { 
    once: false, 
    margin: "-10% 0px -10% 0px" 
  });
  
  // Transform scroll progress to rotation values only
  const rotationX = useTransform(scrollYProgress, [0, 0.5, 1], [-0.4, 0, 0.4]);
  const rotationY = useTransform(scrollYProgress, [0, 0.5, 1], [-0.3, 0, 0.3]);
  const rotationZ = useTransform(scrollYProgress, [0, 1], [0, 0.2]);
  
  // Add spring physics to the rotations for smoother animation
  const springRotationX = useSpring(rotationX, { stiffness: 100, damping: 30 });
  const springRotationY = useSpring(rotationY, { stiffness: 100, damping: 30 });
  const springRotationZ = useSpring(rotationZ, { stiffness: 100, damping: 30 });

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-start overflow-x-hidden bg-black"
    >
      
      
      

      

      {/* 3D Robotic Hand with Scroll-Triggered Rotation */}
      <motion.div 
        ref={handRef}
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHandInView ? 1 : 0.8,
        }}
        transition={{ 
          duration: 1.2, 
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
          className="w-full h-full"
          gl={{ alpha: true, antialias: true }}
        >
          <Suspense fallback={<ModelLoader />}>
            {/* Studio lighting for chrome effect */}
            <ambientLight intensity={0.4} color="#ffffff" />
            <directionalLight 
              position={[10, 10, 5]} 
              intensity={2.5} 
              color="#ffffff"
            />
            <directionalLight 
              position={[-5, 5, 5]} 
              intensity={1.8} 
              color="#e6f3ff"
            />
            <directionalLight 
              position={[0, -10, 5]} 
              intensity={1.5} 
              color="#ffffff"
            />
            <pointLight 
              position={[5, 0, 3]} 
              intensity={2.0} 
              color="#ffffff"
            />
            <RoboticHandModel scrollProgress={scrollYProgress} />
            <OrbitControls 
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              autoRotateSpeed={0}
            />
          </Suspense>
        </Canvas>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24">
        <div className="max-w-2xl">
          
          {/* Main Heading with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ 
              duration: 1, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 100,
              damping: 15
            }}
            className="mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-4">
              Kvell Dynamics,
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-white/90 italic leading-tight">
              built by experts
            </h2>
          </motion.div>

          {/* Description with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30, x: -20 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: "spring",
              stiffness: 120,
              damping: 20
            }}
            className="mb-12"
          >
            <p className="text-lg text-white/70 leading-relaxed max-w-lg">
              KvellD is a premier IT consulting firm specializing in artificial 
              intelligence, machine learning, and enterprise automation. We transform 
              legacy systems into intelligent, future-ready platforms.
            </p>
          </motion.div>

          {/* Action Buttons with Spring Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 150,
              damping: 25
            }}
            className="flex flex-wrap gap-4"
          >
            <motion.button 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Explore Our Services
            </motion.button>
            <motion.button 
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 25px rgba(255,255,255,0.1)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Request a Consultation
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}