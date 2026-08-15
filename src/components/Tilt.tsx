"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const tiltY = (px - 0.5) * 10;
    const tiltX = (0.5 - py) * 10;
    el.style.setProperty("--tilt-x", `${tiltX}deg`);
    el.style.setProperty("--tilt-y", `${tiltY}deg`);
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }

  return (
    <div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`tilt-card relative ${className}`}
    >
      <div className="tilt-aura pointer-events-none absolute -inset-px rounded-[inherit]" aria-hidden />
      {children}
    </div>
  );
}
