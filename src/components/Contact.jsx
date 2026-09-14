import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperPlaneTilt, CheckCircle, Spinner } from '@phosphor-icons/react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { EnvelopeSimple } from '@phosphor-icons/react';
import { personalInfo } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLang();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 1500);
  };

  const contactLinks = [
    { icon: EnvelopeSimple, label: t('labelEmail'), value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Dinar Ramadani', href: personalInfo.socials.linkedin },
    { icon: FaGithub, label: 'GitHub', value: 'masdinar884', href: personalInfo.socials.github },
    { icon: FaInstagram, label: 'Instagram', value: '@khairani_ram4d4ni', href: personalInfo.socials.instagram },
    { icon: FaWhatsapp, label: 'WhatsApp', value: '0821-8198-7591', href: personalInfo.socials.whatsapp },
  ];

  const inputClass = 'w-full bg-[var(--color-bg)] border border-[var(--color-border-subtle)] rounded-xl px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]/30 transition-all';

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
            {t('contactTitle')}
          </h2>
          <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full mx-auto mb-6"></div>
          <p className="text-base text-[var(--color-text-secondary)] max-w-lg mx-auto">
            {t('contactSubtext')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border)] hover:shadow-lg shadow-black/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent)]/30 transition-colors">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-0.5">{item.label}</span>
                    <span className="block text-sm text-[var(--color-text-primary)] font-medium">{item.value}</span>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-3xl p-6 sm:p-10 relative shadow-xl shadow-black/5">

              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute top-6 left-6 right-6 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-3 rounded-xl flex items-center gap-3 z-10 text-sm font-medium"
                  >
                    <CheckCircle size={20} weight="fill" />
                    {t('successMessage')}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{t('labelName')}</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder={t('placeholderName')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{t('labelEmail')}</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder={t('placeholderEmail')} />
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{t('labelSubject')}</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder={t('placeholderSubject')} />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">{t('labelMessage')}</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" className={`${inputClass} resize-none`} placeholder={t('placeholderMessage')} />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-black bg-[var(--color-accent)] rounded-xl hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[var(--color-accent)]/20"
              >
                {isSubmitting ? (
                  <>
                    <Spinner size={18} weight="bold" className="animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    <PaperPlaneTilt size={18} weight="bold" />
                    {t('sendMessage')}
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
