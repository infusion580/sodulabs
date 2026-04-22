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

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 cuando el bloque acaba de entrar por abajo, 1 cuando sale por arriba
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

  const words = text.split(" ");
  const total = words.length;
  // mapear progress (0..1) a una "ventana" de palabras iluminadas
  const active = progress * total * 1.4;

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => {
        const lit = Math.max(0, Math.min(1, active - i));
        return (
          <span
            key={`${w}-${i}`}
            style={{
              color: `color-mix(in oklab, var(--foreground) ${lit * 100}%, var(--muted-foreground))`,
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
