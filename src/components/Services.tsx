import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";

const { Palette, Code2, Megaphone, Lightbulb } = LucideIcons;

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Palette,
    title: "Branding e Identidad de Marca",
    desc: "Nuestra agencia creativa es un equipo de profesionales enfocados en hacer crecer tu marca.",
  },
  {
    icon: Code2,
    title: "Diseño y Desarrollo Web",
    desc: "Nuestra agencia creativa es un equipo de profesionales enfocados en hacer crecer tu marca.",
  },
  {
    icon: Megaphone,
    title: "Publicidad y Campañas de Marketing",
    desc: "Nuestra agencia creativa es un equipo de profesionales enfocados en hacer crecer tu marca.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Creativa y Desarrollo",
    desc: "Nuestra agencia creativa es un equipo de profesionales enfocados en hacer crecer tu marca.",
  },
];

export function Services() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".srv-title", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: { trigger: ".srv-title", start: "top 85%" },
      });
      gsap.from(".srv-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "expo.out",
        scrollTrigger: { trigger: ".srv-grid", start: "top 80%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="servicios" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="srv-title max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Servicios
          </div>
          <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
            Lo que hacemos,
            <br />
            <span className="text-gradient-primary italic font-light">lo hacemos bien.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Desde una landing hasta un sistema completo: diseñamos, construimos y escalamos.
          </p>
        </div>

        <div className="srv-grid mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="srv-card group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-sm">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  <span>0{i + 1}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-primary">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
