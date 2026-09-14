import { motion } from 'framer-motion';
import { servicesData } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLang();

  const serviceDescs = [
    t('serviceWebDev'),
    t('serviceITSupport'),
    t('serviceWebMaintenance'),
    t('serviceDigitalSolutions'),
  ];

  return (
    <section id="services" className="py-24 relative bg-[var(--color-bg-elevated)]/30 border-y border-[var(--color-border-subtle)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            {t('servicesTitle')}
          </h2>
          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-[var(--color-bg)] border border-[var(--color-border-subtle)] rounded-2xl hover:border-[var(--color-accent)]/50 hover:shadow-lg hover:shadow-[var(--color-accent)]/5 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border)] text-[var(--color-text-secondary)] flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:border-[var(--color-accent)] transition-all duration-300">
                  <Icon size={28} weight="duotone" />
                </div>
                <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-3">{service.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {serviceDescs[idx] || service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
