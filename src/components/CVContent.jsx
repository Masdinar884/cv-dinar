import { User, GraduationCap, Briefcase, ShieldCheck, Star } from '@phosphor-icons/react';
import { 
  personalInfo, 
  educationData, 
  experienceProjects, 
  cyberLearning, 
  strengths 
} from '../data/portfolio';

const SectionHeader = ({ title, icon: Icon }) => (
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-12 rounded-full bg-[var(--color-accent-light)] flex items-center justify-center text-white flex-shrink-0 z-10">
      <Icon size={24} weight="fill" />
    </div>
    <h2 className="text-xl sm:text-2xl font-bold text-[var(--color-sidebar)] tracking-wide whitespace-nowrap bg-white pr-4">
      {title}
    </h2>
    <div className="w-full h-px bg-[var(--color-accent-light)]/50 mt-1"></div>
  </div>
);

const CVContent = () => {
  return (
    <main className="bg-[var(--color-main)] min-h-screen text-[var(--color-text-main)] pt-12 pb-24 px-6 sm:px-12 md:px-16 lg:px-20 xl:px-24">
      
      {/* Header */}
      <header className="mb-12 border-b-2 border-[var(--color-accent-light)]/30 pb-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[var(--color-sidebar)] tracking-tight mb-2 uppercase">
          {personalInfo.name}
        </h1>
        <p className="text-lg sm:text-xl font-bold text-[var(--color-accent-light)] tracking-widest uppercase">
          {personalInfo.role}
        </p>
      </header>

      <div className="space-y-12">
        
        {/* Profil Singkat */}
        <section>
          <SectionHeader title="PROFIL SINGKAT" icon={User} />
          <p className="text-sm sm:text-base leading-relaxed text-[var(--color-text-main-light)] font-medium pl-[64px]">
            {personalInfo.profile}
          </p>
        </section>

        {/* Pendidikan */}
        <section>
          <SectionHeader title="PENDIDIKAN" icon={GraduationCap} />
          <div className="space-y-6 pl-[64px]">
            {educationData.map((edu, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[var(--color-sidebar)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-accent-light)] mb-0.5">{edu.institution}</h3>
                  {edu.details && (
                    <p className="text-sm font-medium text-[var(--color-text-main-light)]">{edu.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pengalaman / Proyek */}
        <section>
          <SectionHeader title="PENGALAMAN / PROYEK" icon={Briefcase} />
          <div className="space-y-6 pl-[64px]">
            {experienceProjects.map((exp, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[var(--color-sidebar)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[var(--color-accent-light)] mb-1">{exp.title}</h3>
                  <p className="text-sm font-medium text-[var(--color-text-main-light)] leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pembelajaran Cybersecurity */}
        <section>
          <SectionHeader title="PEMBELAJARAN CYBERSECURITY" icon={ShieldCheck} />
          <ul className="space-y-2 pl-[64px]">
            {cyberLearning.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sidebar)] mt-2 flex-shrink-0"></span>
                <span className="text-sm font-medium text-[var(--color-text-main-light)] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Kelebihan */}
        <section>
          <SectionHeader title="KELEBIHAN" icon={Star} />
          <ul className="space-y-2 pl-[64px]">
            {strengths.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sidebar)] mt-2 flex-shrink-0"></span>
                <span className="text-sm font-medium text-[var(--color-text-main-light)] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

    </main>
  );
};

export default CVContent;
