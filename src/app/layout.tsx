import type { Metadata } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang-context";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/lib/theme-context";
import { SITE, content } from "@/lib/content";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: content.fr.meta.title,
    template: `%s · ${SITE.name}`,
  },
  description: content.fr.meta.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: content.fr.meta.title,
    description: content.fr.meta.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "fr_CA",
    alternateLocale: "en_CA",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: content.fr.meta.title,
    description: content.fr.meta.description,
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  email: `mailto:${SITE.email}`,
  jobTitle: "Conseiller bancaire & Développeur full-stack",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rouyn-Noranda",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  image: `${SITE.url}/opengraph-image`,
  sameAs: [SITE.linkedin, SITE.github],
  knowsLanguage: ["fr", "en"],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Flutter",
    "Épargne collective",
    "Conseil financier",
    "Quantitative development",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Collège La Cité" },
    { "@type": "CollegeOrUniversity", name: "ENSET Ebolowa" },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Banque Nationale du Canada",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <meta name="theme-color" content="#f5f1e8" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0b0d10" media="(prefers-color-scheme: dark)" />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
