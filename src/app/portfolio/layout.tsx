import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Works | Creative Studio",
  description: "A showcase of cross-disciplinary projects, from visual storytelling to interactive web experiences.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
