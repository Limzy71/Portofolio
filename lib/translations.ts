export type Locale = "id" | "en";

export const translations = {
  id: {
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
  },
  en: {
    nav: {
      home: "Home",
      tentang: "About",
      proyek: "Projects",
      skill: "Skills",
      kontak: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      description:
        "Fullstack developer & software engineer enthusiast passionate about building impactful digital solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
    },
    about: {
      title: "About Me",
      subtitle: "Let's get to know each other!",
      p1: "Hi! I'm a Fullstack Developer & Software Engineer Enthusiast based in Indonesia.",
      p2: "I'm passionate about building modern web applications with a focus on performance, accessibility, and optimal user experience.",
      p3: "I'm constantly learning and exploring the latest technologies in the web development ecosystem.",
    },
    projects: {
      title: "Projects",
      subtitle: "Some projects I've worked on.",
      empty: "No projects added yet.",
      liveDemo: "Live Demo →",
      sourceCode: "Source Code →",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I work with.",
      frontend: "Frontend",
      backend: "Backend",
      tools: "Tools",
      design: "Design",
    },
    contact: {
      title: "Contact Me",
      subtitle: "Got a project or want to chat? Just reach out!",
      description:
        "Have a question or want to collaborate? Don't hesitate to contact me.",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js & Framer Motion",
    },
    splash: {
      skip: "Skip →",
    },
  },
} as const;

export type Translation = (typeof translations)[Locale];
