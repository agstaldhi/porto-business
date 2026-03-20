import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expertise & Services | Creative Studio",
  description: "Delivering tangible business outcomes through premium creative output in video, photography, and web development.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
