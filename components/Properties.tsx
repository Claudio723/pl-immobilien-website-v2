"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mountain, Sun, Trees, Building, ArrowRight } from 'lucide-react';

const regions = [
  {
    icon: Mountain,
    title: "Schweiz",
    subtitle: "Lokaler Markt",
    desc: "Wohnungen, Häuser und Gewerbeliegenschaften in der Zentralschweiz und darüber hinaus.",
    tags: ["Kauf & Verkauf", "Verwaltung"]
  },
  {
    icon: Sun,
    title: "Toskana",
    subtitle: "Italien",
    desc: "Feriendomizile, Weingüter und historische Anwesen im Herzen Italiens.",
    tags: ["Ferieneigentum", "Anlageobjekte"]
  },
  {
    icon: Trees,
    title: "Tessin",
    subtitle: "Südliche Schweiz",
    desc: "Sonnige Objekte am Lago Maggiore und in den Tessiner Tälern.",
    tags: ["Seenähe", "Residenzen"]
  }
];

export default function Properties() {
  return (
    <section id="objekte" className="bg-primary text-white py-24 md:py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">OBJEKTE & REGIONEN</div>
          <h2 className="section-heading text-5xl md:text-6xl tracking-tighter mb-6">Dort, wo Sie sich zuhause fühlen.</h2>
          <p className="max-w-xl mx-auto text-xl text-white/70">
            Wir kennen die Märkte in der Schweiz, der Toskana und im Tessin – und finden das passende Objekt für Sie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {regions.map((region, index) => {
            const Icon = region.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/15 transition-all hover:-translate-y-2"
              >
                <div className="rounded-2xl bg-accent/20 w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                <div className="text-accent text-sm font-medium mb-2">{region.subtitle}</div>
                <h3 className="text-3xl font-semibold tracking-tight mb-4">{region.title}</h3>
                <p className="text-white/70 leading-relaxed mb-6">{region.desc}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {region.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/#kontakt"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors"
                >
                  Anfragen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-primary w-14 h-14 flex items-center justify-center shrink-0">
              <Building className="w-7 h-7 text-accent" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-text-dark">Aktuelle Objekte auf Anfrage</h3>
              <p className="text-text-muted">Gerne informieren wir Sie persönlich über unser aktuelles Portfolio.</p>
            </div>
          </div>
          <Link
            href="/#kontakt"
            className="cta-button px-6 py-3 bg-primary text-white font-semibold rounded-2xl hover:bg-primary/90 transition-all whitespace-nowrap"
          >
            Kontakt aufnehmen
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
