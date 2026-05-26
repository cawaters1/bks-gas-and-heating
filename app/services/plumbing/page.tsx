import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Wrench,
  CheckCircle,
  AlertTriangle,
  Droplets,
  Settings,
  Home,
  Pipette,
  Hammer,
  LifeBuoy,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Plumbing Services Bedford | Leaks, Repairs & Installations",
  description:
    "Expert plumbing services in Bedford. Leaking pipes, dripping taps, burst pipes, toilet repairs and full plumbing installations. Call 07927 910665.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Plumbing",
  provider: {
    "@type": "LocalBusiness",
    name: "NJ Plumbing & Heating",
    address: { addressLocality: "Bedford" },
  },
  areaServed: "Bedford, Bedfordshire",
};

const serviceCards = [
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    desc: "Fast diagnosis and repair of all types of leaks — from pinhole leaks to major pipe bursts.",
  },
  {
    icon: Settings,
    title: "Dripping Taps",
    desc: "Worn washers, cartridges and valves replaced. Stop the drip and cut your water bill.",
  },
  {
    icon: LifeBuoy,
    title: "Toilet Repairs",
    desc: "Running toilets, faulty cisterns, broken flush mechanisms — all sorted quickly.",
  },
  {
    icon: Hammer,
    title: "Pipe Replacement",
    desc: "Old or damaged pipework replaced using quality materials. Full rerouting available.",
  },
  {
    icon: Home,
    title: "Stopcock Replacement",
    desc: "Faulty stopcocks replaced so you can always shut off the water when needed.",
  },
  {
    icon: Wrench,
    title: "Kitchen Plumbing",
    desc: "Sink installation, dishwasher connections, washing machine plumbing and more.",
  },
  {
    icon: Pipette,
    title: "Outdoor Taps",
    desc: "External tap installation with proper isolation valves and freeze protection.",
  },
  {
    icon: AlertTriangle,
    title: "Burst Pipes",
    desc: "Emergency response to burst pipes — rapid repair to protect your home.",
  },
];

export default function PlumbingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Plumbing</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Wrench size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-extrabold">Plumbing Services in Bedford</h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mt-4">
            Professional plumbing repairs and installations across Bedford and Bedfordshire.
            From a dripping tap to a full pipe replacement — fast, reliable and fairly priced.
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

      {/* Services grid */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Plumbing Services We Offer</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              All plumbing work is carried out by experienced, fully insured tradespeople.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

      {/* Common problems */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Common Plumbing Problems — When to Call Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <div key={item} className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-600">
            If you&apos;re experiencing any of these issues, don&apos;t wait — small leaks can
            cause major damage. Call us on{" "}
            <a href={PHONE_HREF} className="text-brand font-bold hover:underline">
              {PHONE}
            </a>{" "}
            for same-day attention.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Why Bedford Trusts NJ Plumbing &amp; Heating
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Fully insured — public liability on every job",
              "No call-out fee — free quotes on all work",
              "Same-day service available across Bedford",
              "Upfront, fixed pricing with no hidden costs",
              "Experienced, reliable tradespeople",
              "All work comes with a workmanship guarantee",
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
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Plumbing FAQ
          </h2>
          <div className="divide-y divide-steel">
            {[
              {
                q: "How much does it cost to fix a leaking pipe in Bedford?",
                a: "The cost depends on the location and severity of the leak. Most minor pipe repairs start from £60+VAT. We always provide a fixed quote before starting any work.",
              },
              {
                q: "Can you fix a plumbing problem the same day?",
                a: "Yes — we offer same-day plumbing appointments across Bedford and the surrounding areas. For emergencies, we aim to be with you within the hour.",
              },
              {
                q: "My water pressure is low — what could cause it?",
                a: "Low water pressure can be caused by a partial blockage, a faulty pressure regulator, a hidden leak, or issues with the mains supply. We'll diagnose and fix the root cause.",
              },
              {
                q: "Do you cover weekend plumbing call-outs?",
                a: "Yes, we're available 7 days a week including weekends. Emergency call-outs are available outside normal hours.",
              },
              {
                q: "Do you provide written quotes?",
                a: "Yes — we provide clear, written quotes before starting any work so you know exactly what you'll pay. No surprises.",
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
        title="Need a plumber in Bedford?"
        subtitle="Call us today for a free, no-obligation quote. Same-day appointments available."
      />
    </>
  );
}
