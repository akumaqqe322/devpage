import { motion } from "motion/react";
import { Send, Briefcase, Github, ExternalLink, Sparkles } from "lucide-react";
import { SectionContainer } from "./ui/section-container";
import { CONTACT_LINKS, ContactLink } from "../lib/site-data";
import { useLocale } from "../lib/i18n";

export function ContactSection() {
  const { t, locale } = useLocale();

  const getIcon = (label: string) => {
    switch (label) {
      case "Telegram":
        return <Send className="w-5 h-5 text-blue-400" />;
      case "HH Resume":
        return <Briefcase className="w-5 h-5 text-red-400" />;
      case "GitHub / Main":
        return <Github className="w-5 h-5 text-white" />;
      case "GitHub / Additional":
        return <Github className="w-5 h-5 text-zinc-400" />;
      default:
        return <ExternalLink className="w-5 h-5 text-zinc-400" />;
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
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const getTranslatedLink = (label: string, defaultDesc: string) => {
    switch (label) {
      case "Telegram":
        return { label: t.contact.tgTitle, description: t.contact.tgDesc };
      case "HH Resume":
        return { label: t.contact.hhTitle, description: t.contact.hhDesc };
      case "GitHub / Main":
        return { label: t.contact.ghMainTitle, description: t.contact.ghMainDesc };
      case "GitHub / Additional":
        return { label: t.contact.ghAddTitle, description: t.contact.ghAddDesc };
      default:
        return { label, description: defaultDesc };
    }
  };

  return (
    <SectionContainer id="contact" className="border-t border-zinc-900/60 py-24 relative overflow-hidden">
      {/* Glow details in backgrounds */}
      <div className="absolute left-1/4 bottom-0 w-[500px] h-[550px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute right-10 top-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-left md:text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-purple-400">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span>{t.contact.label}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-sans font-extrabold tracking-tight text-white leading-tight">
            {locale === "ru" ? (
              <>
                Готов обсудить <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                  frontend / fullstack задачи
                </span>
              </>
            ) : (
              <>
                Ready to discuss <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-400">
                  frontend & fullstack challenges
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Master Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="contact-panel-wrapper">
          
          {/* Left Block: Narrative CTA Card */}
          <div className="lg:col-span-5">
            <div className="h-full relative rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-950 to-zinc-900/30 p-8 flex flex-col justify-between overflow-hidden group shadow-xl">
              <div className="absolute inset-0 dot-grid opacity-5 pointer-events-none" />

              <div className="space-y-6">
                {/* Active Availability Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/5 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t.contact.availability}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-sans font-bold text-white">
                    {t.contact.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans mt-2.5">
                    {t.contact.cardDescription}
                  </p>
                </div>
              </div>

              {/* Aesthetic micro badge in bottom of CTA card */}
              <div className="pt-8 mt-8 border-t border-zinc-900 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-500">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                </div>
                <div className="font-mono text-[10px] text-zinc-550 leading-relaxed">
                  {locale === "ru" ? "Ориентировочное время ответа" : "Estimated response time"} <br />
                  <span className="text-zinc-400">{t.contact.responseRate}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Dynamic Contact Grid */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full content-start"
              id="links-interactive-grid"
            >
              {CONTACT_LINKS.map((link: ContactLink) => {
                const isPrimary = link.kind === "primary";
                const localizedLink = getTranslatedLink(link.label, link.description);
                return (
                  <motion.a
                    key={link.label}
                    variants={cardVariants}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={`relative p-5 rounded-xl border flex flex-col justify-between transition-all duration-300 outline-none focus-visible:ring-1 focus-visible:ring-blue-500/70 group ${
                      isPrimary
                        ? "border-blue-500/20 bg-blue-950/5 hover:border-blue-500/40 hover:bg-blue-950/15"
                        : "border-zinc-900 bg-zinc-950/30 hover:border-zinc-800 hover:bg-zinc-900/30"
                    }`}
                  >
                    {/* Glow and decoration background */}
                    {isPrimary && (
                      <div className="absolute right-0 bottom-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl pointer-events-none" />
                    )}

                    <div className="space-y-4 relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80 group-hover:border-zinc-700 transition-colors">
                          {getIcon(link.label)}
                        </div>
                        
                        <div className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          <span className="text-[10px] font-mono font-medium">{locale === "ru" ? "Открыть" : "Open"}</span>
                          <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                            {localizedLink.label}
                          </h4>
                          {isPrimary && (
                            <span className="inline-flex px-1.5 py-0.5 text-[9px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/10 rounded">
                              FAST
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">
                          {localizedLink.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer string representation */}
                    <div className="pt-4 mt-4 border-t border-zinc-900/50 flex items-center justify-between text-[11px] font-mono text-zinc-550 group-hover:text-zinc-400 transition-colors relative z-10">
                      <span>{link.username ? link.username : link.label.toLowerCase().replace(/\s+/g, '')}</span>
                      <span className="text-[9px] text-zinc-700 tracking-widest">CONNECT_OK</span>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </SectionContainer>
  );
}
