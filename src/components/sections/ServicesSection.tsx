"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Video Production & Editing",
    description: "I don't just cut clips; I craft narratives that hold attention and drive action.",
    outcomes: [
      "Higher viewer retention rates on social platforms.",
      "Professional brand perception through cinematic quality.",
      "Clear storytelling that converts viewers into customers.",
    ],
  },
  {
    title: "Commercial Photography",
    description: "Beyond just taking pictures, I capture the essence of your product or brand in a way that stands out immediately.",
    outcomes: [
      "Visual consistency across all your marketing channels.",
      "Elevated perceived value of your products/services.",
      "A distinct aesthetic that separates you from competitors.",
    ],
  },
  {
    title: "Web Development",
    description: "No generic templates. I build fast, custom web experiences optimized for modern browsers and search engines.",
    outcomes: [
      "Lightning-fast load times that reduce bounce rates.",
      "Seamless mobile experiences ensuring you capture on-the-go traffic.",
      "SEO-optimized architecture to rank higher organically.",
    ],
  },
];

export function ServicesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="flex flex-col min-h-screen px-4 py-16 md:py-24 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-24 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-[#f0f0f0]">Expertise.</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          I focus on delivering tangible business outcomes through premium creative output, not just checking off feature lists.
        </p>
      </motion.div>

      <div className="space-y-16 md:space-y-32">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
          >
            <div className="flex-1 space-y-4">
              <div className="text-sm font-mono text-muted-foreground mb-2">0{index + 1}</div>
              <h3 className="text-3xl font-bold text-[#f0f0f0]">{service.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="flex-1 bg-card/50 border border-border rounded-2xl p-8">
              <h4 className="uppercase tracking-wider text-sm font-semibold mb-6 flex items-center text-muted-foreground">
                The Outcomes
              </h4>
              <ul className="space-y-4">
                {service.outcomes.map((outcome, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{outcome}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-32 text-center bg-muted/50 rounded-3xl p-12 lg:p-20 border border-border"
      >
        <h3 className="text-3xl font-bold mb-4 text-[#f0f0f0]">Ready to elevate your brand?</h3>
        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
          Let's discuss how my full-stack creative approach can solve your specific business challenges.
        </p>
        <Button asChild size="lg" className="h-12 px-8">
          <Link href="#contact">
            Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
