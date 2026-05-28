import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Droplets,
  CheckCircle,
  AlertTriangle,
  Settings,
  Shield,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF } from "../../lib/constants";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Drain Unblocking Bedford | Toilet Unblocking & Drain Rodding",
  description:
    "Blocked drains, toilets and sinks cleared across Bedford and Bedfordshire. Drain rodding and toilet unblocking — fast, professional and fairly priced. Call 07927 910665.",
  alternates: { canonical: "/services/drainage" },
  openGraph: { url: "https://njplumbingheating.co.uk/services/drainage" },
};

const serviceCards = [
  {
    icon: Droplets,
    title: "Blocked Drain Clearing",
    desc: "Fast clearance of blocked kitchen, bathroom and external drains using drain rods and manual techniques.",
  },
  {
    icon: Settings,
    title: "Toilet Unblocking",
    desc: "Blocked toilets cleared quickly and cleanly. Most toilet blockages resolved on the same visit.",
  },
  {
    icon: Settings,
    title: "Drain Rodding",
    desc: "Traditional drain rodding to clear blockages in internal and external drain runs.",
  },
  {
    icon: Droplets,
    title: "Sink & Bath Unblocking",
    desc: "Slow or blocked sinks, baths and showers cleared — kitchen grease build-up, hair and debris.",
  },
  {
    icon: Shield,
    title: "External Drain Clearing",
    desc: "Blocked gullets and external drain runs cleared. Manholes rodded and flow restored.",
  },
  {
    icon: Settings,
    title: "Waste Pipe Work",
    desc: "Waste pipe repairs and replacements for sinks, baths and toilets — leaking joints fixed properly.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Assessment",
    desc: "We assess the blockage and identify the best method to clear it using drain rods or manual tools.",
  },
  {
    step: "2",
    title: "Clearance",
    desc: "The blockage is cleared using specialist drainage rods and appropriate techniques.",
  },
  {
    step: "3",
    title: "Check",
    desc: "We run water through the drain to confirm full flow is restored.",
  },
  {
    step: "4",
    title: "Advice",
    desc: "We advise on any underlying issues found and how to prevent the blockage returning.",
  },
];

export default function DrainagePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Services", url: "https://njplumbingheating.co.uk/services" }, { name: "Drain Unblocking Bedford", url: "https://njplumbingheating.co.uk/services/drainage" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Drainage</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Droplets size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-extrabold">
              Drain Unblocking &amp; Drainage Services in Bedford
            </h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mt-4">
            Blocked drains, toilets and sinks cleared across Bedford and Bedfordshire.
            Drain rodding and toilet unblocking — fast, professional and fairly priced.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-xl mt-8 hover:bg-offwhite transition-colors"
          >
            <Phone size={18} />
            Call {PHONE}
          </a>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Drainage Services We Offer</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Drain rodding, toilet unblocking and drainage clearance for residential
              properties across Bedford and Bedfordshire.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCards.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-6 border border-steel hover:border-brand hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs of a blocked drain */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Signs of a Blocked Drain
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Don&apos;t ignore the warning signs — a small blockage left untreated can quickly
            become a serious problem. Look out for:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Water draining slowly from sinks, baths or showers",
              "Gurgling sounds from plugs or toilets",
              "Unpleasant smells from drains",
              "Water pooling on the floor near drains",
              "Toilets that take a long time to flush clear",
              "Overflowing manholes in the garden",
              "Wet patches on lawns above drain runs",
              "Sewage smell inside or outside the property",
            ].map((sign) => (
              <div key={sign} className="flex items-start gap-3">
                <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our process */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            How We Clear Your Drain
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Why Choose Us for Drainage in Bedford?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Same-day drain unblocking across Bedford",
              "£80 call-out — first hour, diagnostics and repair included",
              "Toilet unblocking and drain rodding specialist",
              "Upfront fixed pricing — no hidden charges",
              "Fully insured with public liability cover",
              "Honest advice — no upselling work you don't need",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-brand flex-shrink-0" />
                <p className="text-gray-700 text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Drainage FAQ</h2>
          <div className="divide-y divide-steel">
            {[
              {
                q: "How quickly can you unblock a drain in Bedford?",
                a: "We offer same-day drain unblocking across Bedford and the surrounding area. For most locations in Bedford we can be with you within a few hours.",
              },
              {
                q: "How much does drain unblocking cost?",
                a: "Most drain blockages are cleared within the £80 call-out, which includes the first hour. We always give you a fixed, upfront price before any work starts.",
              },
              {
                q: "Can you unblock a toilet?",
                a: "Yes — toilet unblocking is one of our most common call-outs. Most blockages are cleared on the first visit using drain rods and specialist tools.",
              },
              {
                q: "Can you unblock an outside drain?",
                a: "Yes — we unblock external drains, gullets and manholes as well as internal drainage.",
              },
              {
                q: "Do you do high-pressure jetting or CCTV surveys?",
                a: "We don't carry high-pressure jetting equipment or CCTV camera systems. We specialise in drain rodding, toilet unblocking and manual drainage clearance. For jetting or CCTV surveys, we'll point you to a specialist drainage contractor.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="cursor-pointer font-bold py-4 text-gray-900 list-none flex items-center justify-between gap-4 hover:text-brand transition-colors">
                  {q}
                  <span className="text-brand text-lg group-open:rotate-45 transition-transform flex-shrink-0">+</span>
                </summary>
                <p className="pb-4 text-gray-500 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Blocked drain in Bedford?"
        subtitle="Same-day drain unblocking and toilet unblocking. £80 call-out — first hour included. Call us now."
      />
    </>
  );
}
