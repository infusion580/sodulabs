import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, BookOpen, ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const labs = [
  {
    icon: Shield,
    name: "App de Seguridad",
    tag: "En desarrollo",
    desc: "Plataforma móvil de seguridad personal: alertas, monitoreo en tiempo real y red de contactos de confianza.",
    color: "from-primary to-accent",
  },
  {
    icon: BookOpen,
    name: "Blogero Automatizado",
    tag: "Beta",
    desc: "Sistema de generación y publicación automática de blogs con IA. Investiga, redacta, optimiza SEO y publica.",
    color: "from-accent to-primary-glow",
  },
];

export function Labs() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".labs-anim", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="labs" className="relative py-32 overflow-hidden">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="labs-anim flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Sudo Labs · Innovación
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Nuestros
              <br />
              <span className="text-gradient-primary italic font-light">experimentos.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md">
            Productos propios donde probamos ideas, tecnologías y formas de resolver problemas reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {labs.map((lab) => (
            <div
              key={lab.name}
              className="labs-anim group relative overflow-hidden rounded-3xl glass p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${lab.color} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />

              <div className="relative flex items-start justify-between">
                <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${lab.color} shadow-glow-sm`}>
                  <lab.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <span className="font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full glass">
                  {lab.tag}
                </span>
              </div>

              <h3 className="relative mt-8 font-display text-3xl md:text-4xl font-bold">{lab.name}</h3>
              <p className="relative mt-4 text-base text-muted-foreground leading-relaxed">{lab.desc}</p>

              <div className="relative mt-8 flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary-glow transition-colors">
                Conocer más
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
