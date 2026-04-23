import { useEffect, useRef, useState } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
}

/**
 * Texto que se "ilumina" palabra por palabra según el scroll lo cruza.
 * Estilo Apple/marketing premium.
 */
export function RevealText({ text, className = "" }: RevealTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (mq?.matches) {
      setReduce(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = vh + r.height;
      const seen = vh - r.top;
      const p = Math.max(0, Math.min(1, seen / total));
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Si el usuario pide reducir movimiento, mostramos texto plano y legible
  if (reduce) {
    return (
      <p ref={ref} className={className} style={{ color: "var(--foreground)" }}>
        {text}
      </p>
    );
  }

  const words = text.split(" ");
  const total = words.length;
  const active = progress * total * 1.4;

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const lit = Math.max(0, Math.min(1, active - i));
        // Mantener mínimo 35% de mezcla para que las palabras "no leídas"
        // sigan teniendo contraste accesible (>= 4.5:1 sobre fondo oscuro).
        const visible = 35 + lit * 65;
        return (
          <span
            key={`${w}-${i}`}
            style={{
              color: `color-mix(in oklab, var(--foreground) ${visible}%, var(--muted-foreground))`,
              transition: "color 250ms ease-out",
            }}
          >
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        );
      })}
    </p>
  );
}
