"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sectors = [
  { name: "Artificial Intelligence", x: "-35%", y: "10%", speed: -100 },
  { name: "Financial Technology", x: "-25%", y: "20%", speed: 150 },
  { name: "Space Exploration", x: "-40%", y: "30%", speed: -200 },
  { name: "Enterprise Infrastructure", x: "-30%", y: "45%", speed: 100 },
  { name: "Healthcare", x: "-15%", y: "60%", speed: -50 },
  { name: "Biotech", x: "-20%", y: "70%", speed: 250 },
  { name: "Next-Gen Defense", x: "-25%", y: "85%", speed: -120 },
  { name: "Cybersecurity", x: "-30%", y: "95%", speed: 180 },
];

const companies = [
  "OpenAI", "PsiQuantum", "ByteDance", "THINKING MACHINES", "Perplexity", "Lambda", 
  "Anthropic", "Palantir", "SpaceX", "Stripe", "Figma", "Linear", "Vercel", "Notion"
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[200vh] bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video src="/8760caa0-582a50ce.mp4" autoPlay loop muted className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* Floating Text Overlay */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center pointer-events-none z-10">
        {sectors.map((item, index) => {
          // Creates a unique scroll movement for each item
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yMove = useTransform(scrollYProgress, [0, 1], [0, item.speed]);

          return (
            <motion.div
              key={index}
              style={{ 
                y: yMove,
                left: `calc(50% + ${item.x})`,
                top: item.y
              }}
              className="absolute whitespace-nowrap text-5xl md:text-7xl lg:text-8xl font-light tracking-tight opacity-90 transition-opacity duration-500"
            >
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
                  {item.name}
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
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Marquee */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/80 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden">
        <motion.div
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex items-center gap-12 whitespace-nowrap"
        >
          {[...companies, ...companies].map((company, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-white/70 tracking-wide">
                {company}
              </span>
              <div className="w-1 h-1 bg-white/30 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}