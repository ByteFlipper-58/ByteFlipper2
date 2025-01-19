export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    technologies: string[];
    links: {
      github?: string;
      live?: string;
    };
  }