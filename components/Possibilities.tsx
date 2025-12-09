'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Possibilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftTextRef = useRef<HTMLDivElement>(null);
  const rightTitleRef = useRef<HTMLDivElement>(null);
  const rightDesc1Ref = useRef<HTMLParagraphElement>(null);
  const rightDesc2Ref = useRef<HTMLDivElement>(null);
  const rotatingWordRef = useRef<HTMLSpanElement>(null);
  
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['reconstruct', 'redefine', 'reconfigure'];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left text animation
      if (leftTextRef.current) {
        gsap.from(leftTextRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        });
      }

      // Right title animation
      if (rightTitleRef.current) {
        gsap.from(rightTitleRef.current.children, {
          opacity: 0,
          x: 50,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          }
        });
      }

      // Right description animations
      if (rightDesc1Ref.current) {
        gsap.from(rightDesc1Ref.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          }
        });
      }

      if (rightDesc2Ref.current) {
        gsap.from(rightDesc2Ref.current.children, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 40%',
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Rotating word animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (rotatingWordRef.current) {
        // Fade out
        gsap.to(rotatingWordRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: 'power2.in',
          onComplete: () => {
            // Change word
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            // Fade in
            gsap.fromTo(
              rotatingWordRef.current,
              { opacity: 0, y: 10 },
              { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
            );
          }
        });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-black text-white flex items-center px-8 md:px-16 lg:px-24 py-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        // playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      >
        <source src="/8760caa0-582a50ce.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Side - Unseen Possibilities */}
        <div ref={leftTextRef} className="flex flex-col justify-center">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-[Instrument-Serif] leading-tight">
            Unseen
          </h2>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light font-[Instrument-Serif] leading-tight">
            Possibilities.
          </h2>
        </div>

        {/* Right Side - Institutional-Grade Protection */}
        <div className="flex flex-col justify-center space-y-8">
          {/* Title */}
          <div ref={rightTitleRef}>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light font-[Instrument-Serif] leading-tight">
              Institutional-
            </h3>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light font-[Instrument-Serif] leading-tight">
              Grade Protection.
            </h3>
          </div>

          {/* First Description */}
          <p ref={rightDesc1Ref} className="text-base md:text-lg font-light leading-relaxed text-gray-300">
            Private markets were designed to exclude, even those within. Opacity, risk & insider walls were once the norm.
          </p>

          {/* Second Description with Highlight */}
          <div ref={rightDesc2Ref} className="space-y-4">
            <p className="text-base md:text-lg font-light leading-relaxed text-gray-300">
              We <span 
                ref={rotatingWordRef} 
                className="inline-block bg-gradient-to-r from-neutral-400 via-neutral-600 to-blue-800 bg-clip-text text-transparent font-medium"
              >
                {words[currentWordIndex]}
              </span> the standards once taken for granted.
            </p>
            <p className="text-sm md:text-base font-light leading-relaxed text-gray-500">
              Through blockchain verification, secure SPV structures, and the <span className="text-white">power of decentralization</span>, every deal is transparent, trusted, and built for protection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
