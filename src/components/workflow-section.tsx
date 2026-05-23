import { motion } from "motion/react";
import { Check, ClipboardList, Database, Sparkles, ShieldCheck, Terminal, HeartHandshake } from "lucide-react";
import { SectionContainer } from "./ui/section-container";
import { WORKFLOW_STEPS, WorkflowStep } from "../lib/site-data";

export function WorkflowSection() {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <ClipboardList className="w-4 h-4 text-blue-400" />;
      case "02":
        return <Database className="w-4 h-4 text-purple-400" />;
      case "03":
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case "04":
        return <ShieldCheck className="w-4 h-4 text-amber-500" />;
      case "05":
        return <Sparkles className="w-4 h-4 text-pink-400" />;
      default:
        return <Check className="w-4 h-4 text-zinc-400" />;
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer id="workflow" className="border-t border-zinc-900/60 py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/3 w-[450px] h-[450px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-805 text-xs font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>04 . Workflow</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
            AI-assisted workflow, <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-indigo-400">
              но с инженерным контролем
            </span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-450 max-w-2xl mx-auto leading-relaxed">
            Полноценное использование возможностей генеративного ИИ для ускорения рутинных операций, при этом вся ответственность за стандарты, безопасность и архитектуру лежит на человеке.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="workflow-grid-wrapper">
          
          {/* Left Side: Pipeline Steps List */}
          <div className="lg:col-span-7 space-y-10 relative">
            
            {/* Real vertical line for desktop connect */}
            <div className="absolute left-[23px] top-6 bottom-6 w-0.5 bg-zinc-900/80 hidden sm:block" />

            <motion.div
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
              id="workflow-steps-list"
            >
              {WORKFLOW_STEPS.map((step: WorkflowStep, index: number) => (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative flex flex-col sm:flex-row gap-6 group"
                >
                  {/* Pipeline Step Marker */}
                  <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950 border border-zinc-900 group-hover:border-zinc-750 transition-colors duration-300 self-start shadow-xl">
                    <span className="absolute -inset-1.5 bg-zinc-900/35 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {getStepIcon(step.number)}
                  </div>

                  {/* Content Card container */}
                  <div className="flex-grow rounded-2xl border border-zinc-900 bg-zinc-950/20 p-6 backdrop-blur-sm group-hover:bg-zinc-950/60 group-hover:border-zinc-800 transition-all duration-300 relative overflow-hidden">
                    
                    {/* Top corner subtle overlay flare */}
                    <div className={`absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br ${step.accent.split(' ')[0]} rounded-full blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="space-y-4">
                      {/* Step Header info */}
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-zinc-650 font-bold">
                          STAGE {step.number}
                        </span>
                        <span className={`inline-flex px-2 py-0.5 rounded text-[9px] font-mono border ${step.accent.split(' ').slice(1).join(' ')} bg-zinc-900/20`}>
                          Active check
                        </span>
                      </div>

                      {/* Main explanation body */}
                      <div className="space-y-1.5">
                        <h3 className="font-sans font-bold text-base text-zinc-100 group-hover:text-white transition-colors">
                          {step.title}
                        </h3>
                        <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {/* Details badges row */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="inline-flex items-center px-2 py-0.5 rounded-md bg-zinc-900/50 border border-zinc-925 text-[10px] font-mono text-zinc-500 hover:text-zinc-300 transition-colors cursor-default"
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Philosophy panel & manifesto */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6" id="philosophy-sticky-panel">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative p-8 rounded-2xl border border-zinc-850 bg-gradient-to-b from-zinc-950 to-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-2xl"
            >
              {/* Internal subtle glow */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />

              <div className="relative space-y-6">
                <div className="inline-flex p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                  <HeartHandshake className="w-5 h-5 animate-pulse" />
                </div>

                <div className="space-y-4">
                  <div className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest font-bold">
                    Philosophy & Manifesto
                  </div>
                  
                  <blockquote className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight leading-snug">
                    “AI помогает со скоростью. <br />
                    Инженер сохраняет качество.”
                  </blockquote>

                  <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                    Генерация кода снижает время выполнения рутинных задач, но не заменяет необходимость мыслить. Умение декомпозировать требования, вовремя останавливать «галлюцинации» моделей, поддерживать чистоту Git-истории и тестировать сценарии — вот что отличает готовый продукт от набора сгенерированных файлов.
                  </p>
                </div>

                {/* Checklist metrics */}
                <div className="pt-4 border-t border-zinc-900 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 font-sans">
                    <span>Скорость MVP сборки</span>
                    <span className="font-mono text-emerald-400 font-bold">↑ в 3-4 раза</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 font-sans">
                    <span>Контроль за типами & багами</span>
                    <span className="font-mono text-zinc-300 font-bold">100% ручной ревью</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 font-sans">
                    <span>Покрытие тест-кейсов</span>
                    <span className="font-mono text-zinc-300 font-bold">Zod + UI validation</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Micro disclaimer note in smaller text */}
            <p className="text-[10px] text-zinc-600 font-mono tracking-wide leading-relaxed pl-2">
              * Разработка ведется итерационными коммитами. Код проверяется на компиляцию на каждой стадии.
            </p>
          </div>

        </div>
      </div>
    </SectionContainer>
  );
}
