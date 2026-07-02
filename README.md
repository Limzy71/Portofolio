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
│   └── ui/             # Button, Card, Container, Section, dll
├── hooks/              # Custom hooks (useSplashScreen, useScrollReveal)
├── lib/                # Utility & animation variants
├── types/              # TypeScript interfaces
├── data/               # Data proyek & skill
└── config/             # Konfigurasi site (nama, sosial media, dll)
```

## Cara Pakai

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build
npm run build

# Lint
npm run lint
```

## Kustomisasi

1. **`config/site.ts`** — Ganti nama, role, deskripsi, sosial media
2. **`data/projects.ts`** — Tambah/ubah data proyek
3. **`data/skills.ts`** — Daftar skill
4. **`public/images/`** — Foto profil & screenshot proyek

## Deploy

Deploy ke Vercel dalam 1 klik:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)
