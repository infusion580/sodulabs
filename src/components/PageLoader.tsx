import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setTimeout(() => setDone(true), 200),
    });

    const counter = { v: 0 };
    tl.to(counter, {
      v: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current) counterRef.current.textContent = Math.round(counter.v).toString().padStart(3, "0");
        if (barRef.current) barRef.current.style.width = `${counter.v}%`;
      },
    })
      .to(wordRef.current, { y: -40, opacity: 0, duration: 0.5, ease: "power3.in" }, "-=0.2")
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "expo.inOut",
      });
  }, []);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="absolute inset-0 bg-gradient-radial opacity-60" />
      <div ref={wordRef} className="relative font-display text-5xl md:text-7xl font-bold tracking-tight">
        <span className="text-gradient-primary">SUDO LABS</span>
      </div>
      <div className="relative mt-10 w-64 md:w-80">
        <div className="h-px w-full bg-border overflow-hidden">
          <div ref={barRef} className="h-full bg-gradient-primary" style={{ width: "0%" }} />
        </div>
        <div className="mt-3 flex justify-between text-xs font-mono text-muted-foreground">
          <span>LOADING</span>
          <span ref={counterRef}>000</span>
        </div>
      </div>
    </div>
  );
}
