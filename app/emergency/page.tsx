import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  AlertTriangle,
  Clock,
  CheckCircle,
  MapPin,
  Star,
  Shield,
} from "lucide-react";
import { PHONE, PHONE_HREF, AREAS, GOOGLE_BUSINESS_URL } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Emergency Plumber Bedford | 24/7 Burst Pipes & Flooding",
  description:
    "Emergency plumber in Bedford available 24/7. Burst pipes, flooding, major leaks — fast response across Bedford and Bedfordshire. Call 07927 910665.",
  alternates: { canonical: "/emergency" },
  openGraph: { url: "https://njplumbingheating.co.uk/emergency" },
};

const emergencyReviews = [
  {
    name: "Mark H.",
    location: "Bedford",
    date: "2 weeks ago",
    text: "Burst pipe at 10pm — they were here in under 45 minutes. Professional, calm and got it sorted fast. Absolute lifesavers.",
  },
  {
    name: "Emma R.",
    location: "Biggleswade",
    date: "3 months ago",
    text: "Christmas Eve drainage emergency. Came out with no fuss, fixed it properly and the price was very fair. Cannot thank them enough.",
  },
  {
    name: "David W.",
    location: "Ampthill",
    date: "3 weeks ago",
    text: "Major leak on a Sunday morning. Same-day response, sorted within the hour. Very friendly and didn't overcharge. Will use again.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Emergency Plumber Bedford", url: "https://njplumbingheating.co.uk/emergency" }]} />
      {/* HERO — urgent, dark, large phone */}
      <section className="bg-gray-950 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/40 to-gray-950" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/40 rounded-full px-4 py-2 text-sm font-semibold text-red-300 mb-8">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            Emergency plumber — Bedford &amp; Bedfordshire
          </div>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Emergency Plumber<br />
            <span className="text-red-400">in Bedford</span>
          </h1>
          <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto">
            Burst pipes, flooding, major leaks — fast response, 7 days a week.
            Don&apos;t wait. Call now.
          </p>

          {/* Big phone CTA */}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-3 bg-white text-gray-950 font-extrabold text-4xl sm:text-5xl px-10 py-6 rounded-2xl hover:bg-red-50 transition-colors shadow-2xl mb-6 w-full sm:w-auto"
          >
            <Phone size={40} />
            {PHONE}
          </a>
          <p className="text-gray-400 text-sm">Call now for immediate response</p>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-sm">
            {[
              { icon: Clock, text: "Available 7 days" },
              { icon: Shield, text: "Fully insured" },
              { icon: CheckCircle, text: "£80 call-out — first hour included" },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2 text-gray-300">
                <Icon size={16} className="text-red-400" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What counts as an emergency */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              What Counts as a Plumbing Emergency?
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              If any of these apply, call us immediately — don&apos;t wait.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Burst or split pipe causing flooding",
              "Major water leak you can&apos;t stop",
              "Sewage backup or overflow inside the property",
              "Complete loss of water supply",
              "Flooding from a plumbing fixture",
              "Pipe frozen and at risk of bursting",
              "Leak coming through a ceiling or floor",
              "Toilet or drainage overflow with no alternative",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-steel">
                <AlertTriangle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                <p
                  className="text-gray-700 text-sm"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to do while you wait */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            What to Do While You Wait
          </h2>
          <p className="text-gray-600 mb-6">
            While we&apos;re on our way, these steps can help limit damage:
          </p>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Turn off the water",
                desc: "Locate your stopcock (usually under the kitchen sink or near the water meter) and turn it clockwise to shut off the water supply.",
              },
              {
                step: "2",
                title: "Turn off the electricity in affected areas",
                desc: "If water is near electrical sockets, switches or fuse boxes, turn off the power at the consumer unit to prevent electrocution risk.",
              },
              {
                step: "3",
                title: "Contain the water",
                desc: "Use towels, buckets and containers to collect water and minimise spread. Move valuables and furniture away from the affected area.",
              },
              {
                step: "4",
                title: "Don't use drains if sewage is backing up",
                desc: "Avoid running taps, flushing toilets or using appliances until the blockage has been cleared.",
              },
              {
                step: "5",
                title: "Stay calm and call us",
                desc: `We're on our way. Call ${PHONE} if you need to update us on the situation.`,
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-brand flex items-center justify-center text-white font-bold flex-shrink-0">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response time guarantee */}
      <section className="bg-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Clock size={48} className="text-blue-300 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold mb-4">Fast Response Guaranteed</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            For most Bedford postcodes, we aim to be with you within the hour. We&apos;re
            available 7 days a week including evenings and weekends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { val: "~1hr", label: "Average response time in Bedford" },
              { val: "7 days", label: "Available every day of the week" },
              { val: "£80", label: "Call-out — first hour included" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 rounded-2xl p-6 border border-white/20">
                <p className="text-3xl font-extrabold text-blue-300 mb-2">{stat.val}</p>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">Emergency Coverage Area</h2>
            <p className="text-gray-500 mt-3">
              We cover Bedford and all surrounding towns for emergency call-outs.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
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
        </div>
      </section>

      {/* Emergency reviews */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
            What Customers Say About Our Emergency Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {emergencyReviews.map((review) => (
              <div key={review.name} className="bg-offwhite rounded-2xl p-6 border border-steel">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{review.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-500 text-xs">{review.location} · {review.date}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
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
              className="text-brand text-sm font-semibold hover:underline"
            >
              View all reviews on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-950 py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <AlertTriangle size={40} className="text-red-400 mx-auto mb-4" />
          <h2 className="text-4xl font-extrabold mb-4">
            Plumbing emergency in Bedford?
          </h2>
          <p className="text-gray-400 mb-8">
            Don&apos;t wait — call now for immediate response. Available 7 days a week.
          </p>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-3 bg-white text-gray-950 font-extrabold text-3xl px-8 py-5 rounded-2xl hover:bg-red-50 transition-colors shadow-xl"
          >
            <Phone size={32} />
            {PHONE}
          </a>
          <div className="mt-6">
            <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
              Or fill in our contact form &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
