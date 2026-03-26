'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import { siteConfig } from '@/config/site';

const navLinks = [
  { href: '/',          label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/sobre-mi',  label: 'Sobre mí' },
  { href: '/contacto',  label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm'>
      <nav className='max-w-3xl mx-auto px-6 h-14 flex items-center justify-between'>
        <Link href='/' className='font-semibold text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors'>
          {siteConfig.name}
        </Link>
        <div className='flex items-center gap-6'>
          {navLinks.map(({ href, label }) => (
            <Link 
              key={href} 
              href={href}
              className={`text-sm transition-colors hidden sm:block ${
                pathname === href
                  ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
