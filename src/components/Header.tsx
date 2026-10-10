"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const servicesList = [
  { name: "Standard Cleaning", href: "/services/standard-cleaning" },
  { name: "Deep Cleaning", href: "/services/deep-cleaning" },
  { name: "Move-In / Move-Out", href: "/services/move-in-move-out" },
  { name: "Specialty Services", href: "/services/specialty-services" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-cream/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center group py-1">
          <Image src="/logo.png" alt="Didi's Cleaning Logo" width={220} height={80} style={{ width: "auto" }} className="h-12 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium hover:text-orange transition-colors">Home</Link>

          <div className="relative group">
            <Link href="/services" className="text-sm font-medium hover:text-orange transition-colors flex items-center gap-1">
              Services
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <div className="bg-white rounded-2xl shadow-xl border border-primary/5 py-3 min-w-[220px] flex flex-col overflow-hidden relative">
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="px-5 py-2.5 text-sm font-medium text-primary/80 hover:text-orange hover:bg-orange/5 transition-colors"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium hover:text-orange transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-orange transition-colors">Contact</Link>
          <Link href="/quote" className="bg-orange text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange/90 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
            Request a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream/95 backdrop-blur-lg border-b border-primary/10 shadow-lg py-4 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-primary/10">Home</Link>

          <div className="border-b border-primary/10">
            <button
              onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              className="w-full flex items-center justify-between text-base font-medium py-2"
            >
              Services
              <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMobileServicesOpen && (
              <div className="flex flex-col pl-4 pb-2 space-y-3 mt-2">
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-medium text-primary/70 hover:text-orange">All Services Overview</Link>
                {servicesList.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-sm font-medium text-primary/70 hover:text-orange"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-primary/10">About</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium py-2 border-b border-primary/10">Contact</Link>
          <Link href="/quote" onClick={() => setIsMobileMenuOpen(false)} className="bg-orange text-cream px-5 py-3 rounded-full text-center font-medium mt-4 shadow-sm mb-2">
            Request a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
