"use client";

import Link from "next/link";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

// Replace this URL with Nick's actual Calendly link once his account is set up at calendly.com
const CALENDLY_URL = "https://calendly.com/njplumbingheating";

const benefits = [
  "Pick a date and time that suits you",
  "Instant confirmation sent to your phone",
  "Free estimates — no obligation to proceed",
  "Same-day slots often available",
];

export default function BookingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Book Online</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Book a Visit</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Choose a date and time online. We&apos;ll confirm your booking straight away.
          </p>
        </div>
      </section>

      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left: benefits + alternatives */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Why book online?</h2>
            <ul className="space-y-3 mb-10">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-gray-700">
                  <CheckCircle size={18} className="text-brand flex-shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-sm font-semibold text-gray-900 mb-3">Prefer to call or WhatsApp?</p>
            <div className="space-y-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 bg-brand text-white font-semibold px-4 py-3 rounded-xl hover:bg-brand-mid transition-colors text-sm"
              >
                <Phone size={16} />
                Call {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white font-semibold px-4 py-3 rounded-xl hover:bg-green-600 transition-colors text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Calendly embed */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-steel overflow-hidden" style={{ minHeight: 650 }}>
              <iframe
                src={`${CALENDLY_URL}?hide_gdpr_banner=1&primary_color=0D1F5C`}
                width="100%"
                height="650"
                frameBorder="0"
                title="Book a visit with NJ Plumbing & Heating"
                allow="payment"
              />
            </div>
            <p className="text-xs text-gray-400 text-center mt-3">
              Powered by Calendly · Your data is handled securely
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
