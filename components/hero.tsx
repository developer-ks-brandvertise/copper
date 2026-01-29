"use client";

import { Button } from "@/components/ui/button";
import { CirclePlayIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          className="w-full h-full object-cover brightness-[0.4]"
          autoPlay
          muted
          loop
          playsInline
        >
          <source 
            src="https://res.cloudinary.com/ddneah55w/video/upload/v1769609433/Hero_Header_Video_ikzjbc.mp4" 
            type="video/mp4" 
          />
        </video>
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Main content - Left aligned */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl"> {/* Left-aligned content container */}
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-copper/20 border border-copper/30 text-copper text-sm font-semibold backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-copper mr-3 animate-pulse"></span>
                Manufacturing Excellence Since 2016
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-8"
            >
              <h1 className="font-title text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                <span className="block">Global Copper & Brass</span>
                <span className="block text-gradient">
                  Manufacturing
                </span>                
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-sans max-w-2xl"
            >
              Precision-engineered copper and brass solutions manufactured responsibly in India and trusted by industries worldwide.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-copper to-copper/80 hover:from-copper/90 hover:to-copper/70 text-white font-semibold px-8 py-4 rounded-full shadow-copper transition-all duration-300 hover:shadow-copper-strong hover:scale-105 group"
              >
                Request a Quote
                <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 group"
              >
                <CirclePlayIcon className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap items-center gap-8 text-gray-400"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-medium font-sans">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-medium font-sans">Sustainable Manufacturing</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-medium font-sans">Global Supply Chain</span>
              </div>
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-xs font-medium mb-2 font-sans">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-copper to-transparent rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
