import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ExternalLink, MessageCircle, Instagram } from "lucide-react";
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
} from "../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-mid text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Logo + tagline */}
          <div>
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt={BUSINESS_NAME}
                width={160}
                height={48}
                className="h-12 w-auto object-contain mb-4 brightness-110"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mt-2">
              Bedford&apos;s trusted plumbing, heating and drainage specialists.
              Honest pricing, quality work, every time.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Plumbing", href: "/services/plumbing" },
                { label: "Heating", href: "/services/heating" },
                { label: "Drainage", href: "/services/drainage" },
                { label: "Bathrooms", href: "/services/bathrooms" },
                { label: "Emergency Call-Out", href: "/emergency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Areas We Cover", href: "/areas" },
                { label: "Contact", href: "/contact" },
                { label: "Get a Quote", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact + Social */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/50 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <Phone size={14} className="flex-shrink-0" />
                  {PHONE}
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-300 hover:text-green-200 text-sm transition-colors"
                >
                  <MessageCircle size={14} className="flex-shrink-0" />
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors break-all"
                >
                  <Mail size={14} className="flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-white/70 text-sm">
                  <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                  {LOCATION}
                </span>
              </li>
              <li>
                <a
                  href={GOOGLE_BUSINESS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm transition-colors"
                >
                  <ExternalLink size={14} />
                  View on Google Maps
                </a>
              </li>
              {/* Social icons */}
              <li>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-pink-300 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            &copy; {year} NJ Plumbing &amp; Heating.
          </p>
          <p className="text-white/40 text-sm">
            Plumbing &middot; Heating &middot; Drainage &middot; Bathrooms
          </p>
        </div>
      </div>
    </footer>
  );
}
