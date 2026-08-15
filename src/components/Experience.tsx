"use client";

import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";

export function Experience() {
  const { t } = useLang();

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.experienceHeading}</p>
        <p className="mt-4 max-w-2xl text-lg text-paper/80">{t.experienceSub}</p>
      </Reveal>

      <div className="mt-14 divide-y divide-panel-border border-y border-panel-border">
        {t.jobs.map((job, i) => (
          <Reveal key={job.title + job.period} delay={i * 60}>
            <div className="grid gap-3 py-7 md:grid-cols-[180px_1fr] md:gap-8">
              <p className="font-mono text-xs uppercase tracking-wide text-muted">{job.period}</p>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <h3 className="font-display text-xl text-paper">{job.title}</h3>
                  <span className="text-sm text-gold">— {job.org}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{job.place}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/75">{job.detail}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-panel-border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
