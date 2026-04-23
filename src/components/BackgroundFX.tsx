import { useEffect, useRef, useState } from "react";

/**
 * Capa de fondo global: grid sutil + blobs aurora + noise + spotlight (solo desktop).
 * En móvil se reduce drásticamente la cantidad/intensidad de capas para mejorar FPS.
 */
export function BackgroundFX() {
  const spotRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mqMobile = window.matchMedia("(max-width: 768px)");
    setIsMobile(mqMobile.matches);
    const onMobileChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mqMobile.addEventListener("change", onMobileChange);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce || mqMobile.matches) {
      return () => mqMobile.removeEventListener("change", onMobileChange);
    }

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
      mqMobile.removeEventListener("change", onMobileChange);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Grid: estático y más sutil en móvil; animado en desktop */}
      <div
        className={`absolute inset-0 grid-bg opacity-[0.18] ${isMobile ? "" : "animate-grid-pan"}`}
      />

      {/* Aurora blobs — sólo 1 en móvil, 3 en desktop */}
      <div className="absolute -top-40 -left-40 h-[24rem] w-[24rem] md:h-[40rem] md:w-[40rem] rounded-full bg-primary/20 blur-3xl md:animate-aurora" />
      {!isMobile && (
        <>
          <div
            className="absolute top-1/3 -right-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl animate-aurora"
            style={{ animationDelay: "-8s", animationDuration: "26s" }}
          />
          <div
            className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-primary-glow/15 blur-3xl animate-aurora"
            style={{ animationDelay: "-14s", animationDuration: "32s" }}
          />
        </>
      )}

      {/* Spotlight sólo en desktop con puntero fino */}
      {!isMobile && <div ref={spotRef} className="absolute inset-0 transition-[background] duration-150" />}

      {/* Noise overlay — sólo desktop (en móvil añade coste sin verse) */}
      {!isMobile && <div className="absolute inset-0 noise" />}
    </div>
  );
}
