"use client";

import Image from "next/image";
import { MapPin, ArrowDown } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import headshot from "../../public/sansfond1.png";

export function Hero() {
  const { t } = useLang();

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

        <div className="relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-panel-border bg-panel">
            <Image
              src={headshot}
              alt={t.hero.name}
              fill
              priority
              sizes="(max-width: 768px) 320px, 420px"
              className="object-cover"
              style={{ objectPosition: "50% 12%" }}
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
          </div>
          <div className="absolute -bottom-3 -left-3 rounded-xl border border-panel-border bg-ink px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-gold shadow-lg shadow-black/40">
            AMF · AWS · Full-Stack
          </div>
        </div>
      </div>
    </section>
  );
}
