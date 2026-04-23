import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDownIcon as ArrowDown, SparklesIcon as Sparkles } from "@/components/icons";

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const isCoarse = window.matchMedia?.("(pointer: coarse)").matches;

    if (reduce) {
      // Show everything immediately
      gsap.set(
        [".hero-pill", ".hero-line", ".hero-sub", ".hero-cta", ".hero-meta", ".hero-shape"],
        { clearProps: "all", opacity: 1, y: 0, scale: 1 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      // Loader is ~1.0s on mobile, ~1.7s on desktop. Start hero just after.
      const delay = isMobile ? 1.05 : 1.75;
      const tl = gsap.timeline({ delay, defaults: { ease: "expo.out" } });
      tl.from(".hero-pill", { y: 30, opacity: 0, duration: 0.7 })
        .from(
          ".hero-line",
          { y: isMobile ? 60 : 100, opacity: 0, duration: 0.9, stagger: 0.08 },
          "-=0.5"
        )
        .from(".hero-sub", { y: 24, opacity: 0, duration: 0.7 }, "-=0.55")
        .from(".hero-cta", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.45")
        .from(".hero-meta", { opacity: 0, y: 18, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(
          ".hero-shape",
          { scale: 0, opacity: 0, duration: 1, stagger: 0.1, ease: "back.out(1.6)" },
          "-=0.9"
        );

      // Parallax solo en desktop con puntero fino (no en táctil/móvil)
      if (isCoarse || isMobile) return;
      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * 30;
        gsap.to(".hero-shape", { x, y, duration: 1.2, ease: "power2.out", overwrite: "auto" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      {/* Background grid + radial */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 noise" />

      {/* Floating geometric shapes */}
      <div className="hero-shape pointer-events-none absolute top-[15%] left-[8%] h-32 w-32 md:h-48 md:w-48 rounded-full bg-gradient-primary opacity-30 blur-2xl animate-blob" />
      <div className="hero-shape pointer-events-none absolute bottom-[20%] right-[10%] h-40 w-40 md:h-64 md:w-64 rounded-full bg-accent opacity-25 blur-3xl animate-blob" style={{ animationDelay: "-6s" }} />
      <div className="hero-shape pointer-events-none absolute top-[30%] right-[15%] h-20 w-20 md:h-28 md:w-28 border-2 border-primary/40 rotate-45 animate-float" />
      <div className="hero-shape pointer-events-none absolute bottom-[25%] left-[12%] h-16 w-16 md:h-24 md:w-24 rounded-2xl border-2 border-accent/40 animate-float" style={{ animationDelay: "-2s" }} />
      <div className="hero-shape pointer-events-none absolute top-[60%] left-[45%] h-3 w-3 rounded-full bg-primary shadow-glow animate-glow" />
      <div className="hero-shape pointer-events-none absolute top-[20%] right-[35%] h-2 w-2 rounded-full bg-accent shadow-glow-sm animate-glow" style={{ animationDelay: "-1s" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="hero-pill inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Estudio digital · 2026
        </div>

        <h1 className="mt-8 font-display font-bold tracking-tighter leading-[0.95]">
          <span className="hero-line block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
            Construimos
          </span>
          <span className="hero-line block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-gradient-primary animate-gradient-x">
            experiencias
          </span>
          <span className="hero-line block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
            que <span className="italic font-light">importan.</span>
          </span>
        </h1>

        <p className="hero-sub mx-auto mt-8 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Diseñamos y desarrollamos sitios, apps y sistemas digitales con identidad propia.
          Ingeniería de producto, diseño con alma y código que escala.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cotizacion"
            className="hero-cta group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Empezar proyecto
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#servicios"
            className="hero-cta inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-primary/10"
          >
            Ver servicios
          </a>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-6 md:gap-12 max-w-2xl mx-auto">
          {[
            { k: "50+", v: "Proyectos" },
            { k: "8 años", v: "De experiencia" },
            { k: "100%", v: "Compromiso" },
          ].map((s) => (
            <div key={s.v} className="hero-meta text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary">{s.k}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.v}</div>
            </div>
          ))}
        </div>

        <a
          href="#servicios"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span className="font-mono uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
