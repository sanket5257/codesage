"use client";
import { motion } from "framer-motion";
import { Target, Fingerprint, Key, TrendingUp } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: <Target className="w-5 h-5" />,
    title: "Selection",
    description: "We find you.",
  },
  {
    id: "02",
    icon: <Fingerprint className="w-5 h-5" />,
    title: "Alignment",
    description: "Onboarding process to align capital, vision, and opportunity.",
  },
  {
    id: "03",
    icon: <Key className="w-5 h-5" />,
    title: "Access",
    description: "Gain entry to elite opportunities, secured and tokenized.",
  },
  {
    id: "04",
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Compounding",
    description: "Your wealth compounds seamlessly while we carry the weight.",
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-black text-white py-24 px-6 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
          From Selection <br /> to Legacy.
        </h2>
      </motion.div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-4 w-full max-w-7xl border-t border-white/10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative p-8 border-r border-white/10 last:border-r-0 group cursor-default"
          >
            {/* Large Background Number */}
            <span className="absolute top-4 left-6 text-8xl font-bold text-white/10 select-none transition-colors group-hover:text-white/20">
              {step.id}
            </span>

            {/* Content */}
            <div className="relative z-10 mt-12">
              <div className="mb-10 text-white/80">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-4 tracking-wide">
                {step.title}
              </h3>
              
              <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}