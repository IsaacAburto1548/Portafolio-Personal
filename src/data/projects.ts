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
    id: 'sistema-inventario',
    title: 'Sistema de Gestión de Inventario',
    description: 'App web para gestionar inventario de una tienda, con reportes en tiempo real y control de stock.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Express'],
    github: 'https://github.com/IsaacAburto1548/inventario',
    demo: 'https://inventario.vercel.app',
    image: '/projects/inventario.png',
    type: 'universitario',
    featured: true,
    year: 2024,
  },
  {
    id: 'clima-app',
    title: 'App del Clima',
    description: 'Consulta el clima de cualquier ciudad en tiempo real usando la API de OpenWeatherMap.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/IsaacAburto1548/clima-app',
    demo: 'https://clima.vercel.app',
    type: 'personal',
    featured: true,
    year: 2024,
  },
];
