"use client";

import { motion } from 'framer-motion';
import { Heart, Compass, ShieldCheck } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: "Persönliche Beratung",
    desc: "Jeder Kunde ist einzigartig. Wir nehmen uns Zeit, Ihre Wünsche zu verstehen und massgeschneiderte Lösungen zu entwickeln."
  },
  {
    icon: Compass,
    title: "Schweiz & Italien",
    desc: "Erfahrung im Schweizer Markt sowie in der Toskana und im Tessin – für lokale Expertise mit internationalem Horizont."
  },
  {
    icon: ShieldCheck,
    title: "Rund-um-Sorgen-Paket",
    desc: "Von der ersten Idee bis zur Umsetzung begleiten wir Sie umfassend und sorgen für einen reibungslosen Ablauf."
  }
];

export default function About() {
  return (
    <section id="ueber-uns" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-accent text-sm font-semibold tracking-[2px] mb-4">ÜBER UNS</div>

          <h2 className="text-5xl md:text-6xl tracking-tighter leading-none mb-10">Vertrauen, das Sie spüren können.</h2>

          <div className="space-y-7 text-xl text-text-muted leading-relaxed">
            <p>
              PL IMMOBILIEN steht für persönliche Immobilienberatung mit Leidenschaft. In Dietikon sind wir für unsere Kunden da –
              mit Erfahrung, Menschlichkeit und einem Gespür für das Richtige.
            </p>
            <p>
              Egal ob Kauf, Verkauf, Bewirtschaftung oder ein Feriendomizil in der Toskana:
              Wir hören zu, beraten ehrlich und begleiten Sie Schritt für Schritt.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <div className="px-5 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-medium">Persönlich</div>
            <div className="px-5 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-medium">Erfahren</div>
            <div className="px-5 py-2 rounded-2xl bg-primary/10 text-primary text-sm font-medium">Unabhängig</div>
          </div>
        </div>

        <div className="space-y-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="glass rounded-3xl p-8 flex gap-6 items-start group hover:shadow-xl transition-shadow"
              >
                <div className="rounded-2xl bg-primary/10 w-14 h-14 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-2">{value.title}</h3>
                  <p className="text-text-muted leading-relaxed">{value.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
