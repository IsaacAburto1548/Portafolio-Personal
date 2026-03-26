'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className='max-w-3xl mx-auto px-6 py-20'>
      {/* --- Hero --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Badge: disponible para trabajo */}
        {siteConfig.openToWork && (
          <div className='inline-flex items-center gap-2 text-sm text-green-600 dark:text-green-400 mb-6 px-3 py-1 rounded-full bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800'>
            <span className='w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse' />
            Disponible para nuevas oportunidades
          </div>
        )}

        <h1 className='text-4xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight'>
          Hola, soy <span className='text-indigo-600'>{siteConfig.name}</span> 👋
        </h1>
        
        <p className='text-xl text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed'>
          {siteConfig.description}
        </p>

        {/* Botones de acción */}
        <div className='flex flex-wrap gap-3 mb-16'>
          <Link 
            href={siteConfig.github} 
            target='_blank'
            className='flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300'
          >
            <Github size={16} /> GitHub
          </Link>
          <Link 
            href={siteConfig.linkedin} 
            target='_blank'
            className='flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300'
          >
            <Linkedin size={16} /> LinkedIn
          </Link>
          <Link 
            href='/cv.pdf' 
            target='_blank'
            className='flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition-colors'
          >
            <Download size={16} /> Descargar CV
          </Link>
        </div>
      </motion.div>

      {/* --- Proyectos destacados --- */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-6'>
          Proyectos destacados
        </h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Link 
          href='/proyectos'
          className='inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors group'
        >
          Ver todos los proyectos
          <ArrowRight size={14} className='group-hover:translate-x-1 transition-transform' />
        </Link>
      </motion.section>
    </div>
  );
}
