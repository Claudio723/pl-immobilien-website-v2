"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, ArrowDownRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const formSchema = z.object({
  vorname: z.string().min(2, "Bitte geben Sie Ihren Vornamen ein"),
  nachname: z.string().min(2, "Bitte geben Sie Ihren Nachnamen ein"),
  email: z.string().email("Bitte gültige E-Mail-Adresse eingeben"),
  telefon: z.string().optional(),
  anliegen: z.string().min(1, "Bitte wählen Sie ein Anliegen"),
  nachricht: z.string().min(15, "Ihre Nachricht sollte etwas ausführlicher sein"),
});

type FormData = z.infer<typeof formSchema>;

const anliegenOptions = [
  "Kauf einer Immobilie",
  "Verkauf einer Immobilie",
  "Bewirtschaftung / Verwaltung",
  "Finanzierung",
  "Immobilien im Ausland",
  "Sonstiges"
];

const contactDetails = [
  { label: "Telefon", value: "+41 43 322 52 30", href: "tel:+41433225230" },
  { label: "Mobil", value: "+41 76 393 87 97", href: "tel:+41763938797" },
  { label: "E-Mail", value: "info@pl-immobilien.ch", href: "mailto:info@pl-immobilien.ch" },
  { label: "Adresse", value: "Binzstrasse 3, 8953 Dietikon", href: null },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Anfrage von ${data.vorname} ${data.nachname} – ${data.anliegen}`);
    const body = encodeURIComponent(
      `Hallo PL IMMOBILIEN,

Mein Name ist ${data.vorname} ${data.nachname}.
E-Mail: ${data.email}
${data.telefon ? `Telefon: ${data.telefon}
` : ''}Anliegen: ${data.anliegen}

Nachricht:
${data.nachricht}

Freundliche Grüsse
${data.vorname} ${data.nachname}`
    );

    window.location.href = `mailto:info@pl-immobilien.ch?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSuccess(true);
      reset();
      setTimeout(() => {
        setIsSuccess(false);
        setIsSubmitting(false);
      }, 4000);
    }, 600);
  };

  return (
    <section id="kontakt" className="bg-warm-bg py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="text-accent text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4">Kontakt</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-[1.05] mb-6">
              Lassen Sie uns sprechen.
            </h2>
            <p className="text-text-muted leading-relaxed mb-10">
              Rufen Sie uns an oder schreiben Sie uns – wir freuen uns darauf, Sie kennenzulernen und Ihr Anliegen zu besprechen.
            </p>

            <div className="space-y-5">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="group">
                  <div className="text-[10px] md:text-xs text-text-muted uppercase tracking-wider mb-1">{detail.label}</div>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="text-lg md:text-xl font-semibold text-text-dark hover:text-primary transition-colors"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <div className="text-lg md:text-xl font-semibold text-text-dark">{detail.value}</div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[28px] p-6 md:p-10 shadow-xl shadow-primary/5 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: 16 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-5"
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-text-muted">Vorname</label>
                        <input
                          {...register('vorname')}
                          className="form-input w-full px-4 py-3 rounded-xl border border-primary/15 bg-warm-bg text-text-dark placeholder:text-text-muted/50"
                          placeholder="Max"
                        />
                        {errors.vorname && <p className="text-red-500 text-sm mt-1.5">{errors.vorname.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-text-muted">Nachname</label>
                        <input
                          {...register('nachname')}
                          className="form-input w-full px-4 py-3 rounded-xl border border-primary/15 bg-warm-bg text-text-dark placeholder:text-text-muted/50"
                          placeholder="Muster"
                        />
                        {errors.nachname && <p className="text-red-500 text-sm mt-1.5">{errors.nachname.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-text-muted">E-Mail</label>
                        <input
                          type="email"
                          {...register('email')}
                          className="form-input w-full px-4 py-3 rounded-xl border border-primary/15 bg-warm-bg text-text-dark placeholder:text-text-muted/50"
                          placeholder="max@muster.ch"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1.5 text-text-muted">Telefon (optional)</label>
                        <input
                          type="tel"
                          {...register('telefon')}
                          className="form-input w-full px-4 py-3 rounded-xl border border-primary/15 bg-warm-bg text-text-dark placeholder:text-text-muted/50"
                          placeholder="+41 79 123 45 67"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-text-muted">Anliegen</label>
                      <select
                        {...register('anliegen')}
                        className="form-input w-full px-4 py-3 rounded-xl border border-primary/15 bg-warm-bg text-text-dark"
                      >
                        <option value="">Bitte wählen</option>
                        {anliegenOptions.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      {errors.anliegen && <p className="text-red-500 text-sm mt-1.5">{errors.anliegen.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1.5 text-text-muted">Nachricht</label>
                      <textarea
                        {...register('nachricht')}
                        rows={4}
                        className="form-input w-full px-4 py-3 rounded-2xl border border-primary/15 bg-warm-bg text-text-dark placeholder:text-text-muted/50 resize-y min-h-[120px]"
                        placeholder="Hallo, ich interessiere mich für..."
                      />
                      {errors.nachricht && <p className="text-red-500 text-sm mt-1.5">{errors.nachricht.message}</p>}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="cta-button group w-full py-3.5 text-base font-semibold bg-primary hover:bg-primary/95 disabled:bg-primary/70 text-white rounded-full flex items-center justify-center gap-2 mt-2 active:scale-[0.985] transition-all"
                      whileHover={{ scale: isSubmitting ? 1 : 1.005 }}
                      whileTap={{ scale: 0.985 }}
                    >
                      {isSubmitting ? (
                        <><Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...</>
                      ) : (
                        <><span>Unverbindliche Beratung anfragen</span><ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" /></>
                      )}
                    </motion.button>

                    <p className="text-center text-xs text-text-muted pt-1">
                      Klicken Sie auf „Senden“ – Ihr Standard-Mail-Programm öffnet sich automatisch.
                    </p>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-14 text-center"
                  >
                    <div className="mx-auto w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-semibold tracking-tight mb-3">Vielen Dank!</h3>
                    <p className="text-lg text-text-muted max-w-sm mx-auto">
                      Ihr Mail-Programm sollte sich jetzt geöffnet haben. Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
