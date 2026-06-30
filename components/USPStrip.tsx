"use client";

import { motion } from 'framer-motion';
import { Handshake, Globe, ShieldCheck, Heart } from 'lucide-react';

const usps = [
  {
    icon: Heart,
    title: "Persönlich",
    desc: "Individuelle Beratung, die auf Sie zugeschnitten ist."
  },
  {
    icon: Globe,
    title: "International",
    desc: "Expertise für Schweiz, Toskana und Tessin."
  },
  {
    icon: ShieldCheck,
    title: "Rund-um-Sorgen",
    desc: "Begleitung von der ersten Idee bis zum Abschluss."
  },
  {
    icon: Handshake,
    title: "Vertrauen",
    desc: "Ehrliche Beratung ohne Zeitdruck und Verpflichtung."
  }
];

export default function USPStrip() {
  return (
    <section className="bg-primary text-white py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-accent mb-5">
                  <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight mb-2">{usp.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{usp.desc}</p>
                {index < usps.length - 1 && (
                  <div className="hidden lg:block absolute top-0 right-0 w-px h-full bg-white/10" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
