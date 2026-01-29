'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { name: 'HOME', href: '/', page: '001' },
  { name: 'ABOUT', href: '/about', page: '002' },
  { name: 'SERVICES', href: '/services', page: '003' },
  { name: 'GALLERY', href: '/gallery', page: '004' },
  { name: 'CONTACT', href: '/contact', page: '005' },
];

const socialLinks = [
  { name: 'X LINK', href: '#' },
  { name: 'DRIBBBLE', href: '#' },
  { name: 'LINKEDIN', href: '#' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const easeOut: [number, number, number, number] = [0.76, 0, 0.24, 1];

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      y: 50,
    },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.8,
        ease: easeOut,
      },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: -30,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: easeOut,
      },
    }),
  };

  const socialVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.6,
        ease: easeOut,
      },
    }),
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-white/[0.03] backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-6'
      }`}>
        <div className="relative max-w-[1800px] mx-auto px-6 flex items-center justify-between">

          {/* 1. LEFT SIDE - Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="relative z-50 flex flex-col justify-center items-center w-10 h-10 gap-[6px] group"
            aria-label="Open menu"
          >
            <motion.span
              className="block w-6 h-[2px] bg-white origin-center"
              whileHover={{ scaleX: 1.1 }}
            />
            <motion.span
              className="block w-6 h-[2px] bg-white origin-center"
              whileHover={{ scaleX: 1.1 }}
            />
          </button>

          {/* 2. CENTERED BRANDING */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-4 h-4 border border-white/40 rotate-45 flex items-center justify-center group-hover:border-white transition-colors">
                <div className="w-1 h-1 bg-white" />
              </div>
              <span className="text-lg md:text-xl font-normal tracking-tight text-white uppercase whitespace-nowrap">
                Kvell Dynamics
              </span>
            </Link>
          </div>

          {/* 3. RIGHT SIDE (Contact Button) */}
          <div className="flex items-center">
            <Link href="/contact" className="flex items-center gap-3 px-5 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-[2px] group">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white opacity-70 group-hover:opacity-100 transition-opacity">
                <path d="M3 21V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16M3 21h18M10 21V11h4v10" />
              </svg>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-white">
                contact
              </span>
            </Link>
          </div>

        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 left-6 z-50 w-10 h-10 flex items-center justify-center group"
              aria-label="Close menu"
            >
              <motion.div
                className="relative w-6 h-6"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white transform -translate-y-1/2 rotate-45" />
                <span className="absolute top-1/2 left-0 w-6 h-[2px] bg-white transform -translate-y-1/2 -rotate-45" />
              </motion.div>
            </button>

            {/* Menu Content */}
            <div className="h-full flex flex-col justify-between px-8 md:px-16 py-20">
              {/* Main Navigation Links */}
              <nav className="flex-1 flex flex-col justify-center">
                <ul className="space-y-2 md:space-y-4">
                  {menuItems.map((item, i) => {
                    const isActive = pathname === item.href;
                    const isHovered = hoveredItem === item.name;

                    return (
                      <motion.li
                        key={item.name}
                        custom={i}
                        variants={menuItemVariants}
                        initial="closed"
                        animate="open"
                        exit="exit"
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="relative inline-flex items-center gap-4 group"
                        >
                          {/* Active/Hover Background */}
                          <motion.span
                            className={`absolute -left-2 -top-1 -bottom-1 bg-blue-500 ${
                              isActive ? 'opacity-100' : 'opacity-0'
                            }`}
                            initial={false}
                            animate={{
                              width: isActive || isHovered ? 'calc(100% + 16px)' : 0,
                              opacity: isActive || isHovered ? 1 : 0,
                            }}
                            transition={{ duration: 0.3, ease: easeOut }}
                          />

                          {/* Menu Item Text */}
                          <span
                            className={`relative text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                              isActive || isHovered ? 'text-black' : 'text-white'
                            }`}
                          >
                            {item.name}
                          </span>

                          {/* Page Number */}
                          <motion.span
                            className={`relative text-xs md:text-sm font-medium tracking-wider transition-colors duration-300 ${
                              isActive || isHovered ? 'text-black/70' : 'text-white/0'
                            }`}
                            animate={{
                              opacity: isActive || isHovered ? 1 : 0,
                              x: isActive || isHovered ? 0 : -10,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            PAGE {item.page}
                          </motion.span>
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-white/10">
                {/* Social Links */}
                <div className="flex flex-col gap-3">
                  {socialLinks.map((link, i) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      custom={i}
                      variants={socialVariants}
                      initial="closed"
                      animate="open"
                      className="text-sm text-white/60 hover:text-white transition-colors tracking-wider"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>

                {/* Brand */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6, ease: easeOut }}
                  className="text-sm text-white/40 tracking-widest uppercase"
                >
                  Kvell Dynamics
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}