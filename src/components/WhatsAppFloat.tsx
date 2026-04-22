const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" />
  </svg>
);

const WHATSAPP_NUMBER = "525658751914";

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
