import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border py-12">
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-gradient-radial opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Logo size={32} className="text-lg" />

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#servicios" className="transition hover:text-foreground">Servicios</a>
            <a href="#cotizacion" className="transition hover:text-foreground">Cotización</a>
            <a href="#labs" className="transition hover:text-foreground">Labs</a>
            <a href="#contacto" className="transition hover:text-foreground">Contacto</a>
          </nav>

          <div className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Sudo Labs · Hecho con precisión
          </div>
        </div>

        {/* Wordmark monumental */}
        <div className="mt-16 overflow-hidden">
          <div className="select-none text-center font-display text-[18vw] font-bold leading-none tracking-tighter">
            <span className="text-foreground/10">sudo</span>
            <span className="text-gradient-primary opacity-30">.labs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
