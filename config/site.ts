export const siteConfig = {
  name: "La Ode Muh. Ikhsan Mbala",
  initials: "OD",
  role: "Fullstack Developer | Software engineer enthusiast",
  location: "Indonesia",
  social: {
    github: "https://github.com/Limzy71",
    linkedin: "https://www.linkedin.com/in/la-ode-muh-ikhsan-mbala-508628298/",
    email: "mailto:laodemuhikhsan18@gmail.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
