import { motion } from "motion/react";
import { FolderGit2, CheckCircle2, Github, ExternalLink, Lock } from "lucide-react";
import { SectionContainer } from "./ui/section-container";
import { FEATURED_PROJECTS, Project } from "../lib/site-data";

interface ProjectCardProps {
  project: Project;
  isFirst?: boolean;
}

function ProjectCard({ project, isFirst = false }: ProjectCardProps) {
  return (
    <div className="h-full relative rounded-2xl border border-zinc-850 bg-zinc-950/40 backdrop-blur-xl transition-all duration-300 group-hover:border-zinc-700/80 group-hover:bg-zinc-950/70 overflow-hidden flex flex-col justify-between">
      {/* Subtle Grid overlay background */}
      <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />

      {/* Gradient Light flare at the top of the card */}
      <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-blue-500/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 sm:p-8 space-y-6">
        {/* Header: Project status and Type info */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400">
              {project.type}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/5 border border-blue-500/10 text-blue-400">
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {project.category}
            </span>
          </div>
          
          {/* Live status flow */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-zinc-900/60 text-zinc-400 border border-zinc-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {project.status}
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
              {project.description}
            </p>
          </div>

          {/* Side by side elements on Wide Card */}
          <div className={`mt-5 ${isFirst ? "lg:col-span-12 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" : "space-y-5"}`}>
            {/* Bullet Highlights layout */}
            <div className="space-y-2.5">
              <h4 className="text-[11px] font-mono text-zinc-500 tracking-wider font-semibold uppercase">
                Ключевые фичи / Решения
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight) => (
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
                Стек технологий
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2 py-0.5 rounded bg-zinc-900/40 border border-zinc-850 text-[10px] font-medium text-zinc-400"
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
        <div className="flex flex-wrap items-center gap-2 select-none">
          {project.repoUrlAdditional ? (
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-blue-400" />
                <span>AI Brief Builder</span>
              </a>
              <a
                href={project.repoUrlAdditional}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI MVP Guide</span>
              </a>
            </div>
          ) : project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-350 hover:text-white transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5 text-blue-400" />
              <span>Открыть репозиторий</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-600">
              <Lock className="w-3 h-3 text-zinc-700" />
              <span>Private Repository</span>
            </span>
          )}
        </div>

        {project.liveUrl && (
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSection() {
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
            <span>03 . Проекты</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            Проекты, которые показывают <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
              продуктовый подход
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Не просто отдельные учебные экраны, а рабочие прототипы с продуманным интерфейсом, чистой логикой, безопасными данными, деплоем и AI-assisted workflow.
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
