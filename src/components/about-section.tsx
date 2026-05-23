import { motion } from "motion/react";
import { Layout, Layers, Cpu, Sparkles, User, ArrowRight } from "lucide-react";
import { SectionContainer } from "./ui/section-container";
import { ABOUT_HIGHLIGHTS, AboutHighlight } from "../lib/site-data";

export function AboutSection() {
  // Map string to Lucide icons
  const getIcon = (iconName: AboutHighlight["iconName"]) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-blue-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      default:
        return <User className="w-5 h-5 text-zinc-400" />;
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <SectionContainer id="about" className="border-t border-zinc-900/60 pb-20 relative">
      {/* Background visual detail */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left narrative column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>01 . Обо мне</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white leading-tight">
            Ориентация на продукт <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              и пользовательский опыт
            </span>
          </h2>

          <p className="text-zinc-300 font-sans text-base leading-relaxed">
            Я разрабатываю web и mobile-продукты с фокусом на цельные пользовательские сценарии: от интерфейса и состояния до API, структуры данных, деплоя и AI-функций.
          </p>

          <p className="text-zinc-400 font-sans text-sm leading-relaxed">
            Мне интересны dashboard-интерфейсы, CRM/workspace-системы, внутренние кабинеты и polished MVP, которые выглядят как реальные продукты, а не просто учебные страницы. Умею быстро собирать полноценные рабочие демо-версии и доводить их до безукоризненного состояния.
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-blue-400 transition-colors group"
            >
              <span>Связаться для совместной работы</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right highlights grid column */}
        <div className="lg:col-span-7">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            id="about-highlights-grid"
          >
            {ABOUT_HIGHLIGHTS.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={cardVariants}
                whileHover={{ y: -4, borderColor: "rgba(63, 63, 70, 0.8)" }}
                className="relative p-5 rounded-xl border border-zinc-800 bg-zinc-950/45 backdrop-blur-md hover:bg-zinc-950/85 transition-all duration-300 overflow-hidden group"
              >
                {/* Visual subtle dot pattern in card backgrounds */}
                <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      {getIcon(highlight.iconName)}
                    </div>
                    <span className="font-mono text-[9px] text-zinc-600 tracking-wider">SEC_M_01</span>
                  </div>

                  <h3 className="font-sans font-semibold text-sm text-zinc-100 group-hover:text-white transition-colors">
                    {highlight.title}
                  </h3>

                  <p className="font-sans text-xs text-zinc-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>

                {/* Micro focus indicator on card hover */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </SectionContainer>
  );
}
