'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect slightly earlier for a smoother feel
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
      scrolled 
        ? 'bg-white/[0.03] backdrop-blur-xl border-b border-white/10 py-3' 
        : 'bg-transparent py-6'
    }`}>
      <div className="relative max-w-[1800px] mx-auto px-6 flex items-center justify-between">
        
        {/* 1. LEFT SIDE (Placeholder for balance) */}
        <div className="hidden md:block w-32" />

        {/* 2. CENTERED BRANDING */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="flex items-center gap-3 group">
            {/* Logo Icon matching the image style */}
            <div className="relative w-4 h-4 border border-white/40 rotate-45 flex items-center justify-center group-hover:border-white transition-colors">
              <div className="w-1 h-1 bg-white" />
            </div>
            <span className="text-lg md:text-xl font-normal tracking-tight text-white uppercase whitespace-nowrap">
              Kvell Dynamics
            </span>
          </Link>
        </div>

        {/* 3. RIGHT SIDE (Titan's Gate Button) */}
        <div className="flex items-center">
          <button className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-[2px] group">
            {/* Gate Icon */}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white opacity-70 group-hover:opacity-100 transition-opacity">
              <path d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16M3 21h18M10 21V11h4v10" />
            </svg>
            <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white">
              Kvell's Gate
            </span>
          </button>
        </div>

      </div>
    </nav>
  );
}