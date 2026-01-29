'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function AboutValues() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-32 bg-black text-white overflow-hidden border-t border-white/10">
      {/* Background video */}
      <div className="absolute inset-0 opacity-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/8760caa0-582a50ce.mp4" type="video/mp4" />
        </video>
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
            Our Philosophy
          </p>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight max-w-4xl mb-12">
            We believe in the power of
            <br />
            <span className="italic">intentional design</span>
          </h2>

          <div className="w-16 h-[1px] bg-blue-400 mb-8" />

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
            Every decision we make is driven by purpose. From the first sketch to the final 
            deployment, we craft experiences that resonate, engage, and inspire.
          </p>
        </motion.div>

        {/* Values List */}
        <div className="space-y-16 mt-32">
          {[
            {
              number: '01',
              title: 'Precision',
              description: 'Every pixel matters. Every interaction counts. We obsess over the details that others overlook.'
            },
            {
              number: '02',
              title: 'Innovation',
              description: 'We don\'t follow trends—we set them. Our work pushes boundaries and challenges conventions.'
            },
            {
              number: '03',
              title: 'Authenticity',
              description: 'No templates. No shortcuts. Every project carries our unique signature and your unique vision.'
            },
            {
              number: '04',
              title: 'Excellence',
              description: 'Good enough isn\'t in our vocabulary. We deliver work that exceeds expectations, every single time.'
            }
          ].map((value, index) => (
            <motion.div
              key={value.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-start border-t border-white/10 hover:border-blue-400/30 pt-8 transition-colors duration-300"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="text-sm font-mono text-blue-400">{value.number}</span>
              </div>

              {/* Title */}
              <div className="lg:col-span-4">
                <h3 className="text-3xl md:text-4xl font-light group-hover:text-blue-400 transition-colors duration-300">
                  {value.title}
                </h3>
              </div>

              {/* Description */}
              <div className="lg:col-span-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}