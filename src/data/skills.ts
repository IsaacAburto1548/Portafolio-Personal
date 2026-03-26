export type SkillCategory = {
  category: string;
  skills: string[];
  icon?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '💻',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Herramientas',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Docker', 'Linux', 'Figma'],
  },
  {
    category: 'Actualmente aprendiendo',
    icon: '🚀',
    skills: ['AWS', 'GraphQL', 'React Native'],
  },
];
