export const siteConfig = {
  name: "La Ode Muh. Ikhsan Mbala",
  initials: "IM",
  role: "Frontend Developer",
  description:
    "Frontend developer yang passionate membangun web modern dengan pengalaman user yang optimal.",
  email: "email@example.com",
  location: "Indonesia",
  social: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
  },
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Skill", href: "#skills" },
    { label: "Kontak", href: "#contact" },
  ] as const,
} as const;

export type SiteConfig = typeof siteConfig;
