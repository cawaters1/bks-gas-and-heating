import Image from "next/image";
import {
  Phone, Mail, MapPin, CheckCircle, Wrench, Droplets,
  ShowerHead, AlertTriangle, Waves, ThumbsUp,
  Star, Clock, Shield, MessageCircle, Facebook, Instagram, Award,
} from "lucide-react";

const PHONE      = "07927 910665";
const PHONE_HREF = "tel:07927910665";
const EMAIL      = "Nicholasjudge21@gmail.com";
const EMAIL_HREF = "mailto:Nicholasjudge21@gmail.com";
const WHATSAPP   = "https://wa.me/447927910665";
const FACEBOOK   = "https://www.facebook.com/njplumbingheating";
const INSTAGRAM  = "https://www.instagram.com/njplumbingheating";

const services = [
  {
    icon: Wrench,
    title: "Plumbing Repairs",
    desc: "Leaking pipes, dripping taps, running toilets — fixed right first time, no mess left behind.",
    tag: null,
  },
  {
    icon: ShowerHead,
    title: "Bathroom Installations",
    desc: "Full bathroom fit-outs from start to finish. Supply & fit or fit only — whatever works for you.",
    tag: null,
  },
  {
    icon: Waves,
    title: "Drainage & Unblocking",
    desc: "Blocked drains, sinks, toilets and outside drains cleared fast. CCTV surveys available.",
    tag: null,
  },
  {
    icon: Droplets,
    title: "Leak Detection & Repair",
    desc: "Trace and fix hidden leaks before they cause serious damage. Internal and external pipework.",
    tag: null,
  },
  {
    icon: AlertTriangle,
    title: "Emergency Call-Outs",
    desc: "Burst pipes, flooding, urgent repairs. Fast response across Bedford — we pick up the phone.",
    tag: "Priority",
  },
  {
    icon: ThumbsUp,
    title: "Heating System Work",
    desc: "Radiator replacements, TRVs, system flushes, pump replacements — keep your heating running.",
    tag: null,
  },
];

const whyUs = [
  { icon: Shield,      title: "Fully Insured",    desc: "Public liability cover on every single job, every time." },
  { icon: Clock,       title: "Same-Day Response", desc: "Available 7 days a week — emergencies always welcome." },
  { icon: CheckCircle, title: "Upfront Pricing",   desc: "Fixed price agreed before any work starts. No surprises." },
  { icon: Award,       title: "Guaranteed Work",   desc: "All work backed by our workmanship guarantee." },
];

