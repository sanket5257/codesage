'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MicroTextProps {
  text: string;
  className?: string;
  textClassName?: string;
  startOpacity?: number;
  endOpacity?: number;
  startColor?: string;
  endColor?: string;
}

export default function MicroText({
  text,
  className = '',
  textClassName = 'text-[10px] md:text-xs leading-relaxed',
  startOpacity = 0.15,
  endOpacity = 0.8,
  startColor = '#1a1a1a',
  endColor = '#888888',
}: MicroTextProps) {
  const microTextRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(' ');

  useEffect(() => {
    if (!microTextRef.current || !containerRef.current) return;

    const spans = microTextRef.current.querySelectorAll('.split-word');

    // Animate each word with staggered timing
    spans.forEach((span, index) => {
      gsap.fromTo(
        span,
        {
          opacity: startOpacity,
          color: startColor,
        },
        {
          opacity: endOpacity,
          color: endColor,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const wordProgress = (progress * spans.length - index) / 3;
              const clampedProgress = Math.max(0, Math.min(1, wordProgress));

              const opacity = startOpacity + clampedProgress * (endOpacity - startOpacity);
              
              // Convert hex to RGB for interpolation
              const startRGB = hexToRgb(startColor);
              const endRGB = hexToRgb(endColor);
              
              const r = Math.floor(startRGB.r + clampedProgress * (endRGB.r - startRGB.r));
              const g = Math.floor(startRGB.g + clampedProgress * (endRGB.g - startRGB.g));
              const b = Math.floor(startRGB.b + clampedProgress * (endRGB.b - startRGB.b));

              gsap.set(span, {
                opacity: opacity,
                color: `rgb(${r}, ${g}, ${b})`,
              });
            },
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === containerRef.current) {
          trigger.kill();
        }
      });
    };
  }, [text, startOpacity, endOpacity, startColor, endColor]);

  // Helper function to convert hex to RGB
  function hexToRgb(hex: string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : { r: 0, g: 0, b: 0 };
  }

  return (
    <div ref={containerRef} className={className}>
      <div ref={microTextRef} className={textClassName}>
        {words.map((word, index) => (
          <span key={index} className="split-word inline-block mr-1" aria-hidden="true">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
