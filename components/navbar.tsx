"use client";

import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "./theme-toggle";
import { Button, buttonVariants } from "./ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { MenuIcon, XIcon, GlobeIcon } from "lucide-react";

const links = [
  {
    title: "Products & Solutions",
    href: "#solutions",
  },
  {
    title: "Global Reach",
    href: "#reach",
  },
  {
    title: "Manufacturing",
    href: "#projects",
  },
  {
    title: "About Us",
    href: "#about",
  },
  {
    title: "Insights",
    href: "#insights",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const languages = [
  { code: "EN", name: "English" },
  { code: "DE", name: "German" },
  { code: "FR", name: "French" },
  { code: "ES", name: "Spanish" },
  { code: "ZH", name: "Chinese" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const { scrollY } = useScroll();
  
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98]);
  const navbarBlur = useTransform(scrollY, [0, 100], [10, 20]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'h-16 backdrop-blur-xl bg-background/95 border-b border-border/50 shadow-lg' 
            : 'h-20 bg-transparent'
        }`}
        style={{
          opacity: navbarOpacity,
          backdropFilter: `blur(${navbarBlur}px)`,
        }}
      >
        <div className="max-w-7xl px-6 mx-auto h-full flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer"
            onClick={() => scrollToSection('#')}
          >
            <div className={`transition-all duration-300 flex items-center gap-3 ${isScrolled ? 'scale-90' : 'scale-100'}`}>
              <Image
                src="/Keshan-Industries-Logo.png"
                alt="Keshan Industries Logo"
                width={isScrolled ? 40 : 50}
                height={isScrolled ? 40 : 50}
                className="transition-all duration-300"
              />
              <div>
                <h1 className="text-xl font-title font-bold tracking-wider text-copper">
                  KESHAN
                </h1>
                <p className="text-copper/80 font-sans font-medium tracking-wider -mt-1 text-xs">
                  INDUSTRIES
                </p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {links.map((link, index) => (
                <motion.div
                  key={link.title}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="text-foreground hover:text-primary hover:bg-primary/10 font-medium transition-all duration-300 relative group"
                    onClick={() => scrollToSection(link.href)}
                  >
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* Language selector */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground hover:text-primary"
              >
                <GlobeIcon className="w-4 h-4 mr-1" />
                {selectedLanguage}
              </Button>
              <div className="absolute top-full right-0 mt-2 w-32 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang.code)}
                    className="w-full px-3 py-2 text-left hover:bg-muted text-sm transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            <ThemeToggle />
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="btn-premium bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 transition-all duration-300 copper-glow"
                onClick={() => scrollToSection('#contact')}
              >
                GET QUOTE
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-20 left-0 right-0 z-40 bg-background/95 backdrop-blur-xl border-b border-border lg:hidden overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((link, index) => (
              <motion.div
                key={link.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className="justify-start text-foreground hover:text-primary hover:bg-primary/10 font-medium w-full"
                  onClick={() => scrollToSection(link.href)}
                >
                  {link.title}
                </Button>
              </motion.div>
            ))}
            
            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="pt-4 border-t border-border"
            >
              <Button
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => scrollToSection('#contact')}
              >
                GET GLOBAL QUOTE
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
}
