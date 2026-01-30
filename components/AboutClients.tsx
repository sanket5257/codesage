'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const clients = [
  { name: 'Brand 1', logo: '/img/brand1.svg' },
  { name: 'Brand 2', logo: '/img/brand2.svg' },
  { name: 'Brand 3', logo: '/img/brand1.svg' },
  { name: 'Brand 4', logo: '/img/brand2.svg' },
  { name: 'Brand 5', logo: '/img/brand1.svg' },
  { name: 'Brand 6', logo: '/img/brand2.svg' },
  { name: 'Brand 7', logo: '/img/brand1.svg' },
  { name: 'Brand 8', logo: '/img/brand2.svg' },
  { name: 'Brand 9', logo: '/img/brand1.svg' },
];

export default function AboutClients() {
  return (
    <section className="relative py-24 lg:py-32 bg-black text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Flex container - side by side */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">
          {/* Left - Heading Block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-[40%] flex-shrink-0"
          >
            <h2 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-light leading-[1.1] mb-8">
              From startups to large corporations, they've trusted us to bring their vision to life.
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed mb-10">
              Our expertise adapts to every industry to create solutions that exceed your expectations.
            </p>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300"
            >
              <span className="text-base">Our works</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* Right - Logo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-[55%]"
          >
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {clients.map((client, index) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="aspect-square bg-[#111111] rounded-2xl flex items-center justify-center p-4 md:p-6 hover:bg-[#1a1a1a] transition-colors duration-300"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={120}
                    className="w-auto h-16     object-contain brightness-0 invert"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
