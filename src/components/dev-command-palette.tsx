import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, Search, Send, Briefcase, Github, 
  ExternalLink, Sparkles, X, Layout, Layers, 
  Cpu, Check, Info, Hammer, Sparkle
} from "lucide-react";
import { CONTACT_LINKS, NAV_ITEMS } from "../lib/site-data";

interface DevCommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DevCommandPalette({ isOpen, onClose }: DevCommandPaletteProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLDivElement>(null);

  // Esc keys and global keyboard overrides
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Auto focus input
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleScrollTo = (id: string) => {
    onClose();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const BUILD_LOGS = [
    { stage: "Stage 1", text: "Visual foundation, Hero, Header", status: "Done" },
    { stage: "Stage 2", text: "About and Skills detailing", status: "Done" },
    { stage: "Stage 3", text: "Adaptive Projects Grid", status: "Done" },
    { stage: "Stage 4", text: "AI-assisted workflow engine diagram", status: "Done" },
    { stage: "Stage 5", text: "Contact System and Clean Links layout", status: "Done" },
    { stage: "Stage 6", text: "Command palette signature feature integration", status: "Hot" }
  ];

  // Helper icons for site categories
  const getNavIcon = (label: string) => {
    switch (label.toLowerCase()) {
      case "about":
        return <Info className="w-4 h-4 text-cyan-400" />;
      case "skills":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      case "projects":
        return <Layout className="w-4 h-4 text-blue-400" />;
      case "workflow":
        return <Sparkles className="w-4 h-4 text-orange-400" />;
      case "contact":
        return <Send className="w-4 h-4 text-emerald-400" />;
      default:
        return <Terminal className="w-4 h-4 text-zinc-400" />;
    }
  };

  const getProfileIcon = (label: string) => {
    switch (label) {
      case "Telegram":
        return <Send className="w-4 h-4 text-blue-400" />;
      case "HH Resume":
        return <Briefcase className="w-4 h-4 text-red-400" />;
      case "GitHub / Main":
      case "GitHub / Additional":
        return <Github className="w-4 h-4 text-zinc-300" />;
      default:
        return <ExternalLink className="w-4 h-4 text-zinc-400" />;
    }
  };

  // Filter lists based on search
  const filteredNavItems = NAV_ITEMS.filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredLinks = CONTACT_LINKS.filter(link => 
    link.label.toLowerCase().includes(searchQuery.toLowerCase()) || 
    link.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 sm:px-6"
          id="cmd-palette-modal-wrapper"
        >
          {/* Overlay mask */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog block */}
          <motion.div
            ref={paletteRef}
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="Developer command palette"
            className="w-full max-w-2xl bg-[#08080a]/90 backdrop-blur-xl border border-white/[0.08] rounded-3xl shadow-2xl shadow-black/60 relative z-10 overflow-hidden flex flex-col max-h-[80vh] text-zinc-100"
            id="cmd-dialog-frame"
          >
            {/* Header / Input controls */}
            <div className="p-4 border-b border-white/[0.06] flex items-center gap-3 bg-black/20 relative">
              <Search className="w-5 h-5 text-zinc-500 shrink-0" />
              <input 
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Фильтровать действия, проекты, контакты..."
                className="w-full bg-transparent border-none text-zinc-100 placeholder-zinc-500 text-sm focus:outline-none selection:bg-cyan-550/20"
                id="cmd-input-field"
              />
              <button 
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-zinc-400 hover:text-white transition-all cursor-pointer"
                aria-label="Закрыть консоль"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content view with scrolling */}
            <div className="flex-1 overflow-y-auto p-4 space-y-7 custom-scrollbar select-none" id="cmd-viewport">
              
              {/* Navigate Section */}
              {filteredNavItems.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-500 uppercase block px-2">
                    Навигация по сайту
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {filteredNavItems.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleScrollTo(item.href.replace("#", ""))}
                        className="flex items-center justify-between p-2.5 rounded-2xl border border-transparent hover:border-white/[0.06] bg-transparent hover:bg-white/[0.04] text-left transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/40 group"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="p-1.5 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.08] group-hover:border-white/[0.1] transition-all">
                            {getNavIcon(item.label)}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-zinc-205 group-hover:text-white">
                              {item.label}
                            </span>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500 bg-white/[0.03] px-1.5 py-0.5 rounded-md border border-white/[0.06] group-hover:text-zinc-300 transition-colors">
                          Скролл
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Profiles Open Section */}
              {filteredLinks.length > 0 && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-500 uppercase block px-2">
                    Внешние профили и контакты
                  </span>
                  <div className="space-y-1">
                    {filteredLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center justify-between p-2.5 rounded-2xl border border-transparent hover:border-white/[0.06] bg-transparent hover:bg-white/[0.04] transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500/40 group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 ml-1 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:bg-white/[0.08] group-hover:border-white/[0.1] transition-all">
                            {getProfileIcon(link.label)}
                          </div>
                          <div className="space-y-0.5">
                            <span className="text-xs font-semibold text-zinc-200 group-hover:text-white flex items-center gap-1.5">
                              {link.label}
                              {link.username && (
                                <span className="text-[10px] text-zinc-500 font-mono font-normal">
                                  {link.username}
                                </span>
                              )}
                            </span>
                            <span className="text-[11px] text-zinc-500 leading-none">
                              {link.description}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-zinc-500 group-hover:text-cyan-400 font-mono text-[9px] mr-2 transition-colors">
                          <span>Открыть</span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Product Build Log Section */}
              {searchQuery === "" && (
                <div className="space-y-3">
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-500 uppercase block px-2">
                    История сборки лендинга (Build Logs)
                  </span>
                  <div className="rounded-2xl border border-white/[0.06] bg-black/25 p-4 space-y-3.5">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Hammer className="w-4 h-4 text-purple-400/80" />
                      <span className="text-xs font-semibold font-mono">Build Workflow Terminal:</span>
                    </div>
                    <div className="space-y-2 font-mono text-[11px] text-zinc-400 leading-relaxed">
                      {BUILD_LOGS.map((log) => (
                        <div key={log.stage} className="flex items-start justify-between gap-4 border-b border-white/[0.04] pb-2 last:border-0 last:pb-0">
                          <span className="text-zinc-550 shrink-0">{log.stage}</span>
                          <span className="text-left text-zinc-400 flex-1 truncate">{log.text}</span>
                          <span className={`text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full ${
                            log.status === "Hot" 
                              ? "bg-blue-500/10 text-blue-400 font-bold animate-pulse" 
                              : "bg-white/[0.03] text-zinc-500"
                          }`}>
                            {log.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer principle */}
            <div className="p-4 border-t border-white/[0.06] bg-[#0c0c0e]/80 flex items-center justify-between text-[11px] text-zinc-500 relative z-10 font-mono">
              <div className="flex items-center gap-2">
                <Sparkle className="w-3.5 h-3.5 text-blue-400" />
                <span>AI accelerates, engineering control keeps reliability.</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-[10px] text-zinc-500 bg-white/[0.03] px-2 py-0.5 rounded-md border border-white/[0.06]">
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
