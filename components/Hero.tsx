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
    <section className="min-h-[100dvh] flex flex-col justify-end relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-primary/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 pt-32 pb-12 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Main headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="text-accent text-sm font-semibold tracking-[3px] uppercase mb-6">
              PL IMMOBILIEN
            </div>
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tighter font-semibold text-balance text-white">
              Immobilien<br />
              mit <span className="text-accent">Leidenschaft</span><br />
              und Massgeschneidertheit.
            </h1>
          </motion.div>

          {/* Right content block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 pb-4"
          >
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              Kauf, Verkauf, Bewirtschaftung und Verwaltung – für die Schweiz, Toskana und Tessin. Persönlich und erfahren.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <motion.button
                onClick={scrollToKontakt}
                className="cta-button group flex items-center justify-between gap-4 bg-accent hover:bg-accent/90 text-primary px-6 py-4 rounded-2xl font-semibold transition-all active:scale-[0.985]"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                <span>Beratung anfragen</span>
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={scrollToLeistungen}
                className="flex items-center justify-center px-6 py-4 rounded-2xl border border-white/30 hover:bg-white/10 text-white text-base font-medium transition-all"
                whileHover={{ scale: 1.01 }}
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
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 md:mt-24 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {regions.map(({ label, sub }) => (
            <div key={label}>
              <div className="text-lg font-semibold text-white tracking-tight">{label}</div>
              <div className="text-sm text-white/60 mt-1">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
