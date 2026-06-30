"use client";

import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function Hero() {
  const scrollToKontakt = () => {
    const element = document.getElementById('kontakt');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const scrollToLeistungen = () => {
    const element = document.getElementById('leistungen');
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const regions = [
    { label: 'Schweiz', sub: 'Lokaler Markt' },
    { label: 'Toskana', sub: 'Italien' },
    { label: 'Tessin', sub: 'Südliche Schweiz' },
    { label: 'Dietikon', sub: 'Binzstrasse 3' },
  ];

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-primary">
      {/* Blank background placeholder - Bild hier ersetzen */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#162d4a] to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,178,122,0.12),transparent_50%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-32 pb-10 md:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="text-accent/90 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-5 md:mb-6">
              PL IMMOBILIEN
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.0] tracking-tighter font-semibold text-balance text-white">
              Immobilien<br />
              mit <span className="text-accent">Leidenschaft</span><br />
              und Massgeschneidertheit.
            </h1>
          </motion.div>

          {/* Right content block */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-4 pb-1"
          >
            <p className="text-base md:text-lg text-white/75 leading-relaxed mb-6 md:mb-8 max-w-md">
              Kauf, Verkauf, Bewirtschaftung und Verwaltung – für die Schweiz, Toskana und Tessin. Persönlich und erfahren.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3">
              <motion.button
                onClick={scrollToKontakt}
                className="cta-button group flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-primary px-6 py-3.5 rounded-full font-semibold text-sm transition-all active:scale-[0.985]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.985 }}
              >
                <span>Beratung anfragen</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={scrollToLeistungen}
                className="flex items-center justify-center px-6 py-3.5 rounded-full border border-white/30 hover:bg-white/10 text-white text-sm font-medium transition-all"
                whileHover={{ scale: 1.02 }}
              >
                Leistungen entdecken
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4"
        >
          {regions.map(({ label, sub }) => (
            <div key={label}>
              <div className="text-base md:text-lg font-semibold text-white tracking-tight">{label}</div>
              <div className="text-xs md:text-sm text-white/55 mt-0.5">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
