import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Shield,
  Star,
  Heart,
  Users,
  CheckCircle,
  XCircle,
  MapPin,
} from "lucide-react";
import CTABanner from "../components/CTABanner";
import { PHONE, PHONE_HREF, AREAS } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About NJ Plumbing & Heating | Bedford Plumber",
  description:
    "NJ Plumbing & Heating — Bedford-based plumbing, drainage and heating specialists. Honest service, upfront pricing and quality guaranteed on every job.",
  alternates: { canonical: "/about" },
  openGraph: { url: "https://njplumbingheating.co.uk/about" },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "About", url: "https://njplumbingheating.co.uk/about" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">About NJ Plumbing &amp; Heating</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Bedford&apos;s trusted plumbing, heating and drainage specialists. Built on
            honesty, quality and a genuine commitment to our local community.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
              A Bedford company built on doing things right.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              NJ Plumbing &amp; Heating was founded by Nick, a Bedford-based plumber with one
              simple goal — to provide genuinely reliable plumbing and drainage services to the
              people of Bedfordshire, without the nonsense.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Too many customers have told us about tradespeople who turned up late, overcharged,
              did poor quality work or simply didn&apos;t finish the job. Nick built this company
              to be the opposite of that. Every customer gets honest communication, upfront
              pricing and work they can be proud of.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Bedford is our home. Our reputation is everything to us — and that means treating
              every job, big or small, with the same care and professionalism.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-offwhite rounded-3xl p-10 border border-steel">
              <Image
                src="/logo.jpg"
                alt="NJ Plumbing & Heating"
                width={240}
                height={240}
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">
              Our Values
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield,
                title: "Honesty",
                desc: "We tell you what the job involves, what it will cost and how long it will take — before we start. No surprises.",
              },
              {
                icon: Star,
                title: "Quality",
                desc: "We take pride in our work. Every job is completed to the same high standard, whether it's a dripping tap or a full bathroom refit.",
              },
              {
                icon: Heart,
                title: "Transparency",
                desc: "Upfront, fixed pricing on all work. You know exactly what you&apos;re paying before we pick up a single tool.",
              },
              {
                icon: Users,
                title: "Community",
                desc: "We&apos;re Bedford people serving Bedford people. Our reputation in the local community is something we protect fiercely.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-7 border border-steel">
                <Icon size={28} className="text-brand mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do + what we don't */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            What We Do — and What We Don&apos;t
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <CheckCircle size={22} className="text-brand" />
                We specialise in:
              </h3>
              <ul className="space-y-3">
                {[
                  "Plumbing repairs and installations",
                  "Drain unblocking and CCTV surveys",
                  "High-pressure drain jetting",
                  "Bathroom fitting and refurbishment",
                  "Radiator installation and replacement",
                  "Underfloor heating (wet and electric)",
                  "Power flushing",
                  "Hot water cylinders (vented)",
                  "Heating pipework and TRV fitting",
                  "Emergency call-outs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-sm">
                    <CheckCircle size={16} className="text-brand flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <XCircle size={22} className="text-red-500" />
                We do not carry out:
              </h3>
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                <p className="text-red-800 font-semibold mb-3">
                  We are not Gas Safe registered.
                </p>
                <ul className="space-y-2">
                  {[
                    "Gas boiler installation",
                    "Gas boiler servicing or repair",
                    "Gas safety certificates (CP12)",
                    "Gas pipework",
                    "Any work on gas appliances",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-red-700 text-sm">
                      <XCircle size={14} className="flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-red-600 text-xs mt-4">
                  For gas work, please contact a registered Gas Safe engineer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            Serving Bedford &amp; Bedfordshire
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Based in Bedford, we cover the whole of Bedfordshire including:
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {AREAS.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-white border border-steel rounded-full px-4 py-2 text-sm font-medium text-gray-700"
              >
                <MapPin size={12} className="text-brand" />
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/areas"
            className="inline-flex items-center gap-2 text-brand font-bold text-sm hover:underline"
          >
            View all coverage areas &rarr;
          </Link>
        </div>
      </section>

      {/* Phone CTA */}
      <section className="bg-brand-mid py-12 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-extrabold mb-2">
            Ready to work with us?
          </h2>
          <p className="text-white/70 mb-6">
            Call us today for a free, no-obligation quote.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-xl text-lg hover:bg-offwhite transition-colors"
          >
            <Phone size={20} />
            {PHONE}
          </a>
        </div>
      </section>

      <CTABanner
        title="Get a free quote today"
        subtitle="No call-out fee, upfront pricing, quality guaranteed."
        dark={false}
      />
    </>
  );
}
