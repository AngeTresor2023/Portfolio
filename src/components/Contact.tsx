"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { Reveal } from "./Reveal";
import { SITE } from "@/lib/content";

export function Contact() {
  const { t } = useLang();

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <div className="rounded-3xl border border-panel-border bg-panel p-10 text-center md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">{t.contact.heading}</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl text-ink md:text-4xl">
            {t.contact.body}
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 rounded-full bg-gold-soft px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-transform hover:scale-[1.03]"
            >
              <Mail className="h-3.5 w-3.5" />
              {t.contact.email}
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-full border border-panel-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <Linkedin className="h-3.5 w-3.5" />
              {t.contact.linkedin}
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 rounded-full border border-panel-border px-6 py-3 font-mono text-xs uppercase tracking-widest text-ink transition-colors hover:border-gold hover:text-gold"
            >
              <Github className="h-3.5 w-3.5" />
              {t.contact.github}
            </a>
          </div>

          <p className="mt-8 font-mono text-xs text-muted">{t.contact.location}</p>
        </div>
      </Reveal>
    </section>
  );
}
