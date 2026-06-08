import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ShowerHead,
  CheckCircle,
  Layers,
  Settings,
  Home,
  Wrench,
  Square,
  Droplets,
  MessageCircle,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF, WHATSAPP } from "../../lib/constants";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bathroom Fitting West London | Full Bathroom Installations | BKS Gas & Heating",
  description:
    "Complete bathroom fitting and installation service across West London. Full refits, en-suites, shower rooms — quality finish guaranteed. Free estimates. Call 07464 420695.",
  alternates: { canonical: "/services/bathrooms" },
  openGraph: {
    title: "Bathroom Fitting West London | Full Bathroom Installations | BKS Gas & Heating",
    description: "Complete bathroom fitting and installation service across West London. Full refits, en-suites, shower rooms — quality finish guaranteed. Free estimates.",
    url: "https://bksgasandheating.com/services/bathrooms",
  },
};

const serviceCards = [
  { icon: Home, title: "Full Bathroom Refit", desc: "Complete strip-out and refit from start to finish, including tiling and finishing." },
  { icon: ShowerHead, title: "En-Suite Installation", desc: "New en-suite bathroom installations — full plumbing, layout and finishing." },
  { icon: ShowerHead, title: "Shower Installation", desc: "Electric, mixer and power showers installed, including enclosures and trays." },
  { icon: Layers, title: "Bath Installation", desc: "Freestanding, corner and panel baths installed and plumbed." },
  { icon: Droplets, title: "WC Installation", desc: "Close-coupled, wall-hung and back-to-wall toilets supplied and fitted." },
  { icon: Settings, title: "Basin & Vanity", desc: "Vanity units, pedestal basins and wall-hung sinks installed and connected." },
  { icon: Square, title: "Tiling", desc: "Wall and floor tiling to a high standard — straight lines, perfect grouting." },
  { icon: Wrench, title: "First & Second Fix", desc: "Full first-fix pipework and second-fix installation of all sanitaryware." },
];

const steps = [
  { step: "1", title: "Consultation", desc: "We visit, take measurements, discuss your requirements and give you a detailed fixed quote." },
  { step: "2", title: "Design", desc: "We help plan the layout and advise on sanitaryware, tiles and finishes to suit your budget." },
  { step: "3", title: "First Fix", desc: "All pipework and waste runs installed before walls and floors are finished." },
  { step: "4", title: "Second Fix", desc: "All sanitaryware, shower enclosures, tiling and fittings installed and connected." },
  { step: "5", title: "Snagging", desc: "Final walk-through — we don't leave until you're completely happy." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bathroom Installation",
  provider: {
    "@type": "LocalBusiness",
    name: "BKS Gas & Heating",
    telephone: "07464420695",
  },
  areaServed: "West London",
  description: "Complete bathroom fitting and installation service across West London. Full refits, en-suites, shower rooms — quality finish guaranteed.",
};

const bathroomFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you supply the bathroom suite?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can supply or fit only. We are happy to work with sanitaryware you have purchased yourself, or we can source and supply everything — your choice.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a full bathroom refit take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A typical full bathroom refit takes 5–7 working days depending on the scope of work. En-suites and smaller rooms can be completed in 3–4 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide a fixed quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we always provide a detailed fixed quote before any work begins. No hidden charges.",
      },
    },
  ],
};

export default function BathroomsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bathroomFaqSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Bathrooms", href: "/services/bathrooms" },
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
            <span className="text-ink">Bathrooms</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
              <ShowerHead size={22} className="text-brand-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink">
              Bathroom Fitting &amp; Installation
            </h1>
          </div>
          <p className="text-steel text-lg max-w-2xl mt-2">
            Complete bathroom installations from first fix to final finish. En-suites, full
            refits, shower rooms — quality workmanship with a guaranteed finish across West London.
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


      {/* Service cards */}
      <section className="bg-surface border-y border-border-dark py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">Bathroom Services We Offer</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-elevated border border-border-dark rounded-2xl p-6 hover:border-border-emphasis transition-colors">
                <div className="w-9 h-9 rounded-lg bg-bg flex items-center justify-center mb-4">
                  <Icon size={16} className="text-brand-light" />
                </div>
                <h3 className="font-bold text-ink mb-2">{title}</h3>
                <p className="text-steel text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-10 text-center">Our Bathroom Fitting Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  {step}
                </div>
                <h3 className="font-bold text-ink mb-1 text-sm">{title}</h3>
                <p className="text-steel text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-surface border-y border-border-dark py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-8 text-center">Every Bathroom We Fit Includes</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Full first and second fix plumbing",
              "Quality materials and fittings",
              "Workmanship guarantee on all work",
              "Upfront, fixed pricing — no surprises",
              "Clean, tidy working throughout",
              "Removal of all waste and old materials",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3 bg-elevated border border-border-dark rounded-xl p-4">
                <CheckCircle size={16} className="text-brand-light flex-shrink-0" />
                <p className="text-steel text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-8">Bathroom Fitting FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How long does a full bathroom refit take?", a: "A standard refit takes 5–8 working days. En-suites can often be done in 3–5 days. We'll give you an accurate timeframe in your quote." },
              { q: "Can you supply the bathroom suite and tiles?", a: "We can advise and source sanitaryware and tiles, or you can supply your own — we're happy either way." },
              { q: "Do you do just the plumbing, or the full fit?", a: "Both — we can carry out just the plumbing, or manage the complete installation including tiling, flooring and finishing." },
              { q: "How much does a new bathroom cost?", a: "Costs vary depending on size and specification. Most mid-range full bathroom refits start from around £2,500+VAT for labour. We provide detailed fixed quotes before any work starts." },
              { q: "Is your bathroom work guaranteed?", a: "Yes — all bathroom work comes with a workmanship guarantee. If anything isn't right after we've finished, we'll come back and sort it." },
            ].map(({ q, a }) => (
              <div key={q} className="bg-surface border border-border-dark rounded-xl p-5">
                <p className="font-semibold text-ink mb-1">{q}</p>
                <p className="text-steel text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Planning a new bathroom in West London?"
        subtitle="Free, no-obligation quotes on all bathroom installations. Call us today."
      />
    </>
  );
}
