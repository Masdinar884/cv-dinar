import { 
  Code2, 
  Terminal, 
  Database, 
  Wrench, 
  Globe, 
  Monitor, 
  Smartphone, 
  Server,
  PenTool,
  ShieldCheck
} from 'lucide-react';

export const personalInfo = {
  name: "DINAR RAMADANI ADI PRATAMA",
  role: "WEB DEVELOPER & CYBERSECURITY ENTHUSIAST",
  shortDesc: "Mahasiswa S1 Teknik Komputer dengan latar belakang Rekayasa Perangkat Lunak. Memiliki ketertarikan kuat pada web development dan cybersecurity.",
  aboutText: "Saya adalah mahasiswa S1 Teknik Komputer dengan latar belakang Rekayasa Perangkat Lunak. Saya memiliki ketertarikan pada web development dan cybersecurity serta senang mempelajari teknologi melalui praktik langsung dan proyek. Saya juga memiliki pengalaman dalam membuat dan mengembangkan kelas pembelajaran Cyber Security untuk pemula. Saya mudah beradaptasi, memiliki rasa ingin tahu yang tinggi, dan terus berusaha mengembangkan kemampuan teknis.",
  email: "masdinar884@gmail.com",
  location: "Cangakan, Karanganyar, Jawa Tengah",
  status: "Mahasiswa Aktif S1 Teknik Komputer",
  education: "Universitas Muhammadiyah Karanganyar (UMUKA)",
  major: "Teknik Komputer (S1)",
  interests: ["Web Development", "Cybersecurity", "Software Development", "Game Development", "Teknologi"],
  socials: {
    linkedin: "https://linkedin.com/in/#",
    github: "https://github.com/masdinar884",
    instagram: "https://www.instagram.com/khairani_ram4d4ni",
    email: "mailto:masdinar884@gmail.com",
    whatsapp: "https://wa.me/6282181987591"
  }
};

export const cyberLearning = [
  "Memahami dasar HTTP dan cara kerja aplikasi web.",
  "Mempelajari Authentication.",
  "Mempelajari Session Management.",
  "Mempelajari CSRF.",
  "Mempelajari Content Discovery.",
  "Mempelajari dasar OSINT.",
  "Menggunakan Burp Suite untuk latihan keamanan aplikasi web pada lingkungan/lab yang legal.",
  "Terbiasa belajar cybersecurity melalui praktik langsung dan lab pembelajaran."
];

export const strengths = [
  "Mudah beradaptasi.",
  "Mampu belajar secara mandiri.",
  "Memiliki kemampuan problem solving.",
  "Memiliki rasa ingin tahu yang tinggi.",
  "Tertarik mempelajari teknologi baru.",
  "Senang melakukan praktik dan eksperimen dengan teknologi."
];

export const skillsData = [
  {
    category: "Web Development",
    skills: [
      { name: "HTML & CSS", icon: Code2, desc: "Fundamental web building" },
      { name: "JavaScript", icon: Terminal, desc: "Interactive scripting" },
      { name: "React & Vite", icon: Globe, desc: "Modern frontend frameworks" },
      { name: "Tailwind CSS", icon: PenTool, desc: "Utility-first styling" },
      { name: "PHP", icon: Server, desc: "Server-side scripting" }
    ]
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Burp Suite", icon: ShieldCheck, desc: "Web vulnerability testing" },
      { name: "Dasar Cybersecurity", icon: ShieldCheck, desc: "Fundamental security concepts" },
      { name: "Dasar OSINT", icon: Globe, desc: "Open-source intelligence" },
      { name: "Web Security", icon: Monitor, desc: "HTTP, Auth, CSRF" }
    ]
  },
  {
    category: "Tools & Environment",
    skills: [
      { name: "Linux / WSL", icon: Terminal, desc: "Unix-like environment" },
      { name: "Git & GitHub", icon: Globe, desc: "Version control system" },
      { name: "Docker", icon: Server, desc: "Containerization" },
      { name: "MySQL & MongoDB", icon: Database, desc: "Database management" }
    ]
  }
];

export const experienceData = [
  {
    company: "Kelas Pembelajaran",
    position: "Pembuat & Pengelola Kelas Cyber Security",
    period: "Proyek Pribadi",
    description: [
      "Membuat dan mengembangkan kelas pembelajaran Cyber Security untuk pemula.",
      "Menyusun materi pembelajaran mengenai dasar keamanan aplikasi web.",
      "Membimbing proses belajar melalui praktik serta lab pembelajaran yang legal dan aman."
    ]
  },
  {
    company: "Web Development",
    position: "Freelance & Personal Projects",
    period: "Ongoing",
    description: [
      "Memiliki pengalaman belajar dan mengembangkan berbagai proyek web.",
      "Menggunakan HTML, CSS, JavaScript, PHP, React, database, dan teknologi web lainnya."
    ]
  }
];

export const projectsData = [
  {
    title: "Cyber Crime Map Indonesia",
    category: "Cybersecurity & Web",
    description: "Membuat konsep website bergaya Security Operations Center (SOC) untuk memvisualisasikan informasi mengenai insiden dan kejahatan siber.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Sistem Pendeteksi Percobaan Login Mencurigakan",
    category: "Cybersecurity",
    description: "Perancangan konsep sistem untuk mendeteksi aktivitas login yang mencurigakan atau tidak biasa pada aplikasi web.",
    technologies: ["PHP", "MySQL", "Web Security"],
    link: "#",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Game Development Exploration",
    category: "Game Dev",
    description: "Mengeksplorasi Roblox Studio dan mencoba mengembangkan game sebagai proyek pribadi untuk mengasah logika pemrograman.",
    technologies: ["Roblox Studio", "Lua"],
    link: "#",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const educationData = [
  {
    institution: "Universitas Muhammadiyah Karanganyar (UMUKA)",
    degree: "S1 Teknik Komputer",
    faculty: "Sains dan Teknologi",
    status: "On Studying",
    period: "2023 - Present"
  },
  {
    institution: "SMK Bhina Karya Karanganyar",
    degree: "Jurusan Rekayasa Perangkat Lunak (RPL)",
    faculty: "",
    status: "Lulus",
    period: "Lulus"
  },
  {
    institution: "SMP Negeri 05 Karanganyar",
    degree: "Sekolah Menengah Pertama",
    faculty: "",
    status: "Lulus",
    period: "Lulus"
  },
  {
    institution: "SD Negeri 01 Papahan",
    degree: "Sekolah Dasar",
    faculty: "",
    status: "Lulus",
    period: "Lulus"
  }
];

export const servicesData = [
  {
    title: "Web Development",
    description: "Membangun website responsif dan modern menggunakan teknologi terbaru.",
    icon: Globe
  },
  {
    title: "Cybersecurity Basics",
    description: "Penerapan dasar keamanan web, pencegahan kerentanan umum seperti CSRF & Auth Bypass.",
    icon: ShieldCheck
  },
  {
    title: "IT Problem Solving",
    description: "Troubleshooting dan mencari solusi digital untuk permasalahan teknis.",
    icon: Wrench
  },
  {
    title: "Technical Learning",
    description: "Eksplorasi berkesinambungan di bidang software development, OSINT, dan Linux environment.",
    icon: Code2
  }
];
