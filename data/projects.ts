import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Spendly Financial App",
    description:
      "Aplikasi pengelolaan keuangan berbasis Flutter untuk mencatat transaksi, memantau keuangan, mengatur pengingat, dan menyimpan data secara lokal.",
    techStack: ["Flutter", "Supabase"],
    image: "/images/projects/Logo Spendly.jpeg",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.penacode.spendly&hl=id",
    repoUrl: "https://github.com/Limzy71/Spendly_SAB_Tubes_2026",
    status: "Mobile App",
  },
  {
    id: "project-2",
    title: "Outventure Explorer",
    description:
      "Platform panduan petualangan alam terbuka dan pemesanan aktivitas wisata outdoor dengan penjelajahan destinasi berbasis peta interaktif.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    image: "/images/projects/outventure.jpg",
    repoUrl: "https://github.com/Naksuuuu/OutVenture",
    status: "Code Only",
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
