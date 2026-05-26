import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

interface CTABannerProps {
  title: string;
  subtitle: string;
  dark?: boolean;
}

export default function CTABanner({ title, subtitle, dark = true }: CTABannerProps) {
  return (
    <section className={`py-16 px-4 ${dark ? "bg-brand text-white" : "bg-offwhite text-gray-900"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 ${dark ? "text-white" : "text-gray-900"}`}>
          {title}
        </h2>
        <p className={`text-lg mb-8 ${dark ? "text-white/70" : "text-gray-600"}`}>
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_HREF}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-colors ${
              dark
                ? "bg-white text-brand hover:bg-offwhite"
                : "bg-brand text-white hover:bg-brand-mid"
            }`}
          >
            <Phone size={20} />
            Call {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-colors ${
              dark
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
          <Link
            href="/contact"
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 transition-colors ${
              dark
                ? "border-white text-white hover:bg-white/10"
                : "border-brand text-brand hover:bg-brand/5"
            }`}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
