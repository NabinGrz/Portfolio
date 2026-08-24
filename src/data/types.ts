export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  role: string;
  company?: string;
  platform: 'Flutter' | 'Android' | 'Cross-Platform';
  techStack: string[];
  metrics: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  playStoreUrl?: string;
  appStoreUrl?: string;
  color: string;
  gradient: string;
  screenType: 'citypay' | 'namaste' | 'agri' | 'cronlink' | 'kharcha';
  image: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    highlight?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  description: string;
  achievements: string[];
  projectsMentioned?: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  details: string;
}
