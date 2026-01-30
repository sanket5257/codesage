'use client';

import MicroText from './MicroText';

export default function Manifesto() {
  const sections = [
    {
      title: 'MANIFESTO',
      text: "There are paths in the world that can't be seen — only sensed. Where others invest in the obvious, we explore what lies behind closed doors. This is a gateway to the extraordinary. Not everyone is meant to step through it.",
    },
    {
      title: 'STRATEGY',
      text: 'We believe in the power of strategic thinking. Every project begins with understanding your vision, your audience, and your goals. We craft solutions that are not just beautiful, but purposeful and effective.',
    },
    {
      title: 'CREATIVE EQUITY',
      text: 'These are not just words on a screen. They are the foundation of everything we create. Bold ideas, refined execution, and unwavering commitment to excellence define our approach to digital experiences.',
    },
    {
      title: 'PHILOSOPHY',
      text: 'In a world of shortcuts and templates, we choose the harder path. We believe that great work requires time, thought, and dedication. Every pixel, every interaction, every line of code matters in our pursuit of perfection.',
    },
  ];

  return (
    <section id='manifesto' className="relative bg-black text-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative border-b md:border-b-0 lg:border-r border-white/10 last:border-b-0 lg:last:border-r-0 px-6 md:px-8 py-8 md:py-12 min-h-[300px] md:min-h-[400px] flex flex-col"
            >
              {/* Title */}
              <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-500 mb-8 uppercase">
                {section.title}
              </h3>

              {/* Micro Text */}
              <div className="flex-1">
                <MicroText
                  text={section.text}
                  className="w-full"
                  textClassName="text-[11px] md:text-xs leading-relaxed font-light"
                  startOpacity={0.2}
                  endOpacity={0.9}
                  startColor="#2a2a2a"
                  endColor="#cccccc"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
