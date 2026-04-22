import { useEffect, useRef } from "react";

/**
 * Capa de fondo global: grid sutil + blobs aurora + noise + spotlight que sigue al cursor.
 * Se monta una sola vez y queda fija detrás de todo el contenido.
 */
export function BackgroundFX() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const tick = () => {
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      if (spotRef.current) {
        spotRef.current.style.background = `radial-gradient(600px circle at ${cx}px ${cy}px, oklch(0.62 0.24 295 / 0.18), transparent 60%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid animado sutil */}
      <div className="absolute inset-0 grid-bg opacity-[0.18] animate-grid-pan" />

      {/* Aurora blobs */}
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/20 blur-3xl animate-aurora" />
      <div
        className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl animate-aurora"
        style={{ animationDelay: "-8s", animationDuration: "26s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-primary-glow/15 blur-3xl animate-aurora"
        style={{ animationDelay: "-14s", animationDuration: "32s" }}
      />

      {/* Spotlight que sigue al cursor */}
      <div ref={spotRef} className="absolute inset-0 transition-[background] duration-150" />

      {/* Noise/grain overlay */}
      <div className="absolute inset-0 noise" />
    </div>
  );
}
