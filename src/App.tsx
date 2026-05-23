/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsSection } from "./components/projects-section";
import { WorkflowSection } from "./components/workflow-section";
import { ContactSection } from "./components/contact-section";

export default function App() {
  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 selection:bg-blue-500/20 selection:text-blue-300 font-sans antialiased overflow-x-hidden">
      {/* Sticky Premium Header */}
      <SiteHeader />

      {/* Main Single-page Layout content */}
      <main id="main-content">
        {/* Step 1 Hero Section with interactive developer visual card */}
        <HeroSection />

        {/* Real Content Sections (Stage 2) */}
        <AboutSection />
        <SkillsSection />

        {/* Real Content Sections (Stage 3) */}
        <ProjectsSection />

        {/* Real Content Sections (Stage 4) */}
        <WorkflowSection />

        {/* Real Content Sections (Stage 5) */}
        <ContactSection />
      </main>

      {/* Subdued Premium Minimalist Footer */}
      <footer className="w-full border-t border-zinc-900 bg-black/45 py-10 px-4 sm:px-6 lg:px-8 text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-zinc-300 text-xs shadow-sm">© {new Date().getFullYear()} Kirill</span>
            <span className="text-zinc-600 font-sans text-[11px]">Built as a product-style developer portfolio.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-sans text-xs">
            <a
              href="https://t.me/cxldforeverr"
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-500 hover:text-blue-400 hover:scale-[1.02] transition-all"
            >
              Telegram
            </a>
            <a
              href="https://hh.ru/resume/5681f646ff103c3d100039ed1f366d6364344f"
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-500 hover:text-red-400 hover:scale-[1.02] transition-all"
            >
              HH Resume
            </a>
            <a
              href="https://github.com/flexxxikqwe"
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-500 hover:text-white hover:scale-[1.02] transition-all"
            >
              GitHub Main
            </a>
            <a
              href="https://github.com/akumaqqe322"
              target="_blank"
              rel="noreferrer noopener"
              className="text-zinc-500 hover:text-zinc-300 hover:scale-[1.02] transition-all"
            >
              GitHub Additional
            </a>
          </div>

          <div className="flex items-center gap-1.5 text-zinc-650 font-mono text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>AI-assisted workflow enabled</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

