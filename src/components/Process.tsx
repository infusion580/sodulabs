import { SearchIcon, PencilIcon, TerminalIcon, RocketIcon } from "@/components/icons";

const steps = [
  {
    icon: SearchIcon,
    n: "01",
    title: "Descubrimiento",
    desc: "Entendemos tu negocio, objetivos y usuarios. Definimos alcance, prioridades y métricas de éxito.",
  },
  {
    icon: PencilIcon,
    n: "02",
    title: "Diseño",
    desc: "Wireframes, prototipos y sistema visual. Iteramos contigo hasta dar con la pieza correcta.",
  },
  {
    icon: TerminalIcon,
    n: "03",
    title: "Desarrollo",
    desc: "Construimos con código limpio, pruebas y revisiones continuas. Avances semanales en vivo.",
  },
  {
    icon: RocketIcon,
    n: "04",
    title: "Lanzamiento",
    desc: "Despliegue, monitoreo y soporte. Te acompañamos en la evolución del producto.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Proceso
          </div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
            Cómo
            <br />
            <span className="text-gradient-primary font-light italic">trabajamos.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Un proceso transparente, en sprints cortos, con entregas continuas y feedback constante.
          </p>
        </div>

        <div className="relative">
          {/* línea conectora desktop */}
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />

          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group relative rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm"
              >
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-sm">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="font-mono text-xs uppercase tracking-widest text-primary">{s.n}</div>
                <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
