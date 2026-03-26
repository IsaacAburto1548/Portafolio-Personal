import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description: '¿Quieres trabajar conmigo? Contáctame a través de mis redes sociales o correo electrónico.',
};

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: 'La mejor forma de contactarme para propuestas laborales.',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: siteConfig.github.split('/').pop(),
    href: siteConfig.github,
    description: 'Explora mis repositorios y contribuciones.',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Perfil Profesional',
    href: siteConfig.linkedin,
    description: 'Conectemos en la red profesional.',
  },
];

export default function ContactoPage() {
  return (
    <div className='max-w-2xl mx-auto px-6 py-20'>
      <h1 className='text-3xl font-bold text-zinc-900 dark:text-white mb-3'>
        Contacto
      </h1>
      <p className='text-zinc-500 dark:text-zinc-400 mb-12 leading-relaxed'>
        Estoy abierto a oportunidades de trabajo, colaboraciones en proyectos interesantes 
        y cualquier consulta que tengas. No dudes en escribirme.
      </p>

      <div className='flex flex-col gap-3'>
        {contactLinks.map(({ icon: Icon, label, value, href, description }) => (
          <Link 
            key={label} 
            href={href} 
            target='_blank'
            className='flex items-center gap-4 p-5 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/30 transition-all group'
          >
            <div className='p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors'>
              <Icon size={20} className='text-zinc-600 dark:text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors' />
            </div>
            <div className='flex-1'>
              <p className='font-medium text-zinc-900 dark:text-white text-sm'>
                {label}
              </p>
              <p className='text-zinc-500 text-sm'>{value}</p>
            </div>
            <p className='text-xs text-zinc-400 hidden sm:block'>
              {description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
