import { siteConfig } from '@/config/site';
import { skillCategories } from '@/data/skills';
import SkillBadge from '@/components/SkillBadge';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre mí',
  description: `Conoce más sobre ${siteConfig.name}, mi formación académica y mis habilidades técnicas.`,
};

export default function SobreMiPage() {
  return (
    <div className='max-w-3xl mx-auto px-6 py-20'>
      <h1 className='text-3xl font-bold text-zinc-900 dark:text-white mb-10'>
        Sobre mí
      </h1>

      {/* Foto + Info básica */}
      <div className='flex flex-col sm:flex-row gap-8 mb-14'>
        <div className='flex-shrink-0'>
          <div className='w-[120px] h-[120px] bg-zinc-200 dark:bg-zinc-800 rounded-2xl flex items-center justify-center text-zinc-400'>
             <span className='text-xs text-center px-2'>Foto de Isaac</span>
          </div>
        </div>
        <div>
          <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-1'>
            {siteConfig.name}
          </h2>
          <div className='flex flex-col gap-1 mb-4 text-sm text-zinc-500'>
            <span className='flex items-center gap-2'>
              <MapPin size={14} /> {siteConfig.location}
            </span>
            <span className='flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
              <GraduationCap size={14} /> Ingeniería en Sistemas, Universidad Nacional (Sede Chorotega)
            </span>
            <span className='flex items-center gap-2 text-zinc-600 dark:text-zinc-400'>
              <Briefcase size={14} /> Desarrollador Móvil (Android/Kotlin) & Full Stack (Next.js)
            </span>
          </div>
          <div className='flex flex-col gap-4 text-[15px] text-zinc-600 dark:text-zinc-400 leading-relaxed'>
            <p>
              Desarrollador de software con enfoque en soluciones móviles y web de alto rendimiento. Actualmente curso Ingeniería en Sistemas en la Universidad Nacional (Sede Chorotega), aplicando arquitecturas modernas para resolver problemas del mundo real.
            </p>
            <p>
              Mi especialidad es el desarrollo nativo en Android con Kotlin y Jetpack Compose, utilizando MVVM como arquitectura base y Hilt para inyección de dependencias. Tengo experiencia creando aplicaciones Offline-First con persistencia en Room (SQLite) y flujos reactivos mediante Kotlin Flow.
            </p>
            <p>
              En el área web, domino el ecosistema de Next.js y TypeScript, gestionando proyectos mediante Azure DevOps. Soy un fiel creyente del AI-Assisted Programming (Vibe Coding) para acelerar el prototipado y garantizar la calidad del código mediante Clean Architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Skills por categoría */}
      <section>
        <h2 className='text-xl font-semibold text-zinc-900 dark:text-white mb-6'>
          Habilidades técnicas
        </h2>
        <div className='flex flex-col gap-8'>
          {skillCategories.map(({ category, icon, skills }) => (
            <div key={category}>
              <h3 className='text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-3 uppercase tracking-wider flex items-center gap-2'>
                <span>{icon}</span> {category}
              </h3>
              <div className='flex flex-wrap gap-2'>
                {skills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
