import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "¿Cuánto tarda un proyecto típico?",
    a: "Una landing va de 2 a 4 semanas. Un sitio corporativo o e-commerce, entre 4 y 8 semanas. Apps y sistemas a medida arrancan en 6 semanas. Te damos un cronograma detallado en la propuesta.",
  },
  {
    q: "¿Cómo manejan los pagos?",
    a: "Trabajamos con un anticipo del 40% para arrancar, 30% en la entrega del diseño y 30% al lanzamiento. Aceptamos transferencia, Stripe y crypto.",
  },
  {
    q: "¿Qué pasa después del lanzamiento?",
    a: "Te dejamos todo entregado, documentado y funcionando. Puedes contratar nuestro plan de mantenimiento mensual o seguir solo: el código es 100% tuyo.",
  },
  {
    q: "¿Trabajan con clientes fuera de LATAM?",
    a: "Sí. Trabajamos 100% remoto y hemos colaborado con clientes en USA, Europa y Asia. Nos adaptamos a tu zona horaria para reuniones clave.",
  },
  {
    q: "¿Pueden integrar IA en mi producto?",
    a: "Es nuestra especialidad. Integramos LLMs, agentes, RAG, automatizaciones y pipelines. Te ayudamos a decidir qué tiene sentido para tu caso.",
  },
  {
    q: "¿Hacen solo diseño o solo desarrollo?",
    a: "Sí. Podemos entrar en cualquier parte del proceso: solo diseño, solo desarrollo, auditorías o como equipo extendido del tuyo.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-mono uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              FAQ
            </div>
            <h2 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Preguntas
              <br />
              <span className="text-gradient-primary animate-gradient-x font-light italic">frecuentes.</span>
            </h2>
          </div>
        </Reveal>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <AccordionItem
                value={`item-${i}`}
                className="rounded-3xl glass border-0 px-6 transition-colors hover:bg-primary/5"
              >
                <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold hover:no-underline md:text-xl">
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-primary">0{i + 1}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            </Reveal>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
