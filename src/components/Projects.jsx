import { motion } from 'framer-motion';
import { ArrowUpRight } from '@phosphor-icons/react';
import { projectsData } from '../data/portfolio';
import { useLang } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLang();

  const projectDescs = [
    t('project1Desc'),
    t('project2Desc'),
    t('project3Desc'),
    t('project4Desc'),
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-3">Selected Work</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--color-text-primary)] mb-6">
              {t('projectsTitle')}
            </h2>
            <div className="w-12 h-1 bg-[var(--color-accent)] rounded-full"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-[var(--color-text-secondary)] max-w-sm pb-2"
          >
            A collection of deployed digital solutions and technical operations I have worked on.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group block bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] rounded-3xl overflow-hidden hover:border-[var(--color-accent)]/50 hover:shadow-2xl hover:shadow-[var(--color-accent)]/10 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-[var(--color-bg-subtle)] relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-elevated)] via-transparent to-transparent opacity-80"></div>
              </div>

              <div className="p-8 relative">
                <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shadow-lg shadow-[var(--color-accent)]/30 group-hover:scale-110 group-hover:-translate-y-[60%] transition-transform duration-300">
                  <ArrowUpRight size={20} weight="bold" />
                </div>

                <div className="mb-4">
                  <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] mb-8 line-clamp-2 leading-relaxed">
                  {projectDescs[idx] || project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-bg)] px-3 py-1.5 rounded-full border border-[var(--color-border-subtle)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
