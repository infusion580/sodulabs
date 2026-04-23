import { useEffect, useRef, useState } from "react";

/**
 * Cursor seguidor con punto central + anillo suave.
 * Solo se activa en dispositivos con puntero fino (desktop).
 */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!mq.matches || reduce) return;
    setEnabled(true);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (!ring.current) return;
      const interactive = t?.closest("a, button, [role=button], input, textarea, select, label");
      ring.current.dataset.hover = interactive ? "true" : "false";
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (ring.current) {
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ring}
        data-hover="false"
        data-custom-cursor=""
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-10 w-10 rounded-full border border-primary/60 transition-[width,height,background-color,border-color] duration-200 ease-out data-[hover=true]:h-14 data-[hover=true]:w-14 data-[hover=true]:bg-primary/15 data-[hover=true]:border-primary"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={dot}
        data-custom-cursor=""
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-primary"
      />
    </>
  );
}
