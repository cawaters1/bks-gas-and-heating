import Link from "next/link";
import { Phone, Mail, MapPin, ExternalLink, MessageCircle, Instagram, Facebook, ShieldCheck } from "lucide-react";
import {
  BUSINESS_NAME,
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  LOCATION,
  GOOGLE_BUSINESS_URL,
  WHATSAPP,
  INSTAGRAM,
  FACEBOOK,
  GAS_SAFE_NUMBER,
} from "../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface text-ink border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="font-extrabold text-ink text-2xl tracking-tight">BKS</span>
              <div className="w-px h-7 bg-border-emphasis" />
              <span className="text-xs font-semibold text-steel tracking-widest uppercase leading-tight">GAS &amp;<br />HEATING</span>
            </Link>
            <p className="text-steel text-sm leading-relaxed mt-2">
              Gas Safe registered heating engineer based in West Drayton. Boiler installation, servicing, plumbing and bathrooms across West London, Surrey, Buckinghamshire and Hertfordshire.
            </p>
            <div className="flex items-center gap-2 mt-4 p-3 bg-elevated rounded-lg border border-border-dark">
              <ShieldCheck size={18} className="text-gas-safe flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-gas-safe">Gas Safe Registered</p>
                <p className="text-xs text-steel">No. {GAS_SAFE_NUMBER}</p>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-steel-muted mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { label: "Boiler Installation & Servicing", href: "/services/boilers" },
                { label: "Heating Repairs", href: "/services/heating" },
                { label: "Plumbing", href: "/services/plumbing" },
                { label: "Bathrooms", href: "/services/bathrooms" },
                { label: "Emergency Call-Out", href: "/emergency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-steel hover:text-ink text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-steel-muted mb-4">Company</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Areas We Cover", href: "/areas" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-steel hover:text-ink text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-steel-muted mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_HREF} className="flex items-center gap-2 text-steel hover:text-ink text-sm transition-colors">
                  <Phone size={14} className="flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-400 hover:text-green-300 text-sm transition-colors">
                  <MessageCircle size={14} className="flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={EMAIL_HREF} className="flex items-center gap-2 text-steel hover:text-ink text-sm transition-colors break-all">
                  <Mail size={14} className="flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-steel text-sm">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  {LOCATION}
                </span>
              </li>
              <li>
                <a href={GOOGLE_BUSINESS_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-light hover:text-ink text-sm transition-colors">
                  <ExternalLink size={14} />
                  View on Google Maps
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 pt-1">
                  <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-steel-muted hover:text-pink-400 transition-colors" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-steel-muted hover:text-blue-400 transition-colors" aria-label="Facebook">
                    <Facebook size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-steel-muted text-sm">&copy; {year} {BUSINESS_NAME}. Gas Safe No. {GAS_SAFE_NUMBER}.</p>
          <p className="text-steel-muted text-sm">Boilers &middot; Heating &middot; Plumbing &middot; Bathrooms</p>
        </div>
      </div>
    </footer>
  );
}
