import profileData from "../data/profile.json";
import educationData from "../data/education.json";
import experiencesData from "../data/experiences.json";
import certificationsData from "../data/certifications.json";
import honorsData from "../data/honors.json";
import skillsData from "../data/skills.json";
import socialsData from "../data/socials.json";
import writingsData from "../data/writings.json";
import projectsData from "../data/projects.json";

// Types
export interface Profile {
  name: {
    full: string;
    display: string;
  };
  headline: string;
  tagline: string;
  status: {
    label: string;
    open_to_work: boolean;
  };
  location: {
    city: string;
    province: string;
    country: string;
  };
  bio: {
    short: string;
    long: string;
  };
  mission: string;
  website: {
    url: string;
    label: string;
  };
  resume: {
    download_name: string;
  };
  photo: {
    path: string;
  };
  logo: {
    path: string;
  };
  contact: {
    email: string;
    phone: string;
  };
  socials: {
    github: string;
    linkedin: string;
    upwork: string;
  };
  career: {
    current_role: string;
    focus: string[];
    currently_exploring: string[];
  };
  cta: {
    primary: {
      title: string;
      description: string;
    };
  };
}

export interface Education {
  id: string;
  priority: number;
  institution: string;
  degree: string;
  field: string;
  location: string;
  start_year: number;
  end_year: number;
  gpa: string;
  summary: string;
  thesis: {
    title: string;
    status: string;
    domains: string[];
    highlights: string[];
  };
  activities: string[];
}

export interface Experience {
  id: string;
  priority: number;
  company: string;
  role: string;
  employment_type: string;
  location: string;
  start_date: string;
  end_date: string | null;
  current: boolean;
  summary: string;
  responsibilities: string[];
  tech_stack: string[];
  projects?: string[];
}

export interface Certification {
  id: string;
  priority: number;
  name: string;
  issuer: string;
  issue_year: number;
  skills: string[];
}

export interface Honor {
  id: string;
  priority: number;
  title: string;
  organization: string;
  year: number;
  description: string;
  type: string;
  registration_number?: string;
}

export interface SkillSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Skills {
  sections: SkillSection[];
  currently_exploring: string[];
}

export interface Social {
  label: string;
  value: string;
  url: string;
}

export interface Socials {
  email: Social;
  linkedin: Social;
  github: Social;
  upwork: Social;
  portfolio: Social;
}

export interface Writing {
  id: string;
  priority: number;
  title: string;
  slug: string;
  status: "published" | "draft" | "coming-soon";
  category: string;
}

export interface Project {
  id: string;
  priority: number;
  title: string;
  slug: string;
  featured: boolean;
  category: string;
  domains: string[];
  complexity: string;
  status: string;
  year: number;
  tagline: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  engineering_decisions: string[];
  challenges: string[];
  lessons_learned: string[];
  future_improvements: string[];
  tech_stack: string[];
  features: string[];
  architecture: {
    nodes: string[];
    edges?: string[];
  };
  metrics: {
    accuracy?: string;
    performance?: string;
    dataset?: string;
    users?: string;
    other?: string[];
  };
  links: {
    github?: string;
    demo?: string;
    paper?: string;
  };
  assets: {
    cover: string;
    architecture?: string;
    gallery: string[];
  };
}

export interface Projects {
  featured: Project[];
  archive: Project[];
}

// Data access functions
export function getProfile(): Profile {
  return profileData as Profile;
}

export function getEducation(): Education[] {
  return educationData as Education[];
}

export function getExperiences(): Experience[] {
  return experiencesData as Experience[];
}

export function getCertifications(): Certification[] {
  return certificationsData as Certification[];
}

export function getHonors(): Honor[] {
  return honorsData as Honor[];
}

export function getSkills(): Skills {
  return skillsData as Skills;
}

export function getSocials(): Socials {
  return socialsData as Socials;
}

export function getWritings(): Writing[] {
  return writingsData as Writing[];
}

export function getProjects(): Projects {
  return projectsData as Projects;
}

export function getFeaturedProjects(): Project[] {
  return getProjects().featured;
}

export function getArchiveProjects(): Project[] {
  return getProjects().archive;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const allProjects = [...getFeaturedProjects(), ...getArchiveProjects()];
  return allProjects.find((project) => project.slug === slug);
}

export function getAllProjects(): Project[] {
  return [...getFeaturedProjects(), ...getArchiveProjects()];
}

export function getNextProject(slug: string): Project | undefined {
  const allProjects = getAllProjects();
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return allProjects[(index + 1) % allProjects.length];
}

export function getPreviousProject(slug: string): Project | undefined {
  const allProjects = getAllProjects();
  const index = allProjects.findIndex((project) => project.slug === slug);
  if (index === -1) return undefined;
  return allProjects[(index - 1 + allProjects.length) % allProjects.length];
}

export function getRelatedProjects(currentProject: Project, limit: number = 2): Project[] {
  const allProjects = [...getFeaturedProjects(), ...getArchiveProjects()];
  return allProjects
    .filter((project) => project.id !== currentProject.id)
    .filter((project) =>
      project.domains.some((domain) => currentProject.domains.includes(domain))
    )
    .slice(0, limit);
}
