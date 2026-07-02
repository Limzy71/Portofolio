import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Nama Proyek 1",
    description:
      "Deskripsi singkat tentang proyek ini, teknologi yang digunakan, dan apa yang dipelajari.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/projects/project-1.jpg",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/username/project",
  },
  {
    id: "project-2",
    title: "Nama Proyek 2",
    description:
      "Deskripsi singkat tentang proyek ini, teknologi yang digunakan, dan apa yang dipelajari.",
    techStack: ["React", "Node.js", "MongoDB"],
    image: "/images/projects/project-2.jpg",
    liveUrl: "https://example.com",
  },
];
