"use client";

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="ueber-uns" className="max-w-7xl mx-auto px-6 py-24 md:py-36">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="text-accent text-sm font-semibold tracking-[3px] uppercase mb-4">Über uns</div>
          <h2 className="text-5xl md:text-6xl tracking-tighter leading-none mb-8">
            Vertrauen, das man spürt.
          </h2>
          <div className="space-y-6 text-lg text-text-muted leading-relaxed">
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <blockquote className="relative pl-8 md:pl-12 border-l-4 border-accent">
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif-custom leading-tight tracking-tight text-primary">
              „Immobilien sind Vertrauenssache. Deshalb nehmen wir uns die Zeit, die Sie brauchen.“
            </p>
          </blockquote>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              ['Persönlich', 'Massgeschneiderte Beratung'],
              ['Erfahren', 'Schweiz & Italien'],
              ['Unabhängig', 'Ihr Interesse zählt'],
            ].map(([title, desc]) => (
              <div key={title}>
                <div className="text-lg font-semibold text-text-dark tracking-tight mb-1">{title}</div>
                <div className="text-sm text-text-muted">{desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
