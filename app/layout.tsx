import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PL IMMOBILIEN | Immobilien mit Leidenschaft",
  description: "PL IMMOBILIEN in Dietikon – Ihr Partner für Kauf, Verkauf, Bewirtschaftung und Verwaltung von Immobilien in der Schweiz, Toskana und im Tessin. Persönliche Beratung und massgeschneiderte Lösungen.",
  keywords: ["Immobilien", "Dietikon", "Toskana", "Tessin", "Immobilienverkauf", "Immobilienverwaltung", "PL IMMOBILIEN"],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="antialiased bg-warm-bg text-text-dark">
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
