'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

type Filter = 'todos' | 'universitario' | 'personal' | 'freelance';

const filters: { value: Filter; label: string }[] = [
  { value: 'todos',         label: 'Todos' },
  { value: 'universitario', label: '🎓 Universitarios' },
  { value: 'personal',      label: '👤 Personales' },
  { value: 'freelance',     label: '💼 Freelance' },
];

export default function ProyectosClient() {
  const [filter, setFilter] = useState<Filter>('todos');

  const filtered = filter === 'todos'
    ? projects
    : projects.filter((p) => p.type === filter);

  return (
    <div className='max-w-4xl mx-auto px-6 py-20'>
      {/* Encabezado */}
      <h1 className='text-3xl font-bold text-zinc-900 dark:text-white mb-2'>
        Proyectos
      </h1>
      <p className='text-zinc-500 dark:text-zinc-400 mb-10'>
        {projects.length} proyectos — universitarios, personales y más.
      </p>

      {/* Filtros */}
      <div className='flex gap-2 mb-10 flex-wrap'>
        {filters.map(({ value, label }) => (
          <button 
            key={value} 
            onClick={() => setFilter(value)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-colors ${
              filter === value
                ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-transparent'
                : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-400'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid de proyectos con animación */}
      <motion.div layout className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <AnimatePresence mode='popLayout'>
          {filtered.map((project) => (
            <motion.div 
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Mensaje si no hay proyectos con el filtro */}
      {filtered.length === 0 && (
        <p className='text-center text-zinc-400 py-16'>
          No hay proyectos en esta categoría aún.
        </p>
      )}
    </div>
  );
}
