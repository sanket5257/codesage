'use client';

export default function Projects() {
  const projects = [
    { image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=400&h=500&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=500&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop' },
    { image: 'https://images.unsplash.com/photo-1509773896068-7fd415d91e2e?w=400&h=500&fit=crop' }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-black overflow-hidden">
      {/* Header */}
      <div className="px-8 md:px-16 lg:px-24 mb-12">
        <p className="text-[10px] md:text-xs text-white uppercase tracking-[0.2em]">
          SELECTED WORKS
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Overlays - Left and Right */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black via-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black via-black to-transparent z-10 pointer-events-none" />
        
        <div className="space-y-4">
          {/* Row 1 - Left to Right */}
          <div className="flex animate-marquee-slow">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={`row1-${setIndex}-${index}`}
                    className="relative w-[220px] h-[280px] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt="Project"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 2 - Right to Left */}
          <div className="flex animate-marquee-reverse-slow">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={`row2-${setIndex}-${index}`}
                    className="relative w-[220px] h-[280px] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt="Project"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Row 3 - Left to Right */}
          <div className="flex animate-marquee-slow">
            {[...Array(4)].map((_, setIndex) => (
              <div key={setIndex} className="flex flex-shrink-0 gap-4">
                {projects.map((project, index) => (
                  <div
                    key={`row3-${setIndex}-${index}`}
                    className="relative w-[220px] h-[280px] rounded-xl overflow-hidden flex-shrink-0 group cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt="Project"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
