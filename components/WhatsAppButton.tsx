import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/config/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-tera-green px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-tera-green/50 transition hover:translate-y-[-1px] hover:shadow-tera-green/70 md:hidden"
    >
      <MessageCircle className="h-4 w-4" />
      <span>WhatsApp</span>
    </a>
  );
}

