"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDownRight } from 'lucide-react';

const regions = [
  {
    title: "Schweiz",
    subtitle: "Lokaler Markt",
    desc: "Wohnungen, Einfamilienhäuser und Gewerbeliegenschaften in der Zentralschweiz und darüber hinaus.",
    focus: "Kauf, Verkauf, Verwaltung"
  },
  {
    title: "Toskana",
    subtitle: "Italien",
    desc: "Feriendomizile, historische Anwesen und Weingüter im Herzen Italiens.",
    focus: "Ferieneigentum, Anlageobjekte"
  },
  {
    title: "Tessin",
    subtitle: "Südliche Schweiz",
    desc: "Sonnige Residenzen am Lago Maggiore und in den malerischen Tessiner Tälern.",
    focus: "Residenzen, Seenähe"
  }
];

export default function Properties() {
  return (
    <section id="regionen" className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-end mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">Regionen</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05]">
              Dort, wo Sie sich zuhause fühlen.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-white/60 leading-relaxed lg:pb-1"
          >
            Wir kennen die lokalen Märkte in der Schweiz, der Toskana und im Tessin – und finden das Objekt, das zu Ihnen passt.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-primary p-7 md:p-9 group hover:bg-primary/90 transition-colors"
            >
              <div className="text-accent text-xs md:text-sm font-medium mb-2 tracking-wide">{region.subtitle}</div>
              <h3 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4">{region.title}</h3>
              <p className="text-white/60 leading-relaxed mb-6 text-sm md:text-base min-h-[4.5rem]">{region.desc}</p>
              <div className="pt-5 border-t border-white/10">
                <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider mb-1">Fokus</div>
                <div className="text-white/90 font-medium text-sm">{region.focus}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <p className="text-white/60 text-base md:text-lg max-w-lg leading-relaxed">
            Aktuelle Objekte zeigen wir Ihnen gerne persönlich – kontaktieren Sie uns für unser aktuelles Portfolio.
          </p>
          <Link
            href="/#kontakt"
            className="group inline-flex items-center gap-2 text-accent font-semibold text-base md:text-lg hover:text-white transition-colors shrink-0"
          >
            Kontakt aufnehmen
            <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
