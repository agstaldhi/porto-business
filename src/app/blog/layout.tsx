import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Perspectives | Creative Studio",
  description: "Writing about design, development, content creation, and the business of creativity.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
