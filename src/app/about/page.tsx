"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link2, Layers, Zap, PenTool } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-16 md:py-24 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
              alt="Portrait of the creator"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background/90 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl font-bold font-sans">Alex Mercer</h1>
              <p className="text-muted-foreground mt-1">Creative Director & Developer</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 lg:max-w-lg"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            One point of contact. <br />
            Infinite possibilities.
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              I run a full-stack creative studio out of a single room. No agency overhead, no miscommunication between departments. Just direct, unfiltered creative execution.
            </p>
            <p>
              By combining video production, photography, and software development, I build holistic digital experiences that look beautiful and function flawlessly.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">The Solo Workflow</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final deployment, every step is handled with cohesive vision and unified strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Connecting line for md+ screens */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>
          
          {[
            {
              icon: PenTool,
              title: "1. Strategy",
              desc: "Deep-diving into your brand, defining goals, and conceptualizing the visual narrative."
            },
            {
              icon: Layers,
              title: "2. Creation",
              desc: "Capturing footage, shooting photos, or designing UI/UX wireframes."
            },
            {
              icon: Zap,
              title: "3. Execution",
              desc: "Editing, color grading, or writing strict, performant code to bring ideas to life."
            },
            {
              icon: Link2,
              title: "4. Delivery",
              desc: "Deploying web apps to Vercel or delivering final mastered media assets."
            }
          ].map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center space-y-4 bg-background pt-4 md:pt-0"
            >
              <div className="h-14 w-14 rounded-full bg-card border-2 border-border flex items-center justify-center mb-2 shadow-sm">
                <step.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-sm text-muted-foreground px-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
