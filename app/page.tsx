import Image from "next/image";
import {
  Phone, Mail, MapPin, CheckCircle, Wrench, Droplets,
  ShowerHead, AlertTriangle, Waves, ThumbsUp,
  Star, Clock, Shield, MessageCircle,
} from "lucide-react";

const PHONE      = "07927 910665";
const PHONE_HREF = "tel:07927910665";
const EMAIL      = "Nicholasjudge21@gmail.com";
const EMAIL_HREF = "mailto:Nicholasjudge21@gmail.com";
const WHATSAPP   = "https://wa.me/447927910665";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    desc: "Leaking pipes, dripping taps, running toilets — fixed right first time, no mess left behind.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Installations",
    desc: "Full bathroom fit-outs from start to finish. Supply & fit or fit only — whatever works for you.",
  },
  {
    icon: Waves,
    title: "Drainage & Unblocking",
    desc: "Blocked drains, sinks, toilets and outside drains cleared fast. CCTV surveys available.",
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    desc: "Trace and fix hidden leaks before they cause serious damage. Internal and external pipework.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Call-Outs",
    desc: "Burst pipes, flooding, urgent repairs. Fast response across Bedford — we pick up the phone.",
  },
  {
    icon: ThumbsUp,
    title: "Heating System Work",
    desc: "Radiator replacements, TRVs, system flushes, pump replacements — keep your heating running.",
  },
];

const whyUs = [
  { icon: Shield,      title: "Fully Insured",     desc: "Public liability cover on every single job." },
  { icon: Clock,       title: "Same-Day Response",  desc: "Available 7 days a week — emergencies welcome." },
  { icon: CheckCircle, title: "Upfront Pricing",    desc: "Fixed price agreed before any work starts. Always." },
  { icon: Star,        title: "Guaranteed Work",    desc: "All work backed by our workmanship guarantee." },
];

const areas = [
  "Bedford", "Kempston", "Ampthill", "Flitwick", "Sandy",
  "Biggleswade", "Shefford", "Cranfield", "Wixams",
  "Marston Moretaine", "Bromham", "Clapham", "Oakley", "Rushden",
];

