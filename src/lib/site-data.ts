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

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "clientflow",
    title: "ClientFlow",
    type: "CRM / Lead Management Prototype",
    category: "Fullstack",
    status: "Portfolio MVP",
    description: "CRM-прототип для управления лидами, заметками и аналитикой с акцентом на чистую архитектуру, реальные API-сценарии и аккуратный dashboard UX.",
    highlights: [
      "Repository pattern и разделение data layer",
      "Supabase / JSON fallback persistence",
      "JWT auth, Zod validation",
      "Analytics routes и polished lead flow"
    ],
    techStack: ["Next.js", "React", "TypeScript", "Supabase", "JWT", "Zod", "Tailwind CSS"],
    featured: true
  },
  {
    id: "repair-service",
    title: "Repair Requests Service",
    type: "Service Desk / Test Assignment",
    category: "Backend",
    status: "Race-condition focused",
    description: "Сервис заявок в ремонтную службу с фокусом на корректную бизнес-логику, конкурентный доступ и предсказуемое поведение API.",
    highlights: [
      "Корректная обработка конфликтов",
      "Race-condition сценарии",
      "API-first подход",
      "Проверка через regression/concurrency тесты"
    ],
    techStack: ["TypeScript", "Node.js", "API", "Tests"],
    featured: true
  },
  {
    id: "routeflow",
    title: "RouteFlow",
    type: "Mobile Maps App",
    category: "Mobile",
    status: "Flutter demo",
    description: "Double-sync готовое Flutter-приложение для составления и сохранения маршрутов с картами, офлайн-кешем и геолокацией.",
    highlights: [
      "Map/routing flow & Geolocation tracking",
      "Location permissions UX & fallbacks",
      "Local-first saved routes (Hive cache)",
      "Supabase-ready persistence layer"
    ],
    techStack: ["Flutter", "Dart", "GoRouter", "flutter_map", "Hive", "Supabase"],
    featured: true
  },
  {
    id: "zenpulse",
    title: "ZenPulse",
    type: "AI Meditation App",
    category: "Mobile",
    status: "Product prototype",
    description: "AI meditation app prototype с фокусом на premium mobile UI, paywall-сценарии, профиль пользователя и генерацию персонального контента.",
    highlights: [
      "Premium mobile UI & micro-transitions",
      "Paywall and profile wizard flow",
      "AI-generated content generation preview",
      "Dark/light visual system layout options"
    ],
    techStack: ["React Native", "Expo", "TypeScript", "AI workflow"],
    featured: false
  },
  {
    id: "ai-mvp-guide",
    title: "AI Brief Builder",
    type: "AI Product Tool",
    category: "AI",
    status: "Web demo",
    description: "Инструмент для быстрого превращения идеи в структурированный технический MVP / бриф с помощью продуктового UI и ИИ.",
    highlights: [
      "Prompt-driven generation flow matching schema",
      "Structured markdown product brief output",
      "Fast demo-ready interface",
      "Useful for MVP planning & requirements"
    ],
    techStack: ["React", "TypeScript", "AI workflow", "Vercel / Replit"],
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

