import { siteConfig } from '@/config/site';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-zinc-200 dark:border-zinc-800 py-8'>
      <div className='max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500'>
        <p>Hecho con Next.js por {siteConfig.name}</p>
        <div className='flex gap-4'>
          <Link href={siteConfig.github} target='_blank' className='hover:text-zinc-900 dark:hover:text-white transition-colors'>
            GitHub
          </Link>
          <Link href={siteConfig.linkedin} target='_blank' className='hover:text-zinc-900 dark:hover:text-white transition-colors'>
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}
