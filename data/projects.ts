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
    title: "OutVenture Outdoor Store",
    description:
      "Platform web e-commerce penjualan perlengkapan dan peralatan aktivitas outdoor terpadu dengan pengelolaan katalog produk, keranjang belanja, dan sistem pemesanan yang responsif.",
    techStack: ["PHP", "Laravel", "Blade", "SQLite"],
    image: "/images/projects/outventure.jpg",
    repoUrl: "https://github.com/Naksuuuu/OutVenture",
    status: "Code Only",
  },
  {
    id: "project-3",
    title: "Motekar ERP System",
    description:
      "Sistem ERP terpadu untuk otomasi operasional bisnis dari pengadaan, gudang, produksi, hingga QC dan CRM. Menggunakan backend Express + TypeScript & MySQL, serta frontend Vite + TypeScript.",
    techStack: ["Express", "TypeScript", "Vite", "MySQL"],
    image: "/images/projects/Motekar ERP.jpg",
    repoUrl: "https://github.com/Limzy71",
    status: "Code Only",
  },
];
