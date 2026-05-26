import { Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP } from "../lib/constants";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2.5 flex gap-2">
      <a
        href={PHONE_HREF}
        className="flex-1 flex items-center justify-center gap-2 bg-brand text-white font-bold py-3 rounded-xl text-sm active:bg-brand-mid transition-colors"
      >
        <Phone size={16} />
        {PHONE}
      </a>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white font-bold py-3 rounded-xl text-sm active:bg-green-600 transition-colors"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
    </div>
  );
}
