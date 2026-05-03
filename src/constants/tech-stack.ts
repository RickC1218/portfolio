import {
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
} from '@tabler/icons-react';

export interface Technology {
  id: string;
  name: string;
  icon: typeof IconBrandReact;
  color: string;
  category: 'frontend' | 'tool' | 'social';
}

export const TECH_STACK: Record<string, Technology> = {
  html: {
    id: 'html',
    name: 'HTML5',
    icon: IconBrandHtml5,
    color: '#E34F26',
    category: 'frontend',
  },
  css: {
    id: 'css',
    name: 'CSS3',
    icon: IconBrandCss3,
    color: '#2965f1',
    category: 'frontend',
  },
  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: IconBrandJavascript,
    color: '#F0DB4F',
    category: 'frontend',
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: IconBrandTypescript,
    color: '#3178C6',
    category: 'frontend',
  },
  react: {
    id: 'react',
    name: 'React',
    icon: IconBrandReact,
    color: '#61DAFB',
    category: 'frontend',
  },
  tailwind: {
    id: 'tailwind',
    name: 'Tailwind',
    icon: IconBrandTailwind,
    color: '#06b6d4',
    category: 'frontend',
  },
  github: {
    id: 'github',
    name: 'GitHub',
    icon: IconBrandGithub,
    color: '#fafbfc',
    category: 'tool',
  },
  linkedin: {
    id: 'linkedin',
    name: 'LinkedIn',
    icon: IconBrandLinkedin,
    color: '#0a66c2',
    category: 'social',
  },
};

export const techStackArray = Object.values(TECH_STACK);