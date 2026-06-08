import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Clock } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, WHATSAPP, ADDRESS, GAS_SAFE_NUMBER, GOOGLE_BUSINESS_URL } from "../lib/constants";

export const metadata: Metadata = {
  title: "Contact BKS Gas & Heating | Get a Free Quote West London",
  description:
    "Contact BKS Gas & Heating for a free, no-obligation quote. Gas Safe registered engineer serving West London, Surrey, Buckinghamshire and Hertfordshire. Call 07464 420695.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "https://bksgasandheating.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-3">Get in Touch</h1>
          <p className="text-steel text-lg max-w-xl">
            Free estimates on all work. £100 call-out — first hour, diagnostics and repair included. We aim to call you back within the hour.
          </p>
        </div>
      </section>

      {/* Contact Methods + Form */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: contact details */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-6">Contact Details</h2>
              <div className="space-y-4 mb-8">
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-4 bg-surface border border-border-dark rounded-xl p-4 hover:border-border-emphasis transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand-light" />
                  </div>
                  <div>
                    <p className="text-xs text-steel-muted uppercase tracking-wider mb-0.5">Phone</p>
                    <p className="font-semibold text-ink group-hover:text-brand-light transition-colors">{PHONE}</p>
                    <p className="text-xs text-steel">Mon–Sun 8am–6pm</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-surface border border-border-dark rounded-xl p-4 hover:border-border-emphasis transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={20} className="text-green-400" />
                  </div>
                  <div>
                    <p className="text-xs text-steel-muted uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="font-semibold text-ink group-hover:text-green-400 transition-colors">Message Bailey directly</p>
                    <p className="text-xs text-steel">Quick responses</p>
                  </div>
                </a>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-4 bg-surface border border-border-dark rounded-xl p-4 hover:border-border-emphasis transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-elevated flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-steel" />
                  </div>
                  <div>
                    <p className="text-xs text-steel-muted uppercase tracking-wider mb-0.5">Email</p>
                    <p className="font-semibold text-ink group-hover:text-brand-light transition-colors break-all">{EMAIL}</p>
                    <p className="text-xs text-steel">We reply same day</p>
                  </div>
                </a>
              </div>

              {/* Address */}
              <div className="bg-surface border border-border-dark rounded-xl p-5 mb-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-steel flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ink mb-1">Based in West Drayton</p>
                    <p className="text-steel text-sm">{ADDRESS}</p>
                    <a
                      href={GOOGLE_BUSINESS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-light text-sm hover:text-ink transition-colors mt-1 inline-block"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* Gas Safe + Hours */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface border border-border-dark rounded-xl p-4">
                  <ShieldCheck size={18} className="text-gas-safe mb-2" />
                  <p className="text-xs font-bold text-gas-safe">Gas Safe Registered</p>
                  <p className="text-steel text-xs mt-0.5">No. {GAS_SAFE_NUMBER}</p>
                </div>
                <div className="bg-surface border border-border-dark rounded-xl p-4">
                  <Clock size={18} className="text-steel mb-2" />
                  <p className="text-xs font-bold text-ink">Available</p>
                  <p className="text-steel text-xs mt-0.5">24 hours, 7 days a week</p>
                </div>
              </div>
            </div>

            {/* Right: quote form */}
            <div>
              <h2 className="text-2xl font-bold text-ink mb-6">Request a Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-surface border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-ink mb-6">Getting in Touch</h2>
          <div className="space-y-4">
            {[
              { q: "How quickly will you get back to me?", a: "We aim to call back within the hour during normal working hours. For emergencies, call us directly for immediate response." },
              { q: "Is the quote genuinely free?", a: "Yes — completely free, no obligation. We assess your job and give a fixed price before any work starts." },
              { q: "Do you offer same-day appointments?", a: "Yes, where availability allows. Call or WhatsApp and we will do our best to get to you the same day." },
              { q: "I have a gas emergency — what do I do?", a: "Call us immediately. If you smell gas, also call the National Gas Emergency Service on 0800 111 999 and ventilate the property." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-elevated border border-border-dark rounded-xl p-5">
                <p className="font-semibold text-ink mb-1">{q}</p>
                <p className="text-steel text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
