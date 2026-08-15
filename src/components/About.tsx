"use client";

import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();

  return (
    <section id="profil" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.about.heading}</p>
      </Reveal>

      <div className="mt-8 grid gap-14 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5">
          {t.about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-ink/85">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-2xl border border-panel-border bg-panel p-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">Résumé / Summary</p>
            <div className="ledger-rule my-4" />
            <dl className="grid grid-cols-2 gap-y-6">
              {t.about.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl text-gold">{s.value}</dt>
                  <dd className="mt-1 text-xs leading-snug text-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
