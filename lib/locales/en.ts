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
    statsYears: "Years Experience",
    statsProjects: "Projects Done",
    statsTech: "Technologies Mastered",
  },
  projects: {
    title: "Projects",
    subtitle: "Some projects I've worked on.",
    empty: "No projects added yet.",
    liveDemo: "Live Demo â†’",
    sourceCode: "Source Code â†’",
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I work with.",
    kicker: "let's build something together",
    headingPrefix: "Skills &",
    headingHighlight: "Expertise",
    cards: {
      softwareMobile: "SOFTWARE & MOBILE",
      languages: "LANGUAGES & CORE TECH",
      uiux: "UI/UX",
      tools: "DATABASES & DEV TOOLS",
      softSkills: "SOFT SKILLS",
    },
  },
  contact: {
    title: "Contact Me",
    subtitle: "Choose your favorite channel to connect.",
    kicker: "let's build something together",
    headingPrefix: "Let's",
    headingHighlight: "Connect",
    description:
      "Have a project idea, collaboration opportunity, or just want to connect? Pick any channel below.",
    form: {
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Your Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Message",
      messagePlaceholder: "Tell me briefly about your project or what you need..",
      submit: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
    },
    heading: "Start a Conversation",
    body: "Have a project idea, collaboration opportunity, or just want to connect? Pick any channel below and let's start a conversation.",
    location: "Location",
    locationValue: "Bandung, West Java, Indonesia",
    sendEmail: "Send Email Directly",
    links: {
      github: "Github",
      linkedin: "LinkedIn",
      instagram: "Instagram",
      email: "Email",
    },
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js & Framer Motion",
  },
  splash: {
    skip: "Skip â†’",
  },
} as const;

export type EnTranslation = typeof en;




