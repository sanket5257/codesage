'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen w-full bg-black text-white pt-32 pb-20">
      {/* Video Background */}
      <div className="absolute inset-0 ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/09162a18-0c22dd3e.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-8">
            About Us
          </p>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] mb-12">
            You can't replicate a man's
            <br />
            {/* INNER TEXT SHIMMER EFFECT */}
            <span className="relative inline-block overflow-hidden">
              <motion.span
                animate={{
                  backgroundPosition: ['-200% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fff 40%, #3b82f6 50%, #fff 60%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                className="italic font-light"
              >
                signature
              </motion.span>
              <motion.div
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-1/2 -translate-y-1/2 w-40 h-[1px] bg-blue-400 blur-[2px] opacity-50 z-[-1]"
              />
            </span>{' '}
            from his{' '}
            <span className="relative inline-block overflow-hidden">
              <motion.span
                animate={{
                  backgroundPosition: ['-200% 0%', '200% 0%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.5
                }}
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fff 40%, #3b82f6 50%, #fff 60%)',
                  backgroundSize: '200% 100%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
                className="italic font-light"
              >
                text
              </motion.span>
              <motion.div
                animate={{
                  left: ['-100%', '200%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.5
                }}
                className="absolute top-1/2 -translate-y-1/2 w-20 h-[1px] bg-blue-400 blur-[2px] opacity-50 z-[-1]"
              />
            </span>.
          </h1>

          <div className="w-20 h-[1px] bg-blue-400 mb-8" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Every project we touch carries our unique signature—a blend of precision, 
            creativity, and technical excellence that can't be replicated. We don't follow 
            templates; we create originals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}