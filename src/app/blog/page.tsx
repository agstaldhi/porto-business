"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "@/lib/data";

export default function Blog() {
  return (
    <div className="flex flex-col min-h-screen px-4 py-16 md:py-24 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Thoughts & Perspectives.</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Writing about design, development, content creation, and the business of creativity.
        </p>
      </motion.div>

      <div className="space-y-12">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col items-start justify-between rounded-2xl border border-border bg-card/50 p-6 md:p-8 transition-colors hover:bg-muted/50"
          >
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <time dateTime={post.date} className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="group relative">
              <h3 className="mt-3 text-2xl font-semibold leading-6 text-foreground group-hover:text-muted-foreground transition-colors mb-4">
                <Link href={`/blog/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground text-lg">
                {post.excerpt}
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-muted-foreground transition-colors">
              Read article <ArrowRight className="h-4 w-4" />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
