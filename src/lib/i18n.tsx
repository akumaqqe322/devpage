import React, { createContext, useContext, useState, useEffect } from "react";

export type Locale = "ru" | "en";

export interface TranslationDictionary {
  nav: {
    about: string;
    skills: string;
    projects: string;
    workflow: string;
    available: string;
    availableMobile: string;
    ariaAbout: string;
    ariaSkills: string;
    ariaProjects: string;
    ariaWorkflow: string;
  };
  header: {
    navAbout: string;
    navSkills: string;
    navProjects: string;
    navWorkflow: string;
    navContact: string;
    devConsole: string;
    contact: string;
    contactMe: string;
  };
  hero: {
    titleBefore: string;
    titleActive: string;
    subtitle: string;
    description: string;
    ctaConsole: string;
    ctaContact: string;
    statusRole: string;
    statusWorkflow: string;
    statusDemos: string;
    workflowCta: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    subdescription: string;
    resumeBtn: string;
    highlightTitle1: string;
    highlightDesc1: string;
    highlightTitle2: string;
    highlightDesc2: string;
    highlightTitle3: string;
    highlightDesc3: string;
    highlightTitle4: string;
    highlightDesc4: string;
    secLabel: string;
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
    groupTitle1: string;
    groupDesc1: string;
    groupTitle2: string;
    groupDesc2: string;
    groupTitle3: string;
    groupDesc3: string;
    groupTitle4: string;
    groupDesc4: string;
    groupTitle5: string;
    groupDesc5: string;
    footerLabel: string;
  };
  projects: {
    label: string;
    title: string;
    subtitle: string;
    liveDemo: string;
    openRepo: string;
    privateRepo: string;
    briefRepo: string;
    guideRepo: string;
    proj1Desc: string;
    proj1Highlights: string[];
    proj2Desc: string;
    proj2Highlights: string[];
    proj3Desc: string;
    proj3Highlights: string[];
    proj4Desc: string;
    proj4Highlights: string[];
    proj5Desc: string;
    proj5Highlights: string[];
  };
  workflow: {
    label: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step1Details: string[];
    step2Title: string;
    step2Desc: string;
    step2Details: string[];
    step3Title: string;
    step3Desc: string;
    step3Details: string[];
    step4Title: string;
    step4Desc: string;
    step4Details: string[];
    step5Title: string;
    step5Desc: string;
    step5Details: string[];
    safetyTitle: string;
    safetyDesc: string;
    safetyPoint1: string;
    safetyVal1: string;
    safetyPoint2: string;
    safetyVal2: string;
    safetyPoint3: string;
    safetyVal3: string;
    disclaimer: string;
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    tgTitle: string;
    tgDesc: string;
    hhTitle: string;
    hhDesc: string;
    ghMainTitle: string;
    ghMainDesc: string;
    ghAddTitle: string;
    ghAddDesc: string;
    availability: string;
    responseRate: string;
    footerCopyright: string;
    footerContext: string;
    footerStatus: string;
  };
  devConsole: {
    placeholder: string;
    navigation: string;
    externalProfiles: string;
    buildLogs: string;
    buildTerminal: string;
    statusActive: string;
    statusCached: string;
    escToClose: string;
    scrollBtn: string;
    openBtn: string;
    spiritQuote: string;
  };
}

