"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Home, MapPin, KeyRound, CheckCircle } from 'lucide-react';

export default function Hero() {
  const scrollToKontakt = () => {
    const element = document.getElementById('kontakt');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-[100dvh] flex items-center pt-32 md:pt-36 relative overflow-hidden bg-gradient-to-br from-warm-bg via-white to-warm-bg">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="md:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Immobilienberatung in der Schweiz, Toskana & Tessin
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-[80px] leading-[1.05] tracking-tighter font-semibold text-balance">
            Immobilien<br />
            <span className="text-primary">mit Leidenschaft</span><br />
            und Massgeschneidertheit.
          </h1>

          <p className="max-w-[540px] text-xl text-text-muted leading-relaxed">
            PL IMMOBILIEN begleitet Sie beim Kauf, Verkauf und der Bewirtschaftung Ihrer Immobilien –
            persönlich, erfahren und mit einem Rund-um-Sorgen-Paket.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              onClick={scrollToKontakt}
              className="cta-button group flex items-center justify-center gap-3 bg-primary hover:bg-primary/95 text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg shadow-primary/30 transition-all active:scale-[0.985]"
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
            >
              Beratung anfragen
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </motion.button>

            <motion.button
              onClick={() => document.getElementById('leistungen')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-primary/20 hover:bg-white text-base font-medium transition-all"
              whileHover={{ scale: 1.015 }}
            >
              Leistungen entdecken
            </motion.button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-8 text-sm">
            {['Kauf & Verkauf', 'Verwaltung', 'Finanzierung', 'Auslandsimmobilien'].map((item) => (
              <div key={item} className="flex items-center gap-2 text-text-muted">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="md:col-span-5 relative h-[520px] hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Floating Property Elements */}
            <motion.div
              className="absolute top-[10%] left-[5%] glass w-48 h-44 rounded-3xl p-6 shadow-2xl"
              animate={{ y: [0, -25, 0], rotate: [-3, 2, -3] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-primary/80 mb-3">
                <Home className="w-9 h-9" />
              </div>
              <div className="font-semibold text-lg">Kauf & Verkauf</div>
              <div className="text-sm text-text-muted mt-1">Schweiz • Toskana • Tessin</div>
            </motion.div>

            <motion.div
              className="absolute top-[36%] right-[10%] glass w-52 h-36 rounded-3xl p-6 shadow-2xl"
              animate={{ y: [0, 18, 0], rotate: [2, -4, 2] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <div className="flex items-center gap-3">
                <div className="text-accent">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <div className="font-semibold">Regionale Expertise</div>
                  <div className="text-xs text-text-muted">Persönlich vor Ort</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="absolute bottom-[16%] left-[18%] glass w-56 h-36 rounded-3xl p-6 shadow-2xl"
              animate={{ y: [0, -15, 0], rotate: [-1, 3, -1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            >
              <div className="text-primary mb-2 text-sm font-medium">Ihr Vorteil</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <KeyRound className="w-3.5 h-3.5 text-accent" /> Rund-um-Sorgen-Paket
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-primary" /> Massgeschneiderte Beratung
                </div>
              </div>
            </motion.div>

            {/* Central glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-gradient-to-br from-primary/10 via-accent/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-xs tracking-[3px] text-text-muted">
        SCROLL
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-lg">↓</motion.div>
      </div>
    </section>
  );
}
