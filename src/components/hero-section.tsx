import { motion } from "motion/react";
import { ArrowRight, Github, Send, Sparkles, CheckCircle2, Award } from "lucide-react";
import { HeroVisual } from "./hero-visual";
import { useLocale } from "../lib/i18n";

export function HeroSection() {
  const { t, locale } = useLocale();

  // Handler to scroll to a section with an offset
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const statusPills = [
    { text: t.hero.statusRole, type: "role" },
    { text: t.hero.statusWorkflow, type: "tech" },
    { text: t.hero.statusDemos, type: "focus" }
  ];

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden grid-noise-bg"
    >
      {/* Background radial gradient glow anchors */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Content Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Status Pills Row */}
            <div className="flex flex-wrap gap-2 mb-6" id="status-pills-row">
              {statusPills.map((pill, idx) => {
                const isRole = pill.type === "role";
                const isTech = pill.type === "tech";
                return (
                  <motion.div
                    key={pill.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium border ${
                      isRole
                        ? "bg-blue-500/5 text-blue-300 border-blue-500/20"
                        : isTech
                        ? "bg-purple-500/5 text-purple-300 border-purple-500/20"
                        : "bg-zinc-800/20 text-zinc-300 border-zinc-800/40"
                    }`}
                  >
                    {isRole ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                    ) : isTech ? (
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                    ) : (
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                    )}
                    <span>{pill.text}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Display Headings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="space-y-4"
              id="hero-headings"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-sans font-extrabold tracking-tight text-white leading-[1.12]">
                {locale === "ru" ? "Кирилл" : "Kirill"} — <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                  {t.hero.subtitle}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-zinc-300 font-sans max-w-xl leading-relaxed">
                {locale === "ru"
                  ? "Собираю web и mobile-продукты с фокусом на React, Next.js, Vue, Node.js и AI-assisted workflows."
                  : "Building web & mobile products focused on React, Next.js, Vue, Node.js & AI-assisted workflows."}
              </p>
              
              <div className="h-px w-20 bg-gradient-to-r from-blue-500/50 to-transparent my-6" />
              
              <p className="text-sm sm:text-base text-zinc-400 font-sans max-w-lg leading-relaxed">
                {t.hero.description}
              </p>
            </motion.div>

            {/* CTA Interaction Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mt-8"
              id="hero-ctas"
            >
              <button
                onClick={() => handleScrollToSection("projects")}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-sm font-medium transition-all group shadow-xl shadow-blue-500/10 cursor-pointer"
              >
                {locale === "ru" ? "Посмотреть проекты" : "View projects"}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="https://github.com/flexxxikqwe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/85 text-zinc-300 hover:text-white font-sans text-sm font-medium transition-all cursor-pointer"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>

              <button
                onClick={() => handleScrollToSection("contact")}
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-zinc-800 hover:border-zinc-700 bg-transparent text-zinc-400 hover:text-white font-sans text-sm font-medium transition-all cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 mr-2" />
                {t.hero.ctaContact}
              </button>
            </motion.div>
          </div>

          {/* Right Side Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center w-full"
            id="hero-visual-column"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
