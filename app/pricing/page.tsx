import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, MessageCircle, Shield, ShieldCheck, Wrench, ShowerHead, Flame } from "lucide-react";
import CTABanner from "../components/CTABanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../lib/constants";

export const metadata: Metadata = {
  title: "Pricing & Call-Out Fees | BKS Gas & Heating West London",
  description:
    "Transparent pricing from BKS Gas & Heating. £100 call-out fee covers the first hour, diagnostics and repair where possible. No hidden charges. Gas Safe registered No. 973556.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing & Call-Out Fees | BKS Gas & Heating West London",
    description: "Transparent pricing from BKS Gas & Heating. £100 call-out covers the first hour, diagnostics and repair where possible. No hidden charges.",
    url: "https://bksgasandheating.com/pricing",
  },
};

const services = [
  {
    icon: Flame,
    category: "Boilers & Gas",
    items: [
      { job: "Call-out — first hour, diagnostics & repair", price: "£100" },
      { job: "Boiler annual service", price: "Fixed quote" },
      { job: "Boiler repair", price: "From £100" },
      { job: "Boiler installation / replacement", price: "Fixed quote" },
      { job: "Gas safety certificate (CP12)", price: "Fixed quote" },
      { job: "Unvented cylinder installation (G3)", price: "Fixed quote" },
      { job: "Unvented cylinder service (G3)", price: "Fixed quote" },
    ],
  },
  {
    icon: Wrench,
    category: "Heating & Plumbing",
    items: [
      { job: "Radiator installation or replacement", price: "From £100" },
      { job: "Power flushing (domestic)", price: "Fixed quote" },
      { job: "Wet underfloor heating installation", price: "Fixed quote" },
      { job: "Heating pipework repair", price: "From £100" },
      { job: "Leaking pipe repair", price: "From £100" },
      { job: "Dripping tap repair", price: "From £100" },
      { job: "Thermostatic radiator valve replacement", price: "From £100" },
    ],
  },
  {
    icon: ShowerHead,
    category: "Bathroom Installation",
    items: [
      { job: "Full bathroom refit", price: "Fixed quote" },
      { job: "Shower installation", price: "Fixed quote" },
      { job: "Bath replacement", price: "Fixed quote" },
      { job: "Toilet installation", price: "Fixed quote" },
      { job: "Basin / vanity unit fitting", price: "Fixed quote" },
      { job: "Tiling", price: "Fixed quote" },
    ],
  },
];

const calloutSteps = [
  {
    step: "1",
    title: "£100 Call-Out",
    desc: "Covers the first hour on site, full diagnostics and a repair where possible within that time.",
  },
  {
    step: "2",
    title: "Fixed Quote",
    desc: "If the job requires more time or parts, we give you a transparent fixed price before any additional work starts.",
  },
  {
    step: "3",
    title: "You Approve",
    desc: "We never start additional work without your sign-off. No pressure, no surprises.",
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Pricing", href: "/pricing" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink">Pricing</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={18} className="text-gas-safe" />
            <span className="text-gas-safe text-sm font-semibold">Gas Safe Registered · No. {GAS_SAFE_NUMBER}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">Transparent Pricing</h1>
          <p className="text-steel text-lg max-w-2xl">
            No hidden fees. No surprises. We quote upfront and stick to it.
          </p>
        </div>
      </section>

      {/* Call-out explained */}
      <section className="bg-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-light font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-ink">The £100 Call-Out</h2>
            <p className="mt-3 text-steel max-w-xl mx-auto">
              Our call-out fee is flat and transparent. Here&apos;s what you get for it and what happens next.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {calloutSteps.map((s) => (
              <div key={s.step} className="bg-surface border border-border-dark rounded-2xl p-6 relative">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center">
                  {s.step}
                </span>
                <h3 className="font-bold text-ink text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-brand rounded-2xl p-7 text-center">
            <p className="text-xl font-bold text-white mb-2">No work starts without your approval.</p>
            <p className="text-white/70 text-sm max-w-lg mx-auto">
              After diagnostics, if additional work is needed we give you a fixed written quote. You decide. There&apos;s never any pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Price guide */}
      <section className="bg-surface border-y border-border-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink">Service Price Guide</h2>
            <p className="mt-2 text-steel max-w-xl mx-auto">
              All prices are indicative. Every job gets a fixed written quote before work begins.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 xl:grid-cols-3">
            {services.map((cat) => (
              <div key={cat.category} className="bg-elevated border border-border-dark rounded-2xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 bg-brand/20 border-b border-border-dark">
                  <cat.icon size={18} className="text-brand-light" />
                  <h3 className="font-bold text-ink text-sm">{cat.category}</h3>
                </div>
                <ul className="divide-y divide-border-dark">
                  {cat.items.map((item) => (
                    <li key={item.job} className="flex items-center justify-between px-5 py-3 text-sm">
                      <span className="text-steel">{item.job}</span>
                      <span className="font-bold text-brand-light ml-4 flex-shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-steel-muted mt-5">
            All prices exclude VAT where applicable. Fixed quotes are provided in writing before any work begins.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-bg py-14 px-4">
        <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-5">
          {[
            { icon: ShieldCheck, title: "Gas Safe Registered", desc: `No. ${GAS_SAFE_NUMBER}. Legally registered for all gas work.` },
            { icon: Shield, title: "Fully Insured", desc: "Public liability insurance on every job." },
            { icon: CheckCircle, title: "No Hidden Charges", desc: "The price we quote is the price you pay. Always." },
          ].map((item) => (
            <div key={item.title} className="bg-surface border border-border-dark text-center p-6 rounded-2xl">
              <div className="w-11 h-11 bg-elevated rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={20} className="text-brand-light" />
              </div>
              <h3 className="font-bold text-ink mb-1">{item.title}</h3>
              <p className="text-steel text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get a quote */}
      <section className="bg-surface border-t border-border-dark py-14 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-ink mb-3">Get a Free Estimate</h2>
          <p className="text-steel mb-8">
            Call or WhatsApp Bailey directly — most jobs quoted within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-light transition-colors"
            >
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-green-600 text-green-400 font-bold px-8 py-4 rounded-xl hover:bg-green-900/20 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
          <p className="text-xs text-steel-muted mt-5">
            Or{" "}
            <Link href="/contact" className="text-brand-light underline">
              fill in our quote form
            </Link>{" "}
            and we&apos;ll call you back within the hour.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to book?"
        subtitle="Call or WhatsApp today. Free estimates on all installations."
      />
    </>
  );
}
