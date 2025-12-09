'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');

  const positions = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'We re looking for an experienced full stack developer to join our engineering team and build amazing web applications.',
      requirements: ['5+ years experience', 'React/Next.js', 'Node.js', 'TypeScript']
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      description: 'Join our design team to create beautiful, user-centered digital experiences for our clients.',
      requirements: ['3+ years experience', 'Figma', 'Design Systems', 'User Research']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Build responsive, performant web applications with modern frontend technologies.',
      requirements: ['3+ years experience', 'React', 'CSS/Tailwind', 'JavaScript/TypeScript']
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Management',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Lead client projects from conception to delivery, ensuring quality and timely execution.',
      requirements: ['4+ years experience', 'Agile/Scrum', 'Client Management', 'Technical Background']
    },
    {
      id: 5,
      title: 'Content Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      description: 'Create compelling content for our clients websites, blogs, and marketing materials.',
      requirements: ['2+ years experience', 'SEO Knowledge', 'Creative Writing', 'Tech Industry Experience']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Dubai, UAE',
      type: 'Full-time',
      description: 'Manage our infrastructure, CI/CD pipelines, and ensure smooth deployments.',
      requirements: ['3+ years experience', 'AWS/Azure', 'Docker/Kubernetes', 'CI/CD']
    }
  ];

  const departments = ['all', 'Engineering', 'Design', 'Management', 'Marketing'];

  const filteredPositions = selectedDepartment === 'all' 
    ? positions 
    : positions.filter(p => p.department === selectedDepartment);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.position-card', {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.positions-grid',
          start: 'top 80%',
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/b56c9806-11400f44.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Close/Back Button */}
        <Link
          href="/"
          className="absolute top-8 right-8 md:top-12 md:right-16 z-50 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-all duration-300"
        >
          Back to Home
        </Link>

        <div className="hero-content relative z-10 text-center px-8 max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-[Instrument-Serif] mb-6">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Build the future of digital experiences with us. We're always looking for talented individuals who are passionate about design, technology, and innovation.
          </p>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light font-[Instrument-Serif] mb-12 text-center">
            Why CodeSage?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Growth Opportunities</h3>
              <p className="text-gray-400">
                Work on diverse projects with cutting-edge technologies and grow your skills continuously.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-3">Remote Flexibility</h3>
              <p className="text-gray-400">
                Work from anywhere with flexible hours and a healthy work-life balance.
              </p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg border border-white/10">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Creative Freedom</h3>
              <p className="text-gray-400">
                Bring your ideas to life and make a real impact on projects that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light font-[Instrument-Serif] mb-8">
            Open Positions
          </h2>

          {/* Department Filter */}
          <div className="flex flex-wrap gap-3 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {dept === 'all' ? 'All Positions' : dept}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="positions-grid space-y-6">
            {filteredPositions.map((position) => (
              <div
                key={position.id}
                className="position-card p-6 md:p-8 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-300 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        📍 {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        💼 {position.type}
                      </span>
                      <span className="px-3 py-1 bg-white/10 rounded-full">
                        {position.department}
                      </span>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all whitespace-nowrap">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 mb-4">
                  {position.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {position.requirements.map((req, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
                    >
                      {req}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">
                No positions available in this department at the moment.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 md:px-16 lg:px-24 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light font-[Instrument-Serif] mb-6">
            Don't see a perfect fit?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@codesage.com"
            className="inline-block px-8 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-200 transition-all"
          >
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}
