"use client";

import { useLang } from "@/lib/lang-context";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-panel-border px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[0.7rem] text-muted md:flex-row">
        <p>{t.footer}</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
