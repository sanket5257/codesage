'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col bg-black text-white selection:bg-white selection:text-black overflow-hidden">
      
      {/* BACKGROUND & OVERLAYS */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay loop muted playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/09162a18-0c22dd3e.mp4" type="video/mp4" />
        </video>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-7xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase mb-6 text-gray-400 font-medium">
              A Closed Network
            </span>
            
            <h1 className="text-6xl md:text-8xl lg:text-8xl font-normal tracking-tight leading-[0.9] mb-12">
              A New Class <br />
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
                  of Ownership
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
            </h1>

            {/* SUB-NAV */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-sm mb-16">
              {['Vision', 'Opportunities', 'Pioneers', 'Manifesto'].map((item) => (
                <Link 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-[10px] uppercase tracking-[0.2em] text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* FOOTER CALLOUT */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="relative z-10 pb-12 text-center"
      >
        <p className="text-sm md:text-lg text-gray-400 font-light">
          <strong className="text-white font-medium">Invitation Only.</strong> Unmatched access to the <br />
          world's most coveted opportunities.
        </p>
      </motion.div>

    </section>
  );
}