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

  return (
    <section className="min-h-[100dvh] flex flex-col justify-end relative overflow-hidden bg-warm-bg">
      {/* Abstract architectural background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-l from-primary/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-white/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/2 right-[8%] -translate-y-1/2 hidden lg:block"
        >
          {/* Main structure */}
          <div className="relative w-[420px] h-[520px]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[380px] bg-primary rounded-t-[60px]" />
            <div className="absolute bottom-[380px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[140px] border-r-[140px] border-b-[120px] border-l-transparent border-r-transparent border-b-primary" />
            {/* Gold accent window */}
            <div className="absolute bottom-[120px] left-1/2 -translate-x-1/2 w-24 h-32 bg-accent/90 rounded-t-2xl" />
            {/* Side structures */}
            <div className="absolute bottom-0 left-0 w-20 h-[260px] bg-primary/80 rounded-t-[40px]" />
            <div className="absolute bottom-0 right-0 w-24 h-[200px] bg-primary/70 rounded-t-[40px]" />
            {/* Horizontal accent */}
            <div className="absolute bottom-[360px] left-1/2 -translate-x-1/2 w-[320px] h-1 bg-accent/60" />
          </div>
        </motion.div>
      </div>

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
              PL IMMOBILIEN • Dietikon
            </div>
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tighter font-semibold text-balance">
              Ihr Zuhause.<br />
              <span className="text-primary">Ihre Investition.</span><br />
              <span className="text-accent">Ihr Vertrauen.</span>
            </h1>
          </motion.div>

          {/* Right content block */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4 pb-4"
          >
            <p className="text-lg text-text-muted leading-relaxed mb-8">
              Kauf, Verkauf, Bewirtschaftung und Verwaltung – für die Schweiz, Toskana und Tessin. Persönlich und massgeschneidert.
            </p>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
              <motion.button
                onClick={scrollToKontakt}
                className="cta-button group flex items-center justify-between gap-4 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-2xl font-semibold transition-all active:scale-[0.985]"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
              >
                <span>Beratung anfragen</span>
                <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </motion.button>
              <motion.button
                onClick={scrollToLeistungen}
                className="flex items-center justify-center px-6 py-4 rounded-2xl border border-primary/20 hover:bg-white text-base font-medium transition-all"
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
          className="mt-16 md:mt-24 pt-8 border-t border-primary/10 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            ['Schweiz', 'Lokaler Markt'],
            ['Toskana', 'Italien'],
            ['Tessin', 'Südliche Schweiz'],
            ['Dietikon', 'Binzstrasse 3'],
          ].map(([label, sub]) => (
            <div key={label}>
              <div className="text-lg font-semibold text-text-dark tracking-tight">{label}</div>
              <div className="text-sm text-text-muted mt-1">{sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
