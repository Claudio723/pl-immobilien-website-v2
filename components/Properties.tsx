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
    <section id="regionen" className="bg-primary text-white py-24 md:py-36 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-accent/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-end mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-accent text-sm font-semibold tracking-[3px] uppercase mb-4">Regionen</div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-none text-balance">
              Dort, wo Sie sich zuhause fühlen.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-white/60 leading-relaxed lg:pb-2"
          >
            Wir kennen die lokalen Märkte in der Schweiz, der Toskana und im Tessin – und finden das Objekt, das zu Ihnen passt.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary p-8 md:p-10 group hover:bg-primary/90 transition-colors"
            >
              <div className="text-accent text-sm font-medium mb-3 tracking-wide">{region.subtitle}</div>
              <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6">{region.title}</h3>
              <p className="text-white/60 leading-relaxed mb-8 min-h-[80px]">{region.desc}</p>
              <div className="pt-6 border-t border-white/10">
                <div className="text-xs text-white/40 uppercase tracking-wider mb-2">Fokus</div>
                <div className="text-white/90 font-medium">{region.focus}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <p className="text-white/60 text-lg max-w-lg">
            Aktuelle Objekte zeigen wir Ihnen gerne persönlich – kontaktieren Sie uns für unser aktuelles Portfolio.
          </p>
          <Link
            href="/#kontakt"
            className="group inline-flex items-center gap-3 text-accent font-semibold text-lg hover:text-white transition-colors"
          >
            Kontakt aufnehmen
            <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
