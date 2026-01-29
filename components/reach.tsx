"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { useState, useEffect } from "react";
import {
  GlobeIcon,
  BuildingIcon,
  TruckIcon,
  AwardIcon,
  MapPinIcon,
  FactoryIcon,
  ShipIcon,
  PlaneIcon
} from "lucide-react";

const globalStats = [
  {
    value: 50,
    suffix: "+",
    title: "Countries Served",
    description: "Active markets across six continents",
    icon: <GlobeIcon className="w-6 h-6" />
  },
  {
    value: 25000,
    suffix: "+",
    title: "Global Clients",
    description: "Trusted industrial partnerships worldwide",
    icon: <BuildingIcon className="w-6 h-6" />
  },
  {
    value: 15,
    title: "Manufacturing Hubs",
    description: "Strategic production facilities globally",
    icon: <FactoryIcon className="w-6 h-6" />
  },
  {
    value: 99.5,
    suffix: "%",
    title: "On-Time Delivery",
    description: "Reliable global supply chain performance",
    icon: <TruckIcon className="w-6 h-6" />
  }
];

const keyRegions = [
  {
    region: "North America",
    markets: "USA, Canada, Mexico",
    specialties: "Aerospace, Electronics, Renewable Energy",
    icon: <PlaneIcon className="w-5 h-5" />
  },
  {
    region: "Europe",
    markets: "Germany, UK, France, Netherlands",
    specialties: "Automotive, Industrial Machinery, Architecture",
    icon: <FactoryIcon className="w-5 h-5" />
  },
  {
    region: "Asia-Pacific",
    markets: "China, Japan, South Korea, Australia",
    specialties: "Electronics, Telecommunications, Infrastructure",
    icon: <GlobeIcon className="w-5 h-5" />
  },
  {
    region: "Middle East & Africa",
    markets: "UAE, Saudi Arabia, South Africa",
    specialties: "Oil & Gas, Mining, Construction",
    icon: <ShipIcon className="w-5 h-5" />
  }
];

function KeyValue({ title, value, description, suffix = "", icon }: {
  title: string;
  value: number;
  description: string;
  suffix?: string;
  icon: React.ReactNode;
}) {
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
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 copper-glow-on-hover"
    >
      <div className="flex items-start gap-4">
        <div className="text-primary mt-1">
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold text-primary mb-1">
            {hasStarted ? (
              <CountUp
                start={0}
                end={value}
                duration={2.5}
                separator=","
                decimals={value % 1 !== 0 ? 1 : 0}
              />
            ) : (
              "0"
            )}
            {suffix}
          </div>
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

function RegionCard({ region, markets, specialties, icon }: {
  region: string;
  markets: string;
  specialties: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-primary">
          {icon}
        </div>
        <h3 className="font-bold text-lg text-foreground">{region}</h3>
      </div>
      <div className="space-y-3">
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground mb-1">Key Markets</h4>
          <p className="text-sm text-foreground">{markets}</p>
        </div>
        <div>
          <h4 className="font-semibold text-sm text-muted-foreground mb-1">Specialties</h4>
          <p className="text-sm text-foreground">{specialties}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Reach() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="reach" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            Global Reach, <span className="text-gradient"> Local Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From precision manufacturing in India to delivery across six continents, 
            we bring world-class copper and brass solutions to your doorstep with 
            unwavering quality and reliability.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* World Map */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <AspectRatio ratio={16 / 10} className="w-full rounded-2xl overflow-hidden">
                <video 
                  src="/videos/map.mp4" 
                  autoPlay 
                  muted 
                  playsInline 
                  loop
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                
                {/* Animated pulse points */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-4 h-4 bg-primary rounded-full copper-glow"
                  />
                </div>
              </AspectRatio>

              {/* Floating elements */}
             
            </motion.div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            {globalStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <KeyValue {...stat} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Regional Presence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Regional Excellence Centers
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyRegions.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
              >
                <RegionCard {...region} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
