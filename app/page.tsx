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
  { icon: Shield,       title: "Fully Insured",      desc: "Public liability cover on every single job." },
  { icon: Clock,        title: "Same-Day Response",   desc: "Available 7 days a week — emergencies welcome." },
  { icon: CheckCircle,  title: "Upfront Pricing",     desc: "You get a fixed price before any work starts. Always." },
  { icon: Star,         title: "Guaranteed Work",     desc: "All work backed by our workmanship guarantee." },
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
    text: "Nick came out same day for a burst pipe under the kitchen sink. Sorted it within the hour, left everywhere spotless. Genuinely one of the best tradesmen I've used. Highly recommended.",
  },
  {
    name: "Rachel H.",
    location: "Kempston",
    text: "Had a full bathroom ripped out and refitted. Nick was professional throughout — great communication, tidy work and finished exactly on schedule. The bathroom looks incredible.",
  },
  {
    name: "Dave W.",
    location: "Ampthill",
    text: "Blocked drain had been causing problems for weeks. NJ Plumbing sorted it same day, cleared properly and even checked the other drains while there. Fair price too — will use again.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── STICKY TOP BAR ───────────────────────────────────────────── */}
      <div className="bg-brand-dark text-white py-2 px-4 text-center text-sm">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 font-semibold hover:text-blue-200 transition-colors"
        >
          <Phone size={13} />
          Available now — call <span className="underline underline-offset-2">{PHONE}</span> for a free quote
        </a>
      </div>

      {/* ── NAV ──────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Image
            src="/logo.jpg"
            alt="NJ Plumbing & Heating"
            width={140}
            height={56}
            className="h-12 w-auto object-contain rounded-lg"
          />
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
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
              className="hidden sm:flex items-center gap-2 bg-green-500 text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-green-600 transition-colors"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 bg-brand text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-light transition-colors"
            >
              <Phone size={14} />{PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative bg-brand text-white pt-24 pb-32 px-4 overflow-hidden">
        {/* grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 60px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 60px)",
          }}
        />
        {/* glow blob */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
              Available now — Bedford &amp; surrounding areas
            </div>
            <h1 className="text-5xl sm:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight">
              Your Local<br />
              Plumbing &amp; Heating<br />
              <span className="text-blue-200">Expert.</span>
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed mb-10 max-w-lg">
              Fast, reliable plumbing repairs, bathroom installations and drainage across Bedford and the surrounding area. Upfront pricing. No hidden costs. Quality guaranteed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-white text-brand font-extrabold px-8 py-4 rounded-xl text-base hover:bg-blue-50 transition-colors shadow-xl"
              >
                <Phone size={18} /> Call {PHONE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-blue-200">
              {["Fully insured", "No call-out fee", "Free quotes", "7-day availability"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-green-400" />{t}
                </span>
              ))}
            </div>
          </div>

          {/* logo panel */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-brand-dark rounded-3xl p-12 border border-white/10 shadow-2xl relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent" />
              <Image
                src="/logo.jpg"
                alt="NJ Plumbing & Heating"
                width={260}
                height={260}
                className="rounded-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────────── */}
      <section className="bg-brand-dark text-white py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { val: "5★",   label: "Customer Rating" },
            { val: "200+", label: "Jobs Completed" },
            { val: "7",    label: "Days a Week" },
            { val: "Free", label: "No-Obligation Quote" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-extrabold text-blue-200">{s.val}</p>
              <p className="text-sm text-blue-300/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Plumbing, Heating &amp; Drainage</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              From a dripping tap to a full bathroom renovation — we do it all. Based in Bedford and covering the whole surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-brand hover:shadow-lg transition-all group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-5 group-hover:bg-brand transition-colors">
                  <Icon size={22} className="text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-light transition-colors text-base"
            >
              <Phone size={16} /> Call for a free quote
            </a>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Why Choose NJ</p>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                A plumber you can<br />
                <span className="text-brand">actually rely on.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                NJ Plumbing &amp; Heating was built on doing things the right way — honest pricing, clean work and treating every customer with respect. No cowboys. No surprise invoices. Just a proper job done properly.
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                Based in Bedford and covering all surrounding areas, Nick brings a professional, friendly approach to every job — whether it&apos;s a quick repair or a full bathroom refit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-xl hover:bg-brand-light transition-colors"
                >
                  <Phone size={16} /> {PHONE}
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {whyUs.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-offwhite rounded-2xl p-6 border border-steel">
                  <Icon size={24} className="text-brand mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-offwhite">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Reviews</p>
            <h2 className="text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
            <div className="flex items-center justify-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2 text-gray-400 text-sm">5.0 · Google Reviews</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-7 border border-steel flex flex-col">
                <div className="flex gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">&ldquo;{r.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                  <p className="text-xs text-gray-400">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AREAS ────────────────────────────────────────────────────── */}
      <section id="areas" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand font-bold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 className="text-4xl font-extrabold text-gray-900">Areas We Cover</h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              Based in Bedford — serving the whole surrounding area with the same fast, professional service.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {areas.map((area) => (
              <span
                key={area}
                className="flex items-center gap-1.5 bg-offwhite border border-steel rounded-full px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand hover:text-brand transition-colors cursor-default"
              >
                <MapPin size={12} className="text-brand" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-4 bg-brand text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-blue-200 font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
              <h2 className="text-4xl font-extrabold mb-6">
                Need a plumber?<br />
                <span className="text-blue-200">We&apos;re ready now.</span>
              </h2>
              <p className="text-blue-100 leading-relaxed mb-10">
                Free quotes on all work. Same-day bookings available. No call-out charge. Call, WhatsApp or email — we&apos;ll get back to you fast.
              </p>
              <div className="space-y-5">
                <a href={PHONE_HREF} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-light transition-colors shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-widest">Phone</p>
                    <p className="font-bold text-xl">{PHONE}</p>
                  </div>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-500/80 flex items-center justify-center group-hover:bg-green-500 transition-colors shrink-0">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-widest">WhatsApp</p>
                    <p className="font-bold">Message us directly</p>
                  </div>
                </a>
                <a href={EMAIL_HREF} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-brand-light transition-colors shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-widest">Email</p>
                    <p className="font-bold">{EMAIL}</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-300 uppercase tracking-widest">Location</p>
                    <p className="font-bold">Bedford, Bedfordshire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* contact card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="font-bold text-xl mb-2">Request a callback</h3>
              <p className="text-blue-200 text-sm mb-6">Fill in your details and we&apos;ll call you back within the hour.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-blue-300 uppercase tracking-widest mb-1.5">First name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-300"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-blue-300 uppercase tracking-widest mb-1.5">Last name</label>
                    <input
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-300"
                      placeholder="Smith"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-blue-300 uppercase tracking-widest mb-1.5">Phone number</label>
                  <input
                    type="tel"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-300"
                    placeholder="07700 000000"
                  />
                </div>
                <div>
                  <label className="block text-xs text-blue-300 uppercase tracking-widest mb-1.5">Service needed</label>
                  <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-300">
                    <option value="" className="text-gray-900">Select a service</option>
                    <option value="repair"     className="text-gray-900">Plumbing repair</option>
                    <option value="bathroom"   className="text-gray-900">Bathroom installation</option>
                    <option value="drainage"   className="text-gray-900">Drainage &amp; unblocking</option>
                    <option value="leak"       className="text-gray-900">Leak detection</option>
                    <option value="emergency"  className="text-gray-900">Emergency call-out</option>
                    <option value="heating"    className="text-gray-900">Heating system work</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-blue-300 uppercase tracking-widest mb-1.5">Tell us about the job</label>
                  <textarea
                    rows={3}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-blue-300 resize-none"
                    placeholder="Describe what you need..."
                  />
                </div>
                <a
                  href={PHONE_HREF}
                  className="block w-full text-center bg-white text-brand font-extrabold py-4 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Call {PHONE} →
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition-colors text-sm"
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle size={16} /> Or message on WhatsApp
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────── */}
      <footer className="bg-brand-dark text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300">
          <Image
            src="/logo.jpg"
            alt="NJ Plumbing & Heating"
            width={100}
            height={40}
            className="rounded-lg h-10 w-auto object-contain"
          />
          <p className="text-blue-400">
            © {new Date().getFullYear()} NJ Plumbing &amp; Heating. All rights reserved.
          </p>
          <a href={PHONE_HREF} className="text-white font-bold hover:text-blue-200 transition-colors">
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
        <MessageCircle size={26} />
      </a>
    </>
  );
}
