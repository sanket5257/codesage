'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Project data - you can move this to a separate file later
const projectsData = {
  'roshni-technologies': {
    title: 'Roshni Technologies',
    subtitle: 'Abu Dhabi, United Arab Emirates',
    year: '2025',
    role: 'We designed and built the website from scratch with a UI/UX-first approach, turning research and user flows into clear information architecture, wireframes, and high-fidelity prototypes. The final build is fast, responsive, and accessible, with streamlined navigation, concise messaging, and prominent calls-to-action that guide users to inquire with minimal friction. Performance and SEO are engineered through lightweight components, optimized media, semantic HTML, and structured metadata, while adaptive layouts and touch-friendly interactions ensure a great mobile experience. A scalable CMS and modular design system make content updates effortless and keep the brand consistent as the site grows.',
    description: 'Digital agency based in Abu Dhabi, delivering localized, commerce-first digital solutions and creative services for businesses across the UAE. They focus on user-centric design, responsive builds, and measurable growth through performance, accessibility, and SEO-driven execution.',
    tags: ['User Experience Optimization', 'Svelte', 'Web-design', 'User Interface Design'],
    summary: 'We minted the design, shaped the UI and UX, and built the site with clean, production-ready code',
    videoUrl: '/09162a18-0c22dd3e.mp4', // Using the video from public folder
    websiteUrl: '#',
    caseStudyUrl: '#'
  },
  // Add more projects here
};

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const projectId = params.id as string;
  const project = projectsData[projectId as keyof typeof projectsData];

  useEffect(() => {
    if (!project) return;

    // Ensure video plays
    if (videoRef.current && project.videoUrl) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }

    const ctx = gsap.context(() => {
      // Animate content on load
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.3
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Project Not Found</h1>
          <button 
            onClick={() => router.push('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-black text-white">
      {/* Video Background - Placeholder */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover opacity-60"
          >
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-80" />
        )}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Close Button */}
        <button
          onClick={() => router.push('/')}
          className="absolute top-8 right-8 md:top-12 md:right-16 z-50 px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-all duration-300"
        >
          Close
        </button>

        {/* Content */}
        <div ref={contentRef} className="relative z-10 w-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24 py-20">
          {/* Header Section */}
          <div className="mb-16">
            <p className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] mb-8">
              OUR ROLE IN THIS PROJECT
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
              {/* Left Column - Role Description */}
              <div>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-300">
                  {project.role}
                </p>
              </div>

              {/* Right Column - Project Info */}
              <div>
                <div className="mb-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-[Instrument-Serif] leading-tight mb-2">
                    {project.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 font-light">
                    {project.subtitle} <span className="ml-4">{project.year}</span>
                  </p>
                </div>

                <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl font-light font-[Instrument-Serif] leading-relaxed max-w-4xl mx-auto">
                {project.summary}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={project.caseStudyUrl}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-all duration-300 font-[Instrument-Serif]"
              >
                Case Study on Behance
              </a>
              <a
                href={project.websiteUrl}
                className="px-8 py-3 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition-all duration-300 font-medium"
              >
                Visit the website
              </a>
            </div>
          </div>

          {/* Large Project Title at Bottom */}
          <div className="text-center mt-24">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light font-[Instrument-Serif] leading-none">
              {project.title}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
