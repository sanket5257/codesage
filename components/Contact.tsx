'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Torus } from '@react-three/drei';

function AnimatedTorus() {
  return (
    <Torus args={[1, 0.4, 16, 100]}>
      <meshStandardMaterial color="#ffffff" wireframe />
    </Torus>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      <div className="absolute bottom-20 left-10 w-64 h-64 opacity-10 hidden lg:block">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedTorus />
        </Canvas>
      </div>

      <div ref={ref} className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
              Get In Touch
            </span>
          </h2>
          <div className="h-1 w-24 bg-white mx-auto rounded-full mb-8" />
          <p className="text-2xl text-gray-400 font-light">
            Let's create something amazing together
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-black p-10 rounded-3xl border border-gray-800"
        >
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-white transition-all text-white text-lg"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-white transition-all text-white text-lg"
            />
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
            <textarea
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              rows={6}
              className="w-full px-6 py-4 bg-gray-900 border border-gray-800 rounded-xl focus:outline-none focus:border-white transition-all text-white text-lg resize-none"
            />
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-5 bg-white text-black rounded-xl font-bold text-lg hover:bg-gray-100 transition-all"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 text-gray-600"
        >
          <p className="text-sm">&copy; 2024 CodeSage. All rights reserved.</p>
        </motion.footer>
      </div>
    </section>
  );
}
