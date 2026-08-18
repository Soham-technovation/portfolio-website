export interface EventHackathon {
  title: string;
  organization: string;
  date: string;
  location?: string;
  roleOrAchievement?: string;
  description?: string;
  tag?: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string;
}

export interface ResearchExperience {
  title: string;
  organization: string;
  location?: string;
  period: string;
  projectTopic: string;
  highlights: string[];
  pipelineSteps: {
    step: string;
    description: string;
    icon: string;
  }[];
  techStack: string[];
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
  keywords: string[];
  employmentType?: string;
  location?: string;
  workMode?: string;
  isCurrent?: boolean;
  linkedInUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  eventOrContext: string;
  period: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string; // string or '[Add GitHub URL]'
  demoUrl?: string;   // string or '[Add Demo URL]'
  category: 'RF & Radar' | 'AI & Environmental' | 'Embedded Systems';
  pipeline?: { title: string; desc: string }[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badgeCode?: string;
  verificationUrl?: string; // '[Add Verification Link]'
}

export interface SkillCategory {
  categoryName: string;
  skills: string[];
  icon: string;
}

export interface DomainItem {
  title: string;
  subtitle: string;
  items: string[];
  icon: string;
  color: string;
}

export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  type: 'Education' | 'Research' | 'Project' | 'Experience' | 'Certification';
  description: string;
  tag: string;
}
