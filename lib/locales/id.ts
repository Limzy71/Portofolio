export const id = {
  nav: {
    home: "Home",
    tentang: "Tentang",
    proyek: "Proyek",
    skill: "Skill",
    kontak: "Kontak",
  },
  hero: {
    greeting: "Halo, saya",
    description:
      "Pengembang Fullstack & antusias Rekayasa Perangkat Lunak yang berdedikasi membangun solusi digital yang berdampak nyata.",
    viewProjects: "Lihat Proyek",
    contactMe: "Hubungi Saya",
  },
  about: {
    kicker: "mengenal saya",
    headingPrefix: "Tentang",
    headingHighlight: "Saya",
    title: "Tentang Saya",
    subtitle: "Membangun web dan perangkat lunak yang relevan.",
    p1: "Halo! Saya seorang Pengembang Fullstack & Rekayasa Perangkat Lunak yang fokus membangun produk web dan sistem yang stabil, cepat, dan mudah dikembangkan.",
    p2: "Saya terbiasa mengerjakan alur menyeluruh dari awal hingga akhir, mulai dari perancangan antarmuka, pengembangan backend, integrasi basis data, hingga rilis dan optimasi performa.",
    p3: "Fokus utama saya adalah menciptakan solusi digital yang mudah dipelihara, benar-benar bermanfaat, serta memberi dampak nyata untuk pengguna maupun bisnis.",
    statsYears: "Tahun Pengalaman",
    statsProjects: "Proyek Selesai",
    statsTech: "Teknologi Dikuasai",
  },
  projects: {
    kicker: "proyek pilihan",
    headingPrefix: "Proyek",
    headingHighlight: "Terpilih",
    subtitle: "Beberapa proyek yang pernah saya kerjakan.",
    empty: "Belum ada proyek ditambahkan.",
    liveDemo: "Demo Langsung →",
    sourceCode: "Kode Sumber →",
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
    rights: "Hak cipta dilindungi.",
    builtWith: "Dibuat dengan Next.js & Framer Motion",
  },
  splash: {
    skip: "Lewati Intro",
  },
} as const;

export type IdTranslation = typeof id;




