import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Thermometer,
  AlertTriangle,
  Info,
  ShieldCheck,
  Waves,
  Settings,
  Gauge,
  Droplets,
  Layers,
} from "lucide-react";
import CTABanner from "../../components/CTABanner";
import { PHONE, PHONE_HREF } from "../../lib/constants";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Heating Services Bedford | Radiators, Unvented Cylinders (G3) & Power Flushing",
  description:
    "Non-gas heating services in Bedford. Radiator installation, G3-qualified unvented cylinder installation and maintenance, underfloor heating, power flushing. Call 07927 910665.",
  alternates: { canonical: "/services/heating" },
  openGraph: { url: "https://njplumbingheating.co.uk/services/heating" },
};

const serviceCards = [
  {
    icon: Settings,
    title: "Radiator Installation",
    desc: "New radiator installation in any room. Correct sizing advice included.",
  },
  {
    icon: Settings,
    title: "Radiator Replacement",
    desc: "Old or inefficient radiators swapped for modern, more effective units.",
  },
  {
    icon: Waves,
    title: "Power Flushing",
    desc: "Full system power flush to remove sludge and improve heating efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Unvented Cylinders (G3)",
    desc: "G3-qualified installation and maintenance of unvented hot water cylinders, including Megaflow and similar systems.",
  },
  {
    icon: Layers,
    title: "Underfloor Heating (Wet)",
    desc: "Wet underfloor heating pipework laid and connected to your heating system.",
  },
  {
    icon: Gauge,
    title: "TRV Fitting",
    desc: "Thermostatic radiator valves fitted for better room-by-room temperature control.",
  },
  {
    icon: Droplets,
    title: "Hot Water Cylinder (Vented)",
    desc: "Vented hot water cylinder installation and replacement.",
  },
  {
    icon: Layers,
    title: "Heating System Pipework",
    desc: "New pipework runs for extensions, additions or heating system upgrades.",
  },
];

