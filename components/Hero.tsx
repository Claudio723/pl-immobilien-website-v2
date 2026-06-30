"use client";

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Home, Mountain, Sun, Phone, Search, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const scrollToKontakt = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToLeistungen = () => {
    const element = document.getElementById('leistungen');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const stats = [
    { label: 'Schweiz', sub: 'Lokaler Markt' },
    { label: 'Toskana', sub: 'Italien' },
    { label: 'Tessin', sub: 'Südliche Schweiz' },
    { label: 'Persönlich', sub: 'Vor Ort in Dietikon' },
  ];

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center pt-28 md:pt-32 pb-16 relative overflow-hidden bg-gradient-to-br from-warm-bg via-white to-warm-bg">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10 flex-grow">
        {/* Left Content */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            <MapPin className="w-4 h-4" />
            PL IMMOBILIEN • Binzstrasse 3, Dietikon
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tighter font-semibold text-balance"
          >
            Immobilien mit{' '}
            <span className="text-primary">Leidenschaft</span> und{' '}
            <span className="text-accent">Regionalität</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[540px] text-xl text-text-muted leading-relaxed"
          >
            Kauf, Verkauf, Bewirtschaftung und Verwaltung – für die Schweiz, die Toskana und das Tessin.
            Mit persönlicher Beratung, die Sie weiterbringt.
          </motion.p>

          {/* Mini search / CTA bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass rounded-3xl p-2 flex flex-col sm:flex-row gap-2 max-w-xl shadow-xl"
          >
            <div className="flex items-center gap-3 px-4 py-3 flex-grow bg-white rounded-2xl border border-primary/10">
              <Search className="w-5 h-5 text-text-muted" />
              <span className="text-text-muted">In welcher Region suchen Sie?</span>
            </div>
            <motion.button
              onClick={scrollToKontakt}
              className="cta-button px-6 py-3 bg-primary hover:bg-primary/95 text-white font-semibold rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.985] whitespace-nowrap"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.985 }}
            >
              Beratung anfragen <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:+41433225230"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-primary/20 hover:bg-white text-base font-medium transition-all"
            >
              <Phone className="w-4 h-4" />
              043 322 52 30
            </a>
            <motion.button
              onClick={scrollToLeistungen}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-primary/20 hover:bg-white text-base font-medium transition-all"
              whileHover={{ scale: 1.015 }}
            >
              Leistungen entdecken
            </motion.button>
          </motion.div>
        </div>

        {/* Right Visual - Property Showcase */}
        <div className="relative h-[560px] hidden lg:block">
          {/* Main property card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[420px] rounded-[40px] bg-gradient-to-br from-primary via-primary to-primary/80 shadow-2xl shadow-primary/30 overflow-hidden"
          >
            {/* Roof detail */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[180px] border-r-[180px] border-b-[120px] border-l-transparent border-r-transparent border-b-[#162d4a]" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 pt-24">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Home className="w-24 h-24 text-accent/90 mb-6" />
              </motion.div>
              <div className="text-3xl font-serif-custom font-semibold tracking-tight text-center">Ihr Zuhause</div>
              <div className="text-white/70 text-center mt-2 leading-relaxed">
                Entdecken Sie passende Objekte in Ihrer Wunschregion
              </div>
            </div>

            {/* Window details */}
            <div className="absolute bottom-16 left-10 w-16 h-16 rounded-xl bg-white/10 border border-white/20" />
            <div className="absolute bottom-16 right-10 w-16 h-16 rounded-xl bg-white/10 border border-white/20" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-24 rounded-t-xl bg-accent/40" />

            {/* Decorative glow */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-accent/20 rounded-full blur-[80px]" />
          </motion.div>

          {/* Floating region cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="absolute top-[8%] right-[0%] glass rounded-3xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Sun className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold text-text-dark">Toskana</div>
                <div className="text-xs text-text-muted">Italien</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute top-[22%] left-[0%] glass rounded-3xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-text-dark">Schweiz</div>
                <div className="text-xs text-text-muted">Zentralschweiz</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="absolute bottom-[12%] left-[5%] glass rounded-3xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-text-dark">Tessin</div>
                <div className="text-xs text-text-muted">Südliche Schweiz</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute bottom-[8%] right-[5%] glass rounded-3xl p-5 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <div className="font-semibold text-text-dark">Rund-um-Sorgen</div>
                <div className="text-xs text-text-muted">Von A bis Z</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="max-w-7xl mx-auto px-6 w-full relative z-10 mt-12"
      >
        <div className="glass rounded-3xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-xl md:text-2xl font-semibold text-primary tracking-tight">{stat.label}</div>
              <div className="text-sm text-text-muted mt-1">{stat.sub}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-[3px] text-text-muted">
        SCROLL
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-lg">↓</motion.div>
      </div>
    </section>
  );
}
