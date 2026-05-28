import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

export default function StickyBar() {
  return (
    <div className="hidden md:block bg-bg border-b border-border-dark text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <span className="text-steel-muted text-xs">
          Gas Safe Registered &middot; West London &middot; Boilers &middot; Heating &middot; Plumbing &middot; Bathrooms
        </span>
        <div className="flex items-center gap-4">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 text-ink hover:text-brand-light transition-colors font-semibold"
          >
            <Phone size={13} />
            {PHONE}
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors font-semibold"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
