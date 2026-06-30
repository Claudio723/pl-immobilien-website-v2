"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/90 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
        <div className="md:col-span-5">
          <div className="flex items-center mb-6">
            <img
              src="/logo.svg"
              alt="PL IMMOBILIEN"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>

          <p className="max-w-sm text-white/70 text-[15px] leading-relaxed">
            PL IMMOBILIEN – Ihr Partner für Kauf, Verkauf, Bewirtschaftung und Verwaltung.
            Persönlich, erfahren und mit Leidenschaft für Immobilien.
          </p>

          <div className="mt-8 text-xs text-white/50">
            © {new Date().getFullYear()} PL IMMOBILIEN • Dietikon, Schweiz
          </div>
        </div>

        <div className="md:col-span-3 text-sm">
          <div className="font-semibold text-white mb-5 tracking-wider text-xs">LEISTUNGEN</div>
          <div className="space-y-3 text-white/80">
            <div>Kauf & Verkauf</div>
            <div>Bewirtschaftung</div>
            <div>Verwaltung</div>
            <div>Querberatungen</div>
            <div>Finanzierung durch Partner</div>
            <div>Immobilien im Ausland</div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="font-semibold text-white mb-5 tracking-wider text-xs">KONTAKT</div>

          <div className="space-y-4 text-[15px]">
            <a href="mailto:info@pl-immobilien.ch" className="block hover:text-white transition">info@pl-immobilien.ch</a>
            <a href="tel:+41433225230" className="block hover:text-white transition">+41 43 322 52 30</a>
            <a href="tel:+41763938797" className="block hover:text-white transition">+41 76 393 87 97</a>

            <div className="pt-4 text-white/60 text-sm leading-relaxed">
              PL IMMOBILIEN<br />
              Binzstrasse 3<br />
              8953 Dietikon
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-5 text-xs">
            <Link href="/datenschutz" className="hover:text-white transition">Datenschutz</Link>
            <Link href="/impressum" className="hover:text-white transition">Impressum</Link>
            <Link href="/agb" className="hover:text-white transition">AGB</Link>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-white/10 text-center text-[10px] text-white/40 tracking-[1px]">
        IMMOBILIEN MIT LEIDENSCHAFT
      </div>
    </footer>
  );
}
