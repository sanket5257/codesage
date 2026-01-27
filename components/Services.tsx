'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Crosshair component for positioning elements
const Crosshair = () => (
  <div className="absolute top-4 right-4 flex items-center justify-center pointer-events-none">
    <div className="w-[1px] h-4 bg-white/30 absolute" />
    <div className="h-[1px] w-4 bg-white/30 absolute" />
  </div>
);

export default function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className=" "
        >
          <source src="/b56c9806-11400f44.mp4" type="video/mp4" />
        </video>
        
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-12 lg:px-24 py-24">
        {/* Crosshair positioning element */}
        <Crosshair />
        
        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column - Main Heading */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-6xl md:text-8xl lg:text-8xl font-normal tracking-tight leading-[0.9]">
                Elite Private Market
                <br />
                <span className="block">
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
                    >
                      Opportunities.
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
                  </span>{' '}
                  <span className="text-gray-400 font-extralight">
                    Tokenized.
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="space-y-8 lg:pl-8"
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                  One-of-a-kind access to the epitome of private market opportunities, once reserved for institutions.
                </p>
                
                <p className="text-lg md:text-xl text-white font-light leading-relaxed">
                  Compounding wealth, seamlessly.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                    [001] Elite Design
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Crafting distinct visual identities for the next generation of ownership.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                    [002] Advanced Tech
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    High-performance digital infrastructure for private market ecosystems.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                    [003] Market Intel
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Data-driven strategies to navigate and dominate exclusive markets.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-mono uppercase tracking-wider text-blue-400">
                    [004] Tokenization
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Revolutionary blockchain solutions for fractional ownership and liquidity.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="absolute bottom-8 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/20 pt-6">
            <div className="space-y-1">
              <p className="text-[10px] font-mono tracking-[0.3em] text-gray-400 uppercase">
                TGE | TITANGATE EQUITY
              </p>
              <p className="text-[10px] font-mono tracking-[0.3em] text-white uppercase">
                001 — ELITE PRIVATE MARKET ACCESS
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-gray-400">
                Invitation Only. <span className="text-white">Unmatched access to the world's most coveted.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}