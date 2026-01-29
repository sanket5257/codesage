'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'CREATIVE DIRECTOR',
    image: '/img/project1.avif'
  },
  {
    name: 'LEAD DEVELOPER',
    image: '/img/project2.avif'
  },
  {
    name: 'UX STRATEGIST',
    image: '/img/project3.avif'
  },
  {
    name: 'BRAND DESIGNER',
    image: '/img/project1.avif'
  }
];

export default function AboutTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-32 bg-black text-white overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/b56c9806-11400f44.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-6">
            The Team
          </p>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl">
            The minds behind
            <br />
            <span className="italic">every pixel</span>
          </h2>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-900">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-all duration-700"
                />
                
                {/* Overlay with blue tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent group-hover:from-blue-600/20 transition-all duration-500" />
              </div>

              {/* Name */}
              <div className="mt-4">
                <p className="text-sm uppercase tracking-[0.2em] text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                  {member.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-32 max-w-3xl"
        >
          <div className="w-16 h-[1px] bg-blue-400 mb-8" />
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            A collective of designers, developers, and strategists united by one belief: 
            that digital experiences should be as memorable as they are functional. 
            We don't just work together—we create together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}