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
      <div className="max-w-7xl mx-auto px-6 h-[72px] md:h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center h-11 md:h-12">
          <img
            src={scrolled ? "/logo.svg" : "/logo-white.svg"}
            alt="PL IMMOBILIEN"
            className="h-11 md:h-12 w-auto object-contain transition-opacity duration-300"
          />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium transition-colors tracking-wide group ${
                scrolled ? 'text-text-dark/80 hover:text-primary' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300 ${scrolled ? 'bg-primary' : 'bg-white'}`} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/#kontakt"
            className="hidden sm:inline-flex px-5 py-2.5 bg-accent text-primary text-sm font-semibold rounded-full hover:brightness-105 hover:shadow-lg hover:shadow-accent/20 active:scale-[0.985] transition-all whitespace-nowrap"
          >
            Beratung
          </Link>

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
