import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AccessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<SVGSVGElement>(null);
  const circle2Ref = useRef<SVGSVGElement>(null);
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const desc1Ref = useRef<HTMLParagraphElement>(null);
  const desc2Ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        });
      }

      // Circle animations with continuous rotation
      if (circle1Ref.current) {
        // Initial scale animation
        gsap.from(circle1Ref.current, {
          scale: 0,
          rotation: -180,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        });

        // Continuous rotation loop
        gsap.to(circle1Ref.current, {
          rotation: 360,
          duration: 20,
          ease: 'none',
          repeat: -1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        });
      }

      if (circle2Ref.current) {
        // Initial fade in animation only (no rotation)
        gsap.from(circle2Ref.current, {
          opacity: 0,
          scale: 0.9,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        });
      }

      // Stats number counter animation
      const animateCounter = (element: HTMLDivElement, target: number) => {
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
          },
          onUpdate: () => {
            element.textContent = Math.round(obj.value) + '%';
          }
        });
      };

      if (stat1Ref.current) {
        animateCounter(stat1Ref.current, 100);
      }
      if (stat2Ref.current) {
        animateCounter(stat2Ref.current, 250);
      }

      // Dash animation for first circle
      if (circle1Ref.current) {
        const dashes = circle1Ref.current.querySelectorAll('.dash');
        gsap.from(dashes, {
          opacity: 0,
          scale: 0,
          stagger: 0.01,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          }
        });
      }

      // Overlapping circles fade in only (no movement)
      gsap.from('.overlap-circle', {
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      });

      // Description text animations
      gsap.from([desc1Ref.current, desc2Ref.current], {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        // playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      >
        <source src="/b56c9806-11400f44.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content Container */}
      <div className="relative z-10 w-full flex flex-col items-center">
      {/* Header Text */}
      <div ref={textRef} className="text-center font-[Instrument-Serif] mb-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
          Access That
        </h1>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
          Speaks for Itself
        </h1>
      </div>

      {/* Stats Container */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-48 w-full max-w-7xl">
        
        {/* 100% Stat with Dashed Circle */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center mb-8">
            <svg 
              ref={circle1Ref}
              className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]" 
              viewBox="0 0 550 550"
            >
              {/* Dashed circle */}
              {Array.from({ length: 120 }).map((_, i) => {
                const angle = (i * 3) * (Math.PI / 180);
                const x1 = 275 + 240 * Math.cos(angle);
                const y1 = 275 + 240 * Math.sin(angle);
                const x2 = 275 + 260 * Math.cos(angle);
                const y2 = 275 + 260 * Math.sin(angle);
                
                return (
                  <line
                    key={i}
                    className="dash"
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                );
              })}
              
              {/* Small text around circle */}
              <text className="text-[11px] fill-gray-600 font-light tracking-wider" textAnchor="middle">
                <textPath href="#circlePath" startOffset="25%">
                  BE SEEN — PATHS IN THE WORLD YOU CAN'T
                </textPath>
              </text>
              <text className="text-[11px] fill-gray-600 font-light tracking-wider" textAnchor="middle">
                <textPath href="#circlePath" startOffset="75%">
                  INVEST IN THE CLOSED DOORS ARE WHAT LIES IN THE EXTRAORDINARY EVERYONE IS MEANT TO STEP INTO
                </textPath>
              </text>
              <defs>
                <path id="circlePath" d="M 275,25 A 250,250 0 1,1 274.9,25" fill="none"/>
              </defs>
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div ref={stat1Ref} className="text-8xl md:text-9xl lg:text-[180px] font-light tracking-tighter">
                100%
              </div>
            </div>
          </div>
          
          {/* Description text */}
          <p ref={desc1Ref} className="text-center font-[Mynte] text-base md:text-lg max-w-md leading-relaxed font-light">
            Of our selected opportunities delivered<br />
            positive returns over the last 12 months
          </p>
        </div>

        {/* +250% Stat with Overlapping Circles */}
        <div className="relative flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center mb-8">
            <svg 
              ref={circle2Ref}
              className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px]" 
              viewBox="0 0 550 550"
            >
              {/* Two large overlapping circles */}
              <circle 
                className="overlap-circle"
                cx="200" 
                cy="275" 
                r="220" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2"
              />
              <circle 
                className="overlap-circle"
                cx="350" 
                cy="275" 
                r="220" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
                strokeWidth="2"
              />
              {/* Smaller center circle */}
              <circle 
                className="overlap-circle"
                cx="275" 
                cy="275" 
                r="180" 
                fill="none" 
                stroke="rgba(255,255,255,0.35)" 
                strokeWidth="2"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div ref={stat2Ref} className="text-8xl md:text-9xl lg:text-[180px] font-light tracking-tighter">
                +250%
              </div>
            </div>
          </div>
          
          {/* Description text */}
          <p ref={desc2Ref} className="text-center font-[Mynte] text-base md:text-lg max-w-md leading-relaxed font-light">
            Average performance of our selection<br />
            over the last 12 months
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}