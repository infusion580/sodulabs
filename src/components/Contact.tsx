import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "525658751914";

const quickLinks = [
  { label: "Inicio", href: "#hero", short: "01" },
  { label: "Email", href: "mailto:hola@sudolabs.dev", short: "02" },
  { label: "Proyecto", href: "#cotizacion", short: "03" },
];

export function Contact() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".c-anim", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="contacto" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="c-anim mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Contacto
          </div>
          <h2 className="mt-6 font-display text-6xl font-bold leading-[0.9] tracking-tighter md:text-8xl lg:text-9xl">
            Hagamos algo
            <br />
            <span className="text-gradient-primary font-light italic">juntos.</span>
          </h2>
        </div>

        <div className="c-anim mt-16 grid gap-6 md:grid-cols-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-mono font-semibold text-primary-foreground">
              WA
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <div className="mt-2 font-display text-xl font-bold transition group-hover:text-primary">
              Chatea con nosotros
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Respuesta en menos de 1 hora</div>
          </a>

          <a
            href="mailto:hola@sudolabs.dev"
            className="group rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-mono font-semibold text-primary-foreground">
              @
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
            <div className="mt-2 font-display text-xl font-bold transition group-hover:text-primary">
              hola@sudolabs.dev
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Para propuestas formales</div>
          </a>

          <div className="rounded-3xl glass p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-mono font-semibold text-primary-foreground">
              MX
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Ubicación</div>
            <div className="mt-2 font-display text-xl font-bold">Remoto · LATAM</div>
            <div className="mt-3 text-sm text-muted-foreground">Trabajamos con clientes globales</div>
          </div>
        </div>

        <div className="c-anim mt-16 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="flex h-12 w-12 items-center justify-center rounded-full glass text-xs font-mono tracking-widest text-foreground transition-colors hover:bg-primary/20"
              >
                {link.short}
              </a>
            ))}
          </div>
          <a
            href="#cotizacion"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Iniciar proyecto ahora →
          </a>
        </div>
      </div>
    </section>
  );
}
