import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { personalInfo } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLang();
  const [photoColor, setPhotoColor] = useState('red');

  const socials = [
    { icon: FaLinkedin, url: personalInfo.socials.linkedin, label: 'LinkedIn' },
    { icon: FaGithub, url: personalInfo.socials.github, label: 'GitHub' },
    { icon: FaInstagram, url: personalInfo.socials.instagram, label: 'Instagram' },
    { icon: FaWhatsapp, url: personalInfo.socials.whatsapp, label: 'WhatsApp' },
    { icon: EnvelopeSimple, url: personalInfo.socials.email, label: 'Email' },
  ];

  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-32 pb-16 relative overflow-hidden border-b border-[var(--color-border-subtle)]">
      
      {/* Minimal grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--color-border-subtle)_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[var(--color-border)] text-[var(--color-text-secondary)] text-xs font-mono tracking-widest uppercase mb-8">
                {t('heroEyebrow')}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[4rem] font-medium tracking-tight text-[var(--color-text-primary)] leading-[1.1] mb-6">
                {personalInfo.name.split(' ').slice(0, 2).join(' ')}.<br />
                <span className="text-[var(--color-text-muted)]">Digital Solutions.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-lg">
                {t('heroSubtext')}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
                <a
                  href="#projects"
                  className="group flex items-center gap-2 px-6 py-3 bg-[var(--color-text-primary)] text-[var(--color-bg)] text-sm font-medium hover:opacity-90 transition-opacity w-full sm:w-auto justify-center"
                >
                  {t('viewWork')}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] text-sm font-medium hover:bg-[var(--color-bg-elevated)] transition-colors w-full sm:w-auto justify-center"
                >
                  <DownloadSimple size={16} />
                  Download CV
                </a>
              </div>

              <div className="flex items-center gap-4">
                {socials.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <motion.a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                      aria-label={s.label}
                      whileHover={{ y: -2 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center gap-6"
          >
            <div className="relative w-64 sm:w-72 lg:w-80 aspect-[3/4]">
              <div className="absolute inset-0 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] overflow-hidden">
                <img 
                  src={photoColor === 'blue' ? "/profile-blue.jpg?v=2" : "/profile.jpg"}
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
              </div>
            </div>

            {/* Color Toggle */}
            <div className="flex items-center gap-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border)] p-1 w-fit">
              <button
                onClick={() => setPhotoColor('red')}
                className={`px-4 py-1.5 text-xs font-mono tracking-widest uppercase transition-colors ${
                  photoColor === 'red' ? 'bg-[#dc2626] text-white' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                Red
              </button>
              <button
                onClick={() => setPhotoColor('blue')}
                className={`px-4 py-1.5 text-xs font-mono tracking-widest uppercase transition-colors ${
                  photoColor === 'blue' ? 'bg-[#2563eb] text-white' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
                }`}
              >
                Blue
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
