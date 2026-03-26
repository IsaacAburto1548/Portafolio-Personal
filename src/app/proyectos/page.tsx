import type { Metadata } from 'next';
import ProyectosClient from './ProyectosClient';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Todos mis proyectos de desarrollo de software, incluyendo trabajos universitarios y personales.',
};

export default function ProyectosPage() {
  return <ProyectosClient />;
}
