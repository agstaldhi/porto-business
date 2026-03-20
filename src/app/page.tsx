"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Video, Camera, Code } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
      {/* Hero Section */}
      <section className="w-full max-w-5xl py-20 md:py-32 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Available for new projects
          </div>
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          One-man creative <span className="text-muted-foreground">studio.</span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting exceptional digital experiences through video editing, photography, and full-stack web development. From concept to execution.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button asChild size="lg" className="h-12 px-8 text-base">
            <Link href="/portfolio">
              View work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </motion.div>
      </section>

      {/* Services Highlights */}
      <section className="w-full max-w-5xl py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <div className="flex flex-col space-y-4 p-6 rounded-2xl border border-border bg-card/50 transition-colors hover:bg-muted/50">
            <div className="h-12 w-12 rounded-lg bg-foreground/10 flex items-center justify-center border border-border">
              <Video className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Video Editing</h3>
            <p className="text-muted-foreground leading-relaxed">Cinematic cuts, engaging social content, and professional color grading that tells your story.</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col space-y-4 p-6 rounded-2xl border border-border bg-card/50 transition-colors hover:bg-muted/50">
            <div className="h-12 w-12 rounded-lg bg-foreground/10 flex items-center justify-center border border-border">
              <Camera className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Photography</h3>
            <p className="text-muted-foreground leading-relaxed">Striking portraits, product shots, and event coverage with a distinct, modern eye.</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col space-y-4 p-6 rounded-2xl border border-border bg-card/50 transition-colors hover:bg-muted/50">
            <div className="h-12 w-12 rounded-lg bg-foreground/10 flex items-center justify-center border border-border">
              <Code className="h-6 w-6 text-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-muted-foreground leading-relaxed">High-performance, responsive websites built with Next.js and modern technologies.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
