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
  Hammer,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF } from "../../lib/constants";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Bathroom Fitting Bedford | Full Bathroom Installations",
  description:
    "Complete bathroom fitting and installation service in Bedford. From en-suites to full bathroom refits. Quality finish guaranteed. Call 07927 910665.",
  alternates: { canonical: "/services/bathrooms" },
  openGraph: { url: "https://njplumbingheating.co.uk/services/bathrooms" },
};

const serviceCards = [
  {
    icon: Home,
    title: "Full Bathroom Refit",
    desc: "Complete bathroom strip-out and refit from start to finish, including tiling and finishing.",
  },
  {
    icon: ShowerHead,
    title: "En-Suite Installation",
    desc: "New en-suite bathroom installations — full plumbing, layout and finishing.",
  },
  {
    icon: ShowerHead,
    title: "Shower Installation",
    desc: "Electric, mixer and power showers installed, including enclosures and trays.",
  },
  {
    icon: Layers,
    title: "Bath Installation",
    desc: "Freestanding, corner and panel baths installed and plumbed.",
  },
  {
    icon: Droplets,
    title: "WC Installation",
    desc: "Close-coupled, wall-hung and back-to-wall toilets supplied and fitted.",
  },
  {
    icon: Settings,
    title: "Basin & Sink",
    desc: "Vanity units, pedestal basins and wall-hung sinks installed and connected.",
  },
  {
    icon: Square,
    title: "Tiling",
    desc: "Wall and floor tiling to a high standard — straight lines, perfect grouting.",
  },
  {
    icon: Wrench,
    title: "First & Second Fix",
    desc: "Full first-fix pipework and second-fix installation of all sanitaryware.",
  },
];

const process = [
  {
    step: "1",
    title: "Consultation",
    desc: "We visit, take measurements, discuss your requirements and provide a detailed, fixed quote.",
  },
  {
    step: "2",
    title: "Design",
    desc: "We help plan the layout and advise on sanitaryware, tiles and finishes to suit your budget.",
  },
  {
    step: "3",
    title: "First Fix",
    desc: "All pipework and waste runs are installed before walls and floors are finished.",
  },
  {
    step: "4",
    title: "Second Fix",
    desc: "All sanitaryware, shower enclosures, tiling and fittings are installed and connected.",
  },
  {
    step: "5",
    title: "Snagging",
    desc: "Final walk-through to make sure everything is perfect. We don't leave until you're happy.",
  },
];

export default function BathroomsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Services", url: "https://njplumbingheating.co.uk/services" }, { name: "Bathroom Fitting Bedford", url: "https://njplumbingheating.co.uk/services/bathrooms" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Bathrooms</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <ShowerHead size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-extrabold">
              Bathroom Fitting &amp; Installation in Bedford
            </h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mt-4">
            Complete bathroom installations from first fix to final finish. En-suites, full
            refits, shower rooms — quality workmanship with a guaranteed finish across Bedford
            and Bedfordshire.
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
            <h2 className="text-3xl font-extrabold text-gray-900">
              Bathroom Services We Offer
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              From a new shower to a full bathroom refit — every job is completed to the
              highest standard.
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

      {/* Process */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
            Our Bathroom Fitting Process
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute top-7 left-0 right-0 h-0.5 bg-steel" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {process.map(({ step, title, desc }) => (
                <div key={step} className="text-center relative">
                  <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center text-white font-extrabold text-lg mx-auto mb-4 relative z-10">
                    {step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Callout boxes */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Quality You Can See
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-brand text-white rounded-2xl p-8">
              <Hammer size={28} className="text-blue-300 mb-4" />
              <h3 className="text-xl font-extrabold mb-3">Before: Old, Tired Bathroom</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Leaking taps, outdated tiles, a shower that doesn&apos;t drain properly and
                fixtures that have seen better days. We hear this all the time.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-steel">
              <CheckCircle size={28} className="text-brand mb-4" />
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                After: Beautiful, Functional Space
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Clean lines, quality finishes, everything working perfectly. A bathroom you&apos;re
                proud to show off — installed on time and within budget.
              </p>
            </div>
          </div>
          <div className="mt-8 bg-white rounded-2xl p-6 border border-steel">
            <h3 className="font-bold text-gray-900 mb-4">Every bathroom we fit includes:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Full first and second fix plumbing",
                "Quality materials and fittings",
                "Workmanship guarantee on all work",
                "Upfront, fixed pricing — no surprises",
                "Clean, tidy working throughout",
                "Removal of all waste and old materials",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-brand flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Bathroom Fitting FAQ</h2>
          <div className="divide-y divide-steel">
            {[
              {
                q: "How long does a full bathroom refit take in Bedford?",
                a: "A standard bathroom refit typically takes 5–8 working days depending on the size and complexity. En-suites can often be completed in 3–5 days. We'll give you an accurate timeframe in your quote.",
              },
              {
                q: "Can you supply the bathroom suite and tiles?",
                a: "We can advise and source sanitaryware and tiles, or you can supply your own — we're happy to work either way.",
              },
              {
                q: "Do you do just the plumbing, or the full fit?",
                a: "We can carry out just the plumbing elements, or manage the complete installation including tiling, flooring and all finishing touches.",
              },
              {
                q: "How much does a new bathroom cost in Bedford?",
                a: "Costs vary depending on the size, specification and what you're supplying. We provide detailed, fixed quotes before any work starts. Most mid-range full bathroom refits start from around £2,500+VAT for labour.",
              },
              {
                q: "Is your bathroom work guaranteed?",
                a: "Yes — all our bathroom work is covered by a workmanship guarantee. If anything isn't right after we've finished, we'll come back and sort it.",
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
        title="Planning a new bathroom in Bedford?"
        subtitle="Free, no-obligation quotes on all bathroom installations. Call us today."
      />
    </>
  );
}
