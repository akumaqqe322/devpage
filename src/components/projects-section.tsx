import { motion } from "motion/react";
import { FolderGit2, CheckCircle2, Github, ExternalLink, Lock } from "lucide-react";
import { SectionContainer } from "./ui/section-container";
import { FEATURED_PROJECTS, Project } from "../lib/site-data";
import { useLocale } from "../lib/i18n";

interface ProjectCardProps {
  project: Project;
  isFirst?: boolean;
}

function ProjectCard({ project, isFirst = false }: ProjectCardProps) {
  const { t, locale } = useLocale();

  const getTranslatedProject = (id: string, fallbackDesc: string, fallbackHighlights: string[]) => {
    switch (id) {
      case "clientflow":
        return { description: t.projects.proj1Desc, highlights: t.projects.proj1Highlights };
      case "repair-requests":
        return { description: t.projects.proj2Desc, highlights: t.projects.proj2Highlights };
      case "routeflow":
        return { description: t.projects.proj3Desc, highlights: t.projects.proj3Highlights };
      case "zenpulse":
        return { description: t.projects.proj4Desc, highlights: t.projects.proj4Highlights };
      case "ai-mvp-guide":
        return { description: t.projects.proj5Desc, highlights: t.projects.proj5Highlights };
      default:
        return { description: fallbackDesc, highlights: fallbackHighlights };
    }
  };

  const getTranslatedType = (type: string) => {
    if (locale === "en") return type;
    if (type === "Web Service") return "Веб-сервис";
    if (type === "SPA Prototype") return "Прототип SPA";
    if (type === "Flutter App") return "Flutter-приложение";
    return type;
  };

  const getTranslatedCategory = (category: string) => {
    if (locale === "en") return category;
    if (category === "MVP") return "MVP";
    if (category === "Product") return "Продукт";
    return category;
  };

  const getTranslatedStatus = (status: string) => {
    if (locale === "en") return status;
    if (status === "Completed") return "Завершен";
    if (status === "Production Deploy") return "В продакшене";
    if (status === "Demo Ready" || status.toLowerCase() === "demo-ready") return "Демо готово";
    return status;
  };

  const localized = getTranslatedProject(project.id, project.description, project.highlights);

  return (
    <div className="h-full relative rounded-2xl border border-zinc-800 bg-zinc-950/40 backdrop-blur-xl transition-all duration-300 group-hover:border-zinc-700/80 group-hover:bg-zinc-950/70 overflow-hidden flex flex-col justify-between">
      {/* Subtle Grid overlay background */}
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />

      {/* Gradient Light flare at the top of the card */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header: Project status and Type info */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
              {getTranslatedType(project.type)}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/5 border border-blue-500/10 text-blue-400">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {getTranslatedCategory(project.category)}
            </span>
          </div>
          
          {/* Live status flow */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {getTranslatedStatus(project.status)}
          </span>
        </div>

        {/* Title and main narrative column */}
        <div className={isFirst ? "lg:grid lg:grid-cols-12 lg:gap-8 lg:items-start" : "space-y-4"}>
          <div className={isFirst ? "lg:col-span-12 space-y-3" : "space-y-3"}>
            <h3 className="text-xl sm:text-2xl font-sans font-bold text-zinc-100 group-hover:text-white transition-colors flex items-center gap-2">
              <FolderGit2 className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
              {project.title}
            </h3>
            
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-3xl">
              {localized.description}
            </p>
          </div>

          {/* Side by side elements on Wide Card */}
          <div className={`mt-5 ${isFirst ? "lg:col-span-12 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-5"}`}>
            {/* Bullet Highlights layout */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono text-zinc-500 tracking-wider font-semibold uppercase">
                {locale === "ru" ? "Ключевые фичи / Решения" : "Key Features / Solutions"}
              </h4>
              <ul className="space-y-2">
                {localized.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-xs text-zinc-400 font-sans">
                    <CheckCircle2 className="w-4 h-4 text-blue-500/70 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                   </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills list */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-mono text-zinc-500 tracking-wider font-semibold uppercase">
                {locale === "ru" ? "Стек технологий" : "Tech Stack"}
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-0.5 rounded bg-zinc-900/40 border border-zinc-800 text-[10px] font-medium text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer buttons row */}
      <div className="px-6 py-4 bg-zinc-950/45 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 select-none">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-semibold shadow-md shadow-blue-500/10 hover:shadow-blue-500/20 active:scale-98 transition-all duration-200 cursor-pointer"
            >
              <span>{t.projects.liveDemo}</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/90" />
            </a>
          )}

          {project.repoUrlAdditional ? (
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>{locale === "ru" ? "AI Brief Builder Репозиторий" : "AI Brief Builder Repo"}</span>
              </a>
              <a
                href={project.repoUrlAdditional}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>{locale === "ru" ? "AI MVP Guide Репозиторий" : "AI MVP Guide Repo"}</span>
              </a>
            </div>
          ) : project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-400 hover:text-white transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5 text-zinc-400" />
              <span>{t.projects.openRepo}</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
              <Lock className="w-3 h-3 text-zinc-600" />
              <span>Private Repository</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const { t, locale } = useLocale();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const firstProject = FEATURED_PROJECTS[0];
  const remainingProjects = FEATURED_PROJECTS.slice(1);

  return (
    <SectionContainer id="projects" className="border-t border-zinc-900/60 py-24 relative overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute right-10 bottom-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>{t.projects.label}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            {locale === "ru" ? (
              <>
                Проекты, которые показывают <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                  продуктовый подход
                </span>
              </>
            ) : (
              <>
                Projects highlighting <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                  a product mindset
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Projects Layout Container */}
        <div className="space-y-8" id="projects-layout-container">
          
          {/* Featured/First Project (Spans 100% width) */}
          {firstProject && (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="w-full group"
            >
              <ProjectCard project={firstProject} isFirst={true} />
            </motion.div>
          )}

          {/* Secondary Projects Grid (2 columns on desktop) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            id="secondary-projects-grid"
          >
            {remainingProjects.map((project: Project) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="w-full min-w-0 h-full group"
              >
                <ProjectCard project={project} isFirst={false} />
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </SectionContainer>
  );
}
