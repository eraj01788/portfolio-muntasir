import React from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  Building2, 
  CheckCircle2, 
  Cpu 
} from "lucide-react";
import { experiences } from "../data/experience";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="relative py-28 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs sm:text-sm font-mono mb-4">
            <Briefcase className="w-4 h-4" />
            <span>02 / CAREER TIMELINE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Professional Engineering Experience
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Over 5 years of verified professional track record engineering AI search pipelines, computer vision models, and production software applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Timeline Line */}
          <div 
            className="hidden md:block absolute left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500/50 to-cyan-500/20" 
            aria-hidden="true"
          />

          <div className="space-y-16">
            {experiences.map((exp, idx) => (
              <div 
                key={idx}
                className="relative md:pl-20 group"
              >
                {/* Timeline node on desktop */}
                <div 
                  className={`hidden md:flex absolute left-5 top-8 -translate-x-1/2 w-8 h-8 rounded-full items-center justify-center border transition-all duration-300 ${
                    exp.isCurrent
                      ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/50 scale-110"
                      : "bg-[#141418] border-white/20 text-zinc-400 group-hover:border-indigo-400/50 group-hover:text-indigo-300"
                  }`}
                  aria-hidden="true"
                >
                  {exp.isCurrent ? (
                    <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
                  ) : (
                    <Building2 className="w-4 h-4" />
                  )}
                </div>

                {/* Experience Card */}
                <div 
                  className={`p-8 sm:p-10 rounded-3xl bg-[#141418]/90 border backdrop-blur-sm transition-all duration-300 shadow-xl ${
                    exp.isCurrent
                      ? "border-indigo-500/35 shadow-indigo-950/30 bg-gradient-to-br from-[#161624] via-[#13131A] to-[#111116]"
                      : "border-white/[0.08] hover:border-white/25"
                  }`}
                >
                  
                  {/* Top Row: Role, Company, Period */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                          {exp.role}
                        </h3>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base font-medium text-indigo-300">
                        <span className="flex items-center gap-2 text-zinc-200">
                          <Building2 className="w-4 h-4 text-indigo-400" />
                          {exp.company}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="flex items-center gap-1.5 text-zinc-400 text-xs sm:text-sm">
                          <MapPin className="w-4 h-4 text-zinc-500" />
                          {exp.location}
                        </span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs sm:text-sm font-mono text-zinc-400">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 px-4 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06] w-fit">
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  {/* Overview */}
                  <p className="text-zinc-300 text-base sm:text-lg leading-relaxed my-6 font-light">
                    {exp.overview}
                  </p>

                  {/* Key Contributions */}
                  <div className="mb-8">
                    <h4 className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2 font-semibold">
                      <Cpu className="w-4 h-4 text-indigo-400" />
                      Key Responsibilities &amp; Technical Contributions
                    </h4>
                    <div className="space-y-3">
                      {exp.keyContributions.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                      Technologies &amp; Architecture
                    </h4>
                    <div className="flex flex-wrap gap-2.5">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.07] text-zinc-300 text-xs sm:text-sm font-mono hover:border-indigo-400/40 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
