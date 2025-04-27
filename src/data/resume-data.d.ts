// src/data/resume-data.d.ts

export interface EducationEntry {
  institution: string;
  degree: string;
  field?: string; // Made field optional as not always present
  years: string;
  grade?: string; // Made grade optional
}

export interface SkillSet {
  languages: string[];
  tools: string[];
  frameworks: string[];
}

export interface Project {
  id?: string;
  title: string;
  description: string[];
  technologies: string[];
  date: string;
  githubLink?: string;
  liveLink?: string;
}

export interface ExperienceEntry {
  id?: string;
  company: string;
  title: string;
  date: string;
  responsibilities: string[];
  certificateLink?: string;
}

export interface Certification {
  id?: string;
  name: string;
  date: string;
  validationNumber?: string;
  link?: string; // For validation link
  certificateLink?: string; // For direct certificate view link
}

export interface Achievement {
  id?: string;
  name: string;
  date: string;
  description: string;
  certificateLink?: string; // Added certificate link for achievements
}

export interface ContactInfo {
    email: string;
    linkedin: string;
    github: string;
    website: string;
}

export interface ResumeData {
  name: string;
  title: string;
  lastUpdated: string;
  contact: ContactInfo;
  education: EducationEntry[];
  skills: SkillSet;
  projects: Project[];
  experience: ExperienceEntry[];
  certifications: Certification[];
  achievements: Achievement[];
  coursework: string[];
}
