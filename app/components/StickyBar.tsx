import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

export default function StickyBar() {
  return (
    <div className="hidden md:block bg-brand-mid text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-0">
        <span className="text-white/80">Available now &middot; Bedford &amp; Bedfordshire</span>
        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 hover:text-blue-300 transition-colors font-semibold"
          >
            <Phone size={13} />
            {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-green-300 transition-colors text-green-300 font-semibold"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
