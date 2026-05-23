import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "../lib/site-data";
import { useLocale } from "../lib/i18n";

export function SiteHeader({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const getTranslatedLabel = (label: string) => {
    switch (label.toLowerCase()) {
      case "about": return t.nav.about;
      case "skills": return t.nav.skills;
      case "projects": return t.nav.projects;
      case "workflow": return t.nav.workflow;
      default: return label;
    }
  };

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030303]/80 backdrop-blur-lg border-b border-zinc-800/50 py-3"
          : "bg-transparent border-b border-transparent py-5"
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-950/50 backdrop-blur-md border border-white/[0.05] p-1 rounded-full" id="desktop-nav">
            {NAV_ITEMS.map((item, index) => {
              const num = `0${index + 1}`;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/[0.04] focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/40 transition-all duration-200 cursor-pointer group"
                >
                  <span className="font-mono text-[10px] text-zinc-500 group-hover:text-blue-400 transition-colors">
                    {num}
                  </span>
                  <span className="font-sans">
                    {getTranslatedLabel(item.label)}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* Desktop Language Switcher */}
            <div className="inline-flex items-center rounded-lg border border-white/[0.08] bg-zinc-950/40 p-0.5 mr-1" id="lang-switcher">
              <button
                type="button"
                onClick={() => setLocale("ru")}
                className={`px-2 py-1 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
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
                className={`px-2 py-1 text-[10px] font-mono font-bold rounded-md transition-all cursor-pointer ${
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
              className="inline-flex items-center justify-center gap-2 px-3.5 py-2 text-xs font-mono font-medium text-zinc-400 hover:text-white bg-zinc-950/40 border border-white/[0.06] hover:border-white/[0.12] rounded-lg hover:bg-white/[0.04] transition-all duration-200 select-none cursor-pointer group"
              id="header-dev-palette-btn"
            >
              <Terminal className="w-3.5 h-3.5 text-blue-400 group-hover:text-cyan-400 transition-colors" />
              <span>{t.header.devConsole}</span>
              <kbd className="inline-flex text-[9px] px-1.5 py-0.5 bg-white/[0.03] border border-white/[0.05] rounded font-mono text-zinc-500 leading-none">
                ⌘K
              </kbd>
            </button>

            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center px-3.5 py-2 text-xs font-mono font-semibold tracking-wide text-zinc-300 bg-zinc-950/80 border border-emerald-500/15 hover:border-emerald-500/35 rounded-lg hover:bg-zinc-900 focus:outline-none focus-visible:ring-1 focus-visible:ring-emerald-500/40 shadow-sm shadow-emerald-500/2 hover:-translate-y-0.5 transition-all duration-200 select-none cursor-pointer group"
              id="header-cta"
            >
              <span className="relative flex h-1.5 w-1.5 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>{t.nav.available}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
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
            className="md:hidden border-b border-zinc-800/80 bg-[#030303]/95 backdrop-blur-xl overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-6 space-y-1.5 sm:px-6">
              {NAV_ITEMS.map((item, index) => {
                const num = `0${index + 1}`;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleScrollToSection(e, item.href)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 border-l border-transparent hover:border-blue-500 focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/45 transition-all duration-200 cursor-pointer"
                  >
                    <span className="font-mono text-xs text-zinc-650">
                      {num}
                    </span>
                    <span>
                      {getTranslatedLabel(item.label)}
                    </span>
                  </a>
                );
              })}
              
              {/* Mobile Language Switcher block */}
              <div className="flex items-center justify-between px-3 py-2.5 border-b border-zinc-900/60 pb-3 mb-2">
                <span className="text-xs font-mono text-zinc-500">Language / Язык</span>
                <div className="inline-flex items-center rounded-lg border border-white/[0.08] bg-zinc-950/40 p-0.5">
                  <button
                    type="button"
                    onClick={() => setLocale("ru")}
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all cursor-pointer ${
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
                    className={`px-3 py-1 text-xs font-mono font-bold rounded-md transition-all cursor-pointer ${
                      locale === "en"
                        ? "bg-white/[0.08] text-white"
                        : "text-zinc-500 hover:text-zinc-350"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="pt-2 px-3 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenPalette();
                  }}
                  type="button"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 text-xs font-mono text-center font-medium text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg transition-all cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>{t.header.devConsole}</span>
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-center w-full px-4 py-3 text-xs font-mono text-center font-semibold text-white bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/25 hover:border-blue-500/45 rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-500/40 transition-all duration-200 cursor-pointer"
                >
                  <span className="relative flex h-1.5 w-1.5 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 font-bold"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                  </span>
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
