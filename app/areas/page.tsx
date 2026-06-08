import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import CTABanner from "../components/CTABanner";
import { PHONE, PHONE_HREF, AREAS, GOOGLE_BUSINESS_URL } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Areas We Cover | Gas Safe Engineer West London & Surrey",
  description:
    "BKS Gas & Heating covers West London, West Drayton, Uxbridge, Hayes, Slough, Windsor, Surrey, Buckinghamshire and Hertfordshire. Gas Safe registered. Call 07464 420695.",
  alternates: { canonical: "/areas" },
  openGraph: { url: "https://bksgasandheating.com/areas" },
};

const featuredAreas = [
  {
    name: "West Drayton",
    text: "West Drayton is our home base. We respond quickly to boiler breakdowns, plumbing repairs, heating faults and bathroom jobs across UB7 and surrounding postcodes.",
  },
  {
    name: "Uxbridge",
    text: "We cover Uxbridge and surrounding areas for boiler installation, servicing, gas safety certificates and plumbing repairs. Same-day appointments often available.",
  },
  {
    name: "Hayes",
    text: "Hayes and Southall are well within our coverage area. Call us for boiler repairs, annual services, heating installs and bathroom renovations.",
  },
  {
    name: "Ealing",
    text: "Ealing, Hanwell, and Northolt — we cover all of the borough for gas and heating work. Gas Safe registered, upfront pricing.",
  },
  {
    name: "Hounslow",
    text: "Hounslow, Feltham, Hanworth and Isleworth are all covered. We carry out boiler servicing, plumbing repairs and bathroom installations across the borough.",
  },
  {
    name: "Slough & Windsor",
    text: "We work across Slough, Windsor and Maidenhead for all gas and heating work. Free estimates on boiler installations and bathroom fitting.",
  },
  {
    name: "Surrey",
    text: "We cover Guildford, Woking, Weybridge, Esher, Cobham, Kingston upon Thames and Richmond. Call for gas and heating work across Surrey.",
  },
  {
    name: "Buckinghamshire & Hertfordshire",
    text: "We cover Amersham, Beaconsfield, High Wycombe, Watford, Rickmansworth and surrounding towns. Full range of boiler, heating, plumbing and bathroom services.",
  },
];

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Areas We Cover", href: "/areas" },
        ]}
      />

      {/* Hero */}
      <section className="bg-surface border-b border-border-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-steel text-sm mb-4">
            <Link href="/" className="hover:text-ink transition-colors">Home</Link>
            <span>/</span>
            <span className="text-ink">Areas</span>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand/20 border border-brand/30 flex items-center justify-center">
              <MapPin size={22} className="text-brand-light" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-ink">Areas We Cover</h1>
          </div>
          <p className="text-steel text-lg max-w-2xl mt-4">
            Based in West Drayton, we cover all of West London, Surrey, Buckinghamshire and Hertfordshire. Not sure if we reach you? Just call.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-xl mt-8 hover:bg-brand-light transition-colors"
          >
            <Phone size={18} />
            {PHONE}
          </a>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-10 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-border-dark">
            <iframe
              src="https://maps.google.com/maps?q=West+Drayton,+London,+UK&output=embed"
              width="100%"
              height={380}
              loading="lazy"
              allowFullScreen
              style={{ border: 0, display: "block" }}
              title="BKS Gas & Heating — West Drayton, West London"
            />
          </div>
          <div className="text-center mt-3">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light text-sm font-semibold hover:text-ink transition-colors"
            >
              View on Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* All areas pills */}
      <section className="py-14 bg-surface border-y border-border-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ink">All Areas Covered</h2>
            <p className="text-steel mt-2">West London, Surrey, Buckinghamshire, Hertfordshire and beyond.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {AREAS.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-elevated border border-border-dark rounded-full px-4 py-2 text-sm text-steel hover:border-brand-light hover:text-ink transition-colors"
              >
                <MapPin size={12} className="text-brand-light" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured area sections */}
      <section className="py-14 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">Gas &amp; Heating Services by Area</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {featuredAreas.map(({ name, text }) => (
              <div key={name} className="bg-surface border border-border-dark rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-elevated flex items-center justify-center">
                    <MapPin size={16} className="text-brand-light" />
                  </div>
                  <h3 className="font-bold text-ink">Gas Engineer in {name}</h3>
                </div>
                <p className="text-steel text-sm leading-relaxed mb-4">{text}</p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-brand-light font-semibold text-sm hover:text-ink transition-colors"
                >
                  <Phone size={13} />
                  Call for {name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Not sure if we cover your area?"
        subtitle="Just give us a call — if we can get to you, we will."
      />
    </>
  );
}
