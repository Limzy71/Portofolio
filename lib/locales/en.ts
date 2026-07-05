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
      "Full-Stack Web & Mobile Developer with a background in Software Engineering, dedicated to building high-performance applications with real impact.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    downloadCV: "Download CV",
  },
  about: {
    kicker: "get to know me",
    headingPrefix: "About",
    headingHighlight: "Me",
    title: "About Me",
    subtitle: "Building practical web and software solutions.",
    p1: "Hi! I'm a Full-Stack Web & Mobile Developer specializing in Software Engineering. I focus on developing stable, fast, and easily scalable systems across various platforms.",
    p2: "I am experienced in managing the software development lifecycle end-to-end—from relational database design and backend development using the PHP/Laravel ecosystem, to building cross-platform mobile applications with Flutter that have been officially published on the Google Play Store.",
    p3: "My main focus is applying clean code, scalable system architecture, and high-value solutions. This dedication led me to win the \"The Best Project\" award twice from Google Developer Groups On Campus (GDGOC) UNPAS.",
    statsYears: "Years Experience",
    statsProjects: "Projects Done",
    statsTech: "Technologies Mastered",
  },
  projects: {
    kicker: "selected work",
    headingPrefix: "Selected",
    headingHighlight: "Projects",
    subtitle: "Some projects I've worked on.",
    empty: "No projects added yet.",
    liveDemo: "Live Demo →",
    sourceCode: "Source Code →",
  },
  skills: {
    title: "Skills",
    subtitle: "Technologies I work with.",
    kicker: "let's build something together",
    headingPrefix: "Skills &",
    headingHighlight: "Expertise",
    cards: {
      softwareMobile: "WEB & MOBILE DEVELOPMENT",
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
    skip: "Skip Intro",
  },
} as const;

export type EnTranslation = typeof en;




