"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const content = [
  {
    title: "Enforcement",
    subtitle: "vs Empty Promises",
    cardTitle: "TGE",
    cardText: "Smart contracts enforce execution. If a deal dies, funds return instantly.",
  },
  {
    title: "The Old World",
    subtitle: "Manual & Slow",
    cardTitle: "Traditional Finance",
    cardText: "Deals vanish, buyers drop out, funds sit idle for weeks.",
  },
  {
    title: "Transparency",
    subtitle: "Real-time Auditing",
    cardTitle: "On-Chain Data",
    cardText: "Every transaction is logged permanently. No more black boxes.",
  },
];

export default function StickyScrollSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map the scroll progress to the index of our content array
  const activeIndex = useTransform(scrollYProgress, [0, 0.4, 0.7, 1], [0, 1, 2, 2]);
  
  // State-like behavior for the visual index
  const [index, setIndex] = React.useState(0);
  
  // Update index based on scroll progress
  React.useEffect(() => {
    const unsubscribe = activeIndex.on("change", (latest) => {
      setIndex(Math.round(latest));
    });
    return unsubscribe;
  }, [activeIndex]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen items-center px-4 sm:px-6 lg:px-10">
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          
          {/* LEFT SIDE: Scrolling Text */}
          <div className="flex flex-col justify-center space-y-2 sm:space-y-4 order-2 lg:order-1">
            <motion.div
              key={`text-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold">{content[index].title}</h2>
              <p className="text-lg sm:text-xl lg:text-3xl text-gray-500 italic">{content[index].subtitle}</p>
            </motion.div>
            
            {/* INNER TEXT SHIMMER EFFECT */}
            <div className="flex flex-col items-end space-y-1 sm:space-y-2 mt-4 sm:mt-6 lg:mt-8">
              <div className="relative inline-block overflow-hidden text-right">
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
                  className="text-sm sm:text-lg lg:text-2xl font-medium"
                >
                  Innovation Driven
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
                  className="absolute top-1/2 -translate-y-1/2 w-20 sm:w-32 lg:w-40 h-[1px] bg-blue-400 blur-[2px] opacity-50 z-[-1]"
                />
              </div>
              
              <div className="relative inline-block overflow-hidden text-right">
                <motion.span
                  animate={{ 
                    backgroundPosition: ['-200% 0%', '200% 0%'],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: 0.5
                  }}
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #fff 40%, #3b82f6 50%, #fff 60%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                  className="text-xs sm:text-base lg:text-xl font-light"
                >
                  Future Ready
                </motion.span>
                
                {/* Horizontal Flare Line across the text */}
                <motion.div 
                  animate={{ 
                    left: ['-100%', '200%'],
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: 0.5
                  }}
                  className="absolute top-1/2 -translate-y-1/2 w-16 sm:w-24 lg:w-32 h-[1px] bg-blue-400 blur-[2px] opacity-50 z-[-1]"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Animated Card */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${index}`}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full max-w-sm lg:max-w-md rounded-xl border border-white/10 bg-zinc-900 p-6 sm:p-8 lg:p-12 shadow-2xl"
              >
                <div className="mb-8 sm:mb-12 lg:mb-20">
                   <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tighter uppercase">{content[index].cardTitle}</h3>
                </div>
                <p className="text-sm sm:text-base lg:text-lg text-zinc-400 leading-relaxed">
                  {content[index].cardText}
                </p>
                {/* Decorative corners similar to your image */}
                <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-l border-white/30" />
                <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-t border-r border-white/30" />
                <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-l border-white/30" />
                <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-b border-r border-white/30" />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}