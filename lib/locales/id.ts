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
    liveDemo: "Live Demo â†’",
    sourceCode: "Source Code â†’",
  },
  skills: {
    title: "Skill",
    subtitle: "Teknologi yang saya kuasai.",
    kicker: "mari bangun sesuatu bersama",
    headingPrefix: "Skill &",
    headingHighlight: "Keahlian",
    cards: {
      softwareMobile: "PERANGKAT LUNAK & MOBILE",
      languages: "BAHASA & TEKNOLOGI INTI",
      uiux: "UI/UX",
      tools: "DATABASE & ALAT DEV",
      softSkills: "KEMAMPUAN NON-TEKNIS",
    },
  },
  contact: {
    title: "Hubungi Saya",
    subtitle: "Pilih kanal favorit Anda untuk terhubung.",
    kicker: "mari bangun sesuatu bersama",
    headingPrefix: "Mari",
    headingHighlight: "Terhubung",
    description:
      "Punya ide proyek, peluang kolaborasi, atau sekadar ingin terhubung? Pilih salah satu kanal di bawah.",
    form: {
      nameLabel: "Nama Anda",
      namePlaceholder: "Masukkan nama Anda",
      emailLabel: "Email Anda",
      emailPlaceholder: "Masukkan email Anda",
      messageLabel: "Pesan",
      messagePlaceholder: "Ceritakan singkat tentang proyek atau layanan yang Anda butuhkan..",
      submit: "Kirim Pesan",
      sending: "Mengirim...",
      success: "Pesan berhasil dikirim!",
      error: "Gagal mengirim pesan. Silakan coba lagi.",
    },
    heading: "Mulai Percakapan",
    body: "Punya ide proyek, peluang kolaborasi, atau sekadar ingin terhubung? Pilih salah satu kanal di bawah dan mari mulai percakapan.",
    location: "Lokasi",
    locationValue: "Bandung, Jawa Barat, Indonesia",
    sendEmail: "Kirim Email Langsung",
    links: {
      github: "Github",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      email: "Email",
    },
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Dibuat dengan Next.js & Framer Motion",
  },
  splash: {
    skip: "Skip â†’",
  },
} as const;

export type IdTranslation = typeof id;




