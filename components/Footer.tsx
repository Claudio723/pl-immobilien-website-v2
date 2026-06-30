"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-8">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 pb-12 md:pb-14 border-b border-white/10">
          <div className="md:col-span-6">
            <img
              src="/logo-white.svg"
              alt="PL IMMOBILIEN"
              className="h-9 w-auto object-contain mb-5"
            />
            <p className="max-w-md text-white/55 leading-relaxed">
              Kauf, Verkauf, Bewirtschaftung und Verwaltung – persönlich, erfahren und mit Leidenschaft für Immobilien.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.15em] mb-4">Navigation</div>
            <div className="space-y-2.5 text-white/75 text-sm">
              <Link href="/#leistungen" className="block hover:text-white transition-colors">Leistungen</Link>
              <Link href="/#regionen" className="block hover:text-white transition-colors">Regionen</Link>
              <Link href="/#ueber-uns" className="block hover:text-white transition-colors">Über uns</Link>
              <Link href="/#kontakt" className="block hover:text-white transition-colors">Kontakt</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.15em] mb-4">Rechtliches</div>
            <div className="space-y-2.5 text-white/75 text-sm">
              <Link href="/impressum" className="block hover:text-white transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="block hover:text-white transition-colors">Datenschutz</Link>
              <Link href="/agb" className="block hover:text-white transition-colors">AGB</Link>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <div>© {new Date().getFullYear()} PL IMMOBILIEN • Dietikon, Schweiz</div>
          <div className="text-accent/80 tracking-wide">Immobilien mit Leidenschaft</div>
        </div>
      </div>
    </footer>
  );
}
