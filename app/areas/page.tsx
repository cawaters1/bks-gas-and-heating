import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import CTABanner from "../components/CTABanner";
import { PHONE, PHONE_HREF, AREAS, GOOGLE_BUSINESS_URL } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Areas We Cover | Bedford, Milton Keynes & Northampton Plumber",
  description:
    "NJ Plumbing & Heating covers Bedford, Kempston, Ampthill, Milton Keynes, Northampton and all surrounding towns. Call 07927 910665.",
  alternates: { canonical: "/areas" },
  openGraph: { url: "https://njplumbingheating.co.uk/areas" },
};

const featuredAreas = [
  {
    name: "Bedford",
    slug: "bedford",
    text: "Bedford is our home base. We cover all areas of Bedford town — from the town centre to residential areas like Putnoe, Brickhill, Queens Park and Goldington. Emergency call-outs available same day.",
  },
  {
    name: "Kempston",
    slug: "kempston",
    text: "We cover all of Kempston including residential and commercial properties. Just a short drive from Bedford, we're well placed to respond quickly to any plumbing or drainage issue in Kempston.",
  },
  {
    name: "Ampthill",
    slug: "ampthill",
    text: "Ampthill and the surrounding villages are well within our coverage area. We regularly work in Ampthill on everything from blocked drains to full bathroom installations.",
  },
  {
    name: "Flitwick",
    slug: "flitwick",
    text: "Flitwick customers can expect the same fast, professional service we provide across Bedfordshire. Heating, plumbing, drainage and bathrooms — all covered.",
  },
  {
    name: "Sandy",
    slug: "sandy",
    text: "We serve Sandy and the surrounding area, including Biggleswade Road and Potton Road neighbourhoods. Same-day appointments and emergency cover available.",
  },
  {
    name: "Biggleswade",
    slug: "biggleswade",
    text: "Biggleswade is fully within our service area. Whether you need a drain unblocked, a radiator fitted or a full bathroom refit, our team is ready to help.",
  },
  {
    name: "Milton Keynes",
    slug: "milton-keynes",
    text: "We cover Milton Keynes and its surrounding areas for plumbing repairs, drain unblocking, bathroom installations and heating pipework. Same-day cover available.",
  },
  {
    name: "Northampton",
    slug: "northampton",
    text: "Northampton customers can expect the same fast, professional service. From leaking pipes to full bathroom refits — we cover Northampton and nearby towns.",
  },
];

export default function AreasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Areas We Cover", url: "https://njplumbingheating.co.uk/areas" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Areas</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <MapPin size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-extrabold">Areas We Cover</h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mt-4">
            Based in Bedford, we cover the whole of Bedfordshire, Milton Keynes, Northampton
            and surrounding towns. Not sure if we reach you? Just call — if we can get to you, we will.
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

      {/* Map */}
      <section className="bg-offwhite py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-steel shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=Bedford,+Bedfordshire,+UK&output=embed"
              width="100%"
              height={400}
              loading="lazy"
              allowFullScreen
              style={{ border: 0, display: "block" }}
              title="Areas covered by NJ Plumbing & Heating"
            />
          </div>
          <div className="text-center mt-4">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand text-sm font-semibold hover:underline"
            >
              View on Google Maps &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* All areas pills */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">All Areas Covered</h2>
            <p className="text-gray-500 mt-3">
              Bedfordshire, Milton Keynes, Northampton and all surrounding villages.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-offwhite border border-steel rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand hover:text-brand transition-colors"
              >
                <MapPin size={12} className="text-brand" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured area sections */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Local Plumbing Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              We serve Bedfordshire, Milton Keynes, Northampton and surrounding areas. Here&apos;s
              a little more detail on our key service areas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredAreas.map(({ name, text }) => (
              <div key={name} className="bg-white rounded-2xl p-7 border border-steel">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                    <MapPin size={18} className="text-brand" />
                  </div>
                  <h3 className="text-xl font-extrabold text-gray-900">
                    Plumber in {name}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{text}</p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:underline"
                >
                  <Phone size={14} />
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
