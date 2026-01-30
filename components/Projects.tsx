"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const sectors = [
  { name: "Artificial Intelligence", y: "10%", speed: 300 },
  { name: "Financial Technology", y: "20%", speed: 280 },
  { name: "Space Exploration", y: "30%", speed: 350 },
  { name: "Enterprise Infrastructure", y: "45%", speed: 220 },
  { name: "Healthcare", y: "60%", speed: 260 },
  { name: "Biotech", y: "70%", speed: 320 },
  { name: "Next-Gen Defense", y: "85%", speed: 290 },
  { name: "Cybersecurity", y: "95%", speed: 310 },
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
    <div ref={containerRef} className="relative h-dvh bg-black text-white ">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video src="/8760caa0-582a50ce.mp4" autoPlay loop muted className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      {/* Floating Text Overlay */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center pointer-events-none z-10">
        {sectors.map((item, index) => {
          // Creates alternating left/right movement for each item
          // Odd index = move right, Even index = move left
          const direction = index % 2 === 0 ? -1 : 1;
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const xMove = useTransform(scrollYProgress, [0, 1], [0, item.speed * direction]);
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const xMoveSmooth = useSpring(xMove, { stiffness: 100, damping: 30, mass: 0.5 });

          return (
            <motion.div
              key={index}
              style={{
                x: xMoveSmooth,
                left: "50%",
                top: item.y,
                translateX: "-50%"
              }}
              className="absolute whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl font-light tracking-tight opacity-90 transition-opacity duration-500"
            >
              {/* INNER TEXT SHIMMER EFFECT */}
              <span className="relative inline-block overflow-hidden">
                <motion.span
                  animate={{
                    backgroundPosition: ['-100% 0%', '200% 0%'],
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
                    left: ['-50%', '200%'],
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

   
    </div>
  );
}