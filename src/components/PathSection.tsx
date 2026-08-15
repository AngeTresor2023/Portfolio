"use client";

import { useEffect, useRef, useState } from "react";
import { GraduationCap, Wrench, Landmark, Target } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import type { Waypoint } from "@/lib/content";

const ICONS: Record<Waypoint["kind"], typeof GraduationCap> = {
  formation: GraduationCap,
  role: Wrench,
  credential: Landmark,
  target: Target,
};

export function PathSection() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="parcours" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.pathHeading}</h2>
      <p className="mt-4 max-w-2xl text-lg text-ink/80">{t.pathSub}</p>

      <div ref={ref} className="relative mt-16 pl-8 md:pl-10">
        <div
          className="absolute left-[7px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-gold via-gold to-route transition-transform duration-[1600ms] ease-out md:left-[9px]"
          style={{ transform: started ? "scaleY(1)" : "scaleY(0)" }}
          aria-hidden
        />

        <ol className="space-y-10">
          {t.waypoints.map((wp, i) => {
            const Icon = ICONS[wp.kind];
            const isTarget = wp.kind === "target";
            return (
              <li key={wp.title} className="relative">
                <span
                  className={`route-node absolute -left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full border md:-left-10 ${
                    isTarget ? "border-dashed border-route bg-paper" : "border-gold bg-paper"
                  }`}
                  style={{ animationDelay: started ? `${300 + i * 180}ms` : "0ms", animationFillMode: "both" }}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isTarget ? "bg-route" : "bg-gold"}`} />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className="font-mono text-xs tracking-wide text-muted">{wp.period}</span>
                  <Icon className={`h-3.5 w-3.5 ${isTarget ? "text-route" : "text-gold"}`} />
                </div>
                <h3 className={`mt-1.5 font-display text-xl ${isTarget ? "text-route" : "text-ink"}`}>
                  {wp.title}
                </h3>
                <p className="mt-0.5 text-sm text-ink/60">{wp.place}</p>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/75">{wp.detail}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
