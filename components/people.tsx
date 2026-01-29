"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChatBubbleLeftIcon, StarIcon } from "@heroicons/react/24/solid";

type TeamMember = {
  text: string;
  img: string;
  name: string;
  position: string;
  experience: string;
  specialization: string;
  achievement: string;
};

const teamMembers: TeamMember[] = [
  {
    img: "/w1.jpg",
    name: "Rajesh Kumar",
    position: "Chief Technology Officer",
    experience: "20+ years",
    specialization: "Metallurgical Engineering",
    achievement: "Led 15+ major industrial projects",
    text: "Innovation in copper processing isn't just about technology—it's about understanding the material at a molecular level and respecting its properties while pushing the boundaries of what's possible."
  },
  {
    img: "/w2.jpg",
    name: "Priya Sharma", 
    position: "Head of Quality Control",
    experience: "15+ years",
    specialization: "Quality Assurance & Standards",
    achievement: "Zero-defect track record across 500+ batches",
    text: "Quality isn't just a department here—it's a philosophy. Every gram of copper that leaves our facility carries our commitment to excellence and our reputation built over decades."
  },
  {
    img: "/w3.jpg",
    name: "Dr. Sarah Chen",
    position: "Research & Development Lead",
    experience: "18+ years",
    specialization: "Materials Science & Innovation",
    achievement: "12 patents in advanced metallurgy",
    text: "The future of copper lies in sustainable processing and nano-level precision. We're not just manufacturers—we're pioneers shaping the next generation of industrial materials."
  },
  {
    img: "/w4.jpg",
    name: "Ahmed Hassan",
    position: "Operations Director",
    experience: "22+ years",
    specialization: "Industrial Operations & Safety",
    achievement: "3000+ days without safety incidents",
    text: "Behind every successful operation is a team that works like a family. Safety, efficiency, and excellence aren't just targets—they're the foundation of everything we do."
  },
  {
    img: "/w5.jpg",
    name: "Maria Rodriguez",
    position: "Environmental Sustainability Officer",
    experience: "12+ years", 
    specialization: "Environmental Engineering",
    achievement: "40% reduction in carbon footprint",
    text: "Sustainability isn't a trend for us—it's a responsibility. We're proving that industrial excellence and environmental stewardship can work hand in hand."
  }
];

function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-copper/30 transition-all duration-500 min-w-[350px] max-w-[400px]"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={member.img}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Floating Achievement Badge */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full border border-emerald-500/30 backdrop-blur-sm flex items-center gap-1">
            <StarIcon className="w-3 h-3" />
            Achievement
          </div>
        </div>

        {/* Experience Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="px-3 py-1 bg-copper/20 text-copper text-xs font-medium rounded-full border border-copper/30 backdrop-blur-sm">
            {member.experience}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative">
        {/* Quote Icon */}
        <div className="absolute -top-3 left-6">
          <div className="w-8 h-8 bg-copper rounded-full flex items-center justify-center shadow-glow">
            <ChatBubbleLeftIcon className="w-4 h-4 text-foreground" />
          </div>
        </div>

        {/* Member Info */}
        <div className="mb-4 pt-2">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-copper transition-colors">
            {member.name}
          </h3>
          <p className="text-copper text-sm font-medium mb-2">
            {member.position}
          </p>
          <p className="text-slate-400 text-xs mb-3">
            {member.specialization}
          </p>
        </div>

        {/* Testimonial */}
        <blockquote className="text-slate-300 text-sm leading-relaxed italic mb-4 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          "{member.text}"
        </blockquote>

        {/* Achievement (revealed on hover) */}
        <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="pt-3 border-t border-slate-700">
            <p className="text-xs text-slate-500 font-medium">
              {member.achievement}
            </p>
          </div>
        </div>
      </div>

      {/* Hover Ring Effect */}
      <div className="absolute inset-0 ring-1 ring-inset ring-copper/10 rounded-2xl pointer-events-none group-hover:ring-copper/30 transition-all duration-500" />
    </motion.div>
  );
}

export default function People() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="people" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-bold mb-6 font-title text-white">
            People Behind the
            <span className="block text-gradient">
              Performance
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-sans">
            Technology and infrastructure are powered by people. Our team of skilled technicians, engineers, and professionals operates with a shared commitment to safety, accountability, and excellence.
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-4">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        {/* Pyramid Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 flex justify-center"
        >
          <div className="relative min-h-[500px] flex items-center justify-center">
            <Image
              src="/Pyramid.png"
              alt="Keshan Industries Pyramid"
              width={500}
              height={500}
              className="object-contain min-h-[500px]"
            />
          </div>
        </motion.div>

        {/* Join Our Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-copper to-copper/80 text-white rounded-full font-medium hover:shadow-glow transition-all duration-300 cursor-pointer">
            Join Our Growing Team
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
