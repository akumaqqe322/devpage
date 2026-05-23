/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import { AboutSection } from "./components/about-section";
import { SkillsSection } from "./components/skills-section";
import {
  ProjectsPlaceholder,
  WorkflowPlaceholder,
  ContactPlaceholder,
} from "./components/placeholder-sections";

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

        {/* Anchor Layout Placeholder Sections for next stages */}
        <ProjectsPlaceholder />
        <WorkflowPlaceholder />
        <ContactPlaceholder />
      </main>

      {/* Subdued Premium Minimalist Footer */}
      <footer className="w-full border-t border-zinc-900 bg-black/60 py-8 px-4 font-mono text-center text-[11px] text-zinc-600">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 Kirill. Built with premium design standards.</span>
          </div>
          <div className="flex items-center gap-1.5 text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>AI-assisted workflow enabled</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

