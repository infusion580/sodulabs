import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MessageCircle, MapPin, Instagram, Linkedin, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "5215555555555";

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
    <section ref={root} id="contacto" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="c-anim text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Contacto
          </div>
          <h2 className="mt-6 font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
            Hagamos algo
            <br />
            <span className="text-gradient-primary italic font-light">juntos.</span>
          </h2>
        </div>

        <div className="c-anim mt-16 grid md:grid-cols-3 gap-6">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-sm"
          >
            <Icons.MessageCircle className="mb-4 h-8 w-8 text-primary" />
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">WhatsApp</div>
            <div className="mt-2 font-display text-xl font-bold group-hover:text-gradient-primary transition">
              Chatea con nosotros
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Respuesta en menos de 1 hora</div>
          </a>

          <a
            href="mailto:hola@sudolabs.dev"
            className="group glass rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 hover:shadow-glow-sm"
          >
            <Icons.Mail className="mb-4 h-8 w-8 text-primary" />
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</div>
            <div className="mt-2 font-display text-xl font-bold group-hover:text-gradient-primary transition">
              hola@sudolabs.dev
            </div>
            <div className="mt-3 text-sm text-muted-foreground">Para propuestas formales</div>
          </a>

          <div className="group glass rounded-3xl p-8">
            <Icons.MapPin className="mb-4 h-8 w-8 text-primary" />
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Ubicación</div>
            <div className="mt-2 font-display text-xl font-bold">Remoto · LATAM</div>
            <div className="mt-3 text-sm text-muted-foreground">Trabajamos con clientes globales</div>
          </div>
        </div>

        <div className="c-anim mt-16 flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            {[
              { icon: Icons.Instagram, href: "#" },
              { icon: Icons.Linkedin, href: "#" },
              { icon: Icons.Github, href: "#" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full glass transition-colors hover:bg-primary/20"
              >
                <s.icon className="h-5 w-5" />
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
