'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect, useCallback } from 'react';

const images = [
  '/img/project1.avif',
  '/img/project2.avif',
  '/img/project3.avif',
  '/img/service-1.png',
  '/img/service-2.png',
  '/img/service-3.png',
];

interface ImageTrail {
  id: number;
  x: number;
  y: number;
  src: string;
  rotation: number;
}

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [imageTrails, setImageTrails] = useState<ImageTrail[]>([]);
  const lastPosition = useRef({ x: 0, y: 0 });
  const imageIndex = useRef(0);
  const trailId = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate distance moved
    const dx = x - lastPosition.current.x;
    const dy = y - lastPosition.current.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Only spawn new image if moved enough distance
    if (distance > 80) {
      lastPosition.current = { x, y };

      const newImage: ImageTrail = {
        id: trailId.current++,
        x,
        y,
        src: images[imageIndex.current % images.length],
        rotation: (Math.random() - 0.5) * 20,
      };

      imageIndex.current++;

      setImageTrails(prev => [...prev.slice(-5), newImage]); // Keep max 6 images
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Clear images after a delay
    setTimeout(() => {
      setImageTrails([]);
    }, 800);
  };

  // Remove old images after animation
  useEffect(() => {
    if (imageTrails.length === 0) return;

    const timer = setTimeout(() => {
      setImageTrails(prev => prev.slice(1));
    }, 1200);

    return () => clearTimeout(timer);
  }, [imageTrails]);

  return (
    <section className="relative py-16 md:py-20 lg:py-24 bg-black overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/09162a18-0c22dd3e.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden cursor-none"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
          }}
        >
          {/* Image trails at cursor position */}
          <AnimatePresence>
            {imageTrails.map((img) => (
              <motion.div
                key={img.id}
                className="absolute pointer-events-none z-10"
                style={{
                  left: img.x,
                  top: img.y,
                  x: '-50%',
                  y: '-50%',
                }}
                initial={{
                  opacity: 0,
                  scale: 0.3,
                  rotate: img.rotation - 10,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: img.rotation,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  filter: 'blur(10px)',
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                <div className="relative w-[200px] h-[150px] md:w-[260px] md:h-[180px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={img.src}
                    alt="Project"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Content - centered */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 pointer-events-none">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A project? Want to join us?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pointer-events-auto"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Let&apos;s talk</span>
                <svg
                  className="relative z-10 w-5 h-5 transform group-hover:translate-x-1 transition-all duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>

                {/* Button hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>
            </motion.div>
          </div>

          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-white/5 rounded-tl-3xl" />
          <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-white/5 rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-white/5 rounded-bl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-white/5 rounded-br-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
