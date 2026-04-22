import { ShieldIcon as Shield, BookOpenIcon as BookOpen, ArrowUpRightIcon as ArrowUpRight } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { TiltCard } from "@/components/TiltCard";
import { MagneticButton } from "@/components/MagneticButton";

const WHATSAPP_NUMBER = "5215555555555";

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
  return (
    <section id="labs" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Sudo Labs · Innovación
              </div>
              <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Nuestros
                <br />
                <span className="text-gradient-primary animate-gradient-x font-light italic">experimentos.</span>
              </h2>
            </div>
            <p className="max-w-md text-lg text-muted-foreground">
              Productos propios donde probamos ideas, tecnologías y formas de resolver problemas reales.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {labs.map((lab, i) => (
            <Reveal key={lab.name} delay={i * 120}>
              <TiltCard className="h-full" max={6}>
                <div className="shine relative h-full overflow-hidden rounded-3xl glass p-8 transition-shadow duration-500 hover:shadow-glow md:p-10">
                  <div className={`absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br ${lab.color} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`} />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${lab.color} shadow-glow-sm`}>
                      <lab.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <span className="rounded-full glass px-3 py-1 font-mono text-xs uppercase tracking-widest">
                      {lab.tag}
                    </span>
                  </div>

                  <h3 className="relative mt-8 font-display text-3xl font-bold md:text-4xl">{lab.name}</h3>
                  <p className="relative mt-4 text-base leading-relaxed text-muted-foreground">{lab.desc}</p>

                  <MagneticButton
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hola Sudo Labs, me interesa pedir una demo de "${lab.name}".`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-8 items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm hover:shadow-glow"
                  >
                    Pedir demo
                    <ArrowUpRight className="h-4 w-4" />
                  </MagneticButton>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
