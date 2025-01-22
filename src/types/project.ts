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
    googlePlay?: string;
    ruStore?: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  isRitualMaster?: boolean;
  skills: string[];
  projects: {
    name: string;
    description: string;
    link: string;
    status?: 'active' | 'completed' | 'forbidden';
  }[];
  links: {
    github?: string;
    website?: string;
  };
}