const reviews = [
  {
    name: "Tom B.",
    location: "Bedford",
    text: "Nick came out same day for a burst pipe under the kitchen sink. Sorted it within the hour, left everywhere spotless. Genuinely one of the best tradesmen I've used.",
  },
  {
    name: "Rachel H.",
    location: "Kempston",
    text: "Had a full bathroom ripped out and refitted. Nick was professional throughout — great communication, tidy work and finished exactly on schedule. The result looks incredible.",
  },
  {
    name: "Dave W.",
    location: "Ampthill",
    text: "Blocked drain causing problems for weeks. NJ Plumbing sorted it same day, cleared properly and checked the other drains too. Fair price and no fuss.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── TOP BAR ──────────────────────────────────────────────────── */}
      <div className="bg-brand text-white py-2 px-4 text-center text-sm">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 font-medium hover:text-blue-200 transition-colors"
        >
          <Phone size={12} />
          Available now — call <span className="font-bold">{PHONE}</span> for a free quote
        </a>
      </div>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/logo.jpg"
            alt="NJ Plumbing & Heating"
            width={120}
            height={48}
            className="h-11 w-auto object-contain rounded-md"
          />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#about"    className="hover:text-brand transition-colors">About</a>
            <a href="#areas"    className="hover:text-brand transition-colors">Areas</a>
            <a href="#contact"  className="hover:text-brand transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-light transition-colors"
            >
              <Phone size={14} /> {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-brand text-white pt-28 pb-36 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-mid to-brand-light opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand/60 to-transparent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase text-blue-200 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
              Bedford &amp; surrounding areas
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Plumbing &amp; Heating<br />
              <span className="text-blue-300">Done Properly.</span>
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-10 max-w-xl">
              Professional repairs, installations and drainage across Bedford. Upfront pricing, reliable workmanship and a service you can actually trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-white text-brand font-extrabold px-8 py-4 rounded-lg text-base hover:bg-blue-50 transition-colors shadow-lg"
              >
                <Phone size={17} /> Call {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors"
              >
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-blue-200/70">
              {["Fully insured", "No call-out fee", "Free quotes", "7-day availability"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-green-400" />{t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { val: "5★",   label: "Customer Rating" },
            { val: "200+", label: "Jobs Completed" },
            { val: "7",    label: "Days a Week" },
            { val: "Free", label: "No-Obligation Quotes" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-brand">{s.val}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Booked and sorted in 3 steps.</h2>
            <p className="mt-3 text-gray-500 max-w-lg">
              No stress, no guesswork. Getting your plumbing fixed is simpler than you think.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* connector line desktop */}
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-steel z-0" />
            {[
              {
                step: "01",
                title: "Call or WhatsApp",
                desc: "Get in touch any day of the week. Tell us what you need and where you are — we'll respond fast.",
                cta: PHONE_HREF,
                ctaLabel: "Call now",
              },
              {
                step: "02",
                title: "Free quote, same day",
                desc: "We come out, assess the job and give you a fixed price upfront. No surprises. No obligation.",
                cta: WHATSAPP,
                ctaLabel: "WhatsApp us",
              },
              {
                step: "03",
                title: "Job done. Guaranteed.",
                desc: "We get it sorted properly, leave everything tidy and back everything we do with our workmanship guarantee.",
                cta: PHONE_HREF,
                ctaLabel: "Get started",
              },
            ].map(({ step, title, desc, cta, ctaLabel }) => (
              <div key={step} className="relative z-10 bg-offwhite rounded-xl p-8 border border-steel flex flex-col gap-5">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
                  <span className="text-white text-xs font-extrabold tracking-wider">{step}</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <a
                  href={cta}
                  target={cta === WHATSAPP ? "_blank" : undefined}
                  rel={cta === WHATSAPP ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline"
                >
                  {ctaLabel} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Plumbing, Heating &amp; Drainage</h2>
            <p className="mt-4 text-gray-500 max-w-xl">
              From a dripping tap to a full bathroom renovation — based in Bedford, covering the whole surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-7 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-brand/8 flex items-center justify-center mb-5 group-hover:bg-brand transition-colors" style={{ backgroundColor: "rgb(13 31 92 / 0.07)" }}>
                  <Icon size={20} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-7 py-3.5 rounded-lg hover:bg-brand-light transition-colors text-sm"
            >
              <Phone size={15} /> Get a free quote
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Why Choose NJ</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              A plumber you can<br />
              <span className="text-brand">actually rely on.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              NJ Plumbing &amp; Heating was built on one principle — do the job properly and treat every customer with respect. No hidden charges, no upselling, no cowboys. Just reliable work from someone who takes pride in what they do.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              Based in Bedford, Nick brings a professional and friendly approach to every job — from a quick repair to a full bathroom refit. You&apos;ll always know what you&apos;re paying before work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-light transition-colors text-sm"
              >
                <Phone size={15} /> {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-offwhite rounded-xl p-6 border border-steel">
                <div className="w-9 h-9 rounded-lg bg-brand/10 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Reviews</p>
            <div className="flex items-end gap-4">
              <h2 className="text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1.5 text-gray-400 text-sm">5.0</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-xl p-7 border border-gray-100 flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-gray-50 pt-4">
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────────────────── */}
      <section id="areas" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Areas We Cover</h2>
            <p className="mt-3 text-gray-500 max-w-lg">
              Based in Bedford — serving the whole surrounding area with the same fast, professional service.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 max-w-3xl">
            {areas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-offwhite border border-steel rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:border-brand hover:text-brand transition-colors cursor-default"
              >
                <MapPin size={11} className="text-accent" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY STRIP ──────────────────────────────────────────── */}
      <section className="bg-brand py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 rounded-full px-4 py-1.5 text-xs font-bold text-red-300 uppercase tracking-widest mb-4">
              <AlertTriangle size={12} /> Plumbing Emergency?
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-3">
              Burst pipe? Flooding?<br />
              <span className="text-blue-200">We pick up the phone.</span>
            </h2>
            <p className="text-blue-100/60 text-base max-w-md mx-auto lg:mx-0">
              Available 7 days a week for urgent call-outs across Bedford and surrounding areas. Don&apos;t wait — call now.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-white text-brand font-extrabold px-8 py-4 rounded-lg text-base hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap"
            >
              <Phone size={18} /> Call {PHONE}
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-lg text-base hover:bg-green-600 transition-colors whitespace-nowrap"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 bg-brand">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="text-white">
            <p className="text-blue-300/70 font-bold text-xs uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl font-extrabold mb-5 leading-tight">
              Need a plumber?<br />
              <span className="text-blue-300">Let&apos;s get it sorted.</span>
            </h2>
            <p className="text-blue-100/70 leading-relaxed mb-10 max-w-md">
              Free quotes on all work. Same-day bookings available. No call-out charge. Call, WhatsApp or email and we&apos;ll come back to you fast.
            </p>
            <div className="space-y-4">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 uppercase tracking-widest">Phone</p>
                  <p className="font-bold text-lg">{PHONE}</p>
                </div>
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-lg bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/40 transition-colors shrink-0">
                  <MessageCircle size={18} className="text-green-300" />
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 uppercase tracking-widest">WhatsApp</p>
                  <p className="font-bold">Message us directly</p>
                </div>
              </a>
              <a href={EMAIL_HREF} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 uppercase tracking-widest">Email</p>
                  <p className="font-bold text-sm">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-blue-300/60 uppercase tracking-widest">Location</p>
                  <p className="font-bold">Bedford, Bedfordshire</p>
                </div>
              </div>
            </div>
          </div>

          {/* form card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="font-extrabold text-gray-900 text-xl mb-1">Request a callback</h3>
            <p className="text-gray-400 text-sm mb-7">Fill in your details and we&apos;ll call you back within the hour.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">First name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Last name</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Phone number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors"
                  placeholder="07700 000000"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Service needed</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand transition-colors bg-white">
                  <option value="">Select a service</option>
                  <option value="repair">Plumbing repair</option>
                  <option value="bathroom">Bathroom installation</option>
                  <option value="drainage">Drainage &amp; unblocking</option>
                  <option value="leak">Leak detection</option>
                  <option value="emergency">Emergency call-out</option>
                  <option value="heating">Heating system work</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Tell us about the job</label>
                <textarea
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Describe what you need..."
                />
              </div>
              <a
                href={PHONE_HREF}
                className="block w-full text-center bg-brand text-white font-extrabold py-4 rounded-lg hover:bg-brand-light transition-colors text-sm"
              >
                Call {PHONE} →
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center border border-green-200 text-green-600 font-semibold py-3 rounded-lg hover:bg-green-50 transition-colors text-sm"
              >
                <MessageCircle size={15} /> Or message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-brand text-white border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Image
            src="/logo.jpg"
            alt="NJ Plumbing & Heating"
            width={80}
            height={32}
            className="rounded-md h-9 w-auto object-contain"
          />
          <p className="text-blue-300/50 text-sm">
            © {new Date().getFullYear()} NJ Plumbing &amp; Heating. All rights reserved.
          </p>
          <a href={PHONE_HREF} className="text-white font-semibold text-sm hover:text-blue-200 transition-colors">
            {PHONE}
          </a>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ─────────────────────────────────────────── */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={25} />
      </a>
    </>
  );
}
