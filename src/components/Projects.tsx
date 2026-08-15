"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";
import { Tilt } from "./Tilt";
import type { Project } from "@/lib/content";

function siteHost(href: string) {
  try {
    return new URL(href).hostname;
  } catch {
    return href;
  }
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { t } = useLang();

  return (
    <Reveal delay={index * 80}>
      <Tilt className="overflow-hidden rounded-2xl border border-panel-border bg-panel transition-colors hover:border-gold/50">
        {project.preview && project.href && (
          <a href={project.href} target="_blank" rel="noreferrer noopener" className="group block">
            <div className="flex items-center gap-2 border-b border-panel-border bg-paper/60 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-panel-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-panel-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-panel-border" />
              <span className="ml-2 truncate rounded-full bg-panel px-3 py-0.5 font-mono text-[0.65rem] text-muted">
                {siteHost(project.href)}
              </span>
              <ExternalLink className="ml-auto h-3.5 w-3.5 shrink-0 text-muted transition-colors group-hover:text-gold" />
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-paper">
              <Image
                src={project.preview}
                alt={`${project.name} · aperçu du site en production`}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
          </a>
        )}

        <div className="p-7 md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-3xl text-ink">{project.name}</h3>
              <p className="mt-1.5 text-gold">{project.tagline}</p>
            </div>
            <span className="whitespace-nowrap rounded-full border border-route/40 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-route">
              {project.status}
            </span>
          </div>

          <p className="mt-5 max-w-3xl text-[0.95rem] leading-relaxed text-ink/80">{project.description}</p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {project.facts.map((fact) => (
              <li key={fact} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                {fact}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-panel-border pt-6">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span key={tech} className="rounded-full bg-paper px-3 py-1 font-mono text-[0.65rem] tracking-wide text-muted">
                  {tech}
                </span>
              ))}
            </div>
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                className="flex shrink-0 items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-gold hover:text-gold-soft"
              >
                {t.visitLabel}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </Tilt>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLang();

  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.projectsHeading}</p>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">{t.projectsSub}</p>
      </Reveal>

      <div className="mt-14 space-y-6">
        {t.projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
