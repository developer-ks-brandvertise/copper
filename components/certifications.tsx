"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ShieldCheckIcon, TrophyIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

type Certification = {
  id: number;
  name: string;
  description: string;
  validUntil: string;
  authority: string;
  category: string;
};

const certifications: Certification[] = [
  {
    id: 1,
    name: "ISO 9001:2015",
    description: "Quality Management Systems certification ensuring consistent quality across all operations",
    validUntil: "2025",
    authority: "International Organization for Standardization",
    category: "Quality"
  },
  {
    id: 2,
    name: "ISO 14001:2015", 
    description: "Environmental Management Systems certification for sustainable operations",
    validUntil: "2025",
    authority: "International Organization for Standardization", 
    category: "Environment"
  },
  {
    id: 3,
    name: "ISO 45001:2018",
    description: "Occupational Health and Safety Management Systems certification",
    validUntil: "2025",
    authority: "International Organization for Standardization",
    category: "Safety"
  },
  {
    id: 4,
    name: "MRAI Membership",
    description: "Metal Recycling Association of India membership ensuring industry best practices",
    validUntil: "Active",
    authority: "Metal Recycling Association of India",
    category: "Industry"
  },
];

function CertificationBadge({ cert, index }: { cert: Certification; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'quality':
      case 'standards':
        return <TrophyIcon className="w-6 h-6" />;
      case 'safety':
        return <ShieldCheckIcon className="w-6 h-6" />;
      case 'environment':
      case 'environmental':
      case 'compliance':
        return <CheckBadgeIcon className="w-6 h-6" />;
      default:
        return <TrophyIcon className="w-6 h-6" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Certificate Image */}
      <div className="relative w-40 h-40 transition-all duration-300 overflow-hidden group-hover:shadow-glow flex items-center justify-center">
        <Image
          src={`/cert/Certification-0${cert.id}.png`}
          alt={cert.name}
          width={160}
          height={160}
          className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
        />
        
        {/* Category Icon Overlay */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-1.5 bg-copper/20 rounded-full backdrop-blur-sm border border-copper/30">
            <div className="text-copper">
              {getCategoryIcon(cert.category)}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={
          isHovered 
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 10, scale: 0.9 }
        }
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-20 pointer-events-none"
      >
        <div className="bg-popover/95 backdrop-blur-sm border border-border rounded-lg p-3 shadow-xl min-w-[280px]">
          <h4 className="text-white font-semibold text-sm mb-1">{cert.name}</h4>
          <p className="text-slate-400 text-xs mb-2 leading-relaxed">{cert.description}</p>
          <div className="flex justify-between items-center text-xs">
            <span className="text-slate-500">Valid until {cert.validUntil}</span>
            <span className="px-2 py-1 bg-copper/20 text-copper rounded text-xs">
              {cert.category}
            </span>
          </div>
        </div>
        {/* Arrow */}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-slate-800/95"></div>
      </motion.div>
    </motion.div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-copper/10 text-copper text-sm font-medium border border-copper/20 mb-6">
            <ShieldCheckIcon className="w-4 h-4" />
            Certifications & Trust
          </div>
          <h2 className="text-5xl md:text-5xl font-bold mb-6 font-title">
            <span className="text-gradient">Certified Quality</span>
            <span className="text-white"> You Can Rely On</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-sans">
            Quality is embedded at every stage of our operations. Our certifications validate our commitment to excellence, safety, and environmental responsibility.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <CertificationBadge key={cert.id} cert={cert} index={index} />
            ))}
          </div>
        </div>

        {/* Certificate Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center gap-8 mb-16 flex-wrap"
        >
          <div className="w-64 h-80 overflow-hidden shadow-copper">
            <Image
              src="/Certificate-1.jpg"
              alt="Certificate 1"
              width={256}
              height={320}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-64 h-80 overflow-hidden shadow-copper">
            <Image
              src="/Certificate-2.jpg" 
              alt="Certificate 2"
              width={256}
              height={320}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-64 h-80 overflow-hidden shadow-copper">
            <Image
              src="/Certificate-3.jpg"
              alt="Certificate 3" 
              width={256}
              height={320}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
              <CheckBadgeIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">100% Compliance</h3>
            <p className="text-slate-400">Full adherence to all international standards and regulations</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Zero Defects</h3>
            <p className="text-slate-400">Rigorous quality control ensuring defect-free production</p>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-copper to-copper/70 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
              <TrophyIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Industry Leader</h3>
            <p className="text-slate-400">Setting benchmarks for quality and innovation in the industry</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-copper to-copper/80 text-white rounded-full font-medium hover:shadow-glow transition-all duration-300 group"
          >
            View All Certifications
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
