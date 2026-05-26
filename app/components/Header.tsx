"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

const serviceLinks = [
  { label: "Plumbing", href: "/services/plumbing" },
  { label: "Heating", href: "/services/heating" },
  { label: "Drainage", href: "/services/drainage" },
  { label: "Bathrooms", href: "/services/bathrooms" },
  { label: "Emergency", href: "/emergency" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + name */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="NJ Plumbing & Heating"
              width={48}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="hidden sm:block font-extrabold text-brand text-lg leading-tight">
              NJ Plumbing<br />&amp; Heating
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {/* Services dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-gray-700 font-medium hover:text-brand transition-colors"
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-steel py-2 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-offwhite transition-colors ${
                        link.label === "Emergency" ? "text-red-600 font-semibold" : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/areas" className="text-gray-700 font-medium hover:text-brand transition-colors">
              Areas
            </Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-brand transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-brand transition-colors">
              Contact
            </Link>
            <Link href="/emergency" className="text-red-600 font-semibold hover:text-red-700 transition-colors">
              Emergency
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-green-500 text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-mid transition-colors"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-offwhite transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-steel px-4 pb-4">
          <div className="pt-2 space-y-1">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-2 pb-1">
              Services
            </p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-offwhite ${
                  link.label === "Emergency" ? "text-red-600" : "text-gray-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-steel my-2" />
            {[
              { label: "Areas", href: "/areas" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-offwhite transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-green-500 text-green-600 px-4 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 rounded-xl font-semibold hover:bg-brand-mid transition-colors"
              >
                <Phone size={18} />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
