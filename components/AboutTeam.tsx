'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'CREATIVE DIRECTOR',
    image: '/img/team1.avif'
  },
  {
    name: 'LEAD DEVELOPER',
    image: '/img/team2.avif'
  },
  {
    name: 'UX STRATEGIST',
    image: '/img/team1.avif'
  },
  {
    name: 'BRAND DESIGNER',
    image: '/img/team2.avif'
  }
];

function TeamCard({ member, index }: { member: typeof teamMembers[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  // Staggered vertical offset for each card (alternating pattern) - increased for more Y distance
  const verticalOffsets = [0, 180, 90, 260];
  const staticOffset = verticalOffsets[index % 4];

  // Each card starts from different Y position (staggered effect) - increased base offset
  const baseOffset = 300 + (index % 2) * 120;
  const y = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [baseOffset + staticOffset, staticOffset, -100 + staticOffset, -300 + staticOffset]);

  // Abstract rotation for each card
  const rotateZ = useTransform(scrollYProgress, [0, 0.55, 1], [index % 2 === 0 ? -3 : 3, 0, index % 2 === 0 ? 2 : -2]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.8, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
  // Tilt/flip effect on X axis (rotateX) - delayed to flip later
  const rotateX = useTransform(scrollYProgress, [0, 0.55, 0.8, 1], [45, 0, 0, -15]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        opacity,
        scale,
        rotateX,
        rotateZ,
        transformPerspective: 1000,
        transformOrigin: "center bottom"
      }}
      className="group relative"
    >
      {/* Abstract floating shapes */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
      <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-tr from-cyan-400/15 to-blue-600/10 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500" />

      {/* Geometric accent line */}
      <motion.div
        className="absolute -left-2 top-1/4 w-[2px] h-16 bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
        style={{ scaleY: useTransform(scrollYProgress, [0.2, 0.5], [0, 1]) }}
      />

      {/* Glassmorphism Card */}
      <div className="relative p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl overflow-hidden">
        {/* Abstract corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/10 to-transparent" />

        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-900">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-700"
          />

          {/* Abstract overlay with gradient mesh */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-purple-900/10 to-transparent group-hover:from-blue-600/30 transition-all duration-500" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Floating abstract dot pattern */}
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-blue-400/40 group-hover:bg-blue-300/60 transition-colors duration-300" />
          <div className="absolute top-4 right-8 w-1 h-1 rounded-full bg-purple-400/30" />
          <div className="absolute bottom-8 left-4 w-1.5 h-1.5 rounded-full bg-cyan-400/30 group-hover:scale-150 transition-transform duration-500" />
        </div>

        {/* Name */}
        <div className="mt-4 pb-1">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
            {member.name}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AboutTeam() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] bg-black text-white">
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

      {/* Fixed Header */}
      <div className="sticky top-0 z-20 h-screen flex items-start pt-24 lg:pt-32 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
        </div>
      </div>

      {/* Scrolling Team Grid */}
      <div className="relative z-30 -mt-[50vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-[60vh]">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>

          {/* Bottom Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-32 max-w-3xl pb-32"
          >
            <div className="w-16 h-[1px] bg-blue-400 mb-8" />

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              A collective of designers, developers, and strategists united by one belief:
              that digital experiences should be as memorable as they are functional.
              We don't just work together—we create together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}