"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { useTheme } from "@/lib/theme-context";

const SECTIONS: { id: string; key: "about" | "path" | "work" | "projects" | "contact" }[] = [
  { id: "profil", key: "about" },
  { id: "parcours", key: "path" },
  { id: "experience", key: "work" },
  { id: "projets", key: "projects" },
  { id: "contact", key: "contact" },
];

export function Nav() {
  const { t, lang, toggle } = useLang();
  const { theme, toggle: toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur border-b border-panel-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-xs tracking-[0.2em] text-ink/90 hover:text-gold transition-colors">
          A.T.D.
        </a>

        <ul className="hidden items-center gap-8 font-mono text-xs uppercase tracking-[0.14em] text-muted md:flex">
          {SECTIONS.filter((s) => s.key !== "contact").map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="transition-colors hover:text-gold">
                {t.nav[s.key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
            className="rounded-full border border-panel-border p-2 text-muted transition-colors hover:border-gold hover:text-gold"
          >
            {theme === "light" ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
          </button>
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="rounded-full border border-panel-border px-3 py-1.5 font-mono text-xs tracking-widest text-muted transition-colors hover:border-gold hover:text-gold"
          >
            {lang === "fr" ? "FR / en" : "en / FR"}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-ink px-5 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-transform hover:scale-[1.03] md:inline-block"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex flex-col gap-1.5 p-2 md:hidden"
          >
            <span className="h-px w-5 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-panel-border bg-paper px-6 py-4 font-mono text-sm uppercase tracking-widest text-muted md:hidden">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} onClick={() => setOpen(false)} className="block py-2 hover:text-gold">
                {t.nav[s.key]}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
