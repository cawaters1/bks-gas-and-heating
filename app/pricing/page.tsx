import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, MessageCircle, Clock, Shield, Wrench, Droplets, ShowerHead, Thermometer } from "lucide-react";
import CTABanner from "../components/CTABanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

export const metadata: Metadata = {
  title: "Pricing & Call-Out Fees | NJ Plumbing & Heating Bedford",
  description:
    "Transparent, upfront pricing from NJ Plumbing & Heating. £80 call-out fee covers the first hour, diagnostics and repair where possible. No hidden charges. Serving Bedford and Bedfordshire.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "https://njplumbingheating.co.uk/pricing" },
};

const services = [
  {
    icon: Wrench,
    category: "Plumbing Repairs",
    items: [
      { job: "Call-out — first hour, diagnostics & repair", price: "£80" },
      { job: "Leaking or burst pipe repair", price: "From £80" },
      { job: "Dripping tap (replacement washer/cartridge)", price: "From £80" },
      { job: "Running toilet / fill valve replacement", price: "From £80" },
      { job: "Stopcock replacement", price: "Fixed quote" },
      { job: "Pipe rerouting / full replacement", price: "Fixed quote" },
      { job: "Kitchen plumbing installation", price: "Fixed quote" },
      { job: "Outdoor tap installation", price: "Fixed quote" },
    ],
  },
  {
    icon: Droplets,
    category: "Drainage",
    items: [
      { job: "Drain unblocking (standard)", price: "From £80" },
      { job: "High-pressure jetting", price: "Fixed quote" },
      { job: "CCTV drain survey", price: "Fixed quote" },
      { job: "Drainage repair", price: "Fixed quote" },
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
    ],
  },
  {
    icon: Thermometer,
    category: "Heating (Non-Gas)",
    items: [
      { job: "Radiator installation or replacement", price: "From £80" },
      { job: "Power flushing (domestic)", price: "Fixed quote" },
      { job: "Underfloor heating installation", price: "Fixed quote" },
      { job: "Heating pipework repair", price: "From £80" },
      { job: "Thermostatic radiator valve replacement", price: "From £80" },
    ],
  },
];

const calloutSteps = [
  {
    step: "1",
    title: "£80 Call-Out",
    desc: "Covers the first hour on site, full diagnostics and a repair where possible within that time.",
  },
  {
    step: "2",
    title: "Fixed Quote",
    desc: "If the job requires more time or parts, we provide a transparent fixed price before any additional work starts. No surprises.",
  },
  {
    step: "3",
    title: "You Approve",
    desc: "You decide whether to proceed. We never start additional work without your sign-off.",
  },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://njplumbingheating.co.uk" },
          { name: "Pricing", url: "https://njplumbingheating.co.uk/pricing" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Pricing</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Transparent Pricing</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            No hidden fees. No surprises. We quote upfront and stick to it.
            Here&apos;s exactly how our pricing works.
          </p>
        </div>
      </section>

      {/* Call-out explained */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="text-4xl font-extrabold text-gray-900">The £80 Call-Out</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Our call-out fee is flat and transparent. Here&apos;s what you get for it and what happens next.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {calloutSteps.map((s) => (
              <div key={s.step} className="bg-offwhite rounded-2xl p-7 border border-steel relative">
                <span className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-brand text-white font-extrabold text-sm flex items-center justify-center">
                  {s.step}
                </span>
                <h3 className="font-extrabold text-gray-900 text-lg mt-2 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Key promise */}
          <div className="bg-brand rounded-2xl p-8 text-white text-center">
            <p className="text-2xl font-extrabold mb-2">No work starts without your approval.</p>
            <p className="text-blue-100 text-sm max-w-lg mx-auto">
              After diagnostics, if additional work is needed we give you a fixed written quote.
              You decide. There&apos;s never any pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Price guide */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Price Guide</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Service Pricing</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              All prices are indicative. Every job gets a fixed written quote before work begins.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((cat) => (
              <div key={cat.category} className="bg-white rounded-2xl border border-steel overflow-hidden">
                <div className="flex items-center gap-3 px-6 py-4 bg-brand text-white">
                  <cat.icon size={20} />
                  <h3 className="font-bold text-base">{cat.category}</h3>
                </div>
                <ul className="divide-y divide-steel">
                  {cat.items.map((item) => (
                    <li key={item.job} className="flex items-center justify-between px-6 py-3.5 text-sm">
                      <span className="text-gray-700">{item.job}</span>
                      <span className="font-bold text-brand ml-4 flex-shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-6">
            All prices exclude VAT where applicable. Fixed quotes are provided in writing before any work begins.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Shield, title: "Fully Insured", desc: "Public liability insurance on every job." },
            { icon: Clock, title: "Free Estimates", desc: "Phone or WhatsApp quotes at no cost — before we even arrive." },
            { icon: CheckCircle, title: "No Hidden Charges", desc: "The price we quote is the price you pay. Always." },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-2xl border border-steel">
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-brand" />
              </div>
              <h3 className="font-extrabold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Get a quote CTA */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Get a Free Estimate</h2>
          <p className="text-gray-500 mb-8">
            Call or WhatsApp Nick directly for a free estimate over the phone — most jobs quoted within minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-mid transition-colors"
            >
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-5">
            Or{" "}
            <Link href="/contact" className="text-brand underline">
              fill in our quote form
            </Link>{" "}
            and we&apos;ll call you back within the hour.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to book?"
        subtitle="Call, WhatsApp or book online. Same-day cover available across Bedford."
      />
    </>
  );
}
