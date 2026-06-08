import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Wrench,
  CheckCircle,
  AlertTriangle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../../lib/constants";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Plumbing Services West London | BKS Gas & Heating",
  description:
    "Plumbing repairs and installations across West London. Leaking pipes, dripping taps, burst pipes, toilet repairs. Gas Safe registered. Call 07464 420695.",
  alternates: { canonical: "/services/plumbing" },
  openGraph: { url: "https://bksgasandheating.com/services/plumbing" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Plumbing",
  provider: {
    "@type": "LocalBusiness",
    name: "BKS Gas & Heating",
    telephone: "07464420695",
  },
  areaServed: "West London",
};

const serviceCards = [
  { title: "Leak Detection & Repair", desc: "Fast diagnosis and repair of all types of leaks — from pinhole leaks to major pipe bursts." },
  { title: "Dripping Taps", desc: "Worn washers, cartridges and valves replaced. Stop the drip and cut your water bill." },
  { title: "Toilet Repairs", desc: "Running toilets, faulty cisterns, broken flush mechanisms — all sorted quickly." },
  { title: "Pipe Replacement", desc: "Old or damaged pipework replaced using quality materials. Full rerouting available." },
  { title: "Stopcock Replacement", desc: "Faulty stopcocks replaced so you can always shut off the water when needed." },
  { title: "Kitchen Plumbing", desc: "Sink installation, dishwasher connections, washing machine plumbing and more." },
  { title: "Outdoor Taps", desc: "External tap installation with proper isolation valves and freeze protection." },
  { title: "Burst Pipes", desc: "Emergency response to burst pipes — rapid repair to protect your home." },
];

export default function PlumbingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Plumbing", href: "/services/plumbing" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink">Plumbing</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={16} className="text-gas-safe" />
            <span className="text-gas-safe text-sm font-semibold">Gas Safe Registered · No. {GAS_SAFE_NUMBER}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
              <Wrench size={22} className="text-brand-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink">Plumbing Services</h1>
          </div>
          <p className="text-steel text-lg max-w-2xl">
            Reliable plumbing repairs and installations across West London. From a dripping tap to a full pipe replacement — fast, upfront pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-light transition-colors">
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-green-600 text-green-400 font-semibold px-6 py-3 rounded-xl hover:bg-green-900/30 transition-colors">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-bg py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">Plumbing Services We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map(({ title, desc }) => (
              <div key={title} className="bg-surface border border-border-dark rounded-2xl p-6 hover:border-border-emphasis transition-colors">
                <div className="w-9 h-9 rounded-lg bg-elevated flex items-center justify-center mb-4">
                  <Wrench size={16} className="text-brand-light" />
                </div>
                <h3 className="font-bold text-ink mb-2">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common problems */}
      <section className="bg-surface border-y border-border-dark py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-6">Common Plumbing Problems — When to Call Us</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Water dripping from a tap even when fully closed",
              "Pipe joints that are damp or visibly weeping",
              "Water pressure that has suddenly dropped",
              "Running toilet that won't stop filling",
              "Discoloured or rusty water from your taps",
              "Frozen pipes in winter",
              "No hot water from your taps or shower",
              "A musty smell suggesting a hidden leak",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-elevated border border-border-dark rounded-xl p-4">
                <AlertTriangle size={16} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-steel text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BKS */}
      <section className="bg-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-8">Why Choose BKS?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Gas Safe registered — No. 973556",
              "£100 call-out — first hour, diagnostics and repair included",
              "Same-day service available across West London",
              "Upfront fixed pricing, no hidden costs",
              "10+ years experience",
              "All work comes with a workmanship guarantee",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle size={16} className="text-brand-light flex-shrink-0" />
                <p className="text-steel text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface border-t border-border-dark py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-8">Plumbing FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How much does it cost to fix a leaking pipe?", a: "The cost depends on the location and severity of the leak. Our £100 call-out covers the first hour, diagnostics and a repair where possible. We always provide a fixed quote before additional work." },
              { q: "Can you fix a plumbing problem the same day?", a: "Yes — we offer same-day appointments across West London. For emergencies, we aim to be with you within the hour." },
              { q: "My water pressure is low — what could cause it?", a: "Low water pressure can be caused by a partial blockage, a faulty pressure regulator, a hidden leak, or mains supply issues. We'll diagnose and fix the root cause." },
              { q: "Do you cover weekend call-outs?", a: "Yes, we're available 7 days a week including evenings and weekends." },
              { q: "Do you provide written quotes?", a: "Yes — we provide clear, fixed written quotes before starting any work. No surprises." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-elevated border border-border-dark rounded-xl p-5">
                <p className="font-semibold text-ink mb-1">{q}</p>
                <p className="text-steel text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a plumber in West London?"
        subtitle="£100 call-out — first hour, diagnostics and repair included. Free estimates on all installations."
      />
    </>
  );
}
