import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Thermometer,
  AlertTriangle,
  Info,
  Zap,
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
  title: "Heating Services Bedford | Radiators, Underfloor Heating & Power Flushing",
  description:
    "Non-gas heating services in Bedford. Radiator installation, underfloor heating, power flushing and heating system upgrades. Call 07927 910665.",
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
    icon: Zap,
    title: "Underfloor Heating (Electric)",
    desc: "Electric UFH mats installed under tiles, laminate or stone flooring.",
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
            underfloor heating, power flushing and more — without the need for gas.
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

      {/* Important note box */}
      <section className="bg-blue-50 border-b border-blue-100 py-6 px-4">
        <div className="max-w-4xl mx-auto flex items-start gap-4">
          <Info size={24} className="text-brand flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-brand mb-1">Non-gas heating specialists</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              We specialise in non-gas heating work — radiator installation, underfloor heating,
              power flushing and hot water systems. We are not Gas Safe registered and cannot
              work on gas appliances, boilers or gas pipework. For gas appliance work, please
              contact a registered Gas Safe engineer.
            </p>
          </div>
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

      {/* What is power flushing */}
      <section className="bg-white py-16 px-4">
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
          <div className="bg-offwhite rounded-2xl p-6 border border-steel mt-6">
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

      {/* Underfloor heating */}
      <section className="bg-offwhite py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Underfloor Heating in Bedford
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Underfloor heating is an increasingly popular choice for Bedford homeowners — it
            provides even, consistent warmth, eliminates the need for visible radiators, and can
            be more energy efficient when properly designed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-2xl p-6 border border-steel">
              <div className="flex items-center gap-3 mb-3">
                <Zap size={20} className="text-brand" />
                <h3 className="font-bold text-gray-900">Electric Underfloor Heating</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Electric mats are ideal for smaller areas like bathrooms and kitchens. Quick to
                install and easy to control with a programmable thermostat.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-steel">
              <div className="flex items-center gap-3 mb-3">
                <Layers size={20} className="text-brand" />
                <h3 className="font-bold text-gray-900">Wet Underfloor Heating</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Wet systems use pipework laid under the floor and connected to your heating
                system. Ideal for new builds and extensions, providing whole-room warmth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Heating FAQ</h2>
          <div className="divide-y divide-steel">
            {[
              {
                q: "Can you work on my gas boiler?",
                a: "No — we are not Gas Safe registered. We cannot work on gas boilers, gas appliances or gas pipework. For any gas work, please contact a registered Gas Safe engineer.",
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
                q: "Do you install underfloor heating under tiles?",
                a: "Yes — we install both electric mat systems and wet underfloor heating. We can advise on the best option for your flooring type and room size.",
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
        subtitle="Non-gas heating specialists. Free quotes, no call-out fee. Call today."
      />
    </>
  );
}
