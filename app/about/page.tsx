'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutStory from '@/components/AboutStory';
import AboutTeam from '@/components/AboutTeam';
import AboutValues from '@/components/AboutValues';
import AboutClients from '@/components/AboutClients';

export default function AboutPage() {
  return (
    <main className="relative">
      <Navbar />
      <AboutHero />
      <AboutStory />
      <AboutClients />
      <AboutValues />
      <AboutTeam />
      <Footer />
    </main>
  );
}