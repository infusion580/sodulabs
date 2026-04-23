import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MenuIcon as Menu, CloseIcon as X } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const links = [
  { href: "/#hero", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#labs", label: "Labs" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 30);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Bloquear scroll del body cuando el menú está abierto + cerrar con Escape
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      // Mover foco al primer enlace del menú para teclado/screen readers
      const t = window.setTimeout(() => firstLinkRef.current?.focus(), 80);
      const onKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
          buttonRef.current?.focus();
        }
      };
      window.addEventListener("keydown", onKey);
      return () => {
        window.clearTimeout(t);
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
          <Link to="/" aria-label="Sudo Labs — Inicio" className="text-lg md:text-xl">
            <Logo size={32} />
          </Link>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/#cotizacion"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
            >
              Cotizar ahora
            </a>

            <button
              ref={buttonRef}
              onClick={() => setOpen((v) => !v)}
              className="relative inline-flex h-11 w-11 items-center justify-center rounded-full glass transition-transform hover:scale-105"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="menu-principal"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Overlay menu fullscreen */}
      <div
        id="menu-principal"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!open}
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`relative flex min-h-screen flex-col items-center justify-center gap-2 px-6 transition-transform duration-700 ${
            open ? "translate-y-0" : "-translate-y-8"
          }`}
        >
          <nav className="flex flex-col items-center gap-1">
            {links.map((l, i) => (
              <a
                key={l.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="group relative font-display text-4xl font-bold tracking-tight text-foreground/80 transition-all hover:text-foreground sm:text-5xl md:text-6xl"
                style={{
                  transitionDelay: open ? `${i * 50}ms` : "0ms",
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(20px)",
                  transitionProperty: "opacity, transform, color",
                  transitionDuration: "600ms",
                  transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                  paddingTop: "0.4rem",
                  paddingBottom: "0.4rem",
                }}
              >
                <span className="relative inline-block">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary transition-all duration-500 group-hover:w-full" />
                </span>
              </a>
            ))}

            <Link
              to="/blog"
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              className="group relative font-display text-4xl font-bold tracking-tight text-foreground/80 transition-all hover:text-foreground sm:text-5xl md:text-6xl"
              style={{
                transitionDelay: open ? `${links.length * 50}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(20px)",
                transitionProperty: "opacity, transform, color",
                transitionDuration: "600ms",
                transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                paddingTop: "0.4rem",
                paddingBottom: "0.4rem",
              }}
            >
              <span className="relative inline-block">
                Blog
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-primary transition-all duration-500 group-hover:w-full" />
              </span>
            </Link>
          </nav>

          <a
            href="/#cotizacion"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            style={{
              transitionDelay: open ? `${(links.length + 1) * 50}ms` : "0ms",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(20px)",
              transitionProperty: "opacity, transform",
              transitionDuration: "600ms",
            }}
          >
            Cotizar ahora →
          </a>
        </div>
      </div>
    </>
  );
}
