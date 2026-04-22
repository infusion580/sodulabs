const TECH = [
  "React", "TypeScript", "Next.js", "TanStack", "Tailwind", "Node.js",
  "PostgreSQL", "Supabase", "OpenAI", "Stripe", "Figma", "GSAP",
  "React Native", "Vite", "Cloudflare", "Framer Motion",
];

export function Marquee() {
  const items = [...TECH, ...TECH];
  return (
    <section aria-label="Tecnologías" className="relative border-y border-border/50 bg-background/40 py-10 backdrop-blur-sm">
      <div className="mx-auto mb-6 max-w-7xl px-6">
        <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Stack que dominamos
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-12 px-6">
          {items.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="font-display text-3xl font-semibold text-muted-foreground/60 transition-colors hover:text-foreground md:text-4xl"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
