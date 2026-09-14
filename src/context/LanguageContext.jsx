import { createContext, useContext, useState, useCallback } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    // Navbar
    navHome: 'Home',
    navAbout: 'About',
    navSkills: 'Skills',
    navExperience: 'Experience',
    navProjects: 'Projects',
    navContact: 'Contact',
    downloadCV: 'Download CV',

    // Hero
    heroEyebrow: 'Computer Engineering Student',
    heroSubtext: 'I am a Computer Engineering student with practical experience in web development, IT support, and digital technology. I enjoy building useful digital solutions and solving technical problems.',
    viewWork: 'View my work',

    // About
    aboutTitle: 'About me',
    aboutText: "I am currently pursuing a Bachelor's degree (S1) in Computer Engineering at Universitas Muhammadiyah Karanganyar (UMUKA) in the Faculty of Science and Technology. With a strong passion for technology, I have gained practical experience in Web Development, IT Support, Computer Troubleshooting, and IT Operations through internships and professional work.",
    aboutExtra: 'My journey involves working on functional websites, maintaining IT operations, and continuously learning new technologies to deliver practical solutions.',
    personalInfo: 'Personal information',
    labelName: 'Name',
    labelEducation: 'Education',
    labelStatus: 'Status',
    labelLocation: 'Location',
    statusValue: 'Active Undergraduate Student',

    // Skills
    skillsTitle: 'Skills and technologies',
    skillsSubtext: 'Tools and technologies I work with across web development, IT support, and daily workflows.',

    // Services
    servicesTitle: 'What I do',
    servicesSubtext: 'Services I can deliver as a developer and IT professional.',
    serviceWebDev: 'Building modern and functional websites for personal and business needs.',
    serviceITSupport: 'Troubleshooting hardware, software, and day-to-day IT problems.',
    serviceWebMaintenance: 'Maintaining and improving existing websites to ensure optimal performance.',
    serviceDigitalSolutions: 'Helping businesses create practical digital solutions for their operations.',

    // Experience
    experienceTitle: 'Experience',
    exp1: [
      'Developed and maintained website',
      'Assisted in website design improvements',
      'Handled web development needs',
      'Helped manage website operations'
    ],
    exp2: [
      'Web development and IT support',
      'Computer troubleshooting',
      'Supported IT operational needs',
      'Assisted in website development and maintenance',
      'Served as staff leader in team projects'
    ],
    exp3: [
      'Computer troubleshooting',
      'IT support and hardware/software handling',
      'Served customer needs',
      'Cashier and administrative tasks'
    ],

    // Education
    educationTitle: 'Education',
    eduStatus: 'Student',

    // Projects
    projectsEyebrow: 'Selected work',
    projectsTitle: 'Projects',
    project1Desc: 'Professional website for UMARATAX Tax Consulting.',
    project2Desc: 'Management website for centralized wedding invitation website creation.',
    project3Desc: 'Website for WD Group digital presence needs.',
    project4Desc: 'Projects and experience related to computer troubleshooting, maintenance, and IT operational support.',

    // Contact
    contactEyebrow: 'Get in touch',
    contactTitle: 'Contact',
    contactSubtext: "Have a project, internship opportunity, or collaboration in mind? I'd like to hear from you.",
    labelEmail: 'Email',
    labelSubject: 'Subject',
    labelMessage: 'Message',
    placeholderName: 'Your name',
    placeholderEmail: 'you@example.com',
    placeholderSubject: 'What is this about?',
    placeholderMessage: 'Your message...',
    sendMessage: 'Send message',
    sending: 'Sending...',
    successMessage: 'Message sent. Thank you for reaching out.',

    // Footer
    backToTop: 'Back to top',
  },

  id: {
    // Navbar
    navHome: 'Beranda',
    navAbout: 'Tentang',
    navSkills: 'Keahlian',
    navExperience: 'Pengalaman',
    navProjects: 'Proyek',
    navContact: 'Kontak',
    downloadCV: 'Unduh CV',

    // Hero
    heroEyebrow: 'Mahasiswa Teknik Komputer',
    heroSubtext: 'Saya mahasiswa Teknik Komputer dengan pengalaman praktis di bidang web development, IT support, dan teknologi digital. Saya senang membangun solusi digital yang bermanfaat dan memecahkan masalah teknis.',
    viewWork: 'Lihat karya saya',

    // About
    aboutTitle: 'Tentang saya',
    aboutText: 'Saya sedang menempuh pendidikan S1 Teknik Komputer di Universitas Muhammadiyah Karanganyar (UMUKA), Fakultas Sains dan Teknologi. Dengan minat yang kuat terhadap teknologi, saya telah memperoleh pengalaman praktis di bidang Web Development, IT Support, Computer Troubleshooting, dan IT Operations melalui magang dan pengalaman kerja profesional.',
    aboutExtra: 'Perjalanan saya meliputi pembuatan website fungsional, pemeliharaan operasional IT, dan terus belajar teknologi baru untuk memberikan solusi praktis.',
    personalInfo: 'Informasi pribadi',
    labelName: 'Nama',
    labelEducation: 'Pendidikan',
    labelStatus: 'Status',
    labelLocation: 'Lokasi',
    statusValue: 'Mahasiswa Aktif',

    // Skills
    skillsTitle: 'Keahlian dan teknologi',
    skillsSubtext: 'Alat dan teknologi yang saya gunakan dalam web development, IT support, dan pekerjaan sehari-hari.',

    // Services
    servicesTitle: 'Layanan saya',
    servicesSubtext: 'Layanan yang dapat saya berikan sebagai developer dan profesional IT.',
    serviceWebDev: 'Membangun website modern dan fungsional untuk kebutuhan personal dan bisnis.',
    serviceITSupport: 'Menangani permasalahan hardware, software, dan kebutuhan IT sehari-hari.',
    serviceWebMaintenance: 'Memelihara dan meningkatkan performa website yang sudah ada.',
    serviceDigitalSolutions: 'Membantu bisnis menciptakan solusi digital praktis untuk operasional mereka.',

    // Experience
    experienceTitle: 'Pengalaman',
    exp1: [
      'Mengembangkan dan melakukan maintenance website',
      'Membantu pengembangan tampilan website',
      'Mengerjakan kebutuhan web development',
      'Membantu pengelolaan website'
    ],
    exp2: [
      'Web development dan IT support',
      'Troubleshooting komputer',
      'Mendukung kebutuhan operasional IT',
      'Membantu pengembangan dan maintenance website',
      'Berperan sebagai staff leader dalam pekerjaan tim'
    ],
    exp3: [
      'Troubleshooting komputer',
      'IT support dan penanganan hardware/software',
      'Melayani kebutuhan pelanggan',
      'Kasir dan tugas administratif'
    ],

    // Education
    educationTitle: 'Pendidikan',
    eduStatus: 'Mahasiswa',

    // Projects
    projectsEyebrow: 'Karya pilihan',
    projectsTitle: 'Proyek',
    project1Desc: 'Website profesional untuk UMARATAX Tax Consulting.',
    project2Desc: 'Website management untuk mengelola pembuatan website undangan pernikahan secara terpusat.',
    project3Desc: 'Website untuk kebutuhan digital presence WD Group.',
    project4Desc: 'Proyek dan pengalaman yang berkaitan dengan troubleshooting komputer, maintenance, dan dukungan operasional IT.',

    // Contact
    contactEyebrow: 'Hubungi saya',
    contactTitle: 'Kontak',
    contactSubtext: 'Punya proyek, peluang magang, atau kolaborasi? Saya ingin mendengar dari Anda.',
    labelEmail: 'Email',
    labelSubject: 'Subjek',
    labelMessage: 'Pesan',
    placeholderName: 'Nama Anda',
    placeholderEmail: 'anda@contoh.com',
    placeholderSubject: 'Tentang apa ini?',
    placeholderMessage: 'Pesan Anda...',
    sendMessage: 'Kirim pesan',
    sending: 'Mengirim...',
    successMessage: 'Pesan terkirim. Terima kasih sudah menghubungi.',

    // Footer
    backToTop: 'Kembali ke atas',
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'id' : 'en');
  }, []);

  const t = useCallback((key) => {
    return translations[lang]?.[key] ?? translations.en[key] ?? key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
