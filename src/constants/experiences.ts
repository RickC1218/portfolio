export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  isRemote?: boolean;
  location: string;
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp-1',
    company: 'PPM - Clubmiles',
    role: 'Front End Developer',
    period: '2025 - Currently',
    location: 'Av. Lugo',
    isRemote: false,
    description: 'Developing high-performance streetwear e-commerce interfaces with a focus on urban aesthetics and mobile-first responsiveness.'
  },
  {
    id: 'exp-2',
    company: 'Logiciel',
    role: 'Back End Developer',
    period: '2024 - 2025',
    location: 'Av. Lugo',
    isRemote: false,
    description: 'Developing high-performance streetwear e-commerce interfaces with a focus on urban aesthetics and mobile-first responsiveness.'
  },
  {
    id: 'exp-3',
    company: 'Radical',
    role: 'CiberSecurity Dev',
    period: '2024 Abril - 2024 Agosto',
    location: 'Remote',
    isRemote: true,
    description: 'Developing high-performance streetwear e-commerce interfaces with a focus on urban aesthetics and mobile-first responsiveness.'
  },
];