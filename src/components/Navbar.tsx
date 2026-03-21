"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hexagon } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (pathname === '/') {
      const targetId = e.currentTarget.href.split('#')[1];
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <header className="pointer-events-auto w-full max-w-5xl rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl px-2 py-2 flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center pl-4">
          <Link href="/#platform" onClick={handleScroll} className="flex items-center space-x-3 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-black transition-transform group-hover:scale-105">
              <Hexagon className="h-5 w-5 fill-current" />
            </div>
            <span className="font-bold tracking-widest text-[13px] uppercase text-white">MonoHex</span>
          </Link>
        </div>

        {/* Center: Links */}
        <nav className="hidden md:flex items-center space-x-10 text-[13px] font-medium text-gray-300">
          <Link href="/#portfolio" onClick={handleScroll} className="transition-colors hover:text-white">
            Portfolio
          </Link>
          <Link href="/#services" onClick={handleScroll} className="transition-colors hover:text-white">
            Services
          </Link>
          <Link href="/#about" onClick={handleScroll} className="transition-colors hover:text-white">
            About
          </Link>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center space-x-4 pr-1">
          {/* Main Action Pill */}
          <Link 
            href="/#contact" 
            onClick={handleScroll}
            className="rounded-full bg-white px-7 py-2.5 text-xs font-bold tracking-wider text-black transition-transform hover:scale-105"
          >
            LET'S TALK
          </Link>
        </div>

      </header>
    </div>
  );
}
