import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  AlertTriangle,
  Clock,
  CheckCircle,
  MapPin,
  Star,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP, AREAS, GOOGLE_BUSINESS_URL, GAS_SAFE_NUMBER } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Emergency Gas & Heating Engineer West London | BKS Gas & Heating",
  description:
    "Emergency gas and heating engineer in West London. Boiler breakdowns, gas leaks, no heating — available 24/7. Gas Safe registered No. 973556.",
  alternates: { canonical: "/emergency" },
  openGraph: {
    title: "Emergency Gas & Heating Engineer West London | BKS Gas & Heating",
    description: "Emergency gas and heating engineer in West London. Boiler breakdowns, gas leaks, no heating — available 24/7. Gas Safe registered No. 973556.",
    url: "https://bksgasandheating.com/emergency",
  },
};

const emergencyReviews = [
  {
    name: "James T.",
    location: "West Drayton",
    date: "2 weeks ago",
    text: "Boiler broke down on a Sunday evening. Bailey was here within the hour, diagnosed the fault quickly and got us back up and running. Brilliant service.",
  },
  {
    name: "Sarah M.",
    location: "Uxbridge",
    date: "1 month ago",
    text: "Smelled gas in the kitchen — called BKS straight away. Arrived fast, identified the issue with the gas valve, sorted it safely and explained everything clearly. Very reassuring.",
  },
  {
    name: "David K.",
    location: "Slough",
    date: "3 weeks ago",
    text: "No heating in January. Called at 8am, Bailey came out same morning, had the part on the van and fixed it by midday. Can't ask for more than that.",
  },
];

const emergencyServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Emergency Gas & Heating Engineer",
  provider: {
    "@type": "LocalBusiness",
    name: "BKS Gas & Heating",
    telephone: "07464420695",
  },
  areaServed: "West London",
  description: "Emergency gas and heating engineer in West London available 24 hours a day, 7 days a week. Boiler breakdowns, gas leaks and heating failures.",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function EmergencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencyServiceSchema) }} />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Emergency", href: "/emergency" },
        ]}
      />

      {/* HERO — urgent, dark */}
      <section className="bg-bg py-24 px-4 relative overflow-hidden border-b border-border-dark">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 to-bg" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-900/30 border border-red-700/40 rounded-full px-4 py-2 text-sm font-semibold text-red-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            Emergency gas &amp; heating engineer — West London
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-ink">
            Emergency Gas<br />
            <span className="text-red-400">&amp; Heating Engineer</span>
          </h1>
          <p className="text-steel text-xl mb-10 max-w-xl mx-auto">
            Boiler breakdown, gas leak, no heating — fast response 7 days a week.
            Gas Safe registered. Don&apos;t wait. Call now.
          </p>

          {/* Big phone CTA */}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-3 bg-white text-gray-950 font-extrabold text-3xl sm:text-4xl px-10 py-5 rounded-2xl hover:bg-red-50 transition-colors shadow-2xl mb-4 w-full sm:w-auto"
          >
            <Phone size={36} />
            {PHONE}
          </a>
          <p className="text-steel text-sm mb-8">Call now for immediate response</p>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            {[
              { icon: Clock, text: "Available 7 days" },
              { icon: ShieldCheck, text: `Gas Safe No. ${GAS_SAFE_NUMBER}` },
              { icon: CheckCircle, text: "£100 call-out — first hour included" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 text-steel">
                <Icon size={16} className="text-red-400" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gas emergency safety notice */}
      <section className="bg-amber-950/40 border-b border-amber-800/40 py-5 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-300 font-semibold text-sm mb-1">If you smell gas:</p>
              <p className="text-amber-200/80 text-sm">
                Open windows and doors, do not use any electrical switches, extinguish flames, and call the <strong>National Gas Emergency Service on 0800 111 999</strong> immediately. Then call us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What counts as an emergency */}
      <section className="bg-surface border-b border-border-dark py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-ink">
              What Counts as an Emergency?
            </h2>
            <p className="text-steel mt-3 max-w-xl mx-auto">
              If any of these apply, call us immediately — don&apos;t wait.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "Complete boiler breakdown — no heating or hot water",
              "Gas leak or smell of gas in the property",
              "Boiler making unusual banging or popping noises",
              "Carbon monoxide alarm activation",
              "Pilot light repeatedly going out",
              "No hot water from boiler",
              "Burst pipe or major water leak",
              "Radiators not heating despite boiler running",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-elevated border border-border-dark rounded-xl p-4">
                <AlertTriangle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-steel text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do while you wait */}
      <section className="bg-bg py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-ink mb-6">
            What to Do While You Wait
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "For a gas emergency — ventilate and call 0800 111 999",
                desc: "Open all windows and doors. Turn off the gas at the meter if safe to do so. Do not operate any electrical switches. Call the National Gas Emergency Service immediately.",
              },
              {
                step: "2",
                title: "For a boiler breakdown — check the basics",
                desc: "Check the boiler pressure gauge (should read 1–1.5 bar), check the thermostat is set correctly, and check if a circuit breaker has tripped. Then call us.",
              },
              {
                step: "3",
                title: "For a burst pipe — turn off the water",
                desc: "Locate your stopcock (usually under the kitchen sink or near the water meter) and turn it clockwise to shut off supply. Collect water with towels and buckets.",
              },
              {
                step: "4",
                title: "Stay safe and call us",
                desc: `We're on our way. Call ${PHONE} or WhatsApp if you need to update us.`,
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-ink mb-1">{title}</h3>
                  <p className="text-steel text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response time */}
      <section className="bg-surface border-y border-border-dark py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Clock size={40} className="text-brand-light mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-ink mb-4">Fast Response</h2>
          <p className="text-steel text-lg max-w-2xl mx-auto mb-8">
            We aim to reach most West London postcodes within the hour. Available 24 hours a day, 7 days a week — including evenings, weekends and bank holidays.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { val: "~1hr", label: "Target response time" },
              { val: "24/7", label: "Always available" },
              { val: "£100", label: "Call-out — first hour included" },
            ].map((stat) => (
              <div key={stat.label} className="bg-elevated border border-border-dark rounded-2xl p-6">
                <p className="text-3xl font-extrabold text-brand-light mb-2">{stat.val}</p>
                <p className="text-steel text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-bg py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-ink">Emergency Coverage Area</h2>
            <p className="text-steel mt-2">West London, Surrey, Buckinghamshire and Hertfordshire.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-surface border border-border-dark rounded-full px-3.5 py-1.5 text-sm text-steel"
              >
                <MapPin size={11} className="text-brand-light" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-surface border-t border-border-dark py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-ink text-center mb-10">
            Emergency Service Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            {emergencyReviews.map((review) => (
              <div key={review.name} className="bg-elevated border border-border-dark rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-ink text-sm">{review.name}</p>
                    <p className="text-steel text-xs">{review.location} · {review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={13} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-steel text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-light text-sm font-semibold hover:text-ink transition-colors"
            >
              View all reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-bg border-t border-border-dark py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <AlertTriangle size={36} className="text-red-400 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold text-ink mb-4">
            Gas or heating emergency?
          </h2>
          <p className="text-steel mb-8">
            Don&apos;t wait — call now for immediate response. Available 7 days a week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-white text-gray-950 font-extrabold text-2xl px-8 py-5 rounded-2xl hover:bg-red-50 transition-colors shadow-xl"
            >
              <Phone size={28} />
              {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-400 font-semibold px-6 py-5 rounded-2xl hover:bg-green-900/20 transition-colors"
            >
              <MessageCircle size={22} />
              WhatsApp Us
            </a>
          </div>
          <div className="mt-6">
            <Link href="/contact" className="text-steel hover:text-ink text-sm transition-colors">
              Or fill in our contact form &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
