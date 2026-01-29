"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export type EachLinkCard = {
  title: string;
  description: string;
  img: string;
  href: string;
  linkText: string;
  badge?: string;
};

const solutions: EachLinkCard[] = [
  {
    title: "Copper & Brass Ingots",
    description:
      "Premium quality copper and brass ingots manufactured to precise specifications. Our ingots serve as raw materials for various industrial applications across electrical, construction, and engineering sectors.",
    href: "#",
    img: "/ingots.jpg",
    linkText: "View Specifications",
    badge: "Premium Quality",
  },
  {
    title: "Sheets, Plates & Circles",
    description:
      "Precision-rolled copper and brass sheets, plates, and circles available in custom sizes and thicknesses. Ideal for heat exchangers, architectural applications, and electrical components.",
    href: "#",
    img: "/sheets.jpg",
    linkText: "Custom Sizes",
    badge: "Custom Solutions",
  },
  {
    title: "Copper Busbars",
    description:
      "High-conductivity copper busbars engineered for electrical switchgear and power distribution systems. Manufactured to meet international standards with superior thermal management properties.",
    href: "#",
    img: "/busbars.jpg",
    linkText: "Technical Data",
    badge: "High Performance",
  },
  {
    title: "CCR Rods, Wires & Strips",
    description:
      "Continuous cast copper rods, wires, and strips with consistent cross-sections and superior conductivity. Perfect for telecommunications, automotive, and electrical applications.",
    href: "#",
    img: "/round-wires.jpg",
    linkText: "Product Range",
    badge: "Precision Engineered",
  },
  {
    title: "Copper Foils",
    description:
      "Ultra-thin copper foils for PCB manufacturing, EMI shielding, and electronic applications. Available in various thicknesses with excellent surface quality and dimensional stability.",
    href: "#",
    img: "/foil.jpg",
    linkText: "Specifications",
    badge: "Electronics Grade",
  },
  {
    title: "Brass Components",
    description:
      "Specialized brass components and alloys for marine, architectural, and industrial applications. Superior corrosion resistance and aesthetic appeal for demanding environments.",
    href: "#",
    img: "/brass.jpg",
    linkText: "Applications",
    badge: "Marine Grade",
  },
];

const features = [
  {
    title: "ISO Certified Quality",
    description: "Multiple ISO certifications ensuring consistent excellence"
  },
  {
    title: "Custom Specifications", 
    description: "Tailored solutions for specific industrial requirements"
  },
  {
    title: "Reliable Supply Chain",
    description: "Consistent delivery with 24×7 manufacturing capacity"
  },
];

export function EachLinkCard({
  img,
  description,
  title,
  href,
  linkText,
  badge,
}: EachLinkCard) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="group relative bg-card border border-border hover:border-copper/50 rounded-xl overflow-hidden transition-all duration-300"
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1 bg-copper/20 backdrop-blur-sm text-copper text-xs font-semibold rounded-full border border-copper/30">
            {badge}
          </span>
        </div>
      )}

      {/* Image - Made much bigger */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 group-hover:brightness-100"
          />
        </AspectRatio>
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-copper transition-colors duration-300 font-title">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed font-sans">
          {description}
        </p>
        <Link
          href={href}
          className="inline-flex items-center text-copper font-medium text-sm hover:text-copper/80 transition-colors duration-300 group/link"
        >
          {linkText}
          <svg className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Solutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-title text-foreground">
            Precision-Crafted <span className="text-gradient">Copper & Brass Products</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
            Each product is manufactured under strict quality control to meet demanding industrial standards. From high-performance busbars to industrial-grade sheets and ingots.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div key={feature.title} className="p-6 bg-card/50 rounded-xl border border-copper/30 hover:border-copper/50 transition-all duration-300 hover:shadow-glow">
              <div>
                <h3 className="font-semibold mb-1 text-foreground font-title">{feature.title}</h3>
                <p className="text-sm text-muted-foreground font-sans">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <EachLinkCard {...solution} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
