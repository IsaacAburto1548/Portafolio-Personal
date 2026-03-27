export type SkillCategory = {
  category: string;
  skills: string[];
  icon?: string;
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Lenguajes',
    icon: '💻',
    skills: ['Kotlin', 'TypeScript', 'Java', 'JavaScript', 'Python', 'C++', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    icon: '🚀',
    skills: ['Jetpack Compose', 'Next.js', 'React', 'Angular', 'Tailwind CSS 4'],
  },
  {
    category: 'Bases de Datos',
    icon: '⚙️',
    skills: ['SQL', 'MySQL', 'SQL Server', 'PostgreSQL', 'Room'],
  },
  {
    category: 'Herramientas',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Azure DevOps', 'Android Studio', 'Workbench', 'Cursor AI'],
  },
  {
    category: 'Conceptos & Otros',
    icon: '🧠',
    skills: ['MVVM', 'Clean Architecture', 'MVC', 'Clean Code', 'Inglés (B1)'],
  },
];
