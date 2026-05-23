import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Cpu, Terminal, Layers } from "lucide-react";

type TabId = "developer" | "workflow";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<TabId>("developer");

  return (
    <div className="relative w-full max-w-lg mx-auto lg:ml-auto" id="hero-visual-container">
      
      {/* Background radial glowing effects */}
      <div className="absolute inset-x-0 -top-12 -bottom-12 bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-cyan-500/10 rounded-3xl blur-3xl opacity-75 animate-pulse-slow pointer-events-none" />
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />

      {/* Main Glassmorphic Card */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full rounded-2xl border border-zinc-800/80 bg-zinc-950/75 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden"
        id="developer-card"
      >
        {/* Card Header (Mac-style command window titlebar) */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-900/80 bg-zinc-950/40 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-red-500/30 border border-red-500/40" />
            <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/30 border border-yellow-500/40" />
            <span className="w-3.5 h-3.5 rounded-full bg-green-500/30 border border-green-500/40" />
          </div>
          {/* Editor Status label */}
          <div className="flex items-center gap-1.5 text-zinc-500 font-mono text-xs font-medium">
            <Terminal className="w-3 h-3 text-zinc-600" />
            <span>active_session_stdout</span>
          </div>
          <span className="w-5" /> {/* Spacer */}
        </div>

        {/* Tab Controls */}
        <div className="flex bg-zinc-950/80 border-b border-zinc-900/60" id="visual-tabs">
          <button
            onClick={() => setActiveTab("developer")}
            className={`flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] font-medium border-r border-zinc-900 transition-colors cursor-pointer ${
              activeTab === "developer"
                ? "bg-zinc-900 text-blue-400 border-b-2 border-b-blue-500"
                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>developer.ts</span>
          </button>
          
          <button
            onClick={() => setActiveTab("workflow")}
            className={`flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] font-medium border-r border-zinc-900 transition-colors cursor-pointer ${
              activeTab === "workflow"
                ? "bg-zinc-900 text-purple-400 border-b-2 border-b-purple-500"
                : "text-zinc-500 hover:text-zoom hover:text-zinc-300 hover:bg-zinc-900/30"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>agent_workflow.yaml</span>
          </button>
        </div>

        {/* Code Content Area */}
        <div className="p-6 font-mono text-xs leading-6 overflow-x-auto text-zinc-400 min-h-[310px]" id="visual-code-window">
          {activeTab === "developer" ? (
            <div className="space-y-1">
              {/* developer.ts Code View */}
              <div className="text-zinc-500 font-mono text-[11px] pb-2">// Core identity structure & skills</div>
              <div>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span>{" "}
                <span className="text-zinc-500">=</span>{" "}
                <span className="text-zinc-300">{"{"}</span>
              </div>
              <div className="pl-5">
                <span className="text-zinc-400">fullname:</span>{" "}
                <span className="text-green-300">"Кирилл"</span>,
              </div>
              <div className="pl-5">
                <span className="text-zinc-400">focus:</span>{" "}
                <span className="text-green-300">"Frontend / Fullstack"</span>,
              </div>
              <div className="pl-5">
                <span className="text-zinc-400">architecture:</span>{" "}
                <span className="text-zinc-300">["SPA", "SSR", "MVVM"]</span>,
              </div>
              <div className="pl-5">
                <span className="text-zinc-400">coreStack:</span>{" "}
                <span className="text-zinc-300">{"["}</span>
              </div>
              <div className="pl-10">
                <span className="text-orange-400">"React/Next.js"</span>,{" "}
                <span className="text-teal-400">"TypeScript"</span>,
              </div>
              <div className="pl-10">
                <span className="text-blue-400">"Supabase"</span>,{" "}
                <span className="text-indigo-400">"Node.js"</span>,{" "}
                <span className="text-pink-400">"Flutter"</span>
              </div>
              <div className="pl-5">
                <span className="text-zinc-300">{"]"}</span>,
              </div>
              <div className="pl-5">
                <span className="text-zinc-400">credo:</span>{" "}
                <span className="text-stone-400">"High performance & clean UX"</span>
              </div>
              <div>
                <span className="text-zinc-300">{"};"}</span>
              </div>

              {/* Stack visual badge tags at the bottom */}
              <div className="pt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  TypeScript
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Next.js
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Supabase
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  Node.js
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-1">
              {/* workflow.yaml Code View */}
              <div className="text-zinc-500 font-mono text-[11px] pb-2">// Prompt-driven product lifecycle pipeline</div>
              <div>
                <span className="text-orange-300">pipeline</span>:{" "}
                <span className="text-amber-400">"AI-assisted coding"</span>
              </div>
              <div>
                <span className="text-orange-300">orchestrators</span>:
              </div>
              <div className="pl-5">
                - <span className="text-zinc-300">Gemini models</span>
              </div>
              <div className="pl-5">
                - <span className="text-zinc-300">Claude models</span>
              </div>
              <div>
                <span className="text-orange-300">workflow_stages</span>:
              </div>
              <div className="pl-5">
                <span className="text-teal-400">1_specification</span>:{" "}
                <span className="text-zinc-400">"Deterministic brief synthesis"</span>
              </div>
              <div className="pl-5">
                <span className="text-teal-400">2_rapid_mvp</span>:{" "}
                <span className="text-zinc-400">"Express proxy + React tailwind boilerplate"</span>
              </div>
              <div className="pl-5">
                <span className="text-teal-400">3_polish_ux</span>:{" "}
                <span className="text-zinc-400">"Micro-animations & performance lint check"</span>
              </div>
              <div>
                <span className="text-orange-300">safety_checks</span>:{" "}
                <span className="text-emerald-400">true</span>
              </div>
              
              {/* Workflow visual badge tags at the bottom */}
              <div className="pt-6 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sparkles className="w-2.5 h-2.5" /> Prompt Engineering
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <Layers className="w-2.5 h-2.5" /> Clean Architecture
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Console Footprint */}
        <div className="px-5 py-3 bg-zinc-950 border-t border-zinc-900 text-[10px] text-zinc-500 font-mono flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[#3b82f6]">✓</span>
            <span>All micro-tests compilation online</span>
          </div>
          <div>UTF-8</div>
        </div>
      </motion.div>
    </div>
  );
}
