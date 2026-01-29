'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const faqData = [
  { question: "WHAT SERVICES OFFERED?", answer: "We offer web design, development, branding, and digital marketing services to help you build and grow your digital presence." },
  { question: "WHO IS THIS FOR?", answer: "Our services are designed for designers, developers, agencies, and businesses looking to create exceptional digital products." },
  { question: "HOW PROJECTS START?", answer: "Projects begin with a discovery call where we understand your goals, followed by a proposal and project kickoff once approved." },
  { question: "HOW LONG DELIVERY?", answer: "Delivery timelines vary based on project scope. Typically, projects range from 2-8 weeks depending on complexity." },
  { question: "IS FRAMER REQUIRED?", answer: "No, Framer is not required. We work with various platforms and can recommend the best solution for your needs." },
  { question: "CAN WE CUSTOMIZE?", answer: "Absolutely! All our solutions are fully customizable to match your brand and specific requirements." },
  { question: "DO YOU OFFER SUPPORT?", answer: "Yes, we provide ongoing support and maintenance packages to ensure your digital products continue to perform optimally." },
  { question: "WHAT ABOUT UPDATES?", answer: "We offer update packages and can train your team to manage content updates independently." },
];

const locations = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "India",
  "Other"
];

export default function ContactPage() {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', location: '' });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      setCurrentDay(days[now.getDay()]);
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', location: '' });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
   <Navbar/>

      {/* Main Content */}
      <main className="pt-20">
        {/* Contact Section */}
        <section className="px-6 py-16 lg:py-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left Side - Contact Info */}
              <div className="space-y-8">
                <div>
                  <span className="text-[#00C896] text-xs font-medium tracking-[0.15em] uppercase">
                    CONTACT US
                  </span>
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
                >
                  CONTACT
                </motion.h1>

                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  Our mission is to empower designers, developers and agencies with
                  the tools they need to build their digital products more efficiently.
                </p>

                <Link
                  href="/about"
                  className="inline-block px-5 py-2.5 text-xs font-medium tracking-wider uppercase border border-white/30 hover:bg-white hover:text-black transition-all duration-300"
                >
                  ABOUT US
                </Link>

                {/* Contact Details */}
                <div className="pt-12 flex gap-16">
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">EMAIL</span>
                    <p className="text-sm font-medium mt-1 text-[#00C896]">INFO@NIVORA.COM</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-white/40 uppercase tracking-wider">TEL</span>
                    <p className="text-sm font-medium mt-1 text-white">+1 415 555 0198</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="relative">
                {/* Corner Brackets */}
                <div className="absolute -top-3 -right-3 w-4 h-4 border-t border-r border-white/30"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b border-l border-white/30"></div>

                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onSubmit={handleSubmit}
                  className="bg-[#0a0a0a] border border-white/10 p-8 space-y-6"
                >
                  <div>
                    <label className="block text-[10px] text-white/50 uppercase tracking-wider mb-2">
                      NAME
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] text-white/50 uppercase tracking-wider mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="jane@nivora.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-[10px] text-white/50 uppercase tracking-wider mb-2">
                      LOCATION
                    </label>
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-left text-sm flex items-center justify-between focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <span className={formData.location ? 'text-white' : 'text-white/30'}>
                        {formData.location || 'Select...'}
                      </span>
                      <svg
                        className={`w-4 h-4 text-white/50 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 right-0 mt-1 bg-[#0a0a0a] border border-white/10 z-10 max-h-48 overflow-y-auto"
                        >
                          {locations.map((location) => (
                            <button
                              key={location}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, location });
                                setIsDropdownOpen(false);
                              }}
                              className="w-full px-4 py-2.5 text-left text-sm text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                            >
                              {location}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-white/90 transition-colors"
                  >
                    SUBMIT
                  </button>
                </motion.form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-16 lg:py-24 border-t border-white/10">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-[1fr,2fr] gap-12 lg:gap-20">
              {/* Left Side - Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                  FREQUENTLY ASKED<br />QUESTIONS
                </h2>
                <p className="text-white/40 text-xs uppercase tracking-wider mt-6 max-w-xs leading-relaxed">
                  THIS IS DIFFERENT WE GET THAT, YOU MAY HAVE QUESTIONS,
                  HERE ARE SOME ANSWERS.
                </p>
              </div>

              {/* Right Side - Accordion */}
              <div className="space-y-0">
                {faqData.map((faq, index) => (
                  <div key={index} className="border-t border-white/10">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full py-5 flex items-center justify-between text-left hover:text-white/70 transition-colors"
                    >
                      <span className="text-sm font-medium tracking-wide">{faq.question}</span>
                      <span className="text-xl text-white/50 ml-4">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm text-white/50 leading-relaxed pr-12">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}
