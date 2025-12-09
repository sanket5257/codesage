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
            start: 'top 85%',
            end: 'top 50%',
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
    <section id="about" className="min-h-screen py-20 px-8 md:px-16 lg:px-24 bg-black">
      <div className="container mx-auto max-w-6xl">

        {/* Status Badge */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-green-400">available for work now :)</span>
          </div>
        </div>

        {/* Main Text Content */}
        <div ref={containerRef} className="space-y-10 text-3xl md:text-4xl lg:text-5xl leading-relaxed" style={{ fontFamily: 'Mynte, sans-serif' }}>

          <p>
            <span className="word font-bold">CODESAGE </span>
            {wrapWords('is a collective of passionate')}
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>digital </span>
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>innovators </span>
            {wrapWords('and multidisciplinary')}
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>designers </span>
            {wrapWords('dedicated to building bold brands and distinct online identities. We craft meaningful')}
            <span className="word" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>digital </span>
            {wrapWords('experiences that merge creativity with strategy, helping forward-thinking companies connect deeply with their audiences, accelerate their growth, and stand out in an increasingly competitive digital landscape. Our work bridges design, technology, and storytelling to deliver impactful results that leave a lasting impression.')}
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl" style={{ fontFamily: 'Instrument Serif, serif', fontStyle: 'italic' }}>
            {wrapWords('A Creative Digital Agency in Dubai', 'italic')}
          </p>

          <p className="text-2xl md:text-3xl lg:text-4xl">
            {wrapWords('We help brands grow through identity, strategy, and unique visual execution.')}
          </p>

          <p className="text-xl md:text-2xl">
            {wrapWords('Designing digital experiences that leave a lasting impression.')}
          </p>

        </div>
      </div>
    </section>
  );
}