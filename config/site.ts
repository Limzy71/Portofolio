export const siteConfig = {
  name: "La Ode Muh. Ikhsan Mbala",
  initials: "OD",
  role: "Fullstack Developer | Software engineer enthusiast",
  description:
    "Frontend developer yang passionate membangun web modern dengan pengalaman user yang optimal.",
  location: "Indonesia",
  social: {
    github: "https://github.com/Limzy71",
    linkedin: "https://www.linkedin.com/in/la-ode-muh-ikhsan-mbala-508628298/",
    email: "mailto:laodemuhikhsan18@gmail.com",
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
