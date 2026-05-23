import React, { useState, useEffect } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "../lib/i18n";

const TAB_FILES = [
  { 
    id: "about", 
    href: "#about", 
    file: "about.tsx", 
    dotColor: "bg-cyan-500", 
    borderColor: "bg-cyan-500/80",
    ariaLabel: "Go to About section",
    ariaLabelRu: "Перейти к секции Обо мне"
  },
  { 
    id: "skills", 
    href: "#skills", 
    file: "skills.json", 
    dotColor: "bg-amber-500", 
    borderColor: "bg-amber-500/80",
    ariaLabel: "Go to Skills section",
    ariaLabelRu: "Перейти к секции Навыки"
  },
  { 
    id: "projects", 
    href: "#projects", 
    file: "projects.md", 
    dotColor: "bg-violet-500", 
    borderColor: "bg-violet-500/80",
    ariaLabel: "Go to Projects section",
    ariaLabelRu: "Перейти к секции Проекты"
  },
  { 
    id: "workflow", 
    href: "#workflow", 
    file: "workflow.yaml", 
    dotColor: "bg-emerald-500", 
    borderColor: "bg-emerald-500/80",
    ariaLabel: "Go to Workflow section",
    ariaLabelRu: "Перейти к секции Процесс"
  }
];

export function SiteHeader({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");
  const { locale, setLocale, t } = useLocale();

  // Track scrolling to apply dynamic borders and background opacity
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to sync active tab with currently scrolled section
  useEffect(() => {
    const sections = ["hero", "about", "skills", "projects", "workflow"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.05,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === "hero") {
            setActiveSection("");
          } else {
            setActiveSection(id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      setIsOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030303]/85 backdrop-blur-lg border-b border-zinc-800/40 py-2"
          : "bg-transparent border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => handleScrollToSection(e, "#hero")}
            className="flex items-center gap-2.5 font-sans font-semibold tracking-tight text-white group cursor-pointer"
            id="logo-anchor"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
              <Terminal className="w-4 h-4 text-blue-400 group-hover:text-cyan-400 transition-colors" />
              <div className="absolute inset-0 rounded-lg bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
            </div>
            <span className="text-sm tracking-wide font-mono text-zinc-300 group-hover:text-white transition-colors">
              kirill<span className="text-blue-500">.</span>dev
            </span>
          </a>

          {/* Desktop Navigation - IDE Style file tabs strip */}
          <nav className="hidden lg:flex items-center h-8 bg-[#070709]/80 backdrop-blur-md border border-white/[0.04] rounded-lg overflow-hidden font-mono text-xs shadow-md p-px" id="desktop-nav">
            {TAB_FILES.map((tab) => {
              const isActive = activeSection === tab.id;
              return (
                <a
                  key={tab.id}
                  href={tab.href}
                  onClick={(e) => handleScrollToSection(e, tab.href)}
                  aria-current={isActive ? "true" : undefined}
                  aria-label={locale === "ru" ? tab.ariaLabelRu : tab.ariaLabel}
                  title={locale === "ru" ? tab.ariaLabelRu : tab.ariaLabel}
                  className={`relative h-full inline-flex items-center gap-1.5 px-3 select-none cursor-pointer group focus:outline-none focus-visible:bg-white/[0.04] border-r border-white/[0.03] last:border-r-0 text-[11px] transition-colors ${
                    isActive 
                      ? "bg-zinc-900/40 text-white font-medium shadow-inner" 
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.015]"
                  }`}
                >
                  {/* Subtle active state indicators */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeTabAccentMarker"
                      className={`absolute top-0 left-0 right-0 h-[1.2px] ${tab.borderColor}`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  
                  {/* Miniature colored indicator dot representing the file type */}
                  <span className={`w-1.5 h-1.5 rounded-full ${tab.dotColor} shrink-0 opacity-75 group-hover:scale-110 group-hover:opacity-100 transition-all`} />
                  
                  <span className="text-[11px] tracking-wide">{tab.file}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Desktop Language Switcher */}
            <div className="inline-flex items-center h-8 rounded-lg border border-white/[0.08] bg-zinc-950/40 p-0.5 mr-1" id="lang-switcher">
              <button
                type="button"
                onClick={() => setLocale("ru")}
                className={`h-full px-2 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                  locale === "ru"
                    ? "bg-white/[0.08] text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                aria-label="Switch language to Russian"
              >
                RU
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                className={`h-full px-2 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                  locale === "en"
                    ? "bg-white/[0.08] text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                aria-label="Switch language to English"
              >
                EN
              </button>
            </div>

            <button
              onClick={onOpenPalette}
              type="button"
              className="inline-flex items-center justify-center h-8 gap-1.5 px-3 text-[11px] font-mono font-medium text-zinc-400 hover:text-white bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.12] rounded-lg hover:bg-white/[0.04] transition-all duration-200 select-none cursor-pointer group"
              id="header-dev-palette-btn"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
              <span>{t.header.devConsole}</span>
              <kbd className="hidden xl:inline-flex text-[9px] px-1.5 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded font-mono text-zinc-500 leading-none">
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center h-8 px-3.5 text-[11px] font-mono font-semibold tracking-wide text-zinc-100 bg-cyan-400/[0.06] border border-cyan-300/[0.12] hover:border-cyan-300/[0.18] rounded-lg hover:bg-cyan-400/[0.08] focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/40 transition-all duration-200 select-none cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              id="header-cta"
            >
              <span>{t.nav.available}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-90 w-10 h-10 border border-transparent hover:border-zinc-800 transition-all cursor-pointer"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-zinc-800/80 bg-[#030303]/95 backdrop-blur-xl overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
              {TAB_FILES.map((tab) => {
                const isActive = activeSection === tab.id;
                return (
                  <a
                    key={tab.id}
                    href={tab.href}
                    onClick={(e) => handleScrollToSection(e, tab.href)}
                    aria-label={locale === "ru" ? tab.ariaLabelRu : tab.ariaLabel}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer border-l-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/45 ${
                      isActive
                        ? "text-white bg-zinc-900/65 border-cyan-550/80 font-semibold"
                        : "text-zinc-400 border-transparent hover:text-white hover:bg-zinc-900"
                    }`}
                  >
                    {/* Visual file dot maker */}
                    <span className={`w-1.5 h-1.5 rounded-full ${tab.dotColor} shrink-0`} />
                    <span className="text-[12px]">{tab.file}</span>
                  </a>
                );
              })}
              
              {/* Mobile Language Switcher block */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-900/60 pb-2.5 mb-1.5">
                <span className="text-[11px] font-mono text-zinc-500">Language / Язык</span>
                <div className="inline-flex items-center rounded-lg border border-white/[0.08] bg-zinc-950/40 p-0.5">
                  <button
                    type="button"
                    onClick={() => setLocale("ru")}
                    className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                      locale === "ru"
                        ? "bg-white/[0.08] text-white"
                        : "text-zinc-500 hover:text-zinc-350"
                    }`}
                  >
                    RU
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-md transition-all cursor-pointer ${
                      locale === "en"
                        ? "bg-white/[0.08] text-white"
                        : "text-zinc-500 hover:text-zinc-350"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="pt-1.5 px-2 flex flex-col gap-1.5">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenPalette();
                  }}
                  type="button"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-xs font-mono text-center font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.header.devConsole}</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-center w-full px-4 py-2.5 text-xs font-mono text-center font-semibold text-zinc-100 bg-cyan-400/[0.06] hover:bg-cyan-400/[0.08] border border-cyan-300/[0.12] hover:border-cyan-300/[0.18] rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/40 transition-all duration-200 cursor-pointer"
                >
                  <span>{t.nav.availableMobile}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
