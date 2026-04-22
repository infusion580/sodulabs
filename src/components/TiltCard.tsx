import { useRef, type ReactNode, type CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Intensidad máxima de inclinación (grados). */
  max?: number;
  style?: CSSProperties;
}

/**
 * Tarjeta con tilt 3D + borde gradient animado + shine sweep en hover.
 * El inner se inclina suavemente siguiendo el cursor.
 */
export function TiltCard({ children, className = "", max = 8, style }: TiltCardProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrap.current;
    const card = inner.current;
    if (!el || !card) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * (max * 2);
    const ry = (x - 0.5) * (max * 2);
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    card.style.setProperty("--mx", `${x * 100}%`);
    card.style.setProperty("--my", `${y * 100}%`);
  };

  const onLeave = () => {
    const card = inner.current;
    if (!card) return;
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-card group ${className}`}
      style={style}
    >
      <div ref={inner} className="tilt-card-inner">
        {children}
      </div>
    </div>
  );
}
