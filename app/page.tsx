import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  CheckCircle,
  Wrench,
  Droplets,
  ShowerHead,
  AlertTriangle,
  Thermometer,
  PenTool,
  Star,
  Clock,
  Shield,
  MapPin,
  MessageCircle,
} from "lucide-react";
import ReviewsCarousel from "./components/ReviewsCarousel";
import QuoteForm from "./components/QuoteForm";
import { PHONE, PHONE_HREF, AREAS, GOOGLE_BUSINESS_URL, WHATSAPP } from "./lib/constants";

export const metadata: Metadata = {
  title: "NJ Plumbing & Heating Bedford | Plumber Bedford",
  description:
    "Expert plumber in Bedford. Plumbing repairs, bathroom installations, drain unblocking and heating services across Bedford and Bedfordshire. Call 07927 910665.",
  alternates: { canonical: "/" },
  openGraph: { url: "https://njplumbingheating.co.uk" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How quickly can you respond to an emergency in Bedford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We aim to reach most Bedford postcodes within the hour. We're available 7 days a week including evenings.",
      },
    },
    {
      "@type": "Question",
      name: "Do you charge a call-out fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, we don't charge a call-out fee. We provide free, no-obligation quotes on all work.",
      },
    },
    {
      "@type": "Question",
      name: "Are you insured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we are fully insured with public liability insurance on every job.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Bedford and all surrounding towns including Kempston, Ampthill, Sandy, Biggleswade, Flitwick and more.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work on boilers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are not Gas Safe registered so we cannot work on gas appliances. We specialise in plumbing, drainage, heating pipework (non-gas) and bathrooms.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to unblock a drain in Bedford?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide fixed upfront pricing before starting any work. Most drain blockages are cleared from £80+VAT.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-brand text-white pt-20 pb-28 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)",
          }}
        />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available Now &middot; Bedford &amp; Bedfordshire
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Your Local Plumber
              <br />
              in Bedford.
              <br />
              <span className="text-blue-300">Done Properly.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg">
              Professional plumbing repairs, bathroom installations and drainage across Bedford
              and surrounding areas. Upfront pricing, reliable workmanship, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-white text-brand font-extrabold px-8 py-4 rounded-xl text-base hover:bg-offwhite transition-colors shadow-xl"
              >
                <Phone size={18} />
                Call {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-blue-200">
              {["Fully insured", "No call-out fee", "Free quotes", "Same-day cover"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right — logo panel */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-brand-mid rounded-3xl p-12 border border-white/10 shadow-2xl">
              <Image
                src="/logo.jpg"
                alt="NJ Plumbing & Heating"
                width={280}
                height={280}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <section className="bg-brand-mid text-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "500+", label: "Jobs Completed" },
            { val: "5★", label: "Google Rating" },
            { val: "24/7", label: "Emergency Cover" },
            { val: "Free", label: "No-Obligation Quote" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-blue-300">{s.val}</p>
              <p className="text-sm text-blue-300/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section className="bg-offwhite py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Plumbing &amp; Heating Services
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              From emergency repairs to full bathroom fits — quality work across Bedford and
              Bedfordshire.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Wrench,
                title: "Plumbing Repairs",
                desc: "Leaking pipes, dripping taps, running toilets — sorted fast.",
                href: "/services/plumbing",
              },
              {
                icon: Droplets,
                title: "Drain Unblocking",
                desc: "Blocked or slow drains cleared with high-pressure jetting and CCTV.",
                href: "/services/drainage",
              },
              {
                icon: ShowerHead,
                title: "Bathroom Fitting",
                desc: "Complete bathroom installations from first fix to final touches.",
                href: "/services/bathrooms",
              },
              {
                icon: Thermometer,
                title: "Heating Systems",
                desc: "Radiators, underfloor heating, power flushing — all non-gas work.",
                href: "/services/heating",
              },
              {
                icon: AlertTriangle,
                title: "Emergency Call-Outs",
                desc: "Burst pipes, flooding. Fast response across Bedford.",
                href: "/emergency",
              },
              {
                icon: PenTool,
                title: "Maintenance",
                desc: "Annual checks, system health, landlord work — keep things running.",
                href: "/services/plumbing",
              },
            ].map(({ icon: Icon, title, desc, href }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                  <Icon
                    size={22}
                    className="text-brand group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  href={href}
                  className="text-brand text-sm font-semibold hover:underline"
                >
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Plumbers you can actually trust.
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              NJ Plumbing &amp; Heating is a Bedford-based company built on honesty and quality.
              Based in Bedford, Nick brings a professional and friendly approach to every job —
              no upselling, no hidden charges, and no cowboys. Just reliable work from someone
              who takes real pride in what they do.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether it&apos;s a dripping tap or a full bathroom refit, you get the same
              honest, professional service every time. We&apos;re part of the local community
              and our reputation is everything to us.
            </p>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-mid transition-colors"
            >
              <Phone size={16} />
              {PHONE}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: Shield,
                title: "Fully Insured",
                desc: "Public liability insurance on every job.",
              },
              {
                icon: Clock,
                title: "Fast Response",
                desc: "Same-day and emergency appointments available.",
              },
              {
                icon: CheckCircle,
                title: "No Hidden Costs",
                desc: "Fixed, upfront pricing — you know the cost before we start.",
              },
              {
                icon: Star,
                title: "Quality Guaranteed",
                desc: "All work guaranteed. We stand behind everything we do.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-offwhite rounded-2xl p-6 border border-steel"
              >
                <Icon size={24} className="text-brand mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="bg-offwhite py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
              Reviews
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              What Bedford Says About Us
            </h2>
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-500 text-sm">5.0 &middot; Google Reviews</span>
            </div>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
              Coverage
            </p>
            <h2 className="text-4xl font-extrabold text-gray-900">Areas We Cover</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Based in Bedford — serving the whole of Bedfordshire and surrounding towns.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {AREAS.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-offwhite border border-steel rounded-full px-4 py-2 text-sm font-medium text-gray-700"
              >
                <MapPin size={12} className="text-brand" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE FORM ───────────────────────────────────────────────── */}
      <section className="bg-brand py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-white">
            <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3">
              Free Quote
            </p>
            <h2 className="text-4xl font-extrabold mb-6">
              Get a free, no-obligation quote
            </h2>
            <ul className="space-y-4">
              {[
                "We call you back within the hour",
                "Upfront pricing before any work starts",
                "Same-day appointments available",
                "Serving Bedford and all surrounding areas",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-blue-100">
                  <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <QuoteForm />
            <div className="mt-4 text-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-300 hover:text-green-200 text-sm font-semibold transition-colors"
              >
                <MessageCircle size={16} />
                Or WhatsApp us directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">FAQ</p>
            <h2 className="text-4xl font-extrabold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="divide-y divide-steel">
            {[
              {
                q: "How quickly can you respond to an emergency in Bedford?",
                a: "We aim to reach most Bedford postcodes within the hour. We're available 7 days a week including evenings for emergency call-outs.",
              },
              {
                q: "Do you charge a call-out fee?",
                a: "No call-out fee — ever. We provide free, no-obligation quotes on all work before we start.",
              },
              {
                q: "Are you insured?",
                a: "Yes, we are fully insured with public liability insurance on every single job.",
              },
              {
                q: "Which areas do you cover?",
                a: "We cover Bedford and all surrounding towns including Kempston, Ampthill, Sandy, Biggleswade, Flitwick, Shefford and many more across Bedfordshire.",
              },
              {
                q: "Do you work on boilers?",
                a: "We are not Gas Safe registered so we cannot work on gas appliances or carry out gas safety certificates. We specialise in plumbing, drainage, heating pipework (non-gas) and bathroom installations.",
              },
              {
                q: "How much does it cost to unblock a drain in Bedford?",
                a: "We provide fixed upfront pricing before starting any work, so there are no surprises. Most drain blockages are cleared from £80+VAT depending on the severity.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group">
                <summary className="cursor-pointer font-bold py-4 text-gray-900 list-none flex items-center justify-between gap-4 hover:text-brand transition-colors">
                  {q}
                  <span className="text-brand text-lg group-open:rotate-45 transition-transform flex-shrink-0">
                    +
                  </span>
                </summary>
                <p className="pb-4 text-gray-500 leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAP CTA ───────────────────────────────────────────────────── */}
      <section className="bg-brand-mid py-16 px-4 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-3">
              Location
            </p>
            <h2 className="text-3xl font-extrabold mb-4">Find us on Google Maps</h2>
            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="text-blue-300 flex-shrink-0" />
                Bedford, Bedfordshire
              </p>
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-blue-300 flex-shrink-0" />
                {PHONE}
              </a>
            </div>
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-xl hover:bg-offwhite transition-colors"
            >
              View on Google Maps
            </a>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://maps.google.com/maps?q=Bedford,+Bedfordshire,+UK&output=embed"
              width="100%"
              height={350}
              loading="lazy"
              allowFullScreen
              style={{ border: 0, display: "block" }}
              title="NJ Plumbing & Heating — Bedford"
            />
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 hidden md:flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
