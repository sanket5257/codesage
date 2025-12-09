'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar at top of page
      if (currentScrollY < 50) {
        setVisible(true);
        setScrolled(false);
      } else {
        // Show when scrolling up, hide when scrolling down
        if (currentScrollY < lastScrollY) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        setScrolled(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'EXPERTISE', href: '#services' },
    { label: 'WHY US', href: '#about' },
    { label: 'WORK', href: '#projects' },
    { label: 'CONTACT', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: visible ? 1 : 0, 
        y: visible ? 0 : -100 
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? '' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-start p-6 md:p-8 lg:p-12">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-xl md:text-2xl font-black tracking-tighter"
        >
          CODESAGE
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:block text-right">
          <div className="text-xs text-gray-400 mb-4">
            [IND] {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' })} | हिंदी
          </div>
          <div className="space-y-2 text-sm font-medium">
            {menuItems.map((item) => (
              <motion.div key={item.label}>
                <a
                  href={item.href}
                  className="block hover:text-gray-400 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 backdrop-blur-md px-6 pb-6"
        >
          <div className="space-y-4 text-sm font-medium">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block hover:text-gray-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
