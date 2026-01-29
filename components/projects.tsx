"use client";

import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { TagIcon } from "@heroicons/react/24/outline";

type Project = {
  img: string;
  title: string;
  href: string;
  category: string;
  description: string;
  year: string;
  location: string;
  capacity?: string;
};

const projects: Project[] = [
  {
    title: "Advanced Copper Smelting Complex",
    href: "#",
    img: "/p2.jpg",
    category: "Industrial",
    description: "State-of-the-art copper smelting facility with automated processing and environmental controls",
    year: "2024",
    location: "Mumbai, India",
    capacity: "500,000 tons/year"
  },
  {
    title: "High-Purity Refining Plant",
    href: "#",
    img: "/p1.jpg",
    category: "Refining",
    description: "Advanced electrolytic refining facility producing 99.99% pure copper cathodes",
    year: "2023",
    location: "Gujarat, India",
    capacity: "200,000 tons/year"
  },
  {
    title: "Precision Casting Operations",
    href: "#",
    img: "/cast.jpg",
    category: "Manufacturing",
    description: "Custom copper alloy casting for marine, automotive, and industrial applications",
    year: "2023",
    location: "Karnataka, India"
  },
  {
    title: "Sustainable Recycling Center",
    href: "#",
    img: "/refine.jpg",
    category: "Recycling",
    description: "Eco-friendly copper recycling facility processing e-waste and scrap metals",
    year: "2024",
    location: "Delhi, India",
    capacity: "100,000 tons/year"
  },
  {
    title: "Premium Sheet Manufacturing",
    href: "#",
    img: "/sheets.jpg",
    category: "Products",
    description: "High-grade copper sheets for electrical, construction, and architectural applications",
    year: "2022",
    location: "Tamil Nadu, India"
  },
  {
    title: "Automotive Components Division",
    href: "#",
    img: "/cars.jpg",
    category: "Automotive",
    description: "Specialized copper components for EV batteries and traditional automotive systems",
    year: "2024",
    location: "Haryana, India"
  },
  {
    title: "Marine Grade Alloys Plant",
    href: "#",
    img: "/marine.jpg",
    category: "Marine",
    description: "Corrosion-resistant copper alloys for marine and offshore applications",
    year: "2023",
    location: "Goa, India"
  },
  {
    title: "Electrical Infrastructure Hub",
    href: "#",
    img: "/electrical.jpg",
    category: "Electrical",
    description: "Power transmission components and electrical infrastructure solutions",
    year: "2024",
    location: "Punjab, India"
  }
];

const categories = ["All", "Industrial", "Refining", "Manufacturing", "Recycling", "Products", "Automotive", "Marine", "Electrical"];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Random heights for masonry effect
  const heights = ['h-64', 'h-80', 'h-72', 'h-96', 'h-60', 'h-88', 'h-76', 'h-84'];
  const cardHeight = heights[index % heights.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card overflow-hidden border border-copper/30 shadow-copper transition-all duration-500 break-inside-avoid mb-6"
    >
      <div className={`relative ${cardHeight} overflow-hidden`}>
        <Image
          src={project.img}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-copper transition-colors">
              {project.title}
            </h3>
          </div>

          <Link
            href={project.href}
            className="w-full px-4 py-2 bg-gradient-to-r from-copper to-copper/80 text-white text-sm font-medium hover:from-copper/90 hover:to-copper/70 shadow-copper transition-all duration-300 inline-flex items-center justify-center"
          >
            View Details
          </Link>
        </div>
      </div>

      <div className="absolute inset-0 ring-1 ring-inset ring-copper/30 pointer-events-none transition-all duration-500" />
    </motion.div>
  );
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 font-title">
            <span className="text-gradient">Projects & </span>
            <span className="text-foreground">Showcase</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our world-class facilities and groundbreaking projects that set new standards in copper and brass manufacturing excellence.
          </p>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.title}-${selectedCategory}`} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
