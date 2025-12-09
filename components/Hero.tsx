'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import BookingModal from './BookingModal';
import Link from 'next/link';

export default function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const clients = [
    'PICASSO',
    'RESHNI',
    'DZRPT',
    'BEGUMBAL',
    'STUDIO'
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/09162a18-0c22dd3e.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for better text readability */}
              </div>

      {/* Blurred gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gray-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center max-w-6xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight" style={{ fontFamily: 'Mynte, sans-serif' }}>
            <span className="italic" style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 'normal' }}>Refreshing</span>{' '}
            <span className="font-semibold">Digital</span>
            <br />
            <span className="font-semibold">experiences with creative</span>
            <br />
            <span className="font-semibold">design for every brand</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-gray-400 text-base md:text-lg mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Websites, apps, e-commerce, graphic identities, graphic design, and
            advertising ; all crafted for a distinct digital presence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link href="#projects" className="w-full sm:w-auto px-8 py-3 min-h-[44px] flex items-center justify-center bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium hover:bg-white/20 transition-all border border-white/20">
              Discover our works
            </Link>
            <button 
              onClick={() => setIsBookingOpen(true)}
              className="w-full sm:w-auto px-8 py-3 min-h-[44px] flex items-center justify-center bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-all"
            >
              Book a call
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Client Logos Marquee Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 pb-12 overflow-hidden"
      >
        <div className="text-center mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Trusted by 10+ clients</p>
        </div>
        
        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          
          {/* Marquee Animation - Multiple sets for seamless loop */}
          <div className="flex animate-marquee-mobile md:animate-marquee">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0">
                {clients.map((client, index) => (
                  <div
                    key={`${setIndex}-${client}-${index}`}
                    className="flex-shrink-0 mx-8 md:mx-12 text-lg md:text-xl lg:text-2xl font-bold tracking-wider opacity-40 hover:opacity-100 transition-opacity cursor-pointer whitespace-nowrap"
                  >
                    {client}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </section>
  );
}
