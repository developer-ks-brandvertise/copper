"use client";

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowUp,
  Send
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const footerLinks = [
  {
    section: "Solutions",
    links: [
      { title: "Copper Products", href: "#solutions" },
      { title: "Brass Alloys", href: "#solutions" },
      { title: "Custom Solutions", href: "#solutions" },
      { title: "Technical Support", href: "#contact" },
    ],
  },
  {
    section: "Industries",
    links: [
      { title: "Electrical", href: "#industries" },
      { title: "Automotive", href: "#industries" },
      { title: "Marine", href: "#industries" },
      { title: "Construction", href: "#industries" },
    ],
  },
  {
    section: "Company",
    links: [
      { title: "About Us", href: "#who" },
      { title: "Our People", href: "#people" },
      { title: "Certifications", href: "#certifications" },
      { title: "Global Reach", href: "#reach" },
      { title: "Careers", href: "#careers" },
    ],
  },
  {
    section: "Resources",
    links: [
      { title: "Insights & News", href: "#insights" },
      { title: "Technical Guides", href: "#resources" },
      { title: "Downloads", href: "#downloads" },
      { title: "Case Studies", href: "#projects" },
    ],
  },
];

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    content: "+91 22 4567 8900",
    href: "tel:+912245678900"
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    content: "info@keshanindustries.com",
    href: "mailto:info@keshanindustries.com"
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    content: "Industrial Area, Mumbai, India",
    href: "#"
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Website",
    content: "www.keshanindustries.com",
    href: "https://keshanindustries.com"
  }
];

const socialLinks = [
  { icon: <LinkedinIcon className="w-5 h-5" />, href: "#", name: "LinkedIn" },
  { icon: <TwitterIcon className="w-5 h-5" />, href: "#", name: "Twitter" },
  { icon: <InstagramIcon className="w-5 h-5" />, href: "#", name: "Instagram" },
  { icon: <FacebookIcon className="w-5 h-5" />, href: "#", name: "Facebook" },
];

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-copper/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="pt-20 pb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-4">
              <div className="mb-8">
                <h1 className="text-4xl font-extrabold tracking-wider mb-2">
                  <span className="text-gradient">KESHAN</span>
                </h1>
                <p className="text-copper text-lg font-semibold tracking-wider -mt-1">
                  INDUSTRIES LLP
                </p>
                <p className="text-slate-400 mt-4 leading-relaxed">
                  Leading the future of copper and brass manufacturing with innovation, sustainability, and uncompromising quality standards.
                </p>
              </div>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-copper" />
                  Stay Updated
                </h3>
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground focus:border-copper"
                    required
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-copper hover:bg-copper/80 text-white px-4"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <span className="text-emerald-400">✓</span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </form>
                {isSubscribed && (
                  <p className="text-emerald-400 text-sm mt-2">Thanks for subscribing!</p>
                )}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <Link
                        href={social.href}
                        className="w-10 h-10 bg-muted/50 border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-copper hover:bg-copper/10 hover:border-copper/30 transition-all duration-300 group"
                        title={social.name}
                      >
                        {social.icon}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {footerLinks.map((col, index) => (
                  <motion.div
                    key={col.section}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    <h4 className="text-white font-semibold text-lg mb-4">{col.section}</h4>
                    <ul className="space-y-3">
                      {col.links.map((link) => (
                        <li key={link.title}>
                          <Link 
                            href={link.href}
                            className="text-slate-400 hover:text-copper transition-colors duration-300 text-sm"
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-white font-semibold text-lg mb-4">Contact Info</h4>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="group">
                      <Link
                        href={info.href}
                        className="flex items-start gap-3 text-slate-400 hover:text-copper transition-colors duration-300"
                      >
                        <div className="text-copper mt-0.5">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                            {info.title}
                          </p>
                          <p className="text-sm">{info.content}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-slate-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 text-sm text-slate-500">
              <p>&copy; 2024 Keshan Industries LLP. All rights reserved.</p>
              <div className="flex gap-4">
                <Link href="#" className="hover:text-copper transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-copper transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-copper transition-colors">Cookies Policy</Link>
              </div>
            </div>
            
            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-slate-700 text-slate-400 hover:text-copper hover:border-copper/50 hover:bg-copper/10 transition-all duration-300 group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
