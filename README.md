# Portofolio

Personal portfolio website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4
- **Animation** — Framer Motion
- **Font** — Geist (by Vercel)

## Fitur

- Intro splash screen dengan animasi stagger text
- Navigasi sticky dengan backdrop blur
- Smooth scroll sections (Hero, About, Projects, Skills, Contact)
- Scroll reveal animation di setiap section
- Responsive design (mobile-first)
- Dark mode (system preference)

## Struktur Folder

```
src/
├── app/                # Halaman & layout
├── components/
│   ├── layout/         # Navbar, Footer, SplashScreen
│   ├── sections/       # Hero, About, Projects, Skills, Contact
│   └── ui/             # Card, Container, Section, ProjectCard, dll
├── hooks/              # Custom hooks (useSplashScreen)
├── lib/                # Utility & animation variants
├── types/              # TypeScript interfaces
├── data/               # Data proyek
└── config/             # Konfigurasi site (nama, sosial media, dll)
```
