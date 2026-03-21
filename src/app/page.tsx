"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { AboutSection } from "@/components/sections/AboutSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="bg-[#080510] text-[#f0f0f0] font-sans selection:bg-purple-500/30 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        {/* Background glowing effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(120,80,200,0.15)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />
        
        <main className="z-10 flex flex-col items-center text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="#about" 
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-light text-gray-300 backdrop-blur-sm transition-colors hover:bg-white/10 mb-8 md:mb-10"
            >
              Welcome to Our Platform <ChevronRight className="ml-2 h-3.5 w-3.5 text-gray-400" />
            </Link>
          </motion.div>

          <motion.h1 
            className="mb-8 text-5xl font-medium tracking-tight text-[#f0f0f0] sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Transform your ideas into<br />
            <span className="bg-gradient-to-r from-[#d6b4ff] via-[#fcb6d0] to-[#ffdfb0] bg-clip-text text-transparent">
              beautiful digital experiences
            </span>
          </motion.h1>

          <motion.p 
            className="mb-12 max-w-2xl text-lg text-[#9ca3af] md:text-xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your ideas into reality with our comprehensive suite of development tools and resources.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-b from-purple-500/40 to-transparent opacity-70 blur-md transition duration-500 group-hover:opacity-100"></div>
              <Link 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="relative flex items-center justify-center rounded-full bg-[#100b1a] px-8 py-3.5 text-sm font-medium text-white ring-1 ring-white/10 transition-all hover:bg-[#150f22] hover:ring-white/20"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        </main>
      </section>

      {/* Embedded Sections */}
      <AboutSection id="about" />
      <PortfolioSection id="portfolio" />
      <ServicesSection id="services" />
      <ContactSection id="contact" />
    </div>
  );
}
