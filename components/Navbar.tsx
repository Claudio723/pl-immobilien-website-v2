"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#leistungen', label: 'Leistungen' },
    { href: '/#regionen', label: 'Regionen' },
    { href: '/#ueber-uns', label: 'Über uns' },
    { href: '/#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center h-9">
          <img
            src={scrolled ? "/logo.svg" : "/logo-white.svg"}
            alt="PL IMMOBILIEN"
            className="h-9 w-auto object-contain transition-opacity duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors tracking-wide ${
                scrolled ? 'text-text-dark/80 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.985 }}>
            <Link
              href="/#kontakt"
              className="cta-button px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary/90 transition-all active:scale-[0.985] whitespace-nowrap"
            >
              Beratung
            </Link>
          </motion.div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 -mr-2 transition-colors ${scrolled ? 'text-text-dark' : 'text-white'}`}
            aria-label={isOpen ? 'Menü schliessen' : 'Menü öffnen'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-primary/10"
          >
            <div className="px-6 py-10 flex flex-col gap-6 text-lg">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-left py-2 border-b border-primary/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
