import { PaletteIcon as Palette, Code2Icon as Code2, MegaphoneIcon as Megaphone, LightbulbIcon as Lightbulb } from "@/components/icons";

const services = [
  {
    icon: Code2,
    title: "Diseño y Desarrollo Web",
    desc: "Sitios y plataformas rápidas, accesibles y escalables, diseñadas a medida para convertir visitantes en clientes.",
  },
  {
    icon: Palette,
    title: "Desarrollo de Apps",
    desc: "Aplicaciones móviles y web a medida, con experiencias fluidas, performance sólida y arquitectura preparada para crecer.",
  },
  {
    icon: Megaphone,
    title: "Gestión Profesional de Proyectos",
    desc: "Coordinamos equipos, tiempos y entregables con metodologías ágiles para que tu proyecto avance con claridad y sin fricciones.",
  },
  {
    icon: Lightbulb,
    title: "Consultoría Creativa y de Desarrollo",
    desc: "Asesoría estratégica para definir producto, stack y dirección creativa, alineando tecnología con los objetivos de tu negocio.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Servicios
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Lo que hacemos,
            <br />
            <span className="text-gradient-primary font-light italic">lo hacemos bien.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Desde una landing hasta un sistema completo: diseñamos, construimos y escalamos.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-sm">
                  <s.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
