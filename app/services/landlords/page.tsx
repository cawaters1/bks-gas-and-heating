import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ShieldCheck, CheckCircle, FileText, MessageCircle, AlertTriangle } from "lucide-react";
import CTABanner from "../../components/CTABanner";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { PHONE, PHONE_HREF, WHATSAPP, GAS_SAFE_NUMBER } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Gas Safety Certificates for Landlords West London | BKS Gas & Heating",
  description: "Gas Safe registered engineer providing CP12 gas safety certificates, annual boiler servicing and landlord compliance checks across West London.",
  alternates: { canonical: "/services/landlords" },
  openGraph: {
    title: "Gas Safety Certificates for Landlords West London | BKS Gas & Heating",
    description: "Gas Safe registered engineer providing CP12 gas safety certificates, annual boiler servicing and landlord compliance checks across West London.",
    url: "https://bksgasandheating.com/services/landlords",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Landlord Gas Safety Certificate",
  provider: {
    "@type": "LocalBusiness",
    name: "BKS Gas & Heating",
    telephone: "07464420695",
  },
  areaServed: "West London",
  description: "CP12 gas safety certificates, annual boiler servicing and landlord compliance checks across West London.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a CP12 gas safety certificate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A CP12 (Gas Safety Record) is the official certificate issued after a gas safety inspection. Landlords are legally required to have one carried out every 12 months by a Gas Safe registered engineer and provide a copy to tenants within 28 days of the check.",
      },
    },
    {
      "@type": "Question",
      name: "How often do landlords need a gas safety check?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every 12 months. It is a legal requirement under the Gas Safety (Installation and Use) Regulations 1998. Failure to comply can result in prosecution and a fine of up to £6,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do you service all boiler brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we service all major boiler brands including Worcester Bosch, Vaillant, Ideal, Baxi, Viessmann and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can you cover multiple properties?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work with landlords managing single lets through to larger portfolios. Contact us to discuss scheduling and pricing for multiple properties.",
      },
    },
  ],
};

const checks = [
  "All gas appliances inspected for safe operation",
  "Flues and ventilation checked for blockages",
  "Gas pipework inspected for leaks and deterioration",
  "Boiler pressure and controls tested",
  "Carbon monoxide detector presence noted",
  "CP12 certificate issued same day",
];

export default function LandlordsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Landlords", href: "/services/landlords" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ink transition-colors">Services</Link>
            <span>/</span>
            <span className="text-ink">Landlords</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck size={16} className="text-gas-safe" />
            <span className="text-gas-safe text-sm font-semibold">Gas Safe Registered · No. {GAS_SAFE_NUMBER}</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
              <FileText size={22} className="text-brand-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink">Landlord Gas Safety</h1>
          </div>
          <p className="text-steel text-lg max-w-2xl">
            CP12 gas safety certificates, annual boiler servicing and full landlord compliance checks across West London. Gas Safe registered — legally qualified to carry out all gas work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={PHONE_HREF} className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-light transition-colors">
              <Phone size={18} />
              Call {PHONE}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-green-600 text-green-400 font-semibold px-6 py-3 rounded-xl hover:bg-green-900/30 transition-colors">
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Legal requirement notice */}
      <section className="bg-bg py-12 px-4 border-b border-border-dark">
        <div className="max-w-7xl mx-auto">
          <div className="bg-amber-900/20 border border-amber-700/40 rounded-2xl p-6 flex gap-4">
            <AlertTriangle size={22} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-ink mb-1">Legal Requirement for Landlords</p>
              <p className="text-steel text-sm">Under the Gas Safety (Installation and Use) Regulations 1998, landlords must have a gas safety check carried out every 12 months by a Gas Safe registered engineer. Failure to comply can result in prosecution and fines of up to £6,000.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface py-16 px-4 border-b border-border-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-3">What&apos;s Included in a Gas Safety Check</h2>
          <p className="text-steel mb-10 max-w-2xl">Every check covers all gas appliances in the property. The CP12 certificate is issued the same day.</p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {checks.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-elevated border border-border-dark rounded-xl p-4">
                <CheckCircle size={16} className="text-gas-safe flex-shrink-0 mt-0.5" />
                <p className="text-steel text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg py-16 px-4 border-b border-border-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">Services for Landlords</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "CP12 Gas Safety Certificate",
                desc: "Annual gas safety inspection of all appliances with same-day certificate issued. Required by law every 12 months.",
              },
              {
                title: "Annual Boiler Service",
                desc: "Full boiler service to maintain efficiency, safety and manufacturer warranty. Keeps your boiler running reliably.",
              },
              {
                title: "Boiler Repair & Replacement",
                desc: "Fast response boiler repairs and full replacement installs for rental properties. All major brands covered.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-surface border border-border-dark rounded-2xl p-6">
                <ShieldCheck size={20} className="text-gas-safe mb-3" />
                <h3 className="font-bold text-ink mb-2">{title}</h3>
                <p className="text-steel text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-16 px-4 border-b border-border-dark">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-10">Common Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} className="bg-elevated border border-border-dark rounded-xl p-5">
                <p className="font-semibold text-ink mb-2">{item.name}</p>
                <p className="text-steel text-sm">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Need a gas safety certificate for your rental property?"
        subtitle="CP12 certificates issued same day. Free quotes on all landlord gas work across West London."
      />
    </>
  );
}
