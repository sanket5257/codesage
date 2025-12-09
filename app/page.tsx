'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import Possibilities from '@/components/Possibilities';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <Stats />
       <Projects />
      <Possibilities />
      <About />
     
      {/* <Contact /> */}
    </main>
  );
}
