import React, { useState, useEffect } from "react";
import { Menu, X, Terminal, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NAV_ITEMS } from "../lib/site-data";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.href)}
                className="text-sm font-medium text-zinc-400 hover:text-white hover:translate-y-[-0.5px] transition-all duration-200 cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Header Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollToSection(e, "#contact")}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-mono font-medium tracking-wide text-white bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-lg hover:bg-zinc-900 transition-all duration-200 select-none group cursor-pointer"
              id="header-cta"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-zinc-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
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
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollToSection(e, item.href)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 border-l border-transparent hover:border-blue-500 transition-all duration-200 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollToSection(e, "#contact")}
                  className="flex items-center justify-center w-full px-4 py-3 text-xs font-mono text-center font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-all cursor-pointer"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