const process = [
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

const areas = [
  "Bedford", "Kempston", "Ampthill", "Flitwick", "Sandy",
  "Biggleswade", "Shefford", "Cranfield", "Wixams",
  "Marston Moretaine", "Bromham", "Clapham", "Oakley", "Rushden",
];

export default function Home() {
  return (
    <>
      {/* ── EMERGENCY TOP BAR ─────────────────────────────────────────── */}
      <div className="bg-brand-mid text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <span className="flex items-center gap-2 text-blue-300/80 font-medium">
            <AlertTriangle size={13} />
            Same-day &amp; emergency call-outs available across Bedford
          </span>
          <a href={PHONE_HREF} className="flex items-center gap-1.5 font-bold hover:text-blue-300 transition-colors">
            <Phone size={13} /> {PHONE}
          </a>
        </div>
      </div>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4" style={{ height: "80px" }}>

          {/* Logo + name */}
          <div className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="NJ Plumbing & Heating"
              width={200}
              height={80}
              className="w-auto object-contain rounded-md"
              style={{ height: "68px" }}
            />
            <div className="hidden sm:block">
              <p className="text-brand font-extrabold text-lg leading-tight tracking-tight">NJ Plumbing &amp; Heating</p>
              <p className="text-accent text-xs font-semibold tracking-widest uppercase leading-tight">Bedford &amp; Surrounding Areas</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-gray-500">
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#about"    className="hover:text-brand transition-colors">About</a>
            <a href="#areas"    className="hover:text-brand transition-colors">Areas</a>
            <a href="#contact"  className="hover:text-brand transition-colors">Contact</a>
          </nav>

          {/* Social + CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-gray-400 hover:text-brand hover:bg-brand/5 transition-colors">
              <Facebook size={17} />
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="hidden md:flex w-9 h-9 items-center justify-center rounded-lg text-gray-400 hover:text-brand hover:bg-brand/5 transition-colors">
              <Instagram size={17} />
            </a>
            <div className="hidden md:block w-px h-6 bg-gray-200 mx-1" />
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 text-sm font-semibold px-4 py-2 rounded-lg transition-colors">
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a href={PHONE_HREF}
              className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-light transition-colors">
              <Phone size={14} /> {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-brand text-white pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-mid via-brand to-brand-light" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-2xl">
            {/* credential chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {["Fully Insured", "7-Day Availability", "Free Quotes", "No Call-Out Fee"].map((c) => (
                <span key={c} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white rounded-full px-3 py-1 text-xs font-semibold">
                  <CheckCircle size={11} className="text-blue-300" />{c}
                </span>
              ))}
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Your Local Plumber<br />
              in Bedford.<br />
              <span className="text-blue-300">Done Properly.</span>
            </h1>
            <p className="text-lg text-blue-100/75 leading-relaxed mb-10 max-w-xl">
              Professional plumbing repairs, bathroom installations and drainage across Bedford and surrounding areas. Upfront pricing, reliable workmanship, guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-white text-brand font-extrabold px-8 py-4 rounded-lg text-base hover:bg-blue-50 transition-colors shadow-lg">
                <Phone size={17} /> Call {PHONE}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-white/25 text-white font-semibold px-8 py-4 rounded-lg text-base hover:bg-white/10 transition-colors">
                <MessageCircle size={17} /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-blue-200/60">
              {["Same-day response", "Tidy, careful work", "Fixed prices", "Bedford based"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-blue-300" />{t}
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

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Plumbing, Heating &amp; Drainage</h2>
            <p className="mt-3 text-gray-500 max-w-xl">
              From a dripping tap to a full bathroom renovation — based in Bedford, covering the whole surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, title, desc, tag }) => (
              <div key={title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-md transition-all group cursor-default flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors"
                    style={{ backgroundColor: "rgb(13 31 92 / 0.07)" }}>
                    <Icon size={19} className="text-brand group-hover:text-white transition-colors" />
                  </div>
                  {tag && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full border text-red-600 bg-red-50 border-red-200">
                      {tag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed flex-1">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-7 py-3.5 rounded-lg hover:bg-brand-light transition-colors text-sm">
              <Phone size={15} /> Call for a free quote
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 font-semibold px-7 py-3.5 rounded-lg transition-colors text-sm">
              <MessageCircle size={15} /> WhatsApp us
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY NJ ───────────────────────────────────────────────────── */}
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
              Based in Bedford, Nick brings a professional and friendly approach to every job — from a quick repair to a full bathroom refit. You&apos;ll always know exactly what you&apos;re paying before work begins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-lg hover:bg-brand-light transition-colors text-sm">
                <Phone size={15} /> {PHONE}
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {whyUs.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-offwhite rounded-xl p-6 border border-steel">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgb(13 31 92 / 0.08)" }}>
                  <Icon size={18} className="text-brand" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">The Process</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Simple from start to finish.</h2>
            <p className="mt-3 text-gray-500 max-w-lg">
              No stress, no guesswork. Getting your plumbing fixed is easier than you think.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-steel z-0" />
            {process.map(({ step, title, desc, cta, ctaLabel }) => (
              <div key={step} className="relative z-10 bg-white rounded-xl p-8 border border-gray-100 flex flex-col gap-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center shrink-0">
                  <span className="text-blue-200 text-xs font-extrabold tracking-wider">{step}</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <a href={cta}
                  target={cta === WHATSAPP ? "_blank" : undefined}
                  rel={cta === WHATSAPP ? "noopener noreferrer" : undefined}
                  className="mt-auto inline-flex items-center gap-1.5 text-accent font-bold text-sm hover:underline">
                  {ctaLabel} →
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-7 py-3.5 rounded-lg hover:bg-brand-light transition-colors text-sm">
              <Phone size={15} /> Book your free quote
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Customer Reviews</p>
            <div className="flex flex-col sm:flex-row sm:items-end gap-3">
              <h2 className="text-4xl font-extrabold text-gray-900">Trusted by customers<br />across Bedford.</h2>
              <div className="flex items-center gap-1 sm:mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-1.5 text-gray-400 text-sm font-medium">5.0</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div key={r.name} className="bg-offwhite rounded-xl p-7 border border-steel flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────────────────── */}
      <section id="areas" className="py-24 px-6 bg-offwhite">
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
              <span key={area}
                className="flex items-center gap-1.5 bg-white border border-steel rounded-full px-4 py-2 text-sm font-medium text-gray-600 hover:border-brand hover:text-brand transition-colors cursor-default">
                <MapPin size={11} className="text-accent" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMERGENCY STRIP ──────────────────────────────────────────── */}
      <section className="bg-brand py-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-400 to-accent" />
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
            <a href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-white text-brand font-extrabold px-8 py-4 rounded-lg text-base hover:bg-blue-50 transition-colors shadow-lg whitespace-nowrap">
              <Phone size={18} /> Call {PHONE}
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-lg text-base hover:bg-green-600 transition-colors whitespace-nowrap">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-accent font-bold text-xs uppercase tracking-widest mb-3">Get In Touch</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-5 leading-tight">
              Need a plumber?<br />
              <span className="text-brand">Let&apos;s get it sorted.</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-10 max-w-md">
              Free quotes on all work. Same-day bookings available. No call-out charge. Call, WhatsApp or email and we&apos;ll come back to you fast.
            </p>
            <div className="space-y-5">
              <a href={PHONE_HREF} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors shrink-0"
                  style={{ backgroundColor: "rgb(13 31 92 / 0.07)" }}>
                  <Phone size={18} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Phone</p>
                  <p className="font-bold text-gray-900 text-lg">{PHONE}</p>
                </div>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors shrink-0">
                  <MessageCircle size={18} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">WhatsApp</p>
                  <p className="font-bold text-gray-900">Message us directly</p>
                </div>
              </a>
              <a href={EMAIL_HREF} className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center group-hover:bg-brand transition-colors shrink-0"
                  style={{ backgroundColor: "rgb(13 31 92 / 0.07)" }}>
                  <Mail size={18} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Email</p>
                  <p className="font-bold text-gray-900 text-sm">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgb(13 31 92 / 0.07)" }}>
                  <MapPin size={18} className="text-brand" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">Location</p>
                  <p className="font-bold text-gray-900">Bedford, Bedfordshire</p>
                </div>
              </div>
            </div>
          </div>

          {/* form */}
          <div className="bg-offwhite rounded-2xl p-8 border border-steel">
            <h3 className="font-extrabold text-gray-900 text-xl mb-1">Request a free quote</h3>
            <p className="text-gray-400 text-sm mb-7">We&apos;ll be in touch within the hour.</p>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">First name</label>
                  <input type="text"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors"
                    placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Last name</label>
                  <input type="text"
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors"
                    placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Phone number</label>
                <input type="tel"
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors"
                  placeholder="07700 000000" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Service needed</label>
                <select className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 focus:outline-none focus:border-brand transition-colors">
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
                <textarea rows={3}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-300 focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Describe what you need..." />
              </div>
              <a href={PHONE_HREF}
                className="block w-full text-center bg-brand text-white font-extrabold py-4 rounded-lg hover:bg-brand-light transition-colors text-sm">
                Call {PHONE} →
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full border border-green-200 text-green-600 font-semibold py-3 rounded-lg hover:bg-green-50 transition-colors text-sm">
                <MessageCircle size={15} /> Or message on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-brand-mid text-white border-t border-white/5 py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <Image src="/logo.jpg" alt="NJ Plumbing & Heating" width={120} height={48}
              className="rounded-md h-12 w-auto object-contain" />
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-blue-300/50 font-semibold">
              {["Fully Insured", "7 Days a Week", "Free Quotes", "No Call-Out Fee"].map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <CheckCircle size={11} className="text-blue-400/50" />{b}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="text-blue-300/40 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="text-blue-300/40 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href={PHONE_HREF} className="text-white font-bold text-sm hover:text-blue-200 transition-colors">
                {PHONE}
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-blue-300/30">
            <p>© {new Date().getFullYear()} NJ Plumbing &amp; Heating. All rights reserved.</p>
            <p>Bedford, Bedfordshire</p>
          </div>
        </div>
      </footer>

      {/* ── FLOATING WHATSAPP ─────────────────────────────────────────── */}
      <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors"
        aria-label="Chat on WhatsApp">
        <MessageCircle size={25} />
      </a>
    </>
  );
}
