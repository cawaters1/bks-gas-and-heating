import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

interface CTABannerProps {
  title: string;
  subtitle: string;
}

export default function CTABanner({ title, subtitle }: CTABannerProps) {
  return (
    <section className="py-16 px-4 bg-[#050508] border-t border-white/8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-ink">
          {title}
        </h2>
        <p className="text-lg mb-8 text-steel max-w-xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-brand-light transition-colors shadow-lg"
          >
            <Phone size={18} />
            Call {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-green-700/60 text-green-400 font-semibold px-8 py-4 rounded-xl text-base hover:bg-green-900/20 transition-colors"
          >
            <MessageCircle size={18} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
