"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";
import type { Project } from "@/lib/content";

function siteHost(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "");
  } catch {
    return href;
  }
}

function StatusPill({ status }: { status: string }) {
  const live = /prod/i.test(status);
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-widest ${
        live
          ? "border-route/40 text-route"
          : "border-panel-border text-muted"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${live ? "bg-route status-dot" : "bg-muted"}`} />
      {status}
    </span>
  );
}

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {stack.map((tech) => (
        <li
          key={tech}
          className="rounded-full border border-panel-border bg-paper px-2.5 py-0.5 font-mono text-[0.62rem] tracking-wide text-muted"
        >
          {tech}
        </li>
      ))}
    </ul>
  );
}

function VisitLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-gold transition-colors hover:text-gold-soft"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

function FeaturedCase({
  project,
  index,
  visitLabel,
}: {
  project: Project;
  index: number;
  visitLabel: string;
}) {
  const imageRight = index % 2 === 1;

  return (
    <Reveal delay={index * 80}>
      <article className="border-t border-panel-border py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className={imageRight ? "md:order-2" : undefined}>
            {project.preview && project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${visitLabel} — ${project.name}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-panel-border bg-paper shadow-[0_18px_40px_-28px_rgba(11,13,16,0.55)]">
                  <Image
                    src={project.preview}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 560px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />
                </div>
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.7rem] text-muted transition-colors group-hover:text-gold">
                  {siteHost(project.href)}
                  <ArrowUpRight className="h-3 w-3" />
                </p>
              </a>
            ) : null}
          </div>

          <div className={imageRight ? "md:order-1" : undefined}>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-3xl tracking-tight text-ink md:text-[2.15rem]">
                {project.name}
              </h3>
              <StatusPill status={project.status} />
            </div>
            <p className="mt-2 text-[0.95rem] leading-snug text-gold">{project.tagline}</p>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-ink/80">
              {project.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <StackList stack={project.stack} />
              {project.href ? <VisitLink href={project.href} label={visitLabel} /> : null}
            </div>
          </div>
        </div>

        <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2">
          {project.facts.map((fact) => (
            <li key={fact} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {fact}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}

function CompactCase({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article className="flex h-full flex-col border-t border-panel-border pt-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl text-ink">{project.name}</h3>
          <StatusPill status={project.status} />
        </div>
        <p className="mt-2 text-sm leading-snug text-gold">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80">{project.description}</p>
        <ul className="mt-5 space-y-2">
          {project.facts.map((fact) => (
            <li key={fact} className="flex gap-2.5 text-sm leading-relaxed text-ink/70">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
              {fact}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <StackList stack={project.stack} />
        </div>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useLang();
  const featured = t.projects.filter((p) => p.preview && p.href);
  const rest = t.projects.filter((p) => !(p.preview && p.href));

  return (
    <section id="projets" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal>
        <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.projectsHeading}</h2>
        <p className="mt-4 max-w-2xl text-lg text-ink/80">{t.projectsSub}</p>
      </Reveal>

      <div className="mt-10">
        {featured.map((project, i) => (
          <FeaturedCase key={project.name} project={project} index={i} visitLabel={t.visitLabel} />
        ))}
      </div>

      {rest.length > 0 ? (
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          {rest.map((project, i) => (
            <CompactCase key={project.name} project={project} delay={i * 80} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
