export interface Project {
  id: string;
  title: string;
  description: string;
  descriptionEn?: string;
  techStack: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  status?: string;
  statusEn?: string;
}
