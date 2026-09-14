import { User, EnvelopeSimple, Phone, MapPin, Gear, Star } from '@phosphor-icons/react';
import { personalInfo, technicalSkills, interests } from '../data/portfolio';

const Sidebar = () => {
  return (
    <aside className="bg-[var(--color-sidebar)] text-[var(--color-text-sidebar)] min-h-screen flex flex-col pt-12 pb-12 w-full">
      
      {/* Profile Photo */}
      <div className="flex justify-center mb-8 px-8">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl relative">
          <img 
            src="/profile.jpg" 
            alt={personalInfo.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full h-px bg-[var(--color-sidebar-light)] mb-8"></div>

      <div className="px-8 sm:px-12 md:px-8 xl:px-12 space-y-12">
        
        {/* Kontak */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
              <User size={24} weight="bold" />
            </div>
            <h2 className="text-xl font-bold tracking-wider">KONTAK</h2>
          </div>
          
          <ul className="space-y-6">
            <li className="flex items-start gap-4">
              <EnvelopeSimple size={20} weight="fill" className="mt-0.5 flex-shrink-0" />
              <span className="text-sm font-medium break-all">{personalInfo.contact.email}</span>
            </li>
            <li className="flex items-start gap-4">
              <Phone size={20} weight="fill" className="mt-0.5 flex-shrink-0" />
              <span className="text-sm font-medium">{personalInfo.contact.phone}</span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin size={20} weight="fill" className="mt-0.5 flex-shrink-0" />
              <span className="text-sm font-medium leading-relaxed">{personalInfo.contact.address}</span>
            </li>
          </ul>
        </section>

        <div className="w-full h-px bg-[var(--color-sidebar-light)]"></div>

        {/* Keahlian Teknis */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
              <Gear size={24} weight="bold" />
            </div>
            <h2 className="text-xl font-bold tracking-wider">KEAHLIAN TEKNIS</h2>
          </div>
          
          <ul className="space-y-3 pl-2">
            {technicalSkills.map((skill, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                <span className="text-sm font-medium">{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="w-full h-px bg-[var(--color-sidebar-light)]"></div>

        {/* Minat */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center flex-shrink-0">
              <Star size={24} weight="bold" />
            </div>
            <h2 className="text-xl font-bold tracking-wider">MINAT</h2>
          </div>
          
          <ul className="space-y-3 pl-2">
            {interests.map((interest, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 flex-shrink-0"></span>
                <span className="text-sm font-medium">{interest}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </aside>
  );
};

export default Sidebar;
