"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { content, type Content, type Lang } from "./content";

interface LangContextValue {
  lang: Lang;
  toggle: () => void;
  t: Content;
}

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "atd_lang";

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "fr" || stored === "en") {
      setLang(stored);
      return;
    }
    const browser = window.navigator.language?.toLowerCase() ?? "";
    if (browser && !browser.startsWith("fr")) setLang("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      toggle: () => setLang((l) => (l === "fr" ? "en" : "fr")),
      t: content[lang],
    }),
    [lang]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
