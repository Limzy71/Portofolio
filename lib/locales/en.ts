export const en = {
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
} as const;

export type EnTranslation = typeof en;
