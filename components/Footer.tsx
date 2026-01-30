'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import CTASection from './CTASection';

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress relative to the footer
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Transform scroll progress to scale and border radius
  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.8], ["50%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <>
      <CTASection />
      <footer 
      ref={footerRef}
      className="relative w-full h-screen flex items-center justify-center bg-transparent overflow-hidden"
    >
      <motion.div
        style={{
          scale,
          borderRadius,
        }}
        className="w-full h-full bg-white text-[#1a1a1a] flex items-center justify-center"
      >
        <motion.div 
          style={{ opacity }}
          className="max-w-7xl mx-auto px-8 md:px-16"
        >
          {/* Main Content Row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
            
            {/* Left Column */}
            <div className="w-full md:w-1/2">
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter">
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
                      backgroundImage: 'linear-gradient(90deg, #1a1a1a 40%, #3b82f6 50%, #1a1a1a 60%)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    A Privilege.
                  </motion.span>
                  
                  {/* Horizontal Flare Line across the text */}
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
                </span>
              </h2>
              <div className="mt-40 flex items-center gap-2">
                {/* Simple SVG Logo Placeholder */}
                <div className="grid grid-cols-2 gap-0.5 w-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-2 h-2 border border-black rotate-45" />
                  ))}
                </div>
                <span className="text-2xl font-semibold tracking-tight">kvelld</span>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full md:w-1/2 flex flex-col items-start">
              <h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-gray-400">
                {/* INNER TEXT SHIMMER EFFECT */}
                <span className="relative inline-block overflow-hidden">
                  <motion.span
                    animate={{ 
                      backgroundPosition: ['-200% 0%', '200% 0%'],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: 2.5 // Offset animation for visual variety
                    }}
                    style={{
                      backgroundImage: 'linear-gradient(90deg, #9ca3af 40%, #3b82f6 50%, #9ca3af 60%)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Beyond Reach.
                  </motion.span>
                  
                  {/* Horizontal Flare Line across the text */}
                  <motion.div 
                    animate={{ 
                      left: ['-100%', '200%'],
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: 2.5 // Offset animation for visual variety
                    }}
                    className="absolute top-1/2 -translate-y-1/2 w-40 h-[1px] bg-blue-400 blur-[2px] opacity-30 z-[-1]"
                  />
                </span>
              </h2>
              
              <div className="mt-20 max-w-sm">
                <p className="text-gray-500 text-lg leading-relaxed">
                  kvelld will never be open to the world, and it was never meant to be. 
                  Those inside live the results.
                </p>
                <p className="mt-6 text-lg font-medium">
                  Those outside will only see the shadows.
                </p>
              </div>

              <button className="mt-12 flex items-center gap-3 px-6 py-2 bg-[#eeeeee] rounded-sm text-xs font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors">
                <span className="text-base">⛩️</span>
                kvelld's gate
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-transparent text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">
            <div className="mb-4 md:mb-0">
              © 2026 kvelld
            </div>
            <div className="mb-4 md:mb-0">
              ALL RIGHTS RESERVED
            </div>
            <div>
              MADE BY <span className="text-black border-b border-black cursor-pointer">SANKET</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
    </>
  );
};

export default Footer;