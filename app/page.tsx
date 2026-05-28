import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  Wrench,
  ShowerHead,
  Thermometer,
  Flame,
  ShieldCheck,
  MessageCircle,
  Star,
} from "lucide-react";
import ReviewsCarousel from "./components/ReviewsCarousel";
import QuoteForm from "./components/QuoteForm";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "./lib/constants";

export const metadata: Metadata = {
  title: "BKS Gas & Heating | Gas Safe Engineer West London",
  description:
    "Gas Safe registered heating engineer in West London. Boiler installation, servicing, plumbing repairs and premium bathroom fitting. Gas Safe No. 973556. Call 07464 420695.",
  alternates: { canonical: "/" },
  openGraph: { url: "https://bksgasheating.co.uk" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are you Gas Safe registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BKS Gas & Heating is Gas Safe registered (No. 973556). All boiler and gas work is carried out by a legally qualified Gas Safe engineer.",
      },
    },
    {
      "@type": "Question",
      name: "What is your call-out charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our call-out fee is £100, which covers the first hour, full diagnostics and a repair where possible. For larger jobs we provide a fixed quotation before any additional work begins.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover West London and surrounding areas including West Drayton, Uxbridge, Hayes, Ealing, Hounslow, Richmond, Slough, Windsor, Guildford, Woking, and parts of Buckinghamshire and Hertfordshire.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#000000] pt-24 pb-28 px-4 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-48 bg-brand/8 blur-[100px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-8 text-steel">
            <ShieldCheck size={14} className="text-gas-safe" />
            Gas Safe Registered &middot; No. {GAS_SAFE_NUMBER}
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight text-ink">
            Gas Safe Heating
            <br />
            Engineers in
            <br />
            <span className="text-[#3A6FBF]">West London.</span>
          </h1>
          <p className="text-base text-steel leading-relaxed mb-10 max-w-xl mx-auto">
            Boiler installation, servicing and repair by Gas Safe registered engineers. Heating systems, plumbing repairs and premium bathroom fitting across West London and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-brand-light transition-colors shadow-lg shadow-brand/20"
            >
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-green-700/60 text-green-400 font-semibold px-8 py-4 rounded-xl text-base hover:bg-green-900/20 transition-colors"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-steel">
            {[
              { label: "Gas Safe No. 973556", icon: ShieldCheck, iconClass: "text-gas-safe" },
              { label: "10+ Years Experience", icon: CheckCircle, iconClass: "text-brand-light" },
              { label: "£100 Call-Out", icon: CheckCircle, iconClass: "text-brand-light" },
              { label: "Free Estimates", icon: CheckCircle, iconClass: "text-brand-light" },
            ].map(({ label, icon: Icon, iconClass }) => (
              <span key={label} className="flex items-center gap-2">
                <Icon size={14} className={iconClass} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GAS SAFE TRUST BAR ───────────────────────────────────────── */}
      <section className="bg-[#07070e] py-8 px-4 border-y border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
          <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gas-safe/10 border border-gas-safe/20 flex items-center justify-center">
            <ShieldCheck size={28} className="text-gas-safe" />
          </div>
          <div>
            <p className="text-base font-bold text-ink mb-1">
              Gas Safe Registered Engineer &mdash; No. {GAS_SAFE_NUMBER}
            </p>
            <p className="text-steel text-sm leading-relaxed">
              All gas work is carried out by a registered Gas Safe engineer. It is illegal to work on gas appliances without this qualification. Always ask to see the Gas Safe card.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section className="bg-[#000000] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-extrabold text-ink">
              Gas, Heating, Plumbing &amp; Bathrooms
            </h2>
            <p className="mt-4 text-steel text-sm max-w-lg mx-auto">
              From boiler installation to premium bathroom refits — quality work across West London and the surrounding areas.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Flame,
                title: "Boilers",
                desc: "Installation, servicing, repair and Gas Safe certificates. All major brands.",
                href: "/services/boilers",
                badge: "Gas Safe",
              },
              {
                icon: Thermometer,
                title: "Heating",
                desc: "Radiators, power flushing, TRVs, zone valves and full heating system upgrades.",
                href: "/services/heating",
                badge: null,
              },
              {
                icon: Wrench,
                title: "Plumbing",
                desc: "Leaking pipes, dripping taps, running toilets, pipe replacement and more.",
                href: "/services/plumbing",
                badge: null,
              },
              {
                icon: ShowerHead,
                title: "Bathrooms",
                desc: "Premium bathroom refits — freestanding baths, stone tiles, quality sanitaryware.",
                href: "/services/bathrooms",
                badge: null,
              },
            ].map(({ icon: Icon, title, desc, href, badge }) => (
              <Link
                key={title}
                href={href}
                className="bg-[#0a0a10] rounded-2xl p-7 border border-white/6 hover:border-brand/40 transition-all group block"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/15 flex items-center justify-center group-hover:bg-brand/20 transition-colors">
                    <Icon size={20} className="text-brand-light" />
                  </div>
                  {badge && (
                    <span className="text-xs font-bold text-gas-safe border border-gas-safe/25 bg-gas-safe/8 rounded-full px-2 py-0.5">
                      {badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-ink text-base mb-2">{title}</h3>
                <p className="text-steel text-sm leading-relaxed mb-4">{desc}</p>
                <span className="text-brand-light text-sm font-medium group-hover:underline">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK GALLERY ─────────────────────────────────────────────── */}
      <section className="bg-[#07070e] py-24 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">Portfolio</p>
            <h2 className="text-4xl font-extrabold text-ink">Our Work</h2>
            <p className="mt-4 text-steel text-sm max-w-lg mx-auto">
              Boiler installations, premium bathrooms and full heating system upgrades across West London.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "/images/boiler-install-1.jpg",
              "/images/boiler-install-2.jpg",
              "/images/bathroom-1.jpg",
              "/images/bathroom-5.jpg",
              "/images/bathroom-detail-2.jpg",
              "/images/cylinder-1.jpg",
            ].map((src) => (
              <div key={src} className="relative aspect-square rounded-xl overflow-hidden border border-white/5">
                <Image
                  src={src}
                  alt="BKS Gas & Heating — recent work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY BKS ──────────────────────────────────────────────────── */}
      <section className="bg-[#07070e] py-24 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Why Choose BKS
            </p>
            <h2 className="text-4xl font-extrabold text-ink">
              Qualified. Transparent. Reliable.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: ShieldCheck,
                title: "Gas Safe Registered",
                desc: "No. 973556. Legally qualified to work on all gas appliances, boilers and pipework.",
                iconClass: "text-gas-safe",
                bgClass: "bg-gas-safe/8 border-gas-safe/15",
              },
              {
                icon: Star,
                title: "10+ Years Experience",
                desc: "Bailey has been in the trade for over a decade. You get that experience on every job.",
                iconClass: "text-gold",
                bgClass: "bg-gold/8 border-gold/15",
              },
              {
                icon: CheckCircle,
                title: "Transparent Pricing",
                desc: "£100 call-out covers the first hour. Fixed quotes on all larger jobs before we start.",
                iconClass: "text-brand-light",
                bgClass: "bg-brand/8 border-brand/15",
              },
              {
                icon: Phone,
                title: "West London Based",
                desc: "Covering West London, Surrey, Buckinghamshire and Hertfordshire.",
                iconClass: "text-brand-light",
                bgClass: "bg-brand/8 border-brand/15",
              },
            ].map(({ icon: Icon, title, desc, iconClass, bgClass }) => (
              <div key={title} className="bg-[#0a0a10] rounded-2xl p-7 border border-white/6">
                <div className={`w-11 h-11 rounded-xl border ${bgClass} flex items-center justify-center mb-5`}>
                  <Icon size={20} className={iconClass} />
                </div>
                <h3 className="font-bold text-ink text-base mb-2">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING CALLOUT ──────────────────────────────────────────── */}
      <section className="bg-[#000000] py-16 px-4">
        <div className="max-w-3xl mx-auto bg-[#0a0a10] border border-white/8 rounded-2xl p-10">
          <div className="text-center mb-10">
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">Pricing</p>
            <h2 className="text-3xl font-extrabold text-ink mb-2">
              £100 Call-Out — Here&apos;s What&apos;s Included
            </h2>
            <p className="text-steel text-sm">No surprises. You know the cost before we arrive.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "01", title: "We Arrive", desc: "Punctual, fully equipped, Gas Safe ID presented on the door." },
              { step: "02", title: "We Diagnose", desc: "Full assessment in the first hour — fault found and options explained clearly." },
              { step: "03", title: "We Fix It", desc: "Repair carried out where possible in that first hour. Larger jobs quoted before proceeding." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="text-4xl font-extrabold text-brand/25 mb-2">{step}</div>
                <h3 className="font-bold text-ink mb-1">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="text-brand-light text-sm font-semibold hover:text-ink transition-colors"
            >
              View full pricing &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="bg-[#07070e] py-24 px-4 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">Reviews</p>
            <h2 className="text-4xl font-extrabold text-ink mb-3">
              What West London Says About Us
            </h2>
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-steel text-sm">5.0 &middot; Google Reviews</span>
            </div>
          </div>
          <ReviewsCarousel />
        </div>
      </section>

      {/* ── QUOTE FORM ───────────────────────────────────────────────── */}
      <section className="bg-[#000000] py-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">
              Free Quote
            </p>
            <h2 className="text-4xl font-extrabold mb-6 text-ink">
              Get a free, no-obligation quote
            </h2>
            <ul className="space-y-4 mb-8">
              {[
                "We call you back within the hour",
                "Fixed pricing before any work starts",
                "Gas Safe registered for all boiler work",
                "Covering West London and surrounding areas",
              ].map((point) => (
                <li key={point} className="flex items-center gap-3 text-steel text-sm">
                  <CheckCircle size={16} className="text-brand-light flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="p-5 bg-[#0a0a10] border border-white/8 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck size={18} className="text-gas-safe" />
                <p className="font-bold text-ink text-sm">Gas Safe Registered</p>
              </div>
              <p className="text-steel text-sm">No. {GAS_SAFE_NUMBER} — you can verify at gassaferegister.co.uk</p>
            </div>
          </div>
          <div className="bg-[#0a0a10] border border-white/8 rounded-2xl p-8">
            <QuoteForm />
            <div className="mt-4 text-center">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 text-sm font-semibold transition-colors"
              >
                <MessageCircle size={15} />
                Or WhatsApp us directly
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-[#07070e] py-16 px-4 border-y border-white/10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-brand-light font-semibold text-xs uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="text-4xl font-extrabold text-ink">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Are you Gas Safe registered?",
                a: "Yes — BKS Gas & Heating is Gas Safe registered (No. 973556). All boiler and gas work is legally required to be carried out by a qualified Gas Safe engineer. We are fully qualified and registered.",
              },
              {
                q: "What does the £100 call-out cover?",
                a: "Our £100 call-out covers the first hour on site, full diagnostics and a repair where possible within that time. For larger or more complex jobs we provide a fixed quotation before any additional work begins.",
              },
              {
                q: "Which areas do you cover?",
                a: "We cover West London and surrounding areas including West Drayton, Uxbridge, Hayes, Ealing, Hounslow, Richmond, Slough, Windsor, Guildford, Woking, and parts of Buckinghamshire and Hertfordshire.",
              },
              {
                q: "How often should I service my boiler?",
                a: "We recommend an annual boiler service to maintain efficiency, safety and to keep manufacturer warranties valid. Most gas boiler warranties require annual servicing by a Gas Safe registered engineer.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="group bg-[#0a0a10] border border-white/6 rounded-xl">
                <summary className="cursor-pointer font-semibold py-4 px-5 text-ink list-none flex items-center justify-between gap-4 hover:text-brand-light transition-colors">
                  {q}
                  <span className="text-brand-light text-xl group-open:rotate-45 transition-transform flex-shrink-0 leading-none">
                    +
                  </span>
                </summary>
                <p className="pb-4 px-5 text-steel leading-relaxed text-sm">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────── */}
      <section className="bg-[#000000] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-ink">
            Ready to book?
          </h2>
          <p className="text-steel mb-8 max-w-lg mx-auto">
            Call now or send a WhatsApp — we respond fast. Gas Safe registered. West London based.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-brand-light transition-colors shadow-lg shadow-brand/20"
            >
              <Phone size={20} />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-green-700/60 text-green-400 font-semibold px-8 py-4 rounded-xl text-lg hover:bg-green-900/20 transition-colors"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-600 text-white rounded-full w-14 h-14 hidden md:flex items-center justify-center shadow-2xl hover:bg-green-700 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
