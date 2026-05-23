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

export interface AboutHighlight {
  title: string;
  description: string;
  iconName: 'Layout' | 'Layers' | 'Cpu' | 'Sparkles';
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
  accentColor: string; // custom gradient/glow style classes
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

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  {
    title: "Product interfaces",
    description: "Разработка удобных и функциональных CRM, дашбордов, внутренних систем и интерактивных кастомных workspace-сценариев.",
    iconName: "Layout"
  },
  {
    title: "Fullstack MVP",
    description: "Создание законченных кейсов: авторизация, API-методы, валидация полей через Zod, управление стейтом и надежный деплой.",
    iconName: "Layers"
  },
  {
    title: "AI-assisted workflow",
    description: "Уверенная интеграция моделей в код и использование продвинутых промпт-инструментов, сохраняя полный контроль за качеством архитектуры.",
    iconName: "Cpu"
  },
  {
    title: "UX polish",
    description: "Внимание к деталям: адаптивность экранов, проработка пустых или ошибочных состояний, плавная загрузка и микро-акценты.",
    iconName: "Sparkles"
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Акцент на высокую производительность, строгую типизацию и интерактивность UI.",
    skills: ["TypeScript", "JavaScript", "React", "Next.js", "Vue 3", "Nuxt", "Tailwind CSS", "Framer Motion"],
    accentColor: "from-blue-500/20 to-cyan-500/20 text-blue-400 border-blue-500/30"
  },
  {
    id: "backend",
    title: "Backend & Data",
    description: "Проектирование логики, систем авторизации и организация структур данных.",
    skills: ["Node.js", "Express", "Supabase", "REST API", "JWT Auth", "Zod Validation"],
    accentColor: "from-purple-500/20 to-indigo-500/20 text-purple-400 border-purple-500/30"
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Кроссплатформенная разработка быстрых мобильных клиентов.",
    skills: ["Flutter", "React Native", "Expo CLI"],
    accentColor: "from-pink-500/20 to-rose-500/20 text-pink-400 border-pink-500/30"
  },
  {
    id: "ai",
    title: "AI Integrations",
    description: "Использование AI для повышения продуктивности и внедрение смарт-фичей.",
    skills: ["ChatGPT", "Gemini", "Claude API", "AI Agents", "Prompt Engineering", "AI Code Review"],
    accentColor: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "tools",
    title: "Deploy & Version Control",
    description: "Современные платформы деплоя и инструменты контроля версий.",
    skills: ["Vercel", "Railway", "Replit", "Git", "GitHub Actions"],
    accentColor: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30"
  }
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
