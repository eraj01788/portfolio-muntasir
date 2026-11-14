import React, { useState } from "react";
import { 
  Wrench, 
  BrainCircuit, 
  Server, 
  Eye, 
  Bot, 
  Layers 
} from "lucide-react";
import { skillCategories } from "../data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6 text-indigo-400" />,
  Eye: <Eye className="w-6 h-6 text-cyan-400" />,
  BrainCircuit: <BrainCircuit className="w-6 h-6 text-violet-400" />,
  Server: <Server className="w-6 h-6 text-emerald-400" />,
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredCategories = selectedCategory === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="relative py-28 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-mono mb-4">
              <Wrench className="w-4 h-4" />
              <span>04 / TECHNICAL ARSENAL</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              AI, Models &amp; Engineering Stack
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
              Comprehensive expertise across modern LLMs, multimodal perception, transformer architectures, vector databases, and production microservices.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#141418] border border-white/[0.08] backdrop-blur-sm self-start md:self-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                selectedCategory === "all"
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              All Domains
            </button>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
                  selectedCategory === cat.id
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat.title.split("&")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredCategories.map(cat => (
            <div
              key={cat.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#141418]/90 border border-white/[0.08] hover:border-indigo-500/40 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-indigo-950/20"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-white/[0.08] shrink-0">
                  {iconMap[cat.iconName] || <Layers className="w-6 h-6 text-indigo-400" />}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 font-light leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Badges Grid */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`group/badge relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 ${
                      skill.highlight
                        ? "bg-indigo-950/40 border border-indigo-500/35 text-indigo-200 hover:border-indigo-400 hover:text-white shadow-sm"
                        : "bg-white/[0.04] border border-white/[0.06] text-zinc-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    {skill.highlight && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400" />
                    )}
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[11px] text-zinc-500 font-sans ml-1 opacity-75">
                        • {skill.level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend strip */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-mono text-zinc-400">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" />
              Core Daily Production Stack
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-500" />
              Production Proficient
            </span>
          </div>
          <div>
            <span>Verified AI &amp; Software Engineering Expertise</span>
          </div>
        </div>

      </div>
    </section>
  );
};
