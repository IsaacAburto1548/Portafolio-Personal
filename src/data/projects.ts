export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  type: 'universitario' | 'personal' | 'freelance';
  featured: boolean;
  year: number;
};

export const projects: Project[] = [
  {
    id: 'financify',
    title: 'Financify',
    description: 'Aplicación financiera offline-first con arquitectura MVVM, persistencia local con Room y generación de reportes en PDF/CSV.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'MVVM'],
    github: 'https://github.com/IsaacAburto1548/PersonalAccountantV2',
    type: 'personal',
    featured: true,
    year: 2025,
  },
  {
    id: 'scrcr',
    title: 'SCRCR',
    description: 'Proyecto colaborativo full-stack con arquitectura en capas, autenticación JWT, control de acceso RBAC e integración con PostgreSQL.',
    tags: ['TypeScript', 'Next.js', 'PostgreSQL', 'Zod', 'Vitest'],
    type: 'universitario',
    featured: true,
    year: 2025,
  },
];
