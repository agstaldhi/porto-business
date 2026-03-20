import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { posts } from "@/lib/data";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Studio Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="flex flex-col min-h-screen px-4 py-16 md:py-24 max-w-3xl mx-auto">
      <Link 
        href="/blog"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-muted-foreground text-sm">
          <time dateTime={post.date} className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            {post.date}
          </time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground">
        <p className="lead text-xl text-foreground font-medium mb-8">
          {post.excerpt}
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Core Concept</h2>
        <p className="mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <blockquote className="border-l-4 border-foreground pl-6 my-8 italic text-foreground bg-muted/30 py-4 pr-6 rounded-r-lg">
          "The best creative work doesn't yell for attention; it commands it through quiet confidence and undeniable quality."
        </blockquote>
        <p className="mb-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
        <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Conclusion</h2>
        <p className="mb-6">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        </p>
      </div>

      <hr className="my-16 border-border" />

      <div className="flex items-center justify-between text-sm font-medium">
        <Link href="/blog" className="text-foreground hover:text-muted-foreground transition-colors">
          ← Previous Post
        </Link>
        <Link href="/blog" className="text-foreground hover:text-muted-foreground transition-colors">
          Next Post →
        </Link>
      </div>
    </article>
  );
}
