import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "525658751914";

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
);
const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" /></svg>
);

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(80, "Máximo 80 caracteres"),
  telefono: z
    .string()
    .trim()
    .min(7, "Teléfono inválido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[\d+\s\-()]+$/, "Solo números y +-()"),
  empresa: z.string().trim().max(80, "Máximo 80 caracteres").optional().or(z.literal("")),
  asunto: z.enum(["proyecto", "consultoria", "soporte", "alianza", "otro"]),
  presupuesto: z.enum(["menos-2k", "2k-5k", "5k-15k", "15k-mas", "no-se"]),
  mensaje: z.string().trim().min(10, "Mínimo 10 caracteres").max(1000, "Máximo 1000 caracteres"),
});

type FormData = z.infer<typeof schema>;

const asuntoLabels: Record<FormData["asunto"], string> = {
  proyecto: "Nuevo proyecto",
  consultoria: "Consultoría",
  soporte: "Soporte / mantenimiento",
  alianza: "Alianza / colaboración",
  otro: "Otro",
};

const presupuestoLabels: Record<FormData["presupuesto"], string> = {
  "menos-2k": "Menos de USD 2,000",
  "2k-5k": "USD 2,000 — 5,000",
  "5k-15k": "USD 5,000 — 15,000",
  "15k-mas": "USD 15,000+",
  "no-se": "Aún no lo sé",
};

export function Contact() {
  const root = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { asunto: "proyecto", presupuesto: "no-se" },
  });

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

  const onSubmit = (data: FormData) => {
    const lines = [
      "*Nuevo Contacto — Sudo Labs*",
      `*Nombre:* ${data.nombre}`,
      `*Teléfono:* ${data.telefono}`,
    ];
    if (data.empresa) lines.push(`*Empresa:* ${data.empresa}`);
    lines.push(`*Asunto:* ${asuntoLabels[data.asunto]}`);
    lines.push(`*Presupuesto:* ${presupuestoLabels[data.presupuesto]}`);
    lines.push(`*Mensaje:* ${data.mensaje}`);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset({ asunto: "proyecto", presupuesto: "no-se" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section ref={root} id="contacto" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

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
          <p className="mt-6 text-lg text-muted-foreground">
            Cuéntanos sobre ti y te respondemos por WhatsApp en menos de 1 hora.
          </p>
        </div>

        <div className="c-anim mt-16 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6 lg:sticky lg:top-32">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow-sm"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-mono font-semibold text-primary-foreground">
                WA
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">WhatsApp directo</div>
              <div className="mt-2 font-display text-xl font-bold transition group-hover:text-primary">
                Chatea con nosotros
              </div>
              <div className="mt-3 text-sm text-muted-foreground">Respuesta en menos de 1 hora</div>
            </a>

            <div className="rounded-3xl glass p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-primary text-sm font-mono font-semibold text-primary-foreground">
                MX
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Ubicación</div>
              <div className="mt-2 font-display text-xl font-bold">Remoto · LATAM</div>
              <div className="mt-3 text-sm text-muted-foreground">Trabajamos con clientes globales</div>
            </div>

            <div className="rounded-3xl glass p-8">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Horario</div>
              <div className="mt-2 font-display text-xl font-bold">Lun — Vie · 9:00 a 19:00</div>
              <div className="mt-3 text-sm text-muted-foreground">Hora Ciudad de México (GMT-6)</div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="glass rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Nombre
                </label>
                <input
                  {...register("nombre")}
                  placeholder="Tu nombre completo"
                  className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.nombre && <p className="mt-1.5 text-xs text-destructive">{errors.nombre.message}</p>}
              </div>

              <div>
                <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Teléfono / WhatsApp
                </label>
                <input
                  {...register("telefono")}
                  placeholder="+52 555 555 5555"
                  className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                {errors.telefono && <p className="mt-1.5 text-xs text-destructive">{errors.telefono.message}</p>}
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Empresa <span className="normal-case text-muted-foreground/60">(opcional)</span>
              </label>
              <input
                {...register("empresa")}
                placeholder="Nombre de tu empresa o marca"
                className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.empresa && <p className="mt-1.5 text-xs text-destructive">{errors.empresa.message}</p>}
            </div>

            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Asunto
              </label>
              <select
                {...register("asunto")}
                className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {Object.entries(asuntoLabels).map(([value, label]) => (
                  <option key={value} value={value} className="bg-background">
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Presupuesto estimado
              </label>
              <select
                {...register("presupuesto")}
                className="w-full rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground transition focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {Object.entries(presupuestoLabels).map(([value, label]) => (
                  <option key={value} value={value} className="bg-background">
                    {label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Mensaje
              </label>
              <textarea
                {...register("mensaje")}
                rows={5}
                placeholder="Cuéntanos brevemente qué necesitas, plazos y cualquier detalle relevante..."
                className="w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-3 text-foreground transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.mensaje && <p className="mt-1.5 text-xs text-destructive">{errors.mensaje.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-all hover:shadow-glow disabled:opacity-50"
            >
              <MessageCircle className="h-4 w-4" />
              {submitted ? "¡Enviado a WhatsApp!" : "Enviar por WhatsApp"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Al enviar, abriremos WhatsApp con tu mensaje pre-llenado.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
