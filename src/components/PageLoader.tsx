import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Logo } from "@/components/Logo";

export function PageLoader() {
  const [done, setDone] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

    // Skip loader entirely if user prefers reduced motion
    if (reduce) {
      setDone(true);
      return;
    }

    // Faster on mobile to feel instant
    const countDur = isMobile ? 0.7 : 1.2;
    const outDur = isMobile ? 0.55 : 0.8;

    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    const counter = { v: 0 };
    tl.to(counter, {
      v: 100,
      duration: countDur,
      ease: "power2.inOut",
      onUpdate: () => {
        if (counterRef.current)
          counterRef.current.textContent = Math.round(counter.v)
            .toString()
            .padStart(3, "0");
        if (barRef.current) barRef.current.style.width = `${counter.v}%`;
      },
    })
      .to(
        wordRef.current,
        { y: -30, opacity: 0, duration: 0.35, ease: "power3.in" },
        "-=0.15"
      )
      .to(containerRef.current, {
        yPercent: -100,
        duration: outDur,
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
      <div ref={wordRef} className="relative font-display text-3xl md:text-5xl">
        <Logo size={64} />
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
