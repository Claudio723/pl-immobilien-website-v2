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
    <section id="leistungen" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Sticky left heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <div className="lg:sticky lg:top-28">
            <div className="text-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">Leistungen</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-5">
              Alles, was Ihre Immobilie braucht.
            </h2>
            <p className="text-text-muted leading-relaxed">
              Sechs Leistungsbereiche, die nahtlos zusammenspielen – für eine Beratung, die Sie wirklich weiterbringt.
            </p>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="lg:col-span-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group border-t border-primary/10 py-7 md:py-8 flex gap-5 md:gap-8 items-start cursor-default hover:bg-white/40 transition-colors px-2 -mx-2 rounded-2xl"
            >
              <div className="text-accent text-xs font-semibold tracking-wider mt-1.5 w-6">{service.num}</div>
              <div className="flex-grow min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-text-muted opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all -translate-x-2 group-hover:translate-x-0 shrink-0 mt-1" />
                </div>
                <p className="text-text-muted leading-relaxed mt-2 max-w-xl text-sm md:text-base">{service.desc}</p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-primary/10" />
        </div>
      </div>
    </section>
  );
}
