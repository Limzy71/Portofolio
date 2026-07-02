export const id = {
  nav: {
    home: "Home",
    tentang: "Tentang",
    proyek: "Proyek",
    skill: "Skill",
    kontak: "Kontak",
  },
  hero: {
    greeting: "Hello, saya",
    description:
      "Fullstack developer & software engineer enthusiast yang passionate membangun solusi digital yang berdampak.",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
  },
  about: {
    title: "Tentang Saya",
    subtitle: "Kenalan yuk!",
    p1: "Halo! Saya seorang Fullstack Developer & Software Engineer Enthusiast yang berbasis di Indonesia.",
    p2: "Saya passionate dalam membangun aplikasi web modern dengan fokus pada performa, aksesibilitas, dan user experience yang optimal.",
    p3: "Saat ini saya terus belajar dan mengeksplorasi teknologi terbaru di ekosistem web development.",
    statsYears: "Tahun Pengalaman",
    statsProjects: "Proyek Selesai",
    statsTech: "Teknologi Dikuasai",
  },
  projects: {
    title: "Proyek",
    subtitle: "Beberapa proyek yang pernah saya kerjakan.",
    empty: "Belum ada proyek ditambahkan.",
    liveDemo: "Live Demo →",
    sourceCode: "Source Code →",
  },
  skills: {
    title: "Skill",
    subtitle: "Teknologi yang saya kuasai.",
    frontend: "Frontend",
    backend: "Backend",
    tools: "Tools",
    design: "Design",
  },
  contact: {
    title: "Hubungi Saya",
    subtitle: "Ada proyek atau ingin ngobrol? Langsung aja!",
    description:
      "Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya.",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Dibuat dengan Next.js & Framer Motion",
  },
  splash: {
    skip: "Skip →",
  },
} as const;

export type IdTranslation = typeof id;
