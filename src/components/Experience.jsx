import { motion } from 'framer-motion';
import { experienceData } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Experience = () => {
  const { t } = useLang();
  const expDescriptions = [t('exp1'), t('exp2'), t('exp3')];

  return (
    <section id="experience" className="py-24 relative bg-[var(--color-bg-elevated)]/30 border-y border-[var(--color-border-subtle)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Timeline</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            {t('experienceTitle')}
          </h2>
          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {experienceData.map((exp, idx) => {
            const descriptions = expDescriptions[idx] || exp.description;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[var(--color-bg)] border border-[var(--color-border-subtle)] rounded-2xl p-6 sm:p-8 hover:border-[var(--color-border)] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[var(--color-border-subtle)]">
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-1">{exp.position}</h3>
                    <p className="text-sm font-medium text-[var(--color-text-secondary)]">{exp.company}</p>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {descriptions.map((desc, i) => (
                    <li key={i} className="text-sm text-[var(--color-text-secondary)] flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-1.5 flex-shrink-0"></span>
                      <span className="leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
