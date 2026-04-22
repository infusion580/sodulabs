export function Footer() {
  return (
    <footer className="relative border-t border-border py-12 overflow-hidden">
      <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-radial opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            <span className="relative flex h-8 w-8 items-center justify-center">
              <span className="absolute inset-0 rounded-lg bg-gradient-primary shadow-glow-sm" />
              <span className="relative text-primary-foreground font-mono text-sm">S</span>
            </span>
            <span className="text-gradient">Sudo Labs</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition">Servicios</a>
            <a href="#cotizacion" className="hover:text-foreground transition">Cotización</a>
            <a href="#labs" className="hover:text-foreground transition">Labs</a>
            <a href="#contacto" className="hover:text-foreground transition">Contacto</a>
          </nav>

          <div className="text-xs font-mono text-muted-foreground">
            © {new Date().getFullYear()} Sudo Labs · Todos los derechos reservados
          </div>
        </div>

        {/* Massive logo */}
        <div className="mt-16 overflow-hidden">
          <div className="font-display font-bold text-[20vw] leading-none tracking-tighter text-center text-gradient-primary opacity-20 select-none">
            SUDO LABS
          </div>
        </div>
      </div>
    </footer>
  );
}
