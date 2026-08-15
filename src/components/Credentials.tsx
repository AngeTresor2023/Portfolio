"use client";

import { Award, GraduationCap, Languages } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";

export function Credentials() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.credentialsHeading}</h2>
      </Reveal>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <Reveal>
          <div className="flex items-center gap-2 text-ink">
            <GraduationCap className="h-4 w-4 text-gold" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Éducation / Education</h3>
          </div>
          <ul className="mt-5 space-y-6">
            {t.education.map((e) => (
              <li key={e.school}>
                <p className="font-display text-lg text-ink">{e.school}</p>
                <p className="text-sm text-ink/70">{e.degree}</p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {e.period} · {e.note}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex items-center gap-2 text-ink">
            <Award className="h-4 w-4 text-gold" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Certifications</h3>
          </div>
          <ul className="mt-5 space-y-6">
            {t.certifications.map((c) => (
              <li key={c.name}>
                <p className="font-display text-lg text-ink">{c.name}</p>
                <p className="text-sm text-ink/70">{c.issuer}</p>
                <p className="mt-1 font-mono text-xs text-muted">{c.date}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex items-center gap-2 text-ink">
            <Languages className="h-4 w-4 text-gold" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted">Langues / Languages</h3>
          </div>
          <ul className="mt-5 space-y-6">
            {t.languages.map((l) => (
              <li key={l.name}>
                <p className="font-display text-lg text-ink">{l.name}</p>
                <p className="mt-1 font-mono text-xs text-muted">{l.level}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
