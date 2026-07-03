import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Spendly Financial App",
    description:
      "Aplikasi manajemen keuangan digital modern dengan analitik pengeluaran interaktif, pelacakan anggaran real-time, dan antarmuka pengguna yang intuitif.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    image: "/images/projects/Logo Spendly.jpeg",
    liveUrl: "https://github.com/Limzy71",
    repoUrl: "https://github.com/Limzy71",
    status: "● Live Demo",
  },
  {
    id: "project-2",
    title: "Outventure Explorer",
    description:
      "Platform panduan petualangan alam terbuka dan pemesanan aktivitas wisata outdoor dengan penjelajahan destinasi berbasis peta interaktif.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/outventure.jpg",
    liveUrl: "https://github.com/Limzy71",
    repoUrl: "https://github.com/Limzy71",
    status: "● Live Demo",
  },
  {
    id: "project-3",
    title: "Motekar ERP & Logistics Engine",
    description:
      "Sistem rekayasa perangkat lunak berskala enterprise untuk otomasi alur kerja gudang, kontrol mutu, dan manajemen rantai pasok. (Proyek internal/backend, tidak di-deploy publik).",
    techStack: ["Node.js", "TypeScript", "MySQL", "REST API"],
    image: "/images/kain tenun bg.png",
    repoUrl: "https://github.com/Limzy71",
    status: "○ Code Only / Offline",
  },
];
