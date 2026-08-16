"use client";

import { useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";

const MAX_TILT_DEG = 7;

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState<string>("perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)");

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTransform(
      `perspective(900px) rotateX(${(-py * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(px * MAX_TILT_DEG).toFixed(2)}deg) translateY(-4px) scale(1.015)`,
    );
  }

  function handleMouseLeave() {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)");
  }

  const style: CSSProperties = {
    transform,
    transition: "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={style} className={className}>
      {children}
    </div>
  );
}
