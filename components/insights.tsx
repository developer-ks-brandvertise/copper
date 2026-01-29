"use client";import { ChevronRightIcon, CalendarIcon, UserIcon, ClockIcon, TrendingUpIcon, ZapIcon, GlobeIcon } from "lucide-react";import { ReactNode } from "react";import Image from "next/image";import { AspectRatio } from "@/components/ui/aspect-ratio";import Link from "next/link";import { buttonVariants } from "./ui/button";import { motion } from "framer-motion";import { useInView } from "react-intersection-observer";export type InsightCard = {  title: string;  description: string;  img: string;  href: string;  linkText: string;  category: string;  date: string;  readTime: string;  author?: string;};const insights: InsightCard[] = [  {    description:      "Exploring the latest developments in sustainable copper mining practices and their impact on global supply chains. How ethical sourcing is reshaping the industrial metals market.",    title: "Sustainable Copper: Leading the Green Revolution",    href: "#",    img: "/power.jpg",    linkText: "Read Full Article",    category: "Sustainability",    date: "January 15, 2026",    readTime: "5 min read",    author: "Dr. Sarah Chen"  },  {    description:      "The rise of renewable energy infrastructure is driving unprecedented demand for copper and brass components. Our analysis of market trends and future opportunities.",    title: "Copper's Critical Role in Global Energy Transition",    href: "#",    img: "/electrical.jpg",    linkText: "Discover Trends",    category: "Market Analysis",    date: "January 10, 2026",    readTime: "8 min read",    author: "Michael Rodriguez"  },  {    description:      "Advanced manufacturing techniques are revolutionizing copper and brass production. From AI-driven quality control to automated precision manufacturing systems.",    title: "Industry 4.0: Smart Manufacturing in Metal Production",    href: "#",    img: "/industry.jpg",    linkText: "Learn More",    category: "Technology",    date: "January 5, 2026",    readTime: "6 min read",    author: "Elena Petrov"  },];function InsightCardComponent({  img,  description,
  title,
  href,
  linkText,
  category,
  date,
  readTime,
  author
}: InsightCard) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'sustainability':
        return <GlobeIcon className="w-4 h-4" />;
      case 'technology':
        return <ZapIcon className="w-4 h-4" />;
      default:
        return <TrendingUpIcon className="w-4 h-4" />;
    }
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
      className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 card-hover"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={img}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </AspectRatio>
        
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
            {getCategoryIcon(category)}
            {category}
          </span>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta information */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-3 h-3" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-3 h-3" />
            {readTime}
          </div>
          {author && (
            <div className="flex items-center gap-1">
              <UserIcon className="w-3 h-3" />
              {author}
            </div>
          )}
        </div>

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>
        
        <Link
          className={buttonVariants({
            variant: "ghost",
            className: "flex items-center gap-2 font-semibold text-primary hover:bg-primary/10 mt-auto p-0 h-auto justify-start group/link",
          })}
          href={href}
        >
          {linkText}
          <ChevronRightIcon 
            size={16} 
            className="transition-transform duration-200 group-hover/link:translate-x-1" 
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function Insights() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl px-6 mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-5xl font-bold mb-6">
            Industry Insights &
            <span className="text-gradient">
              Market Intelligence
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead with our expert analysis, market trends, and innovations 
            shaping the future of copper and brass manufacturing.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <InsightCardComponent {...insight} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Link
            href="#"
            className={buttonVariants({
              size: "lg",
              className: "btn-premium bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8",
            })}
          >
            View All Insights
            <ChevronRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
