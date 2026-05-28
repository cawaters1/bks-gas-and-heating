import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  CheckCircle,
  ShieldCheck,
  Flame,
  Wrench,
  MessageCircle,
  Star,
  AlertTriangle,
} from "lucide-react";
import QuoteForm from "../../components/QuoteForm";
import CTABanner from "../../components/CTABanner";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import ImageCarousel from "../../components/ImageCarousel";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Boiler Installation & Servicing West London | BKS Gas & Heating",
  description:
    "Gas Safe registered boiler installation, servicing and repairs across West London. Worcester Bosch, Vaillant, Ideal and all major brands. Free estimates. Call 07464 420695.",
  alternates: { canonical: "/services/boilers" },
  openGraph: { url: "https://bksgasheating.co.uk/services/boilers" },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Boiler Installation & Servicing",
  provider: {
    "@type": "LocalBusiness",
    name: "BKS Gas & Heating",
    telephone: "07464420695",
  },
  areaServed: "West London",
  description:
    "Gas Safe registered boiler installation, servicing, and repairs for all major brands including Worcester Bosch, Vaillant, and Ideal.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a boiler installation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard boiler replacement takes one day. A new installation with pipework changes may take two days. We'll give you a clear timeline before we start.",
      },
    },
    {
      "@type": "Question",
      name: "What boiler brands do you install?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We install and service all major brands including Worcester Bosch, Vaillant, Ideal, Baxi, and Viessmann. We'll recommend the best boiler for your property and budget.",
      },
    },
    {
      "@type": "Question",
      name: "How often should a boiler be serviced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 12 months. Annual servicing keeps your boiler running efficiently, maintains your warranty, and — critically — keeps your home safe by checking for carbon monoxide and gas leaks.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to be Gas Safe registered to work on a boiler?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It is illegal for anyone who is not Gas Safe registered to carry out gas work in the UK. BKS Gas & Heating is Gas Safe registered (No. 973556). Always check the register before booking any gas engineer.",
      },
    },
    {
      "@type": "Question",
      name: "What does a boiler service include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We check the boiler casing, controls, and heat exchanger; test flue gases and combustion; inspect the burner and gas valve; check pressure and safety devices; and provide a service report.",
      },
    },
  ],
};

const installIncludes = [
  "Full survey and boiler recommendation",
  "Removal and disposal of old boiler",
  "Installation of new boiler with all fittings",
  "Flue installation or rerouting",
  "New programmer and thermostat",
  "Magnetic system filter fitted",
  "Power flush if required",
  "Gas tightness test and commissioning",
  "Building Regulations notification (Part P)",
  "Manufacturer warranty registration",
];

const serviceIncludes = [
  "Visual inspection of boiler and flue",
  "Gas rate and pressure checks",
  "Combustion analysis",
  "Burner and heat exchanger inspection",
  "Safety device and controls check",
  "Carbon monoxide test",
  "System pressure check",
  "Written service report",
];

const brands = ["Worcester Bosch", "Vaillant", "Ideal", "Baxi", "Viessmann", "Glow-worm", "Potterton", "Ferroli"];

