"use client";

import { MapPin, ArrowDown, BadgeCheck, Cloud, Code2 } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Tilt } from "./Tilt";

export function Hero() {
  const { t, lang } = useLang();

  const fileLabel = lang === "fr" ? "Dossier professionnel" : "Professional file";
  const credentials = [
    { icon: BadgeCheck, label: lang === "fr" ? "Représentant en épargne collective" : "Mutual Fund Representative", sub: "AMF Québec · 2025" },
    { icon: Cloud, label: "AWS Certified Cloud Practitioner", sub: lang === "fr" ? "Valide jusqu'en 2027" : "Valid through 2027" },
    { icon: Code2, label: lang === "fr" ? "Développeur full-stack" : "Full-stack developer", sub: "Next.js · PostgreSQL · Flutter" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-28 md:pt-40 md:pb-36">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold-soft) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-panel-border bg-panel px-4 py-1.5">
            <span className="status-dot h-2 w-2 rounded-full bg-route" />
            <span className="font-mono text-[0.7rem] uppercase tracking-widest text-ink/80">{t.hero.status}</span>
          </div>

          <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-muted">{t.hero.name}</p>

          <h1 className="mt-3 max-w-2xl font-sans text-4xl font-black leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-[3.1rem]">
            {t.hero.headline.map((seg, i) =>
              seg.accent ? (
                <em key={i} className="font-display font-normal text-gold">
                  {seg.text}
                </em>
              ) : (
                <span key={i}>{seg.text}</span>
              )
            )}
          </h1>

          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-ink/80">{t.hero.pitch}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projets"
              className="rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#parcours"
              className="flex items-center gap-2 rounded-full border border-panel-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaSecondary}
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-end gap-x-10 gap-y-6 border-t border-panel-border pt-8">
            {t.about.stats.slice(0, 2).map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl italic text-ink">{s.value}</p>
                <p className="mt-1 max-w-[10rem] font-mono text-[0.65rem] uppercase tracking-widest text-muted">
                  {s.label}
                </p>
              </div>
            ))}
            <p className="flex items-center gap-2 font-mono text-xs text-muted">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {t.hero.location}
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm pt-6 md:max-w-none md:pt-0">
          <span className="absolute -top-3 right-6 z-10 rounded-lg border border-panel-border bg-panel px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-ink shadow-sm">
            {t.hero.tagTop}
          </span>

          <Tilt className="rounded-[1.75rem] border border-panel-border bg-panel p-7 shadow-[0_1px_2px_rgba(20,17,10,0.04)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">{fileLabel}</span>
              <span className="font-mono text-xs tracking-widest text-gold">A.T.D.</span>
            </div>
            <div className="ledger-rule my-5" />

            <ul className="space-y-5">
              {credentials.map((c) => (
                <li key={c.label} className="flex items-start gap-3">
                  <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <div>
                    <p className="text-sm leading-snug text-ink/90">{c.label}</p>
                    <p className="mt-0.5 font-mono text-[0.7rem] text-muted">{c.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Tilt>

          <span className="absolute -bottom-4 left-6 z-10 rounded-lg border border-panel-border bg-panel px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-widest text-ink shadow-sm">
            {t.hero.tagBottom}
          </span>
          <div className="absolute -bottom-5 right-4 z-10 max-w-[13rem] rounded-xl bg-ink px-4 py-3 shadow-lg shadow-black/10">
            <p className="font-mono text-[0.65rem] uppercase tracking-widest text-paper/95">{t.hero.statBadge}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
