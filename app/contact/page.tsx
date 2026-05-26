import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ExternalLink, MessageCircle } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, LOCATION, GOOGLE_BUSINESS_URL, WHATSAPP } from "../lib/constants";
import BreadcrumbSchema from "../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact NJ Plumbing & Heating Bedford | Get a Free Quote",
  description:
    "Contact NJ Plumbing & Heating in Bedford for a free, no-obligation quote. Call 07927 910665, WhatsApp or fill in our quick quote form.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "https://njplumbingheating.co.uk/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Contact", url: "https://njplumbingheating.co.uk/contact" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-5xl font-extrabold mb-4">Get in Touch</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Free quotes on all work. No call-out fee. We call you back within the hour.
          </p>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — contact details + map */}
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Contact Details</h2>

            <div className="space-y-4 mb-8">
              <a
                href={PHONE_HREF}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel hover:border-brand transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <Phone size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Phone</p>
                  <p className="font-bold text-gray-900 text-lg">{PHONE}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Call for immediate response</p>
                </div>
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel hover:border-green-400 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                  <MessageCircle size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">WhatsApp</p>
                  <p className="font-bold text-gray-900 text-lg">Message Nick directly</p>
                  <p className="text-gray-500 text-xs mt-0.5">Quick response via WhatsApp</p>
                </div>
              </a>

              <a
                href={EMAIL_HREF}
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel hover:border-brand transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <Mail size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Email</p>
                  <p className="font-bold text-gray-900 break-all">{EMAIL}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Location</p>
                  <p className="font-bold text-gray-900">{LOCATION}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel">
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Opening Hours</p>
                  <div className="space-y-0.5">
                    <p className="font-bold text-gray-900 text-sm">Monday – Saturday: 7:00am – 8:00pm</p>
                    <p className="text-gray-700 text-sm">Sunday: 8:00am – 6:00pm</p>
                    <p className="text-brand text-xs font-semibold mt-1">Emergency cover available outside these hours</p>
                  </div>
                </div>
              </div>

              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-steel hover:border-brand transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors">
                  <ExternalLink size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Google</p>
                  <p className="font-bold text-brand text-sm">View us on Google Maps</p>
                  <p className="text-gray-500 text-xs">Read reviews &amp; get directions</p>
                </div>
              </a>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-steel shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Bedford,+Bedfordshire,+UK&output=embed"
                width="100%"
                height={300}
                loading="lazy"
                allowFullScreen
                style={{ border: 0, display: "block" }}
                title="NJ Plumbing & Heating — Bedford location"
              />
            </div>
          </div>

          {/* Right — quote form */}
          <div>
            <div className="bg-brand rounded-2xl p-8">
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Request a Free Quote
              </h2>
              <p className="text-white/70 text-sm mb-6">
                Fill in the form and we&apos;ll call you back within the hour.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQs */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">
            Getting in Touch — FAQ
          </h2>
          <div className="divide-y divide-steel">
            {[
              {
                q: "How quickly will you get back to me?",
                a: "We aim to call back within the hour during normal working hours. For emergencies, call us directly on the number above for immediate response.",
              },
              {
                q: "Is the quote genuinely free?",
                a: "Yes — absolutely free, no obligation. We'll assess your job and provide a fixed price before any work starts. There's no charge for the visit or the quote.",
              },
              {
                q: "Can I get a quote by email?",
                a: "For some jobs, yes — email us a description and photos if you have them. For most work, we prefer to do a quick visit so we can give you an accurate fixed price.",
              },
              {
                q: "Do you offer same-day appointments?",
                a: "Yes — we offer same-day appointments for most plumbing, drainage and heating work. Availability depends on the day, but we'll always do our best to fit you in quickly.",
              },
              {
                q: "I have an emergency — what do I do?",
                a: "Call us immediately on the number above. Don't fill in a form for emergencies — call so we can respond straight away.",
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
    </>
  );
}
