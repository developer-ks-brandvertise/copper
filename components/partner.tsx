"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowDownTrayIcon, PhoneIcon, UserGroupIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function Partnership() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="partnership" className="relative py-24 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover brightness-30"
        >
          <source src="https://res.cloudinary.com/ddneah55w/video/upload/v1769698128/copper-rolling_khbuzu.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-copper/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-copper/20 backdrop-blur-sm border border-copper/30 text-copper font-medium mb-8"
          >
            <UserGroupIcon className="w-5 h-5" />
            Partnership Opportunity
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight font-title"
          >
            Let's Build{" "}
            <span className="text-gradient">Long-Term Industrial Partnerships</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl text-slate-300 font-medium mb-12 max-w-2xl mx-auto font-sans"
          >
            Whether you are an OEM, distributor, or global buyer, Keshan Industries is ready to support your growth with reliable copper and brass solutions.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-copper to-copper/80 text-white hover:shadow-glow transition-all duration-300 font-semibold uppercase tracking-wider group"
            >
              <PhoneIcon className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Request a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold uppercase tracking-wider transition-all duration-300 group backdrop-blur-sm"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Company Profile
            </Button>
          </motion.div>

          {/* Partnership Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-copper/20 to-copper/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 border border-copper/30">
                <GlobeAltIcon className="w-8 h-8 text-copper" />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Reach</h3>
              <p className="text-slate-400 text-sm">
                Access to international markets and distribution networks spanning across continents
              </p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 border border-emerald-500/30">
                <UserGroupIcon className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Reliable Partnership</h3>
              <p className="text-slate-400 text-sm">
                Decades of industry experience with a proven track record of successful collaborations
              </p>
            </div>
            
            <div className="group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300 border border-blue-500/30">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-slate-400 text-sm">
                Cutting-edge technology and continuous R&D investment for superior solutions
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
