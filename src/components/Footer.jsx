import { ArrowUp } from '@phosphor-icons/react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { personalInfo } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLang();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, href: personalInfo.socials.github, label: 'GitHub' },
    { icon: FaInstagram, href: personalInfo.socials.instagram, label: 'Instagram' },
    { icon: FaWhatsapp, href: personalInfo.socials.whatsapp, label: 'WhatsApp' },
    { icon: EnvelopeSimple, href: personalInfo.socials.email, label: 'Email' },
  ];

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-elevated)]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Footer Navigation */}
        <nav aria-label="Footer navigation" className="mb-10 pb-8 border-b border-[var(--color-border-subtle)]">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 list-none p-0 m-0">
            <li><a href="#home" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Home</a></li>
            <li><a href="#about" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">About</a></li>
            <li><a href="#skills" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Skills</a></li>
            <li><a href="#experience" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Experience</a></li>
            <li><a href="#projects" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Projects</a></li>
            <li><a href="#contact" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors">Contact</a></li>
            <li>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                GitHub ↗
              </a>
            </li>
            <li>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
              >
                LinkedIn ↗
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          
          <div className="text-center sm:text-left">
            <p className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] mb-1">
              {personalInfo.name}
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              {personalInfo.role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-bg)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]/30 transition-all hover:scale-110"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-secondary)]">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors flex items-center gap-2"
            aria-label="Back to top"
          >
            {t('backToTop')}
            <span className="w-8 h-8 rounded-full bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] flex items-center justify-center group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all group-hover:-translate-y-1">
              <ArrowUp size={14} weight="bold" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
