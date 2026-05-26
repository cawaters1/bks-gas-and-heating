import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Wrench,
  Thermometer,
  Droplets,
  ShowerHead,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import { PHONE, PHONE_HREF } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Plumbing & Heating Services Bedford | NJ Plumbing & Heating",
  description:
    "Full range of plumbing, heating, drainage and bathroom services in Bedford and Bedfordshire. Emergency call-outs available. Call 07927 910665.",
  alternates: { canonical: "/services" },
  openGraph: { url: "https://njplumbingheating.co.uk/services" },
};

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    slug: "plumbing",
    description:
      "From leaking pipes and dripping taps to full pipe replacements and kitchen plumbing — we handle all domestic and commercial plumbing work across Bedford.",
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
    icon: Thermometer,
    title: "Heating",
    slug: "heating",
    description:
      "We specialise in non-gas heating work — radiator installation, underfloor heating, power flushing and hot water systems. All the heating services your home needs, without gas.",
    bullets: [
      "Radiator installation and replacement",
      "Underfloor heating (wet and electric)",
      "Power flushing",
      "TRV fitting",
      "Hot water cylinders (vented)",
      "Heating system pipework",
    ],
  },
  {
    icon: Droplets,
    title: "Drainage",
    slug: "drainage",
    description:
      "Blocked drains cleared the same day using high-pressure jetting and CCTV survey technology. We tackle everything from slow drains to full sewer blockages.",
    bullets: [
      "Blocked drain clearing",
      "High-pressure water jetting",
      "CCTV drain surveys",
      "Sewer unblocking",
      "Root cutting",
      "Drain lining and repairs",
    ],
  },
  {
    icon: ShowerHead,
    title: "Bathrooms",
    slug: "bathrooms",
    description:
      "Complete bathroom installations from first fix to final finish. En-suites, full refits, shower rooms — quality workmanship with a guaranteed finish.",
    bullets: [
      "Full bathroom refits",
      "En-suite installation",
      "Shower installation",
      "Bath, basin and WC fitting",
      "First and second fix plumbing",
      "Tiling and finishing",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Services", url: "https://njplumbingheating.co.uk/services" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">
            Plumbing, Heating &amp; Drainage Services in Bedford
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            We cover the full range of domestic plumbing and heating services across Bedford and
            Bedfordshire. Emergency call-outs, bathroom installations, drain unblocking and more.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-xl mt-8 hover:bg-offwhite transition-colors"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* Service sections */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {services.map(({ icon: Icon, title, slug, description, bullets }, idx) => (
          <div key={slug}>
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <Icon size={28} className="text-brand" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-gray-900">{title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                <ul className="space-y-2 mb-8">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                      <CheckCircle size={16} className="text-brand flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${slug}`}
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-mid transition-colors"
                >
                  More about {title}
                </Link>
              </div>
              <div className="bg-offwhite rounded-2xl p-8 border border-steel">
                <div className="w-16 h-16 rounded-2xl bg-brand flex items-center justify-center mb-4">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">{title} in Bedford</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  All {title.toLowerCase()} work is carried out to the highest standard across Bedford
                  and Bedfordshire. Fully insured, upfront pricing, quality guaranteed.
                </p>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-brand font-bold text-sm hover:underline"
                >
                  <Phone size={14} />
                  Call for a free quote
                </a>
              </div>
            </div>

            {/* Emergency CTA band between sections */}
            {idx === 1 && (
              <div className="mt-16 bg-brand rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle size={32} className="text-yellow-400 flex-shrink-0" />
                  <div>
                    <h3 className="font-extrabold text-xl">Need an emergency plumber?</h3>
                    <p className="text-white/70 text-sm">
                      Available 7 days a week. Fast response across Bedford.
                    </p>
                  </div>
                </div>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-xl hover:bg-offwhite transition-colors flex-shrink-0"
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
        subtitle="Free quotes on all work. No call-out fee. Call us today."
      />
    </>
  );
}
