import { motion } from "motion/react";
import { Code2, Server, Smartphone, Cpu, Cloud, Terminal } from "lucide-react";
import { SectionContainer } from "./ui/section-container";
import { SKILL_GROUPS, SkillGroup } from "../lib/site-data";
import { useLocale } from "../lib/i18n";

export function SkillsSection() {
  const { t, locale } = useLocale();

  // Map group ID to standard category icons
  const getGroupIcon = (groupId: string) => {
    switch (groupId) {
      case "frontend":
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-purple-400" />;
      case "mobile":
        return <Smartphone className="w-5 h-5 text-pink-400" />;
      case "ai":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "tools":
        return <Cloud className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-zinc-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const groupVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const getTranslatedGroup = (groupId: string, defaultTitle: string, defaultDesc: string) => {
    switch (groupId) {
      case "frontend":
        return { title: t.skills.groupTitle1, description: t.skills.groupDesc1 };
      case "backend":
        return { title: t.skills.groupTitle2, description: t.skills.groupDesc2 };
      case "mobile":
        return { title: t.skills.groupTitle3, description: t.skills.groupDesc3 };
      case "ai":
        return { title: t.skills.groupTitle4, description: t.skills.groupDesc4 };
      case "tools":
        return { title: t.skills.groupTitle5, description: t.skills.groupDesc5 };
      default:
        return { title: defaultTitle, description: defaultDesc };
    }
  };

  return (
    <SectionContainer id="skills" className="border-t border-zinc-900/60 bg-zinc-950/20 py-24 relative overflow-hidden">
      {/* Background soft glow decoration */}
      <div className="absolute left-10 bottom-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-purple-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>{t.skills.footerLabel}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white">
            {locale === "ru" ? (
              <>
                Инструменты &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">
                  Технологический стек
                </span>
              </>
            ) : (
              <>
                Tools &{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400">
                  Technology Stack
                </span>
              </>
            )}
          </h2>
          
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          id="skills-group-grid"
        >
          {SKILL_GROUPS.map((group: SkillGroup) => {
            const localized = getTranslatedGroup(group.id, group.title, group.description);
            return (
              <motion.div
                key={group.id}
                variants={groupVariants}
                whileHover={{ y: -5, borderColor: "rgba(113, 113, 122, 0.4)" }}
                className="relative rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Corner ambient blur flare depending on categories */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br ${group.accentColor.split(' ')[0]} rounded-full blur-2xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-300`} />

                <div>
                  {/* Header Information */}
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-zinc-900/60">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800">
                        {getGroupIcon(group.id)}
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors font-sans">
                        {localized.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6 font-sans">
                    {localized.description}
                  </p>

                  {/* Badges Flow */}
                  <div className="flex flex-wrap gap-2" id={`badges-${group.id}`}>
                    {group.skills.map((skill, sIdx) => (
                      <motion.span
                        key={skill}
                        variants={badgeVariants}
                        transition={{ delay: sIdx * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium bg-zinc-900/80 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-default select-none font-sans"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Glowing underscore stripe */}
                <div className="pt-6 mt-6 border-t border-zinc-900/40 text-[10px] text-zinc-600 font-mono tracking-wider flex items-center justify-between">
                  <span>VERIFY_STATUS_OK</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-blue-500 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dynamic callout note */}
        <div className="pt-6 text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/40 border border-zinc-900 text-[11px] text-zinc-500 font-sans mx-auto">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            {locale === "ru"
              ? "Инструментарий дополняется в реальном времени под технические задачи проекта."
              : "Tooling is expanded in real time based on active project demands."}
          </p>
        </div>

      </div>
    </SectionContainer>
  );
}
