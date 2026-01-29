"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CogIcon, BeakerIcon, WrenchScrewdriverIcon, SparklesIcon } from "@heroicons/react/24/outline";

type CapabilityCard = {
  img: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  specs: string[];
  badge?: string;
};

const capabilities: CapabilityCard[] = [
  {
    img: "/cast.jpg",
    title: "Advanced Smelting & Refining",
    description: "State-of-the-art smelting facilities with electrolytic refining processes that achieve 99.99% copper purity, meeting the highest international standards.",
    icon: <BeakerIcon className="w-8 h-8" />,
    specs: ["99.99% Purity", "500K Tons/Year", "ISO 9001 Certified"],
    badge: "Premium Grade"
  },
  {
    img: "/refine.jpg", 
    title: "Precision Manufacturing",
    description: "Advanced extrusion and drawing technology for seamless tubes, rods, and custom profiles with ultra-tight tolerances for critical applications.",
    icon: <CogIcon className="w-8 h-8" />,
    specs: ["±0.001mm Tolerance", "Custom Profiles", "High-Speed Processing"],
    badge: "Precision Engineered"
  },
  {
    img: "/sparks.jpg",
    title: "Custom Fabrication",
    description: "State-of-the-art CNC machining centers and fabrication capabilities for complex copper and brass components tailored to specific requirements.",
    icon: <WrenchScrewdriverIcon className="w-8 h-8" />,
    specs: ["CNC Machining", "Complex Geometries", "Rapid Prototyping"],
    badge: "Custom Solutions"
  },
];

function CapabilityCard({ capability, index }: { capability: CapabilityCard; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative bg-black/90 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-copper/30 transition-all duration-500 hover:shadow-lift"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={capability.img}
          alt={capability.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Badge */}
        {capability.badge && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-copper/20 text-copper text-xs font-medium rounded-full border border-copper/30 backdrop-blur-sm">
              {capability.badge}
            </span>
          </div>
        )}

        {/* Icon Overlay */}
        <div className="absolute bottom-4 left-4">
          <div className="w-12 h-12 bg-copper/20 backdrop-blur-sm rounded-full border border-copper/30 flex items-center justify-center text-copper">
            {capability.icon}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-copper transition-colors">
          {capability.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {capability.description}
        </p>

        {/* Specifications */}
        <div className="space-y-2 mb-4">
          {capability.specs.map((spec, idx) => (
            <motion.div
              key={spec}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 + idx * 0.1 }}
              className="flex items-center gap-2 text-xs text-slate-500"
            >
              <div className="w-1.5 h-1.5 bg-copper rounded-full" />
              {spec}
            </motion.div>
          ))}
        </div>

        {/* Learn More Link */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
          className="text-copper text-sm font-medium hover:text-copper/80 transition-colors flex items-center gap-1 group-hover:gap-2 transition-all duration-300"
        >
          Learn More
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Hover Ring Effect */}
      <div className="absolute inset-0 ring-1 ring-inset ring-copper/10 rounded-2xl pointer-events-none group-hover:ring-copper/30 transition-all duration-500" />
    </motion.div>
  );
}

export default function OurCapabilities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="capabilities" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-copper/10 text-copper text-sm font-medium rounded-full border border-copper/20 mb-6">
            <SparklesIcon className="w-4 h-4" />
            Core Capabilities
          </div>
          <h2 className="text-5xl font-bold mb-6 font-title">
            <span className="text-gradient">Manufacturing </span>
            <span className="text-white">Excellence</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology, precision engineering, and decades of expertise combine to deliver world-class copper and brass manufacturing solutions.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.title} capability={capability} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Ready to experience our manufacturing capabilities?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-copper to-copper/80 text-white rounded-full font-medium hover:shadow-glow transition-all duration-300">
            Request a Quote
          </button>
        </motion.div>
      </div>
    </section>
  );
}
