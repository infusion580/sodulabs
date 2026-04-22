import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
);
const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5z" /></svg>
);

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP_NUMBER = "525658751914";

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingresa tu nombre").max(80, "Máximo 80 caracteres"),
  telefono: z
    .string()
    .trim()
    .min(7, "Teléfono inválido")
    .max(20, "Máximo 20 caracteres")
    .regex(/^[\d+\s\-()]+$/, "Solo números y +-()"),
  tipo: z.enum(["sitio", "sistema"]),
  secciones: z.string().trim().max(300, "Máximo 300 caracteres").optional().or(z.literal("")),
  formularios: z.string().trim().max(300, "Máximo 300 caracteres").optional().or(z.literal("")),
  ideas: z.string().trim().max(1000, "Máximo 1000 caracteres").optional().or(z.literal("")),
});

type FormData = z.infer<typeof schema>;

export function Quote() {
  const root = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { tipo: "sitio" },
  });

  const tipo = watch("tipo");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".q-anim", {
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
      "*Nueva Cotización — Sudo Labs*",
      `*Nombre:* ${data.nombre}`,
      `*Teléfono:* ${data.telefono}`,
      `*Tipo:* ${data.tipo === "sitio" ? "Sitio Web" : "Sistema complejo"}`,
    ];
    if (data.tipo === "sitio") {
      if (data.secciones) lines.push(`*Secciones planeadas:* ${data.secciones}`);
      if (data.formularios) lines.push(`*Formularios posibles:* ${data.formularios}`);
    } else if (data.ideas) {
      lines.push(`*Ideas:* ${data.ideas}`);
    }
    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section ref={root} id="cotizacion" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-50 pointer-events-none" />
      <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl pointer-events-none animate-blob" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="q-anim lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Cotización personalizada
            </div>
            <h2 className="mt-6 font-display text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Cuéntanos
              <br />
              <span className="text-gradient-primary italic font-light">tu idea.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-md">
              Responde unas preguntas rápidas y te enviamos una propuesta a tu WhatsApp en menos de 24h.
            </p>

            <div className="mt-10 space-y-5">
              {[
                { k: "01", v: "Llenas el formulario" },
                { k: "02", v: "Conversamos por WhatsApp" },
                { k: "03", v: "Recibes propuesta personalizada" },
              ].map((step) => (
                <div key={step.k} className="flex items-center gap-4">
                  <div className="font-mono text-sm text-primary">{step.k}</div>
                  <div className="h-px flex-1 bg-border" />
                  <div className="text-sm text-muted-foreground">{step.v}</div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="q-anim glass rounded-3xl p-8 md:p-10 space-y-6"
          >
            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Nombre
              </label>
              <input
                {...register("nombre")}
                placeholder="Tu nombre completo"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              {errors.nombre && <p className="mt-1.5 text-xs text-destructive">{errors.nombre.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                Teléfono
              </label>
              <input
                {...register("telefono")}
                placeholder="+52 555 555 5555"
                className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition"
              />
              {errors.telefono && <p className="mt-1.5 text-xs text-destructive">{errors.telefono.message}</p>}
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                ¿Qué necesitas?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`cursor-pointer rounded-xl border-2 p-4 transition ${
                  tipo === "sitio" ? "border-primary bg-primary/10" : "border-border bg-input/20"
                }`}>
                  <input type="radio" value="sitio" {...register("tipo")} className="sr-only" />
                  <div className="font-display font-bold">Sitio Web</div>
                  <div className="text-xs text-muted-foreground mt-1">Landing, corporativo, blog</div>
                </label>
                <label className={`cursor-pointer rounded-xl border-2 p-4 transition ${
                  tipo === "sistema" ? "border-primary bg-primary/10" : "border-border bg-input/20"
                }`}>
                  <input type="radio" value="sistema" {...register("tipo")} className="sr-only" />
                  <div className="font-display font-bold">Sistema</div>
                  <div className="text-xs text-muted-foreground mt-1">App, ERP, plataforma</div>
                </label>
              </div>
            </div>

            {tipo === "sitio" ? (
              <>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Secciones planeadas
                  </label>
                  <input
                    {...register("secciones")}
                    placeholder="Inicio, Servicios, Nosotros, Blog..."
                    className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                  {errors.secciones && <p className="mt-1.5 text-xs text-destructive">{errors.secciones.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                    Formularios posibles
                  </label>
                  <input
                    {...register("formularios")}
                    placeholder="Contacto, suscripción, reservas..."
                    className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition"
                  />
                  {errors.formularios && <p className="mt-1.5 text-xs text-destructive">{errors.formularios.message}</p>}
                </div>
              </>
            ) : (
              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  Cuéntame tus ideas
                </label>
                <textarea
                  {...register("ideas")}
                  rows={5}
                  placeholder="Describe tu sistema: qué hace, quién lo usa, integraciones..."
                  className="w-full bg-input/40 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                />
                {errors.ideas && <p className="mt-1.5 text-xs text-destructive">{errors.ideas.message}</p>}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-glow-sm transition-all hover:shadow-glow disabled:opacity-50"
            >
              <MessageCircle className="h-4 w-4" />
              {submitted ? "¡Enviado a WhatsApp!" : "Enviar por WhatsApp"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>

            <p className="text-xs text-muted-foreground text-center">
              Al enviar, abriremos WhatsApp con tu cotización pre-llenada.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
