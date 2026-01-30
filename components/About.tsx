'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll('.word');

    // Responsive ScrollTrigger configuration
    const isMobile = window.innerWidth < 768;
    const scrollConfig = isMobile
      ? { start: 'top 90%', end: 'top 60%' }
      : { start: 'top 85%', end: 'top 50%' };

    words.forEach((word) => {
      gsap.fromTo(
        word,
        {
          color: '#4b5563',
        },
        {
          color: '#ffffff',
          duration: 0.3,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: word,
            start: scrollConfig.start,
            end: scrollConfig.end,
            scrub: 1,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const wrapWords = (text: string, className: string = '') => {
    return text.split(' ').map((word, index) => (
      <span key={index} className={`word ${className}`}>
        {word}{' '}
      </span>
    ));
  };

  return (
    <section id="about" className="min-h-screen py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-black">
      <div className="container mx-auto max-w-6xl">

        {/* Status Badge - Responsive */}
        <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-green-500/30 bg-green-500/10">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs md:text-sm text-green-400">available for work now :)</span>
          </div>
        </div>

        {/* Main Text Content - Responsive Typography */}
        <div ref={containerRef} className="space-y-6 md:space-y-8 lg:space-y-10 text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl leading-relaxed">

          <p>
            <span className="word font-bold">KEVELL DYNAMICS </span>
            {wrapWords('is a collective of passionate')}
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>digital </span>
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>innovators </span>
            {wrapWords('and multidisciplinary')}
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>designers </span>
            {wrapWords('dedicated to building bold brands and distinct online identities. We craft meaningful')}
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>digital </span>
            {wrapWords('experiences that merge creativity with strategy, helping forward-thinking companies connect deeply with their audiences, accelerate their growth, and stand out in an increasingly competitive digital landscape. Our work bridges design, technology, and storytelling to deliver impactful results that leave a lasting impression.')}
          </p>

          <p className="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
            {wrapWords('A Creative Digital Agency in India', 'italic')}
          </p>

          <p className="text-sm sm:text-base md:text-xl lg:text-3xl xl:text-4xl">
            {wrapWords('We help brands grow through identity, strategy, and unique visual execution.')}
          </p>

          <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl">
            {wrapWords('Designing digital experiences that leave a lasting impression.')}
          </p>

        </div>
      </div>
    </section>
  );
}