import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

interface CTABannerProps {
  title: string;
  subtitle: string;
}

export default function CTABanner({ title, subtitle }: CTABannerProps) {
  return (
    <section className="py-16 px-4 bg-brand">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-ink">
          {title}
        </h2>
        <p className="text-lg mb-8 text-ink/70">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-xl text-lg hover:bg-ink transition-colors"
          >
            <Phone size={20} />
            Call {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-green-400 text-green-300 font-bold px-8 py-4 rounded-xl text-lg hover:bg-green-900/30 transition-colors"
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
