"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

type NumberData = {
  count: number;
  title: string;
  description: string;
  suffix?: string;
  prefix?: string;
};

const stats: NumberData[] = [
  {
    count: 1350,
    title: "Monthly Production Capacity",
    description: "Metric tons across three shifts",
    suffix: "MT",
  },
  {
    count: 300,
    title: "Customers Served",
    description: "Trusted partners across India",
    suffix: "+",
  },
  {
    count: 250,
    title: "Dedicated Professionals",
    description: "Skilled team powering operations",
    suffix: "+",
  },
  {
    count: 2016,
    title: "Established",
    description: "Years of manufacturing excellence",
    prefix: "Since ",
  },
];

function EachData({ count, title, description, suffix = "", prefix = "" }: NumberData) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (inView && !hasStarted) {
      setHasStarted(true);
    }
  }, [inView, hasStarted]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6 }}
      className="group relative"
    >
      <div className="relative bg-card/80 backdrop-blur-sm border border-copper/30 rounded-2xl p-8 hover:border-copper/50 transition-all duration-300 hover:shadow-glow">
        {/* Counter */}
        <div className="mb-4">
          <div className="text-4xl md:text-5xl font-bold text-copper mb-2">
            {prefix}
            {hasStarted ? (
              <CountUp
                start={0}
                end={count}
                duration={2.5}
                separator=","
                decimals={count % 1 !== 0 ? 1 : 0}
              />
            ) : (
              "0"
            )}
            {suffix}
          </div>
        </div>

        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-copper transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Numbers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <AspectRatio ratio={16 / 9} className="w-full h-full">
          <Image
            src="/temp2.jpg"
            alt="Manufacturing facility"
            fill
            className="object-cover brightness-20"
          />
        </AspectRatio>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
        
        {/* Industrial pattern overlay */}
        <div className="absolute inset-0 sparks-animation opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-title">
              Scale Backed by
              <span className="block text-gradient">
                Stability
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
              Our scale is supported by systems designed for consistency and reliability. These numbers reflect our commitment to delivering excellence at every level.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <EachData {...stat} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
