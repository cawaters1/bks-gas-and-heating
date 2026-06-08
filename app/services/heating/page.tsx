import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Thermometer,
  AlertTriangle,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../../lib/constants";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Heating Services West London | Radiators, Cylinders & Underfloor | BKS Gas & Heating",
  description:
    "Gas Safe registered heating engineer West London. Radiator installation, unvented cylinders (G3 qualified), wet underfloor heating and power flushing. Call 07464 420695.",
  alternates: { canonical: "/services/heating" },
  openGraph: { url: "https://bksgasandheating.com/services/heating" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Heating",
  provider: {
    "@type": "LocalBusiness",
    name: "BKS Gas & Heating",
    telephone: "07464420695",
  },
  areaServed: "West London",
};

const serviceCards = [
  { title: "Radiator Installation", desc: "New radiator installation in any room. Correct sizing and pipework included." },
  { title: "Radiator Replacement", desc: "Old or inefficient radiators swapped for modern, better-performing units." },
  { title: "Power Flushing", desc: "Full system power flush to remove sludge and restore heating efficiency." },
  { title: "Unvented Cylinders (G3)", desc: "G3-qualified installation and maintenance of unvented hot water cylinders." },
  { title: "Wet Underfloor Heating", desc: "Wet UFH pipework laid and connected to your heating system — no electric mats." },
  { title: "TRV Fitting", desc: "Thermostatic radiator valves for better room-by-room temperature control." },
  { title: "Heating Pipework", desc: "New pipework runs for extensions, additions or full system upgrades." },
  { title: "System Balancing", desc: "Balance your heating system for even heat distribution across all rooms." },
];

export default function HeatingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Heating", href: "/services/heating" },
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
            <span className="text-ink">Heating</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={16} className="text-gas-safe" />
            <span className="text-gas-safe text-sm font-semibold">Gas Safe Registered · No. {GAS_SAFE_NUMBER}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
              <Thermometer size={22} className="text-brand-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink">Heating Services</h1>
          </div>
          <p className="text-steel text-lg max-w-2xl">
            Gas Safe registered heating engineer. Radiators, G3-qualified unvented cylinder work, wet underfloor heating and power flushing across West London.
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

      {/* G3 callout */}
      <section className="bg-gas-safe/10 border-b border-gas-safe/20 py-5 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <ShieldCheck size={22} className="text-gas-safe flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-gas-safe mb-1">G3-qualified unvented cylinder specialist</p>
            <p className="text-steel text-sm leading-relaxed">
              Bailey holds a G3 qualification, which is required by law to install and service unvented
              hot water cylinders (Megaflow and similar). Many engineers cannot legally carry out this
              work — always verify your engineer has this qualification.
            </p>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-bg py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">Heating Services We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map(({ title, desc }) => (
              <div key={title} className="bg-surface border border-border-dark rounded-2xl p-6 hover:border-border-emphasis transition-colors">
                <div className="w-9 h-9 rounded-lg bg-elevated flex items-center justify-center mb-4">
                  <Thermometer size={16} className="text-brand-light" />
                </div>
                <h3 className="font-bold text-ink mb-2">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unvented cylinders */}
      <section className="bg-surface border-y border-border-dark py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <ShieldCheck size={26} className="text-gas-safe flex-shrink-0" />
            <h2 className="text-3xl font-bold text-ink">Unvented Hot Water Cylinders (G3)</h2>
          </div>
          <p className="text-steel leading-relaxed mb-4">
            Unvented cylinders — Megaflow, Tribune and similar — operate at mains pressure and deliver
            powerful, consistent hot water to every tap and shower. Because they operate at higher pressures,
            UK building regulations (Part G3) require installation and servicing by a qualified engineer.
          </p>
          <p className="text-steel leading-relaxed mb-6">
            Bailey holds a G3 qualification — he can legally install, commission and service unvented
            cylinders. Not all heating engineers hold this. Always check.
          </p>
          <div className="bg-elevated border border-border-dark rounded-2xl p-6">
            <h3 className="font-bold text-ink mb-4">G3 unvented work we cover:</h3>
            <ul className="space-y-2">
              {[
                "New unvented cylinder installation",
                "Like-for-like cylinder replacement",
                "Annual servicing and safety checks",
                "Pressure relief valve and expansion vessel replacement",
                "Thermostat and immersion heater replacement",
                "Fault diagnosis and repair",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-steel">
                  <CheckCircle size={14} className="text-gas-safe flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Power flushing */}
      <section className="bg-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-5">What is Power Flushing?</h2>
          <p className="text-steel leading-relaxed mb-4">
            Over time, heating systems accumulate sludge — corroded metal particles, limescale and debris —
            that reduces efficiency, causes cold spots on radiators, and puts strain on your boiler.
          </p>
          <p className="text-steel leading-relaxed mb-6">
            Power flushing connects a specialist machine to your heating system and pumps high-velocity
            water through it, dislodging and removing the sludge and restoring near-original performance.
          </p>
          <div className="bg-surface border border-border-dark rounded-2xl p-6">
            <h3 className="font-bold text-ink mb-4">Signs you need a power flush:</h3>
            <ul className="space-y-2">
              {[
                "Radiators cold at the bottom but warm at the top",
                "Noisy pipes or heating pump",
                "System taking longer than usual to warm up",
                "Discoloured water when bleeding radiators",
                "Frequent need to bleed radiators",
              ].map((sign) => (
                <li key={sign} className="flex items-center gap-3 text-sm text-steel">
                  <AlertTriangle size={14} className="text-amber-400 flex-shrink-0" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface border-t border-border-dark py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-8">Heating FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Are you qualified to install an unvented cylinder?", a: "Yes — Bailey holds a G3 qualification, which is the certification required by UK building regulations to install and service unvented hot water cylinders." },
              { q: "What is a G3 qualification?", a: "G3 is the Building Regulations requirement for anyone installing or servicing unvented hot water storage systems. Installing without this qualification is illegal." },
              { q: "My radiator has a cold spot — can you fix it?", a: "Yes. Cold spots are often caused by trapped air (bleeding) or sludge build-up. We can diagnose and power flush if needed." },
              { q: "How long does a power flush take?", a: "A typical domestic power flush takes between 4 and 8 hours depending on system size." },
              { q: "Can you add an extra radiator to my system?", a: "Yes — we can install additional radiators, including running new pipework, on most existing heating systems." },
              { q: "Do you install electric underfloor heating?", a: "No — we only install wet (water pipe) underfloor heating systems, not electric mat systems." },
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
        title="Need heating work in West London?"
        subtitle="G3-qualified cylinder specialist. £100 call-out — first hour included. Free estimates."
      />
    </>
  );
}
