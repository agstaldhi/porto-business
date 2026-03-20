"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Cinematic Reel 2024",
    category: "Video",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0&rel=0",
  },
  {
    id: 2,
    title: "Urban Architecture",
    category: "Photography",
    type: "image",
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    category: "Web",
    type: "image",
    src: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1964&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Brand Campaign",
    category: "Video",
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&showinfo=0&rel=0", // Placeholder
  },
  {
    id: 5,
    title: "Portrait Series",
    category: "Photography",
    type: "image",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "SaaS Dashboard",
    category: "Web",
    type: "image",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-16 md:py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Selected Works.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A showcase of cross-disciplinary projects, from visual storytelling to interactive web experiences.
        </p>
      </motion.div>

      <div className="space-y-24">
        {["Video", "Photography", "Web"].map((category, index) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          
          return (
            <section key={category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-semibold">{category}</h2>
                  <div className="flex-1 h-px bg-border"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {categoryProjects.map((project, i) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="group relative flex flex-col space-y-3"
                    >
                      <div className="relative w-full aspect-video overflow-hidden rounded-xl bg-muted border border-border">
                        {project.type === "video" ? (
                          <iframe
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            src={project.src}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <Image
                            src={project.src}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">{project.title}</h3>
                        <span className="text-sm text-muted-foreground uppercase tracking-wider">{project.category}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
