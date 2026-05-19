'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-sm'>
      <nav className='max-w-3xl mx-auto px-6 h-14 flex items-center justify-between'>
        <Link 
          href='/' 
          className='font-semibold text-zinc-900 dark:text-white hover:text-indigo-600 transition-colors'
          onClick={() => setIsOpen(false)}
        >
          {siteConfig.name}
        </Link>
        
        {/* Desktop Nav */}
        <div className='flex items-center gap-6'>
          <div className='hidden sm:flex items-center gap-6'>
            {navLinks.map(({ href, label }) => (
              <Link 
                key={href} 
                href={href}
                className={`text-sm transition-colors ${
                  pathname === href
                    ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                    : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          <ThemeToggle />
          
          {/* Mobile Menu Button */}
          <button 
            className='sm:hidden p-2 -mr-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='sm:hidden overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950'
          >
            <div className='flex flex-col px-6 py-4 gap-4'>
              {navLinks.map(({ href, label }) => (
                <Link 
                  key={href} 
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm transition-colors ${
                    pathname === href
                      ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
