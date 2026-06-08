import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Star, Wrench, Phone, MessageCircle } from "lucide-react";
import CTABanner from "../components/CTABanner";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../lib/constants";

export const metadata: Metadata = {
  title: "About BKS Gas & Heating | Gas Safe Engineer West London",
  description:
    "BKS Gas & Heating — Gas Safe registered engineer (No. 973556) with 10+ years experience in West London. Boilers, heating, plumbing and bathrooms.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About BKS Gas & Heating | Gas Safe Engineer West London",
    description: "BKS Gas & Heating — Gas Safe registered engineer (No. 973556) with 10+ years experience in West London. Boilers, heating, plumbing and bathrooms.",
    url: "https://bksgasandheating.com/about",
  },
};

const values = [
  { title: "Gas Safe Every Time", body: "All gas work is carried out by a fully registered Gas Safe engineer. No. 973556 — verifiable on the national register." },
  { title: "Upfront Pricing", body: "You get a clear quote before any work starts. No nasty surprises on the final invoice." },
  { title: "Quality Guaranteed", body: "We take pride in the finish. From boiler installs to bathroom tiling, the detail matters." },
  { title: "Reliable & Punctual", body: "We show up when we say we will. No waiting around for engineers who don't turn up." },
];

const services = [
  "Boiler installation & replacement",
  "Boiler servicing & repairs",
  "Unvented cylinder installation (G3 qualified)",
  "Gas safety certificates (CP12)",
  "Central heating installation & repairs",
  "General plumbing repairs",
  "Bathroom design & installation",
  "Emergency call-outs",
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink">About</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={18} className="text-gas-safe" />
            <span className="text-gas-safe text-sm font-semibold">Gas Safe Registered · No. {GAS_SAFE_NUMBER}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-ink mb-4">About BKS Gas &amp; Heating</h1>
          <p className="text-steel text-lg max-w-2xl leading-relaxed">
            Run by Bailey Kessler-Sutton — a Gas Safe registered engineer with over 10 years of hands-on experience across West London.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-5">The Business</h2>
              <div className="space-y-4 text-steel leading-relaxed">
                <p>
                  BKS Gas &amp; Heating was founded in 2025 by Bailey Kessler-Sutton, based in West Drayton. The business was built on a simple idea: every customer deserves a gas engineer who turns up, does the job properly, and charges a fair price.
                </p>
                <p>
                  With over 10 years of industry experience, Bailey has worked across residential and commercial properties throughout West London, Surrey, Buckinghamshire and Hertfordshire — building a reputation for reliable workmanship and honest communication.
                </p>
                <p>
                  From boiler installs and annual services to bathroom renovations and general plumbing, every job is treated with the same care and attention to detail. No cutting corners, no hidden costs.
                </p>
              </div>

              <div className="mt-8 p-5 bg-surface border border-border-dark rounded-2xl">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck size={20} className="text-gas-safe" />
                  <span className="font-bold text-ink">Gas Safe Registered</span>
                </div>
                <p className="text-steel text-sm leading-relaxed">
                  Registration No. <strong className="text-ink">{GAS_SAFE_NUMBER}</strong>. Gas Safe registration is a legal requirement for anyone carrying out gas work in the UK. You can verify Bailey&apos;s registration at{" "}
                  <a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="text-brand-light underline hover:text-ink">
                    gassaferegister.co.uk
                  </a>.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-border-dark" style={{ aspectRatio: "4/3" }}>
                <Image
                  src="/images/van-side.jpg"
                  alt="BKS Gas & Heating van — West London"
                  fill
                  className="object-cover object-[center_60%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { val: "10+", label: "Years Experience" },
                  { val: "Gas Safe", label: `No. ${GAS_SAFE_NUMBER}` },
                  { val: "Free", label: "Estimates" },
                ].map((s) => (
                  <div key={s.label} className="bg-surface border border-border-dark rounded-xl p-4">
                    <div className="text-2xl font-extrabold text-ink">{s.val}</div>
                    <div className="text-xs text-steel mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 bg-surface border-y border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">How We Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-elevated border border-border-dark rounded-2xl p-6">
                <Star size={20} className="text-gold mb-3" />
                <h3 className="font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-ink mb-6">What We Do</h2>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-steel">
                    <CheckCircle size={16} className="text-brand-light flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-3">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-light transition-colors text-sm"
                >
                  <Wrench size={15} />
                  View Services
                </Link>
                <Link
                  href="/areas"
                  className="inline-flex items-center gap-2 border border-border-emphasis text-steel px-5 py-2.5 rounded-xl font-semibold hover:text-ink transition-colors text-sm"
                >
                  Areas We Cover
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { src: "/images/boiler-install-1.jpg", alt: "Boiler installation by BKS Gas & Heating" },
                { src: "/images/bathroom-1.jpg", alt: "Bathroom installation West London" },
                { src: "/images/cylinder-1.jpg", alt: "Unvented cylinder installation" },
                { src: "/images/van-rear.jpg", alt: "BKS Gas & Heating van" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-xl overflow-hidden border border-border-dark">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact block */}
      <section className="py-14 bg-surface border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-ink mb-4">Get in Touch</h2>
          <p className="text-steel mb-8">Free estimates on all work. Call, WhatsApp, or use the contact form.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-light transition-colors">
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-400 px-6 py-3 rounded-xl font-semibold hover:bg-green-900/30 transition-colors">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to book your gas engineer?"
        subtitle="£100 call-out — first hour, diagnostics and repair included. Free estimates on all installations."
      />
    </>
  );
}
