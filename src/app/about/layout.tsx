import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Creative Studio",
  description: "I run a full-stack creative studio out of a single room. No agency overhead, no miscommunication.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
