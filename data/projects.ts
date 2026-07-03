import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Spendly Financial App",
    description:
      "Aplikasi pengelolaan keuangan berbasis Flutter untuk mencatat transaksi, memantau keuangan, mengatur pengingat, dan menyimpan data secara lokal maupun terhubung ke backend Supabase dengan fitur autentikasi biometrik serta ekspor laporan PDF/CSV.",
    techStack: ["Flutter", "Dart", "Supabase", "BLoC", "FL Chart"],
    image: "/images/projects/Logo Spendly.jpeg",
    liveUrl: "https://github.com/Limzy71",
    repoUrl: "https://github.com/Limzy71",
    status: "● Mobile App",
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
