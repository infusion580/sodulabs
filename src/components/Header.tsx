import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#cotizacion", label: "Cotización" },
  { href: "#labs", label: "Labs" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
          scrolled ? "glass rounded-full py-3" : ""
        }`}
        style={scrolled ? { maxWidth: "min(80rem, calc(100% - 2rem))" } : {}}
      >
        <a href="#hero" className="flex items-center gap-2 font-display text-xl font-bold">
          <span className="relative flex h-8 w-8 items-center justify-center">
            <span className="absolute inset-0 rounded-lg bg-gradient-primary shadow-glow-sm" />
            <span className="relative text-primary-foreground font-mono text-sm">S</span>
          </span>
          <span className="text-gradient">Sudo Labs</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#cotizacion"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
        >
          Cotizar ahora
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full glass p-2"
          aria-label="Menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 mt-4" : "max-h-0"
        }`}
      >
        <div className="mx-4 glass rounded-3xl p-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#cotizacion"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            Cotizar ahora
          </a>
        </div>
      </div>
    </header>
  );
}
