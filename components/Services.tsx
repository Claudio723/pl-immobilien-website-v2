"use client";

import { motion } from 'framer-motion';
import { Handshake, Building2, ClipboardList, Scale, Landmark, Plane } from 'lucide-react';

const services = [
  {
    icon: Handshake,
    title: "Kauf & Verkauf",
    desc: "Wir begleiten Sie bei der Vermarktung oder dem Erwerb Ihrer Immobilie – von der Bewertung über die Besichtigung bis zum Notartermin.",
    highlight: "Professionell & persönlich",
    featured: true
  },
  {
    icon: Building2,
    title: "Bewirtschaftung",
    desc: "Zuverlässige Verwaltung Ihrer Liegenschaften: Mieterbeziehungen, Instandhaltung, Abrechnungen und laufende Betreuung.",
    highlight: "Ihr Eigentum in guten Händen"
  },
  {
    icon: ClipboardList,
    title: "Verwaltung",
    desc: "Organisierte und transparente Immobilienverwaltung, die Ihnen Zeit und Sorgen erspart.",
    highlight: "Klar & effizient"
  },
  {
    icon: Scale,
    title: "Querberatungen",
    desc: "Wir koordinieren mit Experten aus Recht, Steuern und Technik, damit alle Fragen rund um Ihre Immobilie beantwortet werden.",
    highlight: "Alles aus einer Hand"
  },
  {
    icon: Landmark,
    title: "Finanzierung durch Partner",
    desc: "Dank unseres Netzwerks vermitteln wir Sie an erfahrene Finanzierungspartner, die passende Lösungen für Ihr Vorhaben finden.",
    highlight: "Starke Partner an Ihrer Seite"
  },
  {
    icon: Plane,
    title: "Immobilien im Ausland",
    desc: "Traumobjekte in der Toskana und im Tessin. Wir kennen die lokalen Märkte und begleiten Sie über Grenzen hinweg.",
    highlight: "Toskana & Tessin"
  }
];

export default function Services() {
  return (
    <section id="leistungen" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
      <div className="text-center mb-16">
        <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">UNSERE LEISTUNGEN</div>
        <h2 className="section-heading text-5xl md:text-6xl tracking-tighter mb-6">Alles rund um Ihre Immobilie.</h2>
        <p className="max-w-lg mx-auto text-xl text-text-muted">Von der ersten Beratung bis zum Schlüsselübergang – wir sind an Ihrer Seite.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isFeatured = service.featured;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`service-card group glass rounded-3xl flex flex-col h-full border border-white/60 ${
                isFeatured ? 'p-10 bg-primary/[0.03] border-primary/10' : 'p-9'
              }`}
            >
              <div className={`rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors ${
                isFeatured ? 'w-20 h-20' : 'w-16 h-16'
              }`}>
                <Icon className={`text-primary ${isFeatured ? 'w-11 h-11' : 'w-9 h-9'}`} />
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{service.title}</h3>

              <p className="text-text-muted leading-relaxed flex-grow">{service.desc}</p>

              <div className="pt-8 mt-auto flex items-center gap-2 text-sm font-medium text-accent">
                {service.highlight}
                <div className="flex-1 h-px bg-accent/30" />
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center mt-16">
        <p className="text-text-muted">Haben Sie spezielle Wünsche? Wir erstellen gerne Ihr individuelles Paket.</p>
      </div>
    </section>
  );
}