export const DICTIONARY: Record<Locale, TranslationDictionary> = {
  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      workflow: "Процесс",
      available: "Доступен →",
      availableMobile: "Доступен к предложениям →",
      ariaAbout: "Перейти к секции Обо мне",
      ariaSkills: "Перейти к секции Навыки",
      ariaProjects: "Перейти к секции Проекты",
      ariaWorkflow: "Перейти к секции Процесс",
    },
    header: {
      navAbout: "Обо мне",
      navSkills: "Навыки",
      navProjects: "Проекты",
      navWorkflow: "Процесс",
      navContact: "Контакты",
      devConsole: "Dev Console",
      contact: "Контакт",
      contactMe: "Связаться со мной",
    },
    hero: {
      titleBefore: "Собираю web и mobile-продукты с фокусом на",
      titleActive: "React, Next.js и AI workflows",
      subtitle: "Frontend / Fullstack Developer",
      description: "Продуктовый подход к разработке. Использую AI-assisted workflow для ускорения рутины, сохраняя полный архитектурный контроль и прорабатывая каждый UX-сценарий.",
      ctaConsole: "Открыть консоль",
      ctaContact: "Связаться со мной",
      statusRole: "Доступен для предложений (junior+ / strong junior)",
      statusWorkflow: "AI-assisted workflow",
      statusDemos: "Продуктовые демо-кейсы",
      workflowCta: "Процесс",
    },
    about: {
      label: "Привет! Я Кирилл",
      title: "Создаю интерфейсы как законченные продукты",
      description: "Я разработчик, который не просто пишет код по ТЗ, а думает о конечном пользователе. Мне интересно собирать быстрые, отзывчивые веб-приложения и мобильные клиенты с чистой структурой кода и приятным визуальным дизайном.",
      subdescription: "Активно применяю prompt-driven разработку и AI-инструменты, чтобы разгрузить себя от шаблонов и сосредоточиться на самом важном: логике продукта, дизайне интерфейса, безопасности данных и оптимизации UX-сценариев.",
      resumeBtn: "Скачать резюме (.pdf)",
      highlightTitle1: "Product interfaces",
      highlightDesc1: "Разработка удобных и функциональных CRM, дашбордов, внутренних систем и интерактивных кастомных workspace-сценариев.",
      highlightTitle2: "Fullstack MVP",
      highlightDesc2: "Создание законченных кейсов: авторизация, API-методы, валидация полей через Zod, управление стейтом и надежный деплой.",
      highlightTitle3: "AI-assisted workflow",
      highlightDesc3: "Уверенная интеграция моделей в код и использование продвинутых промпт-инструментов, сохраняя полный контроль за качеством архитектуры.",
      highlightTitle4: "UX polish",
      highlightDesc4: "Внимание к деталям: адаптивность экранов, проработка пустых или ошибочных состояний, плавная загрузка и микро-акценты.",
      secLabel: "01 . Обо мне",
    },
    skills: {
      label: "Технологический Стек",
      title: "Инструменты & Направления работы",
      subtitle: "Мой набор инструментов разделён по категориям для предсказуемого и гибкого решения продуктовых задач.",
      groupTitle1: "Frontend Development",
      groupDesc1: "Акцент на высокую производительность, строгую типизацию и интерактивность UI.",
      groupTitle2: "Backend & Data",
      groupDesc2: "Проектирование логики, систем авторизации и организация структур данных.",
      groupTitle3: "Mobile Apps",
      groupDesc3: "Кроссплатформенная разработка быстрых мобильных клиентов.",
      groupTitle4: "AI Integrations",
      groupDesc4: "Использование AI для повышения продуктивности и внедрение смарт-фичей.",
      groupTitle5: "Deploy & Version Control",
      groupDesc5: "Современные платформы деплоя и инструменты контроля версий.",
      footerLabel: "02 . Навыки & Стек",
    },
    projects: {
      label: "Избранные Проекты",
      title: "Продукты и технические прототипы",
      subtitle: "Каждый проект — это законченный демонстрационный пример, решающий конкретную задачу пользователя.",
      liveDemo: "Live Demo",
      openRepo: "Открыть репозиторий",
      privateRepo: "Private Repository",
      briefRepo: "AI Brief Builder Репозиторий",
      guideRepo: "AI MVP Guide Репозиторий",
      proj1Desc: "CRM-прототип для управления лидами, заметками и аналитикой с акцентом на чистую архитектуру, реальные API-сценарии и аккуратный dashboard UX.",
      proj1Highlights: [
        "Repository pattern и разделение data layer",
        "Supabase / JSON fallback persistence",
        "JWT auth, Zod validation",
        "Analytics routes и polished lead flow",
      ],
      proj2Desc: "Сервис заявок в ремонтную службу с фокусом на корректную бизнес-логику, конкурентный доступ и предсказуемое поведение API.",
      proj2Highlights: [
        "Корректная обработка конфликтов",
        "Race-condition сценарии",
        "API-first подход",
        "Проверка через regression/concurrency тесты",
      ],
      proj3Desc: "Double-sync готовое Flutter-приложение для составления и сохранения маршрутов с картами, офлайн-кешем и геолокацией.",
      proj3Highlights: [
        "Map/routing flow & Geolocation tracking",
        "Location permissions UX & fallbacks",
        "Local-first saved routes (Hive cache)",
        "Supabase-ready persistence layer",
      ],
      proj4Desc: "AI meditation app prototype с фокусом на premium mobile UI, paywall-сценарии, профиль пользователя и генерацию персонального контента.",
      proj4Highlights: [
        "Premium mobile UI & micro-transitions",
        "Paywall and profile wizard flow",
        "AI-generated content generation preview",
        "Dark/light visual system layout options",
      ],
      proj5Desc: "Инструмент для быстрого превращения идеи в структурированный технический MVP / бриф с помощью продуктового UI и ИИ.",
      proj5Highlights: [
        "Prompt-driven generation flow matching schema",
        "Structured markdown product brief output",
        "Fast demo-ready interface",
        "Useful for MVP planning & requirements",
      ],
    },
    workflow: {
      label: "AI-assisted разработка",
      title: "Как устроен мой рабочий процесс",
      subtitle: "Полноценное использование возможностей генеративного ИИ для ускорения рутинных операций, при этом вся ответственность за стандарты, безопасность и архитектуру лежит на человеке.",
      step1Title: "Product framing",
      step1Desc: "Сначала формулирую задачу как продуктовый сценарий: кто пользователь, какую проблему решаем, какой результат должен быть виден в интерфейсе.",
      step1Details: ["User flow", "Feature scope", "Edge cases", "Acceptance criteria"],
      step2Title: "Architecture & data model",
      step2Desc: "Продумываю структуру приложения: компоненты, состояние, API, валидацию, хранение данных и границы ответственности.",
      step2Details: ["Component structure", "API contracts", "Validation", "Data persistence"],
      step3Title: "Prompt-driven implementation",
      step3Desc: "Разбиваю работу на небольшие этапы и использую AI-агентов для ускорения реализации, не отдавая им контроль над направлением проекта.",
      step3Details: ["Small iterations", "Clear constraints", "Code review", "No blind generation"],
      step4Title: "Verification & debugging",
      step4Desc: "Проверяю не только факт запуска, а реальные сценарии: адаптивность, состояния загрузки/ошибок, edge cases, build и lint.",
      step4Details: ["Lint/build checks", "Manual QA", "Regression fixes", "UX states"],
      step5Title: "Demo polish & delivery",
      step5Desc: "Финально довожу проект до состояния, которое можно показать: чистый README, честное описание, деплой, понятные карточки проекта и аккуратный UX.",
      step5Details: ["README.md", "Production Deploy", "UI/UX polish", "Portfolio-ready result"],
      safetyTitle: "AI Safety & Control Principle",
      safetyDesc: "ИИ — сильный акселератор, но слабый архитектор. Надежность обеспечивается строгим инженерным надзором и глубоким пониманием стека.",
      safetyPoint1: "Безопасность типов",
      safetyVal1: "100% строгий TypeScript",
      safetyPoint2: "Код-ревью",
      safetyVal2: "Проверка каждой функции",
      safetyPoint3: "UX надёжность",
      safetyVal3: "Zod + валидация данных",
      disclaimer: "04 . Workflow",
    },
    contact: {
      label: "Контакты",
      title: "Давайте сделаем совместный продукт",
      subtitle: "Ищу вакансии в продуктовых командах или интересные проекты. Готов обсудить junior+ / strong junior роли fullstack или frontend разработчика.",
      tgTitle: "Telegram",
      tgDesc: "Быстрая связь и обсуждение вакансий / проектов.",
      hhTitle: "HH Resume",
      hhDesc: "Резюме, опыт и актуальный профиль для работодателей.",
      ghMainTitle: "GitHub / Main",
      ghMainDesc: "Основной профиль с portfolio-ready проектами.",
      ghAddTitle: "GitHub / Additional",
      ghAddDesc: "Дополнительный профиль с экспериментами, тестовыми и pet-проектами.",
      availability: "в Telegram — в течение пары часов",
      responseRate: "Ориентировочное время ответа",
      footerCopyright: "© {year} Кирилл",
      footerContext: "Сайт собран как продуктовое портфолио разработчика.",
      footerStatus: "Запущен рабочий ИИ-процесс",
    },
    devConsole: {
      placeholder: "Фильтровать действия, проекты, контакты...",
      navigation: "Навигация по сайту",
      externalProfiles: "Внешние профили и контакты",
      buildLogs: "История сборки лендинга (Build Logs)",
      buildTerminal: "Build Workflow Terminal:",
      statusActive: "HOT",
      statusCached: "CACHED",
      escToClose: "ESC чтобы закрыть",
      scrollBtn: "Скролл",
      openBtn: "Открыть",
      spiritQuote: "ИИ ускоряет, инженерный контроль гарантирует надежность.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      workflow: "Workflow",
      available: "Available →",
      availableMobile: "Available for opportunities →",
      ariaAbout: "Go to About section",
      ariaSkills: "Go to Skills section",
      ariaProjects: "Go to Projects section",
      ariaWorkflow: "Go to Workflow section",
    },
    header: {
      navAbout: "About",
      navSkills: "Skills",
      navProjects: "Projects",
      navWorkflow: "Workflow",
      navContact: "Contact",
      devConsole: "Dev Console",
      contact: "Contact",
      contactMe: "Contact Me",
    },
    hero: {
      titleBefore: "Building web & mobile products focused on",
      titleActive: "React, Next.js & AI workflows",
      subtitle: "Frontend / Fullstack Developer",
      description: "Product-minded development approach. Leveraging AI-assisted workflows to accelerate mundane tasks while maintaining strict architectural oversight and polishing every UX flow.",
      ctaConsole: "Open Console",
      ctaContact: "Get in touch",
      statusRole: "Available for roles (junior+ / strong junior)",
      statusWorkflow: "AI-assisted workflow",
      statusDemos: "Product-focused demo cases",
      workflowCta: "Workflow",
    },
    about: {
      label: "Hi! I am Kirill",
      title: "Building interfaces as comprehensive products",
      description: "I am a developer who doesn't just write code by specifications but thinks about the end-user. I enjoy building fast, responsive web applications and mobile clients with clean code architecture and refined visual design.",
      subdescription: "I actively apply prompt-driven development and AI tools to offload boilerplate patterns and focus on what matters most: product logic, interface design, data safety, and UX scenario optimization.",
      resumeBtn: "Download resume (.pdf)",
      highlightTitle1: "Product interfaces",
      highlightDesc1: "Development of convenient and functional CRMs, dashboards, internal systems, and interactive custom workspace scenarios.",
      highlightTitle2: "Fullstack MVP",
      highlightDesc2: "Creating complete cases: authentication, API methods, field validation via Zod, state management, and robust deployment.",
      highlightTitle3: "AI-assisted workflow",
      highlightDesc3: "Confidently integrating models into codebases and utilizing advanced prompt tools while keeping full architectural authority.",
      highlightTitle4: "UX polish",
      highlightDesc4: "Attention to detail: screen responsiveness, empty/error state handling, smooth loading behaviors, and micro-animations.",
      secLabel: "01 . About",
    },
    skills: {
      label: "Tech Stack",
      title: "Tools & Focus Areas",
      subtitle: "My suite of tools is grouped by categories for predictable and flexible product delivery.",
      groupTitle1: "Frontend Development",
      groupDesc1: "Focusing on high performance, strict typing, and interactive UI features.",
      groupTitle2: "Backend & Data",
      groupDesc2: "Designing backend logic, authentication systems, and structuring collections.",
      groupTitle3: "Mobile Apps",
      groupDesc3: "Cross-platform engineering of fast native mobile clients.",
      groupTitle4: "AI Integrations",
      groupDesc4: "Harnessing AI to boost overall productivity and integrating smart modules.",
      groupTitle5: "Deploy & Version Control",
      groupDesc5: "Modern deployment platforms and strict version control systems.",
      footerLabel: "02 . Skills & Stack",
    },
    projects: {
      label: "Featured Projects",
      title: "Products and technical prototypes",
      subtitle: "Each project is a complete showcase resolving real-world end-user problems.",
      liveDemo: "Live Demo",
      openRepo: "Open Repository",
      privateRepo: "Private Repository",
      briefRepo: "AI Brief Builder Repository",
      guideRepo: "AI MVP Guide Repository",
      proj1Desc: "CRM prototype for lead management, notes, and analytics with emphasis on clean architecture, true API endpoints, and clean dashboard UX.",
      proj1Highlights: [
        "Repository pattern and data layer segregation",
        "Supabase / JSON fallback persistence",
        "JWT auth, Zod validation",
        "Analytics routes & polished lead flow",
      ],
      proj2Desc: "Service desk request platform for repairs, focusing on correct business logic, concurrent accesses, and predictable API behavior.",
      proj2Highlights: [
        "Graceful resolution of record conflicts",
        "Conquering race-condition scenarios",
        "API-first engineering approach",
        "Tested by robust regression/concurrency suites",
      ],
      proj3Desc: "Double-sync fully realized Flutter application for making and caching personal routes with map, offline storage, and geolocation.",
      proj3Highlights: [
        "Map/routing flow & Geolocation tracking",
        "Location permissions UX & fallbacks",
        "Local-first saved routes (Hive cache)",
        "Supabase-ready persistence layer",
      ],
      proj4Desc: "AI meditation app prototype focusing on premium mobile UI, paywall-scenarios, user configuration wizards, and personalized content builds.",
      proj4Highlights: [
        "Premium mobile UI & micro-transitions",
        "Paywall and profile wizard flow",
        "AI-generated content generation preview",
        "Dark/light visual system layout options",
      ],
      proj5Desc: "Product workspace tool designed to shape high-level concepts into technical MVP specs using structured user inputs and LLM pipelines.",
      proj5Highlights: [
        "Prompt-driven generation flow matching schema",
        "Structured markdown product brief output",
        "Fast demo-ready interface",
        "Useful for MVP planning & requirements",
      ],
    },
    workflow: {
      label: "AI-assisted engineering",
      title: "Pipeline description",
      subtitle: "Full-scale implementation of generative AI potential to accelerate routine tasks, while entire ownership over standards, safety, and architecture belongs solely to the engineer.",
      step1Title: "Product framing",
      step1Desc: "Initially defining the requirement as a product scenario: who is the client, what issue is being resolved, and what is expected in the client-side screens.",
      step1Details: ["User flow", "Feature scope", "Edge cases", "Acceptance criteria"],
      step2Title: "Architecture & data model",
      step2Desc: "Planning files structure, state management, API schema, input validators, local persistence, boundary rules.",
      step2Details: ["Component structure", "API contracts", "Validation", "Data persistence"],
      step3Title: "Prompt-driven implementation",
      step3Desc: "Splitting the load into tiny deliverables and using AI-agents to develop fast, without surrendering critical design or logic control.",
      step3Details: ["Small iterations", "Clear constraints", "Code review", "No blind generation"],
      step4Title: "Verification & debugging",
      step4Desc: "Testing beyond simple build triggers: screen transitions, error and loading states, edge situations, and lint reviews.",
      step4Details: ["Lint/build checks", "Manual QA", "Regression fixes", "UX states"],
      step5Title: "Demo polish & delivery",
      step5Desc: "Tying up the solution with polished documentation, truthful details, public hosting, clear portfolios, and neat final styles.",
      step5Details: ["README.md", "Production Deploy", "UI/UX polish", "Portfolio-ready result"],
      safetyTitle: "AI Safety & Control Principle",
      safetyDesc: "AI is a powerful accelerator, but a weak architect. Robustness is fully achieved via structural engineering control and deep domain expertise.",
      safetyPoint1: "Type safety",
      safetyVal1: "105% strict TypeScript",
      safetyPoint2: "Code reviews",
      safetyVal2: "Verifying every function",
      safetyPoint3: "UX reliability",
      safetyVal3: "Zod + input validation",
      disclaimer: "04 . Workflow",
    },
    contact: {
      label: "Contact",
      title: "Let's build something exceptional",
      subtitle: "Open to discussions with product groups and engineering teams. Available to discuss junior+ / strong junior roles in fullstack or frontend development.",
      tgTitle: "Telegram",
      tgDesc: "Quick response channel to discuss openings or product challenges.",
      hhTitle: "HH Resume",
      hhDesc: "Resume, experience, and timeline records for validation.",
      ghMainTitle: "GitHub / Main",
      ghMainDesc: "Main developer workspace with portfolio-ready repositories.",
      ghAddTitle: "GitHub / Additional",
      ghAddDesc: "Additional hub hosting test works, sandboxes, and pet concepts.",
      availability: "via Telegram — within a few hours",
      responseRate: "Average response time",
      footerCopyright: "© {year} Kirill",
      footerContext: "Built on a product-style developer landing design.",
      footerStatus: "AI-assisted lifecycle running live",
    },
    devConsole: {
      placeholder: "Filter actions, projects, contacts...",
      navigation: "Navigation index",
      externalProfiles: "External channels & contacts",
      buildLogs: "Landing Build Logs (Workflow records)",
      buildTerminal: "Build Workflow Terminal:",
      statusActive: "HOT",
      statusCached: "CACHED",
      escToClose: "ESC to close",
      scrollBtn: "Scroll",
      openBtn: "Open",
      spiritQuote: "AI accelerates, engineering control keeps reliability.",
    },
  },
};

interface LocaleContextProps {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDictionary;
}

const LocaleContext = createContext<LocaleContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("portfolio-locale");
      if (saved === "ru" || saved === "en") {
        return saved as Locale;
      }
    }
    return "ru";
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("portfolio-locale", newLocale);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.lang = locale;
      document.title =
        locale === "ru"
          ? "Кирилл — Frontend / Fullstack Developer"
          : "Kirill — Frontend / Fullstack Developer";
    }
  }, [locale]);

  const t = DICTIONARY[locale];

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LanguageProvider");
  }
  return context;
}
