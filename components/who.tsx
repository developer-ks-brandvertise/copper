"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRightIcon, CheckCircleIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const achievements = [
  { value: "50+", label: "Years of Excellence", icon: "🏆" },
  { value: "500K+", label: "Tons Annual Capacity", icon: "⚡" },
  { value: "35+", label: "Countries Served", icon: "🌍" },
  { value: "99.9%", label: "Purity Standards", icon: "✨" }
];

const values = [
  "Ethical and transparent business practices",
  "Quality without compromise", 
  "Safety-first manufacturing culture",
  "Respect for people and partnerships"
];

export default function WhoWeAreSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="who" className="py-24 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-copper/10 text-copper text-sm font-medium rounded-full border border-copper/20 mb-6"
            >
              <SparklesIcon className="w-4 h-4" />
              Who We Are
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-title"
            >
              <span className="text-foreground">A Global Manufacturing</span>
              <br />
              <span className="text-gradient">Partner You Can Trust</span>
            </motion.h2>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4 mb-8"
            >
              <p className="text-lg text-foreground/80 leading-relaxed font-sans">
                Founded in 2016, Keshan Industries LLP is a professionally managed manufacturer of copper and brass products serving electrical, industrial, and engineering sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed font-sans">
                With two modern manufacturing facilities, ISO-certified processes, and a people-first culture, we combine Indian manufacturing strength with global standards of quality, ethics, and reliability.
              </p>
            </motion.div>

            {/* Value Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-3 mb-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-foreground/80">{value}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="#about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-copper to-copper/80 text-white rounded-full font-medium hover:shadow-glow transition-all duration-300 group"
              >
                Discover Our Story
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="text-2xl mb-1">{achievement.icon}</div>
                  <div className="text-2xl font-bold text-copper mb-1 group-hover:text-copper/80 transition-colors">
                    {achievement.value}
                  </div>
                  <div className="text-xs text-slate-400 leading-tight">
                    {achievement.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <AspectRatio ratio={4/5} className="rounded-2xl overflow-hidden">
                <Image
                  src="/who.jpg"
                  alt="Keshan Industries Manufacturing Facility"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </AspectRatio>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={imageInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-copper to-copper/70 rounded-full flex items-center justify-center">
                    <SparklesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">ISO Certified</div>
                    <div className="text-sm text-slate-400">Quality Assured</div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-copper/20 to-transparent rounded-full blur-xl" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-full blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
