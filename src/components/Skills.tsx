"use client";

import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";

export function Skills() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.skillsHeading}</p>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {t.skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 100}>
            <Tilt className="h-full rounded-2xl border border-panel-border bg-panel p-6">
              <h3 className="font-display text-lg text-ink">{group.label}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink/75">
                    <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </ul>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
