export enum Category {
  CAREER = 'Career',
  LEADERSHIP = 'Leadership',
  CREATIVE = 'Creative',
  FINANCE = 'Finance',
  ECONOMICS = 'Economics',
  TECHNICAL = 'Technical',
  ACADEMIC = 'Academic',
  LITERARY = 'Literary',
  SCHOOL = 'School',
  EXTRACURRICULAR = 'Extracurricular'
}

export interface Episode {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  type: string;
  duration?: string;
  date?: string;
  imageUrl?: string;
}

export interface Season {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  years: string;
  episodes: Episode[];
  color: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  matchScore: number;
  tags: string[];
  imageUrl?: string;
  displayMode?: 'logo' | 'cover';
}

export interface Parameter {
  id: string;
  label: string;
  value: number;
  leftLabel: string;
  rightLabel: string;
}