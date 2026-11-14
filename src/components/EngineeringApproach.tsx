import React from "react";
import { 
  Lightbulb, 
  Bot, 
  Eye, 
  Server, 
  ShieldCheck, 
  CheckCircle2 
} from "lucide-react";
import { engineeringPillars } from "../data/approach";

const pillarIconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6 text-indigo-400" />,
  Eye: <Eye className="w-6 h-6 text-cyan-400" />,
  Server: <Server className="w-6 h-6 text-violet-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
};

export const EngineeringApproach: React.FC = () => {
  return (
    <section id="approach" className="relative py-28 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-mono mb-4">
            <Lightbulb className="w-4 h-4" />
            <span>05 / METHODOLOGY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            How I Build Production AI Systems
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            From model evaluation and embedding vectorization to low-latency microservice architecture and containerized deployment.
          </p>
        </div>

        {/* 4 Pillars Grid with Generous Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {engineeringPillars.map((pillar) => (
            <div
              key={pillar.number}
              className="relative p-8 sm:p-10 rounded-3xl bg-[#141418]/90 border border-white/[0.08] hover:border-indigo-500/35 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-indigo-950/20"
            >
              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillarIconMap[pillar.icon]}
                  </div>
                  <span className="font-heading font-bold text-4xl text-zinc-700 group-hover:text-indigo-400/50 transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-indigo-200 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-indigo-300 mb-6 font-medium">
                  {pillar.tagline}
                </p>

                {/* Description */}
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                  {pillar.description}
                </p>
              </div>

              {/* Capabilities checklist */}
              <div className="pt-6 border-t border-white/[0.08] space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                  Core Implementation Patterns:
                </span>
                {pillar.capabilities.map((cap, cIdx) => (
                  <div key={cIdx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
