"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="ueber-uns" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="text-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">Über uns</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-6">
            Vertrauen, das man spürt.
          </h2>
          <div className="space-y-4 text-text-muted leading-relaxed">
            <p>
              PL IMMOBILIEN steht für Immobilienberatung mit Leidenschaft. In Dietikon sind wir für unsere Kunden da –
              mit Erfahrung, Menschlichkeit und einem klaren Gespür für das Richtige.
            </p>
            <p>
              Egal ob Kauf, Verkauf, Bewirtschaftung oder ein Feriendomizil in der Toskana:
              Wir hören zu, beraten ehrlich und begleiten Sie Schritt für Schritt.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <blockquote className="relative pl-6 md:pl-10 border-l-4 border-accent">
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif-custom leading-snug tracking-tight text-primary">
              „Immobilien sind Vertrauenssache. Deshalb nehmen wir uns die Zeit, die Sie brauchen.“
            </p>
          </blockquote>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              ['Persönlich', 'Massgeschneiderte Beratung'],
              ['Erfahren', 'Schweiz & Italien'],
              ['Unabhängig', 'Ihr Interesse zählt'],
            ].map(([title, desc]) => (
              <div key={title}>
                <div className="text-base font-semibold text-text-dark tracking-tight mb-1">{title}</div>
                <div className="text-sm text-text-muted">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
