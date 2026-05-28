import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Flame,
  Thermometer,
  Wrench,
  ShowerHead,
  AlertTriangle,
  CheckCircle,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../lib/constants";

export const metadata: Metadata = {
  title: "Plumbing, Heating & Gas Services West London | BKS Gas & Heating",
  description:
    "Gas Safe registered engineer offering boiler installation, heating repairs, plumbing and premium bathroom fitting across West London. Gas Safe No. 973556.",
  alternates: { canonical: "/services" },
  openGraph: { url: "https://bksgasheating.co.uk/services" },
};

const services = [
  {
    icon: Flame,
    title: "Boilers",
    slug: "boilers",
    badge: "Gas Safe",
    description:
      "Boiler installation, annual servicing, fault diagnosis and repair by a Gas Safe registered engineer. We install and service Vaillant and other leading brands across West London.",
    bullets: [
      "New boiler installation",
      "Annual boiler service",
      "Boiler repair and fault diagnosis",
      "Gas safety certificates (CP12)",
      "Boiler replacement",
      "Power flushing",
    ],
  },
  {
    icon: Thermometer,
    title: "Heating",
    slug: "heating",
    badge: null,
    description:
      "Heating system repairs and upgrades including radiator work, power flushing, TRV fitting and full system pipework. Keep your home warm and efficient all year round.",
    bullets: [
      "Radiator installation and replacement",
      "Power flushing",
      "TRV and zone valve fitting",
      "Heating pipework and system upgrades",
      "Heating controls and programmers",
      "System balancing",
    ],
  },
  {
    icon: Wrench,
    title: "Plumbing",
    slug: "plumbing",
    badge: null,
    description:
      "Reliable plumbing repairs across West London. Leaking pipes, dripping taps, running toilets, pipe replacement, kitchen plumbing and outdoor tap installation.",
    bullets: [
      "Leaking and burst pipes",
      "Dripping taps and running toilets",
      "Pipe replacement and rerouting",
      "Stopcock replacement",
      "Kitchen plumbing installations",
      "Outdoor tap installation",
    ],
  },
  {
    icon: ShowerHead,
    title: "Bathrooms",
    slug: "bathrooms",
    badge: null,
    description:
      "Premium bathroom fitting from first fix to final finish. Full refits, en-suites, shower rooms and wet rooms. High-end materials including gold fixtures, stone tiles and freestanding baths.",
    bullets: [
      "Full bathroom refits",
      "En-suite installation",
      "Shower room and wet room",
      "First and second fix plumbing",
      "Tiling — including stone and herringbone",
      "Freestanding baths and premium sanitaryware",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />

      {/* Hero */}
      <section className="bg-brand py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck size={22} className="text-gas-safe" />
            <span className="text-gas-safe font-semibold text-sm">Gas Safe Registered No. {GAS_SAFE_NUMBER}</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-4 text-ink">
            Gas, Heating, Plumbing &amp; Bathrooms in West London
          </h1>
          <p className="text-ink/70 text-lg max-w-2xl">
            Gas Safe registered engineer covering the full range of domestic gas, heating, plumbing and bathroom services across West London and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-xl hover:bg-ink transition-colors"
            >
              <Phone size={18} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-green-400 text-green-300 font-semibold px-6 py-3 rounded-xl hover:bg-green-900/30 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Service sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {services.map(({ icon: Icon, title, slug, badge, description, bullets }, idx) => (
          <div key={slug}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <Icon size={28} className="text-brand" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-extrabold text-ink">{title}</h2>
                    {badge && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-gas-safe border border-gas-safe/30 bg-gas-safe/10 rounded-full px-2 py-0.5 mt-1">
                        <ShieldCheck size={11} />
                        {badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-steel leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 mb-8">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-steel text-sm">
                      <CheckCircle size={16} className="text-brand flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${slug}`}
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-light transition-colors"
                >
                  More about {title}
                </Link>
              </div>
              <div className={`bg-surface rounded-2xl p-8 border border-border-dark ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-ink mb-2">{title} in West London</h3>
                <p className="text-steel text-sm leading-relaxed mb-4">
                  All {title.toLowerCase()} work is carried out to the highest standard across West London
                  and surrounding areas. Transparent pricing, quality guaranteed.
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-brand font-bold text-sm hover:text-brand-light transition-colors"
                >
                  <Phone size={14} />
                  Call for a free quote
                </a>
              </div>
            </div>

            {/* Emergency CTA band */}
            {idx === 1 && (
              <div className="mt-16 bg-elevated border border-border-emphasis rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle size={32} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-xl text-ink">Heating emergency?</h3>
                    <p className="text-steel text-sm">
                      No heating or hot water? Call now — fast response across West London.
                    </p>
                  </div>
                </div>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-light transition-colors flex-shrink-0"
                >
                  <Phone size={16} />
                  {PHONE}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      <CTABanner
        title="Ready to get started?"
        subtitle="Free estimates on all work. £100 call-out — first hour and diagnostics included. Gas Safe registered."
      />
    </>
  );
}
