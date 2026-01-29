'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { projectsList } from '@/data/projects';

export default function ProjectsPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 lg:px-16">
        {/* Background Gradient - Blue */}
        <div className="absolute top-0 right-0 w-1/2 h-[600px] pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-blue-600/40 via-blue-500/20 to-transparent blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-light tracking-tight"
          >
            Our{' '}
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
                works
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
          </motion.h1>
        </div>
      </section>

      {/* Projects List */}
      <section className="px-6 md:px-12 lg:px-16 pb-32">
        <div className="max-w-7xl mx-auto space-y-32">
          {projectsList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
            >
              {/* Image - Alternates left/right */}
              <Link
                href={`/projects/${project.id}`}
                className={`group relative aspect-[4/3] overflow-hidden bg-zinc-900 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <motion.div
                  initial={{ clipPath: 'inset(100% 0 0 0)' }}
                  whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </Link>

              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {/* Title */}
                <Link href={`/projects/${project.id}`}>
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight hover:text-gray-300 transition-colors">
                    {project.title}
                  </h2>
                </Link>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs text-gray-500"
                    >
                      {tag}{tagIndex < project.tags.length - 1 ? ' /' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
