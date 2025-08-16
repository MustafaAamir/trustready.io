"use client";
export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Services",
      href: "#",
      dropdown: [
        { label: "SOC 2 Compliance", href: "/services/soc2" },
        { label: "ISO 27001 Certification", href: "/services/iso27001" },
        { label: "HIPAA Compliance", href: "/services/hipaa" },
        { label: "GDPR Compliance", href: "/services/gdpr" },
        { label: "Compliance Automation", href: "/services/automation" },
      ],
    },
    {
      label: "News",
      href: "/news",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/" className="text-3xl font-bold text-slate-900 hover:text-slate-700 transition-colors">
          Trustready
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.dropdown ? (
                <button className="flex items-center space-x-1 text-slate-700 hover:text-slate-900 font-medium transition-colors py-2">
                  <span>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.label ? 'rotate-180' : ''
                  }`} />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 font-medium transition-colors py-2"
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 transition-all duration-200 ${
                  activeDropdown === item.label 
                    ? 'opacity-100 visible transform translate-y-0' 
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}>
                  <div className="py-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.href}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                      >
                        {dropdownItem.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden flex flex-col space-y-1 p-2">
          <span className="w-6 h-0.5 bg-slate-900"></span>
          <span className="w-6 h-0.5 bg-slate-900"></span>
          <span className="w-6 h-0.5 bg-slate-900"></span>
        </button>
      </div>
    </header>
  );
}


import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
