"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
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
    <section id="kontakt" className="max-w-6xl mx-auto px-6 py-24 md:py-32 border-t border-primary/10">
      <div className="grid lg:grid-cols-5 gap-16">
        {/* Left: Contact Info */}
        <div className="lg:col-span-2">
          <div className="text-accent text-sm font-semibold tracking-[2px] mb-3">KONTAKT</div>
          <h2 className="section-heading text-5xl md:text-6xl tracking-tighter mb-6">Lassen Sie uns sprechen.</h2>
          <p className="text-xl text-text-muted leading-relaxed mb-10">
            Rufen Sie uns an oder schreiben Sie uns – wir freuen uns darauf, Sie kennenzulernen und Ihr Anliegen zu besprechen.
          </p>

          <div className="space-y-6">
            <a href="tel:+41433225230" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Telefon</div>
                <div className="font-semibold text-text-dark">+41 43 322 52 30</div>
              </div>
            </a>

            <a href="tel:+41763938797" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Mobil</div>
                <div className="font-semibold text-text-dark">+41 76 393 87 97</div>
              </div>
            </a>

            <a href="mailto:info@pl-immobilien.ch" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">E-Mail</div>
                <div className="font-semibold text-text-dark">info@pl-immobilien.ch</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-text-muted">Adresse</div>
                <div className="font-semibold text-text-dark">Binzstrasse 3, 8953 Dietikon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-3">
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: 20 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-muted">Vorname</label>
                      <input
                        {...register('vorname')}
                        className="form-input w-full px-5 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                        placeholder="Max"
                      />
                      {errors.vorname && <p className="text-red-500 text-sm mt-1.5">{errors.vorname.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-muted">Nachname</label>
                      <input
                        {...register('nachname')}
                        className="form-input w-full px-5 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                        placeholder="Muster"
                      />
                      {errors.nachname && <p className="text-red-500 text-sm mt-1.5">{errors.nachname.message}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-muted">E-Mail-Adresse</label>
                      <input
                        type="email"
                        {...register('email')}
                        className="form-input w-full px-5 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                        placeholder="max@muster.ch"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-text-muted">Telefon (optional)</label>
                      <input
                        type="tel"
                        {...register('telefon')}
                        className="form-input w-full px-5 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60"
                        placeholder="+41 79 123 45 67"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-muted">Anliegen</label>
                    <select
                      {...register('anliegen')}
                      className="form-input w-full px-5 py-3.5 rounded-2xl border border-primary/20 bg-white text-lg text-text-dark"
                    >
                      <option value="">Bitte wählen</option>
                      {anliegenOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.anliegen && <p className="text-red-500 text-sm mt-1.5">{errors.anliegen.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-muted">Ihre Nachricht</label>
                    <textarea
                      {...register('nachricht')}
                      rows={5}
                      className="form-input w-full px-5 py-4 rounded-3xl border border-primary/20 bg-white text-lg placeholder:text-text-muted/60 resize-y min-h-[140px]"
                      placeholder="Hallo, ich interessiere mich für..."
                    />
                    {errors.nachricht && <p className="text-red-500 text-sm mt-1.5">{errors.nachricht.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="cta-button w-full py-4 text-lg font-semibold bg-primary hover:bg-primary/95 disabled:bg-primary/70 text-white rounded-3xl flex items-center justify-center gap-3 mt-4 shadow-xl shadow-primary/40 active:scale-[0.985] transition-all"
                    whileHover={{ scale: isSubmitting ? 1 : 1.005 }}
                    whileTap={{ scale: 0.985 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...
                      </>
                    ) : (
                      "Unverbindliche Beratung anfragen"
                    )}
                  </motion.button>

                  <p className="text-center text-xs text-text-muted pt-3">
                    Klicken Sie auf „Senden“ – Ihr Standard-Mail-Programm öffnet sich automatisch mit den ausgefüllten Daten.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-16 text-center"
                >
                  <div className="mx-auto w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h3 className="text-4xl font-semibold tracking-tight mb-4">Vielen Dank!</h3>
                  <p className="text-xl text-text-muted max-w-sm mx-auto">
                    Ihr Mail-Programm sollte sich jetzt geöffnet haben. Wir melden uns schnellstmöglich bei Ihnen.
                  </p>
                  <div className="mt-8 text-sm text-emerald-600 font-medium">PL IMMOBILIEN • Dietikon</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
