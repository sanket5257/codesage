'use client';

import Link from 'next/link';
import MicroText from './MicroText';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const text = "There are paths in the world that can't be seen — only sensed. Where others invest in the obvious, we explore what lies behind closed doors. This is a gateway to the extraordinary. Not everyone is meant to step through it.";

  return (
    <footer className="relative bg-black text-white border-t border-white/10 overflow-hidden">
      {/* Animated Micro Text - Absolute Positioned */}
      <MicroText
        text={text}
        className="absolute max-w-lg top-8 left-0 right-0 px-4 sm:px-8 md:px-16 lg:px-24 pointer-events-none z-0"
        textClassName="max-w-7xl mx-auto text-[9px] sm:text-[10px] md:text-xs leading-relaxed"
        startOpacity={0.15}
        endOpacity={0.8}
        startColor="#1a1a1a"
        endColor="#888888"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 glitch-blue">CODESAGE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Refreshing digital experiences with creative design for every brand.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="text-gray-400 text-sm py-1">Web Development</li>
              <li className="text-gray-400 text-sm py-1">UI/UX Design</li>
              <li className="text-gray-400 text-sm py-1">Mobile Apps</li>
              <li className="text-gray-400 text-sm py-1">E-Commerce</li>
              <li className="text-gray-400 text-sm py-1">Branding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Get in Touch</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <a href="mailto:hello@codesage.com" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                  hello@codesage.com
                </a>
              </li>
              <li>
                <a href="tel:+971501234567" className="text-gray-400 hover:text-white transition-colors text-sm block py-1">
                  +971 50 123 4567
                </a>
              </li>
              <li className="text-gray-400 text-sm py-1">
                Mumbai, India
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-11 h-11 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-11 h-11 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors w-11 h-11 flex items-center justify-center">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} CodeSage. All rights reserved.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
