import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLang();

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Tech Stack</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            {t('skillsTitle')}
          </h2>
          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mx-auto mb-6"></div>
          <p className="text-base text-[var(--color-text-secondary)]">
            {t('skillsSubtext')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-3xl p-8 hover:border-[var(--color-border)] transition-colors"
            >
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                {category.category}
              </h3>

              <ul className="space-y-4">
                {category.skills.map((skill, skillIdx) => {
                  const Icon = skill.icon;
                  return (
                    <li key={skillIdx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <span className="block text-sm font-semibold text-[var(--color-text-primary)]">
                          {skill.name}
                        </span>
                        <span className="block text-xs text-[var(--color-text-muted)]">
                          {skill.desc}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
