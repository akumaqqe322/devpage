import { motion } from "motion/react";
import { SectionContainer } from "./ui/section-container";
import { Info, Code, FolderGit, Cpu, Mail, Star } from "lucide-react";

export function AboutPlaceholder() {
  return (
    <SectionContainer id="about" className="border-t border-zinc-900/60">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-blue-400 mb-2">
          <Info className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          About Me
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          Разработчик, создающий продукты с внимаем к каждой детали пользовательского опыта. На этапе 2 здесь будет подробный рассказ о подходе к верстке, архитектурном мышлении и философии чистого кода.
        </p>
        <div className="mt-8 pt-6 border-t border-zinc-900/40 max-w-lg mx-auto flex justify-center gap-6 font-mono text-[11px] text-zinc-500">
          <span>Focus: MVP Launch</span>
          <span>•</span>
          <span>Experience: Web & Mobile</span>
        </div>
      </div>
    </SectionContainer>
  );
}

export function SkillsPlaceholder() {
  return (
    <SectionContainer id="skills" className="border-t border-zinc-900/60 bg-zinc-950/20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-teal-400 mb-2">
          <Code className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Skills & Tech Stack
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          Комплексный стек технологий от клиентского интерфейса до структур баз данных. На этапе 2 здесь появится интерактивная сетка навыков с группировкой по категориям: Frontend, Backend, Mobile, AI/Workflow.
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-xl mx-auto pt-6">
          {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Flutter", "AI Agents"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-zinc-900/30 text-zinc-400 rounded-lg text-xs border border-zinc-900 font-sans">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

export function ProjectsPlaceholder() {
  return (
    <SectionContainer id="projects" className="border-t border-zinc-900/60">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-purple-400 mb-2">
          <FolderGit className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          Реальные проекты с фокусом на решение технических вызовов. На следующем этапе здесь расположится полноценное портфолио карточек (ClientFlow, Repair Requests и др.) с фильтрами по тегам и выводу ключевых метрик.
        </p>
        <div className="pt-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-yellow-500/5 text-yellow-300 border border-yellow-500/10 text-[11px] font-mono">
            <Star className="w-3.5 h-3.5" /> Stage 2: Detailed portfolio showcase is next
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function WorkflowPlaceholder() {
  return (
    <SectionContainer id="workflow" className="border-t border-zinc-900/60 bg-zinc-950/20">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-orange-400 mb-2">
          <Cpu className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          AI-Assisted Workflow
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          Как современный разработчик использует мощь AI-ассистентов для ускорения и кратного повышения качества продукта. На этапе 2 здесь будет расписан путь от генерации качественного ТЗ до автоматического тестирования.
        </p>
        <div className="max-w-md mx-auto h-2 bg-zinc-900/80 rounded-full overflow-hidden mt-6">
          <div className="w-1/3 h-full bg-gradient-to-r from-blue-500 to-purple-500" />
        </div>
      </div>
    </SectionContainer>
  );
}

export function ContactPlaceholder() {
  return (
    <SectionContainer id="contact" className="border-t border-zinc-900/60 pb-32">
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <div className="inline-flex p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-pink-400 mb-2">
          <Mail className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
          Обсудить проект, вакансию или предложить сотрудничество. На этапе 2 здесь будет полностью функциональная и интерактивная форма обратной связи с валидацией, анимацией отправки и социальными линками.
        </p>
        <div className="pt-6 flex justify-center gap-4">
          <span className="text-xs font-mono text-zinc-500">TG: @username</span>
          <span className="text-zinc-700">•</span>
          <span className="text-xs font-mono text-zinc-500">Email: kirill@example.com</span>
        </div>
      </div>
    </SectionContainer>
  );
}
