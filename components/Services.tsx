'use client';

import { useEffect, useState } from 'react';

export default function Services() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const scrollProgress = -rect.top / (sectionHeight - window.innerHeight);

      if (scrollProgress < 0.33) {
        setActiveSection(0); // Design
      } else if (scrollProgress < 0.66) {
        setActiveSection(1); // Development
      } else {
        setActiveSection(2); // Marketing
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
    <section id="services" className="min-h-[300vh] bg-black py-16 md:py-24 px-8 md:px-16 lg:px-24">
      <div className="sticky top-0 min-h-screen flex flex-col">
        {/* Header */}
        <div className="mb-10 pt-8">
          <p className="text-[10px] md:text-xs text-white uppercase tracking-[0.2em]">
            OUR PROCESS AND EXPERTISE
          </p>
        </div>

        {/* Services Layout */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 flex-1">
          {/* Left side - Titles */}
          <div className="lg:w-1/4 flex flex-col justify-center space-y-10 md:space-y-16">
            {services.map((service, index) => (
              <h2
                key={service.title}
                className={`lg:text-4xl font-light font-[Instrument-Serif] leading-none transition-colors duration-500 ${
                  activeSection === index ? 'text-white' : 'text-gray-700'
                }`}
              >
                {service.title}
              </h2>
            ))}
          </div>

          {/* Right side - Tags */}
          <div className="lg:w-3/4 flex items-center justify-end">
            <div className="flex flex-wrap gap-3 content-start justify-end">
              {services[activeSection].tags.map((tag, index) => (
                <div
                  key={`${tag}-${index}`}
                  className="px-6 py-3 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-gray-500/70 rounded-full text-sm text-white shadow-lg hover:shadow-white/30 hover:border-white/70 transition-all duration-300 cursor-pointer animate-fadeIn"
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