export default function HeatingPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "https://njplumbingheating.co.uk" }, { name: "Services", url: "https://njplumbingheating.co.uk/services" }, { name: "Heating Services Bedford", url: "https://njplumbingheating.co.uk/services/heating" }]} />
      {/* Hero */}
      <section className="bg-brand text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Heating</span>
          </nav>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
              <Thermometer size={28} className="text-white" />
            </div>
            <h1 className="text-5xl font-extrabold">Heating Services in Bedford</h1>
          </div>
          <p className="text-blue-100 text-lg max-w-2xl mt-4">
            Specialist non-gas heating services across Bedford and Bedfordshire. Radiators,
            G3-qualified unvented cylinder work, wet underfloor heating and power flushing.
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

      {/* G3 callout */}
      <section className="bg-blue-50 border-b border-blue-100 py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <ShieldCheck size={24} className="text-brand flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-brand mb-1">G3-qualified unvented cylinder specialist</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Nick holds a G3 qualification, which is required by law to install and service unvented
              hot water cylinders (Megaflow and similar). Many plumbers cannot legally carry out this
              work — if your cylinder is unvented, make sure you use a qualified engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Non-gas note */}
      <section className="bg-white border-b border-steel py-5 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <Info size={22} className="text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-gray-500 text-sm leading-relaxed">
            We specialise in non-gas heating work. We are not Gas Safe registered and cannot
            work on gas appliances, boilers or gas pipework. For gas work, please contact a
            registered Gas Safe engineer.
          </p>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-offwhite py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Heating Services We Offer
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Non-gas heating work carried out by experienced, fully insured tradespeople
              across Bedford and Bedfordshire.
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

      {/* Unvented cylinders section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck size={28} className="text-brand flex-shrink-0" />
            <h2 className="text-3xl font-extrabold text-gray-900">
              Unvented Hot Water Cylinders (G3)
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Unvented cylinders — like Megaflow, Tribune and similar systems — operate at mains
            pressure and deliver powerful, consistent hot water to every tap and shower in your
            home. Because they work at higher pressures than traditional vented cylinders, UK
            building regulations (Part G3) require that installation and servicing is carried out
            by a qualified engineer only.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Nick holds a current G3 qualification, which means he can legally install, commission
            and service unvented cylinders. If you&apos;re replacing a cylinder or having one installed
            for the first time, it&apos;s important to check your engineer has this qualification — not
            all plumbers do.
          </p>
          <div className="bg-offwhite rounded-2xl p-6 border border-steel">
            <h3 className="font-bold text-gray-900 mb-4">G3 unvented work we cover:</h3>
            <ul className="space-y-2">
              {[
                "New unvented cylinder installation",
                "Like-for-like cylinder replacement",
                "Annual servicing and safety checks",
                "Pressure relief valve and expansion vessel replacement",
                "Thermostat and immersion heater replacement",
                "Fault diagnosis and repair",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <ShieldCheck size={15} className="text-brand flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What is power flushing */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            What is Power Flushing?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Over time, heating systems accumulate sludge — a mixture of corroded metal particles,
            limescale and debris — that builds up inside radiators and pipework. This sludge
            reduces heating efficiency, causes cold spots on radiators, and puts extra strain on
            your system.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Power flushing is the process of connecting a specialist machine to your heating
            system and pumping a high-velocity flow of water through it. This dislodges and
            removes the sludge and deposits, restoring your system to near-new performance.
          </p>
          <div className="bg-white rounded-2xl p-6 border border-steel mt-6">
            <h3 className="font-bold text-gray-900 mb-4">Signs you need a power flush:</h3>
            <ul className="space-y-2">
              {[
                "Radiators that are cold at the bottom but warm at the top",
                "Noisy pipes or a noisy heating pump",
                "Heating system taking longer than usual to warm up",
                "Discoloured water when bleeding radiators",
                "Frequent need to bleed radiators",
              ].map((sign) => (
                <li key={sign} className="flex items-center gap-3 text-sm text-gray-700">
                  <AlertTriangle size={16} className="text-yellow-500 flex-shrink-0" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wet underfloor heating */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Wet Underfloor Heating in Bedford
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Wet underfloor heating uses pipework laid under the floor and connected to your
            existing heating system. It provides even, consistent warmth across the whole floor
            area and eliminates the need for visible radiators. Ideal for new builds, extensions
            and ground floor renovations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We install wet underfloor heating systems only — not electric mat systems. If you&apos;re
            unsure which type suits your project, give us a call and we&apos;ll advise.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Heating FAQ</h2>
          <div className="divide-y divide-steel">
            {[
              {
                q: "Can you work on my gas boiler?",
                a: "No — we are not Gas Safe registered. We cannot work on gas boilers, gas appliances or gas pipework. For any gas work, please contact a registered Gas Safe engineer.",
              },
              {
                q: "Are you qualified to install an unvented cylinder?",
                a: "Yes — Nick holds a G3 qualification, which is the certification required by UK building regulations to install and service unvented hot water cylinders. This is a legal requirement that not all plumbers hold.",
              },
              {
                q: "What is a G3 qualification?",
                a: "G3 is the Building Regulations requirement for anyone installing or servicing unvented hot water storage systems. It covers systems like Megaflow, Tribune and other pressurised cylinders. Installing an unvented cylinder without this qualification is illegal.",
              },
              {
                q: "My radiator has a cold spot — can you fix it?",
                a: "Yes. Cold spots are often caused by trapped air (resolved by bleeding) or sludge build-up. We can diagnose the cause and carry out a power flush if needed.",
              },
              {
                q: "How long does a power flush take?",
                a: "A typical power flush on a domestic property takes between 4 and 8 hours depending on system size and the amount of debris present.",
              },
              {
                q: "Can you add an extra radiator to my system?",
                a: "Yes — we can design and install additional radiators, including running new pipework, on most existing heating systems across Bedford.",
              },
              {
                q: "Do you install electric underfloor heating?",
                a: "No — we only install wet (water) underfloor heating systems. Electric mat systems are outside our scope.",
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
        title="Need heating work in Bedford?"
        subtitle="G3-qualified unvented cylinder specialist. Non-gas heating. £80 call-out — first hour included."
      />
    </>
  );
}
