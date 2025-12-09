'use client';

import { useEffect, useState } from 'react';
import MicroText from './MicroText';
  const text = "There are paths in the world that can't be seen — only sensed. Where others invest in the obvious, we explore what lies behind closed doors. This is a gateway to the extraordinary. Not everyone is meant to step through it.";


export default function Services() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Adjust scroll progress calculation for mobile viewports
      const isMobile = window.innerWidth < 768;
      const stickyHeight = isMobile ? viewportHeight * 0.5 : viewportHeight;
      const scrollProgress = -rect.top / (sectionHeight - stickyHeight);

      // Adjust thresholds for mobile to account for reduced sticky height
      const threshold1 = isMobile ? 0.25 : 0.33;
      const threshold2 = isMobile ? 0.6 : 0.66;

      if (scrollProgress < threshold1) {
        setActiveSection(0); // Design
      } else if (scrollProgress < threshold2) {
        setActiveSection(1); // Development
      } else {
        setActiveSection(2); // Marketing
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const services = [
    {
      title: 'Design',
      tags: [
        'User Interface Design',
        'Wireframes & Prototyping',
        'iOS/Android',
        'Marketing',
        'Logo',
        'User Experience Optimization',
        'Web Apps',
        'Content Creation',
        'Website Development',
        'Branding'
      ]
    },
    {
      title: 'Development',
      tags: [
        'Digital Ad Campaigns',
        'Software Development',
        'Performance Reporting',
        'Analytics',
        'SEO',
        'CMS Integration',
        'E-Commerce Solutions',
        'API Integration',
        'Mobile Development',
        'Cloud Services'
      ]
    },
    {
      title: 'Marketing',
      tags: [
        'Social Media Strategy',
        'Content Marketing',
        'Email Campaigns',
        'Brand Strategy',
        'Market Research',
        'Influencer Marketing',
        'Video Production',
        'Copywriting',
        'Growth Hacking',
        'Conversion Optimization'
      ]
    }
  ];

  return (
    <section id="services" className="min-h-[300vh] bg-black py-12 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="sticky top-0 min-h-[50vh] md:min-h-screen flex flex-col">
        {/* Header */}
        <div className="mb-10 pt-8">
          <p className="text-[10px] md:text-xs text-white uppercase tracking-[0.2em]">
            OUR PROCESS AND EXPERTISE
          </p>
        </div>
        {/* Animated Micro Text - Absolute Positioned */}
              <MicroText
                text={text}
                className="absolute max-w-lg top-50 right-0 px-4 sm:px-6 md:px-12 lg:px-24 pointer-events-none z-0"
                textClassName="max-w-7xl mx-auto text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs leading-relaxed"
                startOpacity={0.15}
                endOpacity={0.8}
                startColor="#1a1a1a"
                endColor="#888888"
              />

        {/* Services Layout */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-16 lg:gap-24 flex-1">
          {/* Left side - Titles */}
          <div className="w-full lg:w-1/4 flex flex-col justify-center space-y-6 md:space-y-10 lg:space-y-16">
            {services.map((service, index) => (
              <h2
                key={service.title}
                className={`text-3xl md:text-4xl lg:text-4xl font-light font-[Instrument-Serif] leading-none transition-colors duration-500 ${
                  activeSection === index ? 'text-white' : 'text-gray-700'
                }`}
              >
                {service.title}
              </h2>
            ))}
          </div>

          {/* Right side - Tags */}
          <div className="w-full lg:w-3/4 flex items-center justify-start lg:justify-end">
            <div className="flex flex-wrap gap-2 md:gap-3 content-start justify-start lg:justify-end">
              {services[activeSection].tags.map((tag, index) => (
                <div
                  key={`${tag}-${index}`}
                  className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-gray-500/70 rounded-full text-xs md:text-sm text-white shadow-lg hover:shadow-white/30 hover:border-white/70 transition-all duration-300 cursor-pointer animate-fadeIn"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                    boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.2), 0 4px 12px rgba(0,0,0,0.3)'
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
