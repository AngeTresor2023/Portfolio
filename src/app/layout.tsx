import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { GeistSans } from 'geist/font/sans';

const lobster = Montserrat({
  subsets: ["latin"],
  variable: "--font-caption", 
});

export const metadata: Metadata = {
  title: "Ange Djomo || Web Developper & IT Technician",
  description: "A portfolio showcasing skills in programming, technical troubleshooting, and innovative, efficient IT solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${GeistSans.variable, lobster.variable, "font-sans h-full bg-background text-foreground"}`}>{children}</body>
    </html>
  );
}
