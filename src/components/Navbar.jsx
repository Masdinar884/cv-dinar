import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List, X, Translate } from '@phosphor-icons/react';
import { personalInfo } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navAbout'), href: '#about' },
    { name: t('navServices'), href: '#services' },
    { name: t('navProjects'), href: '#projects' },
    { name: t('navExperience'), href: '#experience' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4' 
            : 'py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 ${
            isScrolled 
              ? 'bg-[var(--color-bg)]/80 backdrop-blur-xl border border-[var(--color-border-subtle)] shadow-sm' 
              : 'bg-transparent border-transparent'
          }`}>
            
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group relative z-50">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-lg shadow-[var(--color-accent)]/20 group-hover:scale-105 transition-transform">
                <img src="/profile.jpg" alt="Dinar Ramadani" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold tracking-tight text-[var(--color-text-primary)] hidden sm:block">
                Dinar Ramadani
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4 relative z-50">
              
              {/* Lang Toggle */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[var(--color-bg-elevated)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                aria-label="Toggle Language"
              >
                <Translate size={18} />
                <span className="text-xs font-semibold w-5 text-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={lang}
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -5, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="block"
                    >
                      {lang.toUpperCase()}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </button>

              <a
                href="#contact"
                className="hidden md:flex items-center justify-center px-5 py-2.5 rounded-xl bg-[var(--color-text-primary)] text-[var(--color-bg)] text-sm font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                {t('navContact')}
              </a>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-lg text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)] transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <List size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-xl pt-28 px-6 pb-8 md:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-2 mt-8">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)] py-4 border-b border-[var(--color-border-subtle)]"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold tracking-tight text-[var(--color-accent)] py-4"
              >
                {t('navContact')}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
