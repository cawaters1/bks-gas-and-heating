"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, MessageCircle, ShieldCheck } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../lib/constants";

const serviceLinks = [
  { label: "Boilers", href: "/services/boilers" },
  { label: "Heating", href: "/services/heating" },
  { label: "Plumbing", href: "/services/plumbing" },
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
    <header className="sticky top-0 z-40 bg-bg border-b border-border-dark shadow-lg">
      {/* Gas Safe trust bar */}
      <div className="bg-surface border-b border-border-dark py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck size={13} className="text-gas-safe" />
          <span className="text-xs text-steel font-medium">Gas Safe Registered Engineer · No. {GAS_SAFE_NUMBER}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-ink text-2xl tracking-tight leading-none">BKS</span>
              <div className="w-px h-8 bg-border-emphasis" />
              <span className="text-xs font-semibold text-steel tracking-widest leading-tight uppercase">GAS &<br />HEATING</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-steel font-medium hover:text-ink transition-colors"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-surface rounded-xl shadow-xl border border-border-dark py-2 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-elevated transition-colors ${
                        link.label === "Emergency" ? "text-red-400 font-semibold" : "text-steel hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            {[
              { label: "Areas", href: "/areas" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="text-steel font-medium hover:text-ink transition-colors">
                {link.label}
              </Link>
            ))}
            <Link href="/emergency" className="text-red-400 font-semibold hover:text-red-300 transition-colors">
              Emergency
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-600 text-green-400 px-4 py-2 rounded-lg font-semibold hover:bg-green-900/30 transition-colors text-sm"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-lg font-semibold hover:bg-brand-light transition-colors text-sm"
            >
              <Phone size={15} />
              {PHONE}
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-steel hover:text-ink hover:bg-elevated transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-surface border-t border-border-dark px-4 pb-4">
          <div className="pt-2 space-y-1">
            <p className="text-xs font-bold text-steel-muted uppercase tracking-wider px-3 pt-2 pb-1">Services</p>
            {serviceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-elevated ${
                  link.label === "Emergency" ? "text-red-400" : "text-steel hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border-dark my-2" />
            {[
              { label: "Areas", href: "/areas" },
              { label: "Pricing", href: "/pricing" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-steel hover:text-ink hover:bg-elevated transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 px-3 py-2">
              <ShieldCheck size={14} className="text-gas-safe" />
              <span className="text-xs text-steel">Gas Safe No. {GAS_SAFE_NUMBER}</span>
            </div>
            <div className="pt-3 space-y-2">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-green-600 text-green-400 px-4 py-3 rounded-xl font-semibold hover:bg-green-900/20 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-brand text-white px-4 py-3 rounded-xl font-semibold hover:bg-brand-light transition-colors"
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
