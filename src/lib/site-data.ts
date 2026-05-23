export interface NavItem {
  label: string;
  href: string;
}

export interface TechStackItem {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'ai' | 'tool';
  iconName?: string;
}

export type ProjectCategory = 'Fullstack' | 'Frontend' | 'Mobile' | 'AI' | 'Backend';

export interface Project {
  id: string;
  title: string;
  type: string;
  status: string;
  description: string;
  highlights: string[];
  techStack: string[];
  category: ProjectCategory;
  repoUrl?: string;
  repoUrlAdditional?: string;
  liveUrl?: string;
  featured?: boolean;
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
  { label: 'Workflow', href: '#workflow' }
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

export const MAIN_PROJECTS: Project[] = [
  {
    id: "clientflow",
    title: "ClientFlow",
    type: "Fullstack / CRM",
    category: "Fullstack",
    status: "Portfolio MVP",
    description: "CRM-style продукт с leads, analytics, workspace UX и demo-first подачей.",
    highlights: [
      "dashboard, leads, analytics, settings",
      "demo-first showcase flow",
      "Kanban / pipeline view",
      "CSV export",
      "AI insights"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    repoUrl: "https://github.com/flexxxikqwe/ClientFlow",
    liveUrl: "https://client-flow-mu-seven.vercel.app/",
    featured: true
  },
  {
    id: "ai-brief-builder-gemini",
    title: "AI Brief Builder Gemini",
    type: "AI / Product Tool",
    category: "AI",
    status: "Web demo",
    description: "Продукт для генерации структурированных brief / ТЗ с AI-assisted flow.",
    highlights: [
      "AI-assisted generation",
      "structured output",
      "product-oriented UX"
    ],
    techStack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Node.js", "Express"],
    repoUrl: "https://github.com/flexxxikqwe/AI-Brief-Builder-Gemini",
    liveUrl: "https://ai-brief-builder-gemini.vercel.app/",
    featured: false
  },
  {
    id: "repair-service",
    title: "Repair Requests Service",
    type: "Backend / Fullstack",
    category: "Backend",
    status: "Service workflow",
    description: "Fullstack/backend-проект с workflow-логикой и role-based сценариями.",
    highlights: [
      "request workflow",
      "бизнес-логика",
      "role-based scenarios"
    ],
    techStack: ["Node.js", "Express", "SQLite", "Tailwind CSS", "Jest"],
    repoUrl: "https://github.com/flexxxikqwe/Repair-Requests-Service",
    liveUrl: "https://repair-requests-service-production.up.railway.app",
    featured: false
  },
  {
    id: "zenpulse",
    title: "ZenPulse",
    type: "AI / Wellness",
    category: "AI",
    status: "Product concept",
    description: "AI-powered wellness / meditation app concept с акцентом на mobile-style UX и product presentation.",
    highlights: [
      "AI-themed flow",
      "dark/light UI",
      "motion-driven presentation"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    repoUrl: "https://github.com/flexxxikqwe/ZenPulse",
    liveUrl: "https://zen-pulse-theta.vercel.app",
    featured: false
  }
];

export const ADDITIONAL_PROJECTS: Project[] = [
  {
    id: "routeflow",
    title: "RouteFlow",
    type: "Mobile",
    category: "Mobile",
    status: "Flutter app",
    description: "Flutter-приложение для построения и сохранения маршрутов.",
    highlights: [],
    techStack: ["Flutter", "Dart", "Supabase", "flutter_map", "Hive", "RevenueCat", "Sentry"],
    repoUrl: "https://github.com/akumaqqe322/RouteFlow",
    featured: false
  },
  {
    id: "cassatix",
    title: "Cassatix Document Constructor",
    type: "Fullstack / Automation",
    category: "Fullstack",
    status: "System prototype",
    description: "Прототип системы автоматизации документов с frontend-частью, NestJS gateway и worker-based processing flow.",
    highlights: [],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "NestJS", "BullMQ", "PostgreSQL", "Redis", "S3-compatible storage"],
    repoUrl: "https://github.com/akumaqqe322/Cassatix-Document-Constructor",
    featured: false
  }
];

export interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  accent: string;
}

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: "01",
    title: "Product framing",
    description: "Сначала формулирую задачу как продуктовый сценарий: кто пользователь, какую проблему решаем, какой результат должен быть виден в интерфейсе.",
    details: ["User flow", "Feature scope", "Edge cases", "Acceptance criteria"],
    accent: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400"
  },
  {
    number: "02",
    title: "Architecture & data model",
    description: "Продумываю структуру приложения: компоненты, состояние, API, валидацию, хранение данных и границы ответственности.",
    details: ["Component structure", "API contracts", "Validation", "Data persistence"],
    accent: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400"
  },
  {
    number: "03",
    title: "Prompt-driven implementation",
    description: "Разбиваю работу на небольшие этапы и использую AI-агентов для ускорения реализации, не отдавая им контроль над направлением проекта.",
    details: ["Small iterations", "Clear constraints", "Code review", "No blind generation"],
    accent: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400"
  },
  {
    number: "04",
    title: "Verification & debugging",
    description: "Проверяю не только факт запуска, а реальные сценарии: адаптивность, состояния загрузки/ошибок, edge cases, build и lint.",
    details: ["Lint/build checks", "Manual QA", "Regression fixes", "UX states"],
    accent: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-500"
  },
  {
    number: "05",
    title: "Demo polish & delivery",
    description: "Финально довожу проект до состояния, которое можно показать: чистый README, честное описание, деплой, понятные карточки проекта и аккуратный UX.",
    details: ["README.md", "Production Deploy", "UI/UX polish", "Portfolio-ready result"],
    accent: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-400"
  }
];

export type ContactLinkKind = "primary" | "secondary";

export interface ContactLink {
  label: string;
  description: string;
  href: string;
  kind: ContactLinkKind;
  external: boolean;
  username?: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "Telegram",
    description: "Быстрая связь и обсуждение вакансий / проектов.",
    href: "https://t.me/cxldforeverr",
    kind: "primary",
    external: true,
    username: "@cxldforeverr"
  },
  {
    label: "HH Resume",
    description: "Резюме, опыт и актуальный профиль для работодателей.",
    href: "https://hh.ru/resume/5681f646ff103c3d100039ed1f366d6364344f",
    kind: "secondary",
    external: true
  },
  {
    label: "GitHub / Main",
    description: "Основной профиль с portfolio-ready проектами.",
    href: "https://github.com/flexxxikqwe",
    kind: "secondary",
    external: true
  },
  {
    label: "GitHub / Additional",
    description: "Дополнительный профиль с экспериментами, тестовыми и pet-проектами.",
    href: "https://github.com/akumaqqe322",
    kind: "secondary",
    external: true
  }
];


