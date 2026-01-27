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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
        }
      });

      // 1. Entrance for Titles
      tl.from(textRef.current?.children || [], {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.15,
        ease: 'power4.out',
      });

      // 2. Dash Animation for Circle 1
      if (circle1Ref.current) {
        const dashes = circle1Ref.current.querySelectorAll('.dash');
        tl.from(dashes, {
          opacity: 0,
          scale: 0,
          stagger: { each: 0.008, from: "center" },
          duration: 1.2,
          ease: 'back.out(1.7)'
        }, "-=0.5");

        // Continuous slow rotation
        gsap.to(circle1Ref.current, {
          rotation: 360,
          duration: 40,
          repeat: -1,
          ease: 'none'
        });
      }

      // 3. Entrance for Overlap Circles
      if (circle2Ref.current) {
        tl.from(circle2Ref.current.querySelectorAll('.overlap-circle'), {
          opacity: 0,
          scale: 0.8,
          stagger: 0.3,
          duration: 1.5,
          ease: 'expo.out'
        }, "-=1");
      }

      // 4. Counter Animation logic
      const animateCounter = (el: HTMLDivElement | null, target: number, prefix = "") => {
        if (!el) return;
        const obj = { value: 0 };
        gsap.to(obj, {
          value: target,
          duration: 3,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 50%',
          },
          onUpdate: () => {
            el.textContent = prefix + Math.round(obj.value) + '%';
          }
        });
      };

      animateCounter(stat1Ref.current, 100);
      animateCounter(stat2Ref.current, 250, "+");

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[120vh] bg-black text-white flex flex-col items-center justify-start px-4 py-32 overflow-hidden">
      {/* Video Background with higher opacity */}
      <video
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
      >
        <source src="/b56c9806-11400f44.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      <div className="relative z-10 w-full flex flex-col items-center">
        <div ref={textRef} className="text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-thin tracking-tighter mb-4">Access That</h1>
          <h1 className="text-6xl md:text-8xl font-thin tracking-tighter italic opacity-90">Speaks for Itself</h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-around w-full max-w-[1600px] gap-24 lg:gap-12">
          
          {/* STAT BLOCK 1 */}
          <div className="flex flex-col items-center group">
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <svg ref={circle1Ref} viewBox="0 0 600 600" className="w-full h-full">
                <defs>
                  <path id="innerPath" d="M 300,300 m -220,0 a 220,220 0 1,1 440,0 a 220,220 0 1,1 -440,0" />
                </defs>
                <g>
                  {Array.from({ length: 100 }).map((_, i) => {
                    const angle = (i * 3.6) * (Math.PI / 180);
                    const x1 = 300 + 250 * Math.cos(angle);
                    const y1 = 300 + 250 * Math.sin(angle);
                    const x2 = 300 + 280 * Math.cos(angle);
                    const y2 = 300 + 280 * Math.sin(angle);
                    return (
                      <line key={i} className="dash" x1={x1} y1={y1} x2={x2} y2={y2} 
                        stroke="white" strokeWidth="2" strokeOpacity="0.8" strokeLinecap="round" />
                    );
                  })}
                </g>
                <text className="text-[12px] fill-white/40 uppercase tracking-[0.4em] font-light">
                  <textPath href="#innerPath">UNPARALLELED OPPORTUNITY • PROVEN RETURNS • EXCLUSIVE ACCESS •</textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div ref={stat1Ref} className="text-8xl md:text-[140px] font-extralight tracking-tighter">0%</div>
              </div>
            </div>
            <p ref={desc1Ref} className="text-xl md:text-2xl font-light text-white/70 mt-8 text-center max-w-md">
              Selected opportunities delivered positive returns this year
            </p>
          </div>

          {/* STAT BLOCK 2 */}
          <div className="flex flex-col items-center">
            <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
              <svg ref={circle2Ref} viewBox="0 0 600 600" className="w-full h-full">
                <circle className="overlap-circle" cx="240" cy="300" r="240" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle className="overlap-circle" cx="360" cy="300" r="240" fill="none" stroke="white" strokeWidth="1.5" strokeOpacity="0.5" />
                <circle className="overlap-circle" cx="300" cy="300" r="280" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.2" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div ref={stat2Ref} className="text-8xl md:text-[140px] font-extralight tracking-tighter">+0%</div>
              </div>
            </div>
            <p ref={desc2Ref} className="text-xl md:text-2xl font-light text-white/70 mt-8 text-center max-w-md">
              Average performance across our entire curated portfolio
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}