export default function BoilersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Boilers", href: "/services/boilers" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink">Boilers</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={18} className="text-gas-safe" />
              <span className="text-gas-safe text-sm font-semibold">Gas Safe Registered · No. {GAS_SAFE_NUMBER}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink leading-tight mb-4">
              Boiler Installation<br />& Servicing
            </h1>
            <p className="text-steel text-lg leading-relaxed mb-8">
              Gas Safe registered boiler installation, annual servicing and repairs across West London. We work with all major brands and provide free estimates on new installs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-light transition-colors"
              >
                <Phone size={18} />
                Call {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-400 px-6 py-3 rounded-xl font-semibold hover:bg-green-900/30 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Safe Warning */}
      <section className="bg-amber-950/30 border-b border-amber-800/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle size={18} className="text-amber-400 flex-shrink-0" />
            <p className="text-amber-300 text-sm">
              <strong>Always use a Gas Safe registered engineer.</strong> It is illegal for non-registered engineers to carry out gas work in the UK. Check the register at{" "}
              <a href="https://www.gassaferegister.co.uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-200">
                gassaferegister.co.uk
              </a>{" "}
              — or verify BKS Gas & Heating directly: <strong>No. {GAS_SAFE_NUMBER}</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Carousel */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageCarousel
            images={[
              { src: "/images/boiler-install-1.jpg", alt: "Vaillant boiler installation by BKS Gas & Heating, West London" },
              { src: "/images/boiler-install-2.jpg", alt: "Boiler pipework and magnetic filter — BKS Gas & Heating" },
            ]}
          />
        </div>
      </section>

      {/* Services Split */}
      <section className="py-14 bg-surface border-y border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Installation */}
            <div className="bg-elevated rounded-2xl border border-border-dark p-8">
              <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center mb-5">
                <Flame size={24} className="text-brand-light" />
              </div>
              <h2 className="text-2xl font-bold text-ink mb-2">Boiler Installation</h2>
              <p className="text-steel text-sm leading-relaxed mb-6">
                Whether you&apos;re replacing an old boiler or installing central heating for the first time, we handle the full job — from survey to sign-off. Free estimates available.
              </p>
              <ul className="space-y-2">
                {installIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-steel">
                    <CheckCircle size={15} className="text-brand-light flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-light transition-colors text-sm mt-6"
              >
                <Phone size={15} />
                Get a Free Estimate
              </a>
            </div>

            {/* Servicing */}
            <div className="bg-elevated rounded-2xl border border-border-dark p-8">
              <div className="w-12 h-12 rounded-xl bg-gas-safe/10 border border-gas-safe/20 flex items-center justify-center mb-5">
                <Wrench size={24} className="text-gas-safe" />
              </div>
              <h2 className="text-2xl font-bold text-ink mb-2">Boiler Servicing</h2>
              <p className="text-steel text-sm leading-relaxed mb-6">
                Annual boiler service to keep your heating running safely and efficiently. Essential for maintaining manufacturer warranties and satisfying landlord obligations.
              </p>
              <ul className="space-y-2">
                {serviceIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-steel">
                    <CheckCircle size={15} className="text-gas-safe flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-elevated border border-border-emphasis text-ink px-5 py-2.5 rounded-xl font-semibold hover:bg-surface transition-colors text-sm mt-6"
              >
                <Phone size={15} />
                Book a Service
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-bold text-ink mb-2">Brands We Work With</h2>
          <p className="text-steel text-sm mb-8">We install and service all major boiler brands</p>
          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span key={brand} className="px-4 py-2 bg-surface border border-border-dark rounded-lg text-steel text-sm font-medium">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Cylinder Section */}
      <section className="py-14 bg-surface border-y border-border-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={18} className="text-gas-safe" />
              <span className="text-gas-safe text-sm font-semibold">G3 Qualified</span>
            </div>
            <h2 className="text-3xl font-bold text-ink mb-4">Unvented Hot Water Cylinders</h2>
            <p className="text-steel leading-relaxed mb-6">
              Bailey is G3 qualified for the installation and maintenance of unvented hot water cylinders — a specialist qualification required by law. Unvented cylinders deliver mains-pressure hot water to every tap and shower in your home.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Mains-pressure hot water throughout the home",
                "No cold water tank required in the loft",
                "Compatible with solar thermal and heat pumps",
                "G3 Building Regulations compliance certificate provided",
                "Annual unvented service available",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2 text-sm text-steel">
                  <CheckCircle size={15} className="text-gas-safe flex-shrink-0 mt-0.5" />
                  {point}
                </li>
              ))}
            </ul>
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-brand-light transition-colors text-sm">
              <Phone size={15} />
              Ask About Cylinders
            </a>
          </div>
        </div>
      </section>

      {/* Why BKS */}
      <section className="py-14 bg-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">Why Choose BKS?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={22} className="text-gas-safe" />, title: "Gas Safe Registered", body: "No. 973556. Fully qualified and legally registered for all gas work." },
              { icon: <Star size={22} className="text-gold" />, title: "10+ Years Experience", body: "Bailey has over a decade of hands-on experience across residential and commercial properties." },
              { icon: <Flame size={22} className="text-brand-light" />, title: "All Major Brands", body: "Worcester Bosch, Vaillant, Ideal and more — installation and servicing." },
              { icon: <Phone size={22} className="text-ink" />, title: "Free Estimates", body: "No-obligation quotes on all new boiler installations. Call or WhatsApp today." },
            ].map((card) => (
              <div key={card.title} className="bg-surface border border-border-dark rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-elevated flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-bold text-ink mb-2">{card.title}</h3>
                <p className="text-steel text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 bg-surface border-t border-border-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">Common Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq) => (
              <div key={faq.name} className="bg-elevated border border-border-dark rounded-xl p-6">
                <h3 className="font-bold text-ink mb-2">{faq.name}</h3>
                <p className="text-steel text-sm leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-14 bg-bg border-t border-border-dark">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink text-center mb-2">Get a Free Estimate</h2>
          <p className="text-steel text-center mb-8">Tell us about your boiler job — we&apos;ll come back to you quickly.</p>
          <QuoteForm defaultService="Boiler installation / replacement" />
        </div>
      </section>

      <CTABanner
        title="Need a Gas Safe boiler engineer in West London?"
        subtitle="£100 call-out — first hour and diagnostics included. Free estimates on all installations."
      />
    </>
  );
}
