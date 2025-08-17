"use client";
export function Navbar() {
  const navItems = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "News",
      href: "/news",
    },
  ];

  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      <div className="supports-backdrop-blur:bg-default/0 bg-default/80 dark:bg-default-900/80 backdrop-blur-md shadow-sm border border-default/20 dark:border-default-800/20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <Link
            href="/"
            className="text-6xl bg-default font-family-monospace font-extrabold transition-colors"
          >
            T
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <Button size="lg" asChild>
                  <Link
                    href={item.href}
                    className="font-bold transition-colors py-2"
                  >
                    {item.label}
                  </Link>
                </Button>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
