import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/data/projects';
import Link from 'next/link';

const typeConfig = {
  universitario: { label: 'Universitario', emoji: '🎓', className: 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' },
  personal:      { label: 'Personal',      emoji: '👤', className: 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300' },
  freelance:     { label: 'Freelance',     emoji: '💼', className: 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const type = typeConfig[project.type];

  const CardContent = (
    <div className='group flex flex-col h-full gap-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-200 bg-white dark:bg-zinc-900/50'>
      {/* Header: tipo + año + links */}
      <div className='flex items-start justify-between'>
        <div className='flex items-center gap-2'>
          <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${type.className}`}>
            {type.emoji} {type.label}
          </span>
          <span className='text-xs text-zinc-400'>{project.year}</span>
        </div>
        
        <div className='flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
          {project.github && (
            <div className='text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors'>
              <Github size={15} />
            </div>
          )}
          {project.demo && (
            <Link 
              href={project.demo} 
              target='_blank' 
              onClick={(e) => e.stopPropagation()}
              className='text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors' 
              aria-label='Ver demo'
            >
              <ExternalLink size={15} />
            </Link>
          )}
        </div>
      </div>

      {/* Título y descripción */}
      <div className='flex-1'>
        <h3 className='font-semibold text-zinc-900 dark:text-white mb-1.5 group-hover:text-indigo-600 transition-colors'>
          {project.title}
        </h3>
        <p className='text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed'>
          {project.description}
        </p>
      </div>

      {/* Tags de tecnologías */}
      <div className='flex flex-wrap gap-1.5 mt-auto'>
        {project.tags.map((tag) => (
          <span 
            key={tag} 
            className='text-[10px] px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-md font-mono'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );

  if (project.github) {
    return (
      <Link href={project.github} target='_blank' className='block h-full'>
        {CardContent}
      </Link>
    );
  }

  return CardContent;
}
