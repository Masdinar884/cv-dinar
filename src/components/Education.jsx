import { motion } from 'framer-motion';
import { educationData } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Education = () => {
  const { t } = useLang();

  return (
    <section className="py-24 relative bg-[var(--color-bg-elevated)]/30 border-y border-[var(--color-border-subtle)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Academic</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            {t('educationTitle')}
          </h2>
          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mx-auto"></div>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[var(--color-bg)] border border-[var(--color-border-subtle)] rounded-2xl p-6 sm:p-10 hover:border-[var(--color-border)] transition-colors relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-accent)]/5 rounded-bl-[100px] pointer-events-none"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 relative z-10">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold mb-4">
                    {edu.period}
                  </span>
                  <h3 className="text-2xl font-bold text-[var(--color-text-primary)] mb-2">
                    {edu.institution}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm text-[var(--color-text-secondary)]">
                    <span className="font-medium text-[var(--color-text-primary)]">{edu.degree}</span>
                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-[var(--color-border)]"></span>
                    <span>{edu.faculty}</span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center px-4 py-2 bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-lg text-sm text-[var(--color-text-secondary)]">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                {edu.status}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
