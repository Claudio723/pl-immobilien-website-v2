"use client";

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: "01",
    title: "Kauf & Verkauf",
    desc: "Von der ersten Bewertung über die Besichtigung bis zum Notartermin begleiten wir Sie professionell und diskret."
  },
  {
    num: "02",
    title: "Bewirtschaftung",
    desc: "Zuverlässige Verwaltung Ihrer Liegenschaften mit Fokus auf Mieterbeziehungen, Instandhaltung und transparente Abrechnungen."
  },
  {
    num: "03",
    title: "Verwaltung",
    desc: "Organisierte Immobilienverwaltung, die Ihnen Zeit spart und Ihr Eigentum langfristig wertvoll hält."
  },
  {
    num: "04",
    title: "Querberatungen",
    desc: "Wir koordinieren Recht, Steuern und Technik, damit alle Fragen rund um Ihre Immobilie kompetent beantwortet werden."
  },
  {
    num: "05",
    title: "Finanzierung",
    desc: "Durch unser Partnernetzwerk vermitteln wir passende Finanzierungslösungen für Ihr Vorhaben."
  },
  {
    num: "06",
    title: "Immobilien im Ausland",
    desc: "Traumobjekte in der Toskana und im Tessin – mit lokaler Marktkenntnis und persönlicher Betreuung."
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Sticky left heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-32">
            <div className="text-accent text-sm font-semibold tracking-[3px] uppercase mb-4">Leistungen</div>
            <h2 className="text-5xl md:text-6xl tracking-tighter leading-none mb-6">
              Alles, was Ihre Immobilie braucht.
            </h2>
            <p className="text-text-muted text-lg leading-relaxed">
              Sechs Leistungsbereiche, die nahtlos zusammenspielen – für eine Beratung, die Sie wirklich weiterbringt.
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="lg:col-span-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group border-t border-primary/10 py-8 md:py-10 flex gap-6 md:gap-10 items-start cursor-default hover:bg-white/40 transition-colors px-2 -mx-2 rounded-2xl"
            >
              <div className="text-accent text-sm font-semibold tracking-wider mt-1">{service.num}</div>
              <div className="flex-grow">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-6 h-6 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all -translate-x-2 group-hover:translate-x-0" />
                </div>
                <p className="text-text-muted leading-relaxed mt-3 max-w-xl">{service.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-primary/10" />
        </div>
      </div>
    </section>
  );
}
