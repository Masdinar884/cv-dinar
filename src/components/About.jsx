import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Briefcase } from '@phosphor-icons/react';
import { personalInfo, cyberLearning, strengths } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const About = () => {
  const { t } = useLang();

  const infoItems = [
    { icon: User, label: t('labelName'), value: personalInfo.name },
    { icon: GraduationCap, label: t('labelEducation'), value: personalInfo.education, sub: personalInfo.major },
    { icon: Briefcase, label: t('labelStatus'), value: t('statusValue') },
    { icon: MapPin, label: t('labelLocation'), value: personalInfo.location },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">About Me</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
              {t('aboutTitle')}
            </h2>
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-12"
            >
              <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-6">
                {personalInfo.aboutText}
              </p>

              <div className="flex flex-wrap gap-2 mb-12">
                {personalInfo.interests.map((interest, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] bg-[var(--color-bg-subtle)] rounded-full border border-[var(--color-border-subtle)]"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>

              {/* Grid for Cyber Learning and Strengths */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-[var(--color-border-subtle)]">
                {/* Pembelajaran Cybersecurity */}
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">Pembelajaran Cybersecurity</h3>
                  <ul className="space-y-4">
                    {cyberLearning.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <span className="text-[var(--color-accent)] mt-1 text-xs font-mono">0{idx + 1}</span>
                        <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Kelebihan */}
                <div>
                  <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">Kelebihan</h3>
                  <ul className="space-y-4">
                    {strengths.map((item, idx) => (
                      <motion.li 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] flex-shrink-0"></div>
                        <span className="text-sm text-[var(--color-text-secondary)]">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
