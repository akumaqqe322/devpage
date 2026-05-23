export interface NavItem {
  label: string;
  href: string;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'tool';
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  links: {
    github?: string;
    live?: string;
  };
  featured: boolean;
  metrics?: string[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Workflow', href: '#workflow' },
  { label: 'Contact', href: '#contact' }
];

export const STATUS_PILLS = [
  { text: 'Available for junior+/strong junior roles', type: 'role' },
  { text: 'AI-assisted workflow', type: 'tech' },
  { text: 'Product-focused demos', type: 'focus' }
];

export const CORE_TECH_STACK: TechStackItem[] = [
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Nuxt', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Framer Motion', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Supabase', category: 'backend' },
  { name: 'Flutter', category: 'mobile' },
  { name: 'Gemini API & Claude', category: 'ai' },
  { name: 'AI-driven agents', category: 'ai' }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'clientflow',
    title: 'ClientFlow',
    description: 'CRM & lead management prototype with AI-powered insights.',
    tags: ['Next.js', 'Supabase', 'JWT', 'Zod', 'AI features'],
    links: { github: '#' },
    featured: true,
    metrics: ['AI-driven lead scoring', 'Zod schema validation', 'Real-time database sync']
  },
  {
    id: 'repair-service',
    title: 'Repair Requests',
    description: 'An advanced repair queue manager that handles critical race-conditions.',
    tags: ['React', 'Express', 'JWT', 'Optimistic UI', 'Race-condition guard'],
    links: { github: '#' },
    featured: true,
    metrics: ['Zero-flicker state synchronization', 'Deterministic conflict resolution']
  },
  {
    id: 'routeflow',
    title: 'RouteFlow',
    description: 'Mobile routing and navigation client powered by offline maps and caching.',
    tags: ['Flutter', 'Supabase', 'Mapbox', 'SQLite Cache'],
    links: { github: '#' },
    featured: true,
    metrics: ['Offline-first local replica', 'Geofencing triggers']
  },
  {
    id: 'zenpulse',
    title: 'ZenPulse',
    description: 'AI meditation platform built with modular paywalls and audio generations.',
    tags: ['Next.js', 'AI Generation', 'Dynamic Paywall', 'User Flow'],
    links: { github: '#' },
    featured: true
  },
  {
    id: 'ai-mvp-guide',
    title: 'AI Brief Builder',
    description: 'An AI productivity engine generating technical MVP specifications.',
    tags: ['React', 'Vite', 'Gemini SDK', 'Tailwind', 'Prompt Engineering'],
    links: { github: '#' },
    featured: true
  }
];
