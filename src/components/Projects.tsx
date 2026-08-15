"use client";

import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/content";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 80}>
      <article className="group relative overflow-hidden rounded-2xl border border-panel-border bg-panel p-7 transition-colors hover:border-gold/50 md:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-3xl text-paper">{project.name}</h3>
            <p className="mt-1.5 text-gold">{project.tagline}</p>
          </div>
          <span className="whitespace-nowrap rounded-full border border-route/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-route">
            {project.status}
          </span>
        </div>

        <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-paper/80">{project.description}</p>

        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
          {project.facts.map((fact) => (
            <li key={fact} className="flex gap-2.5 text-sm leading-relaxed text-paper/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {fact}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-2 border-t border-panel-border pt-6">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-ink px-3 py-1 font-mono text-[0.65rem] tracking-wide text-muted">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.projectsHeading}</p>
        <p className="mt-4 max-w-2xl text-lg text-paper/80">{t.projectsSub}</p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {t.projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
