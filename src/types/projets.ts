// src/types/projects.ts

export interface Project {
    title: string;
    description: string;
    image: string;
  }
  
  export interface ProjectSectionProps {
    params: Project[];
  }
  