'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const sections = [
  {
    id: '01',
    title: 'LONDON, UK',
    description: 'Founded in the heart of London, our studio combines British design sensibility with global digital innovation. Every project reflects our commitment to excellence.',
    image: '/img/project1.avif'
  },
  {
    id: '02',
    title: 'CRAFTED, UK',
    description: 'We don\'t mass-produce. Every pixel, every interaction, every experience is meticulously crafted by hand. This is bespoke digital artistry.',
    image: '/img/project2.avif'
  },
  {
    id: '03',
    title: 'STORY OF US',
    description: 'Born from a passion for pushing boundaries, we\'ve grown into a collective of digital craftsmen who refuse to compromise on quality or vision.',
    image: '/img/project3.avif'
  }
];

export default function AboutStory() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative bg-black text-white">
      {sections.map((section, index) => (
        <div 
          key={section.id}
          className="relative min-h-screen flex items-center border-b border-white/10"
        >
          {/* Background video */}
          <div className="absolute inset-0 opacity-20">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/19782b13-9fd4bd7a.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left side - Text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="text-sm text-blue-400 mb-4 font-mono">#{section.id}</div>
                
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
                  {section.title}
                </h2>

                <div className="w-16 h-[1px] bg-blue-400 mb-8" />

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {section.description}
                </p>
              </motion.div>

              {/* Right side - Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  {/* Reveal mask overlay */}
                  <motion.div
                    initial={{ scaleY: 1 }}
                    whileInView={{ scaleY: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
                    viewport={{ once: true }}
                    className="absolute inset-0 bg-black z-20 origin-top"
                  />

                  {/* Image with clip-path reveal */}
                  <motion.div
                    initial={{ clipPath: 'inset(100% 0 0 0)' }}
                    whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                    transition={{ duration: 1.2, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                    viewport={{ once: true }}
                    className="relative w-full h-full"
                  >
                    <motion.div
                      initial={{ scale: 1.3 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.4, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                      viewport={{ once: true }}
                      className="w-full h-full"
                    >
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover hover:scale-105 transition-all duration-700"
                      />
                    </motion.div>
                  </motion.div>

                  {/* Image overlay with blue tint */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-transparent z-10" />
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      ))}
    </section>
  );
}