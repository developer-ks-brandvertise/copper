"use client";

import Certifications from "@/components/certifications";
import HeroSection from "@/components/hero";
import Insights from "@/components/insights";
import Numbers from "@/components/numbers";
import Partnership from "@/components/partner";
import People from "@/components/people";
import Projects from "@/components/projects";
import Reach from "@/components/reach";
import Solutions from "@/components/solutions";
import WhoWeAreSection from "@/components/who";
import OurCapabilities from "@/components/capabilities";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhoWeAreSection />
      <Solutions />
      <OurCapabilities />
      <Reach />
      <Numbers />
      <Projects />
      <People />
      <Certifications />
      <Insights />
      <Partnership />
    </div>
  );
}
