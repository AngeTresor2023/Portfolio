"use client";

import { MapPin, ArrowDown, BadgeCheck, Cloud, Code2 } from "lucide-react";
import { useLang } from "@/lib/lang-context";

export function Hero() {
  const { t, lang } = useLang();

  const fileLabel = lang === "fr" ? "Dossier professionnel" : "Professional file";
  const credentials = [
    { icon: BadgeCheck, label: lang === "fr" ? "Représentant en épargne collective" : "Mutual Fund Representative", sub: "AMF Québec · 2025" },
    { icon: Cloud, label: "AWS Certified Cloud Practitioner", sub: lang === "fr" ? "Valide jusqu'en 2027" : "Valid through 2027" },
    { icon: Code2, label: lang === "fr" ? "Développeur full-stack" : "Full-stack developer", sub: "Next.js · PostgreSQL · Flutter" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-gold) 0%, transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.hero.eyebrow}</p>

          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-paper sm:text-6xl md:text-[3.6rem]">
            {t.hero.name}
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm text-muted">
            {t.hero.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-2">
                <span className={i === t.hero.roles.length - 1 ? "text-gold" : ""}>{role}</span>
                {i < t.hero.roles.length - 1 && <span className="text-panel-border">/</span>}
              </span>
            ))}
          </p>

          <p className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-paper/85">{t.hero.pitch}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projets"
              className="rounded-full bg-gold px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#parcours"
              className="flex items-center gap-2 rounded-full border border-panel-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaSecondary}
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {t.hero.location}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="rounded-[1.75rem] border border-panel-border bg-panel p-7">
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
                    <p className="text-sm leading-snug text-paper/90">{c.label}</p>
                    <p className="mt-0.5 font-mono text-[0.7rem] text-muted">{c.sub}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ledger-rule my-5" />
            <p className="flex items-center gap-2 font-mono text-[0.7rem] text-muted">
              <MapPin className="h-3.5 w-3.5 text-gold" />
              {t.hero.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
