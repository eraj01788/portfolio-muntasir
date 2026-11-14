import React, { useState } from "react";
import { 
  FolderGit2, 
  Sparkles, 
  Check, 
  ArrowUpRight, 
  ExternalLink,
  Bot, 
  Database,
  Eye, 
  Layers 
} from "lucide-react";
import { GithubIcon } from "./ui/Icons";
import { projects } from "../data/projects";

type CategoryFilter = "all" | "saas" | "vector" | "vision" | "spatial";

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All Engineering Work" },
  { id: "saas", label: "Live AI SaaS (MoneyFlow)" },
  { id: "vector", label: "Vector Search (1M+)" },
  { id: "vision", label: "Computer Vision & Algorithms" },
  { id: "spatial", label: "Spatial & 60 FPS Systems" },
];

const categoryIconMap: Record<string, React.ReactNode> = {
  saas: <Bot className="w-4 h-4 text-indigo-400" />,
  vector: <Database className="w-4 h-4 text-cyan-400" />,
  vision: <Eye className="w-4 h-4 text-violet-400" />,
  spatial: <Layers className="w-4 h-4 text-emerald-400" />,
};

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");

  const filteredProjects = projects.filter(
    p => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="relative py-28 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-mono mb-4">
              <FolderGit2 className="w-4 h-4" />
              <span>03 / FEATURED WORK</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Featured Systems &amp; Production Software
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
              Real-world software showcasing live multimodal SaaS architecture (MoneyFlow), high-scale vector retrieval at VolksByte (1M+ vectors), and production computer vision pipelines.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#141418] border border-white/[0.08] backdrop-blur-sm self-start md:self-auto">
            {FILTERS.map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  activeFilter === f.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Spacious, Elegant Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-[#141418]/90 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#161622] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-950/30 ${
                idx === 0 && activeFilter === "all" ? "lg:col-span-2 bg-gradient-to-br from-[#161624] via-[#13131A] to-[#101015] border-indigo-500/40" : ""
              }`}
            >
              <div>
                {/* Top Badge Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300 text-xs font-mono">
                    {categoryIconMap[project.category] || <Sparkles className="w-3.5 h-3.5 text-indigo-400" />}
                    <span>{project.categoryLabel}</span>
                  </div>

                  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    {project.metrics}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-4 group-hover:text-indigo-200 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Models Employed Badges */}
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider mr-1">
                    Models &amp; AI:
                  </span>
                  {project.models.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-3 py-1 rounded-lg bg-indigo-500/15 border border-indigo-500/30 text-indigo-200 text-xs font-mono font-medium"
                    >
                      {m}
                    </span>
                  ))}
                </div>

                {/* Project Summary */}
                <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 font-light">
                  {project.summary}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-3 mb-8 p-6 rounded-2xl bg-black/30 border border-white/[0.06]">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-2 font-semibold">
                    Key Technical Highlights:
                  </span>
                  {project.architectureHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                      <Check className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Technologies & Code/Demo Links */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] text-zinc-400 text-xs font-mono border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600/30 border border-indigo-500/40 text-xs sm:text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-600 transition-all group/demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-indigo-400 group-hover/demo:text-white" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors group/link"
                    >
                      <GithubIcon className="w-4 h-4 text-zinc-400" />
                      <span>Repository</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover/link:text-indigo-400 transition-colors" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
