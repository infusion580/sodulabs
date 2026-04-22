import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5215555555555";

export function WhatsAppFloat() {
  const text = encodeURIComponent("Hola Sudo Labs, me interesa saber más sobre sus servicios.");
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 rounded-full bg-gradient-primary pl-4 pr-5 py-3 shadow-glow transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      <MessageCircle className="relative h-5 w-5 text-primary-foreground" />
      <span className="relative hidden sm:inline text-sm font-semibold text-primary-foreground">
        Chatea
      </span>
    </a>
  );
}
