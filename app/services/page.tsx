'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const services = [
  {
    number: '01',
    title: 'Branding',
    image: '/img/service-1.png',
    headline: 'Brand strategy, logo, guidelines. The fundamentals of your image.',
    features: [
      'Naming',
      'Strategy',
      'Logo & variations',
      'Complete visual identity',
      'Brand guidelines',
      'Art direction',
      'Typography',
      'Print & digital materials',
    ],
  },
  {
    number: '02',
    title: 'Web Design',
    image: '/img/service-2.png',
    headline: 'Beautiful, intuitive interfaces that captivate and convert.',
    features: [
      'UI/UX Design',
      'Wireframing',
      'Prototyping',
      'Responsive design',
      'Design systems',
      'Interaction design',
      'Visual design',
      'User research',
    ],
  },
  {
    number: '03',
    title: 'Web development',
    image: '/img/service-3.png',
    headline: 'Robust, scalable solutions built with cutting-edge technology.',
    features: [
      'Frontend development',
      'Backend development',
      'API integration',
      'CMS development',
      'Performance optimization',
      'SEO optimization',
      'Security implementation',
      'Maintenance & support',
    ],
  },
  {
    number: '04',
    title: 'E-commerce',
    image: '/img/service-4.png',
    headline: 'Seamless shopping experiences that drive sales and growth.',
    features: [
      'Store setup',
      'Payment integration',
      'Inventory management',
      'Shopping cart optimization',
      'Checkout flow design',
      'Product management',
      'Analytics & reporting',
      'Multi-platform selling',
    ],
  },
];

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ['start start', 'end end'],
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const sectionCount = services.length;
    const sectionSize = 1 / sectionCount;
    const newIndex = Math.min(Math.floor(latest / sectionSize), sectionCount - 1);
    if (newIndex !== activeIndex && newIndex >= 0) {
      setActiveIndex(newIndex);
    }
  });

  const activeService = services[activeIndex];

  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] overflow-hidden flex items-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-black">
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at 100% 50%, rgba(59, 130, 246, 0.6) 0%, rgba(37, 99, 235, 0.3) 30%, transparent 60%)',
            }}
          />
        </div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24 pt-32 pb-16 w-full">
          <div className="max-w-7xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-blue-500 text-sm md:text-base tracking-wider uppercase mb-6"
            >
              Expertise
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight max-w-4xl"
            >
              From concept to launch: we master every step of your journey
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Scroll-based Services Section */}
      <section
        ref={scrollSectionRef}
        className="relative"
        style={{ height: `${services.length * 100}vh` }}
      >
        {/* Background Gradient */}
        <div className="fixed inset-0 bg-black pointer-events-none">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: `radial-gradient(ellipse at 100% 50%, rgba(59, 130, 246, ${0.3 + activeIndex * 0.1}) 0%, rgba(37, 99, 235, 0.2) 30%, transparent 60%)`,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Sticky Content Container */}
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Left Side - Service Card */}
                <div className="relative" ref={containerRef}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.number}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
                      style={{ aspectRatio: '1/1.1', maxWidth: '400px' }}
                    >
                      {/* Card Content */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-between">
                        {/* Number and Icon Container */}
                        <div className="flex justify-between items-start">
                          <span className="text-white/80 text-sm font-light">
                            {activeService.number}
                          </span>

                          {/* Icon */}
                          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 relative">
                            <Image
                              src={activeService.image}
                              alt={activeService.title}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-white text-2xl md:text-3xl font-light">
                          {activeService.title}
                        </h3>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Service Navigation Dots */}
                  <div className="flex gap-2 mt-6">
                    {services.map((service, index) => (
                      <button
                        key={service.number}
                        onClick={() => {
                          const scrollTarget = (index / services.length) * (scrollSectionRef.current?.scrollHeight || 0);
                          window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === activeIndex
                            ? 'bg-blue-500 w-8'
                            : 'bg-white/30 hover:bg-white/50'
                        }`}
                        aria-label={`Go to ${service.title}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Side - Service Info */}
                <div className="lg:pl-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService.number}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                      {/* Category Tag */}
                      <motion.span
                        className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm text-white/80 mb-6"
                      >
                        {activeService.title}
                      </motion.span>

                      {/* Headline */}
                      <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-8">
                        {activeService.headline}
                      </h2>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {activeService.features.map((feature, index) => (
                          <motion.li
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="text-white/70 text-base md:text-lg"
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-3 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
                      >
                        Read more
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </AnimatePresence>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
