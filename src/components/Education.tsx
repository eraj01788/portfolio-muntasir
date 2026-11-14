import React from "react";
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2 
} from "lucide-react";
import { educationList, certifications } from "../data/education";

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-28 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-mono mb-4">
            <GraduationCap className="w-4 h-4" />
            <span>06 / ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Education &amp; Credentials
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mt-4 font-light leading-relaxed">
            Formal computer science education and verified specialized technical training.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Main Degree Card (AIUB) */}
          <div className="lg:col-span-8 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#161624] via-[#14141A] to-[#121218] border border-indigo-500/30 shadow-xl shadow-indigo-950/20">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-3">
                  <Award className="w-3.5 h-3.5" />
                  Honors Graduate
                </span>
                <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                  {educationList[0].degree}
                </h3>
                <p className="text-base font-medium text-indigo-300 mt-2">
                  {educationList[0].institution}
                </p>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
                <div className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-sm font-bold">
                  {educationList[0].scoreType}: {educationList[0].score}
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400">
                  <Calendar className="w-4 h-4 text-zinc-500" />
                  <span>{educationList[0].period}</span>
                </div>
              </div>
            </div>

            <div className="pt-8 space-y-4">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                Curriculum &amp; Engineering Focus:
              </span>
              {educationList[0].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-1 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{educationList[0].location}</span>
            </div>
          </div>

          {/* Secondary Education & Certifications Column */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* HSC & SSC Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#141418]/90 border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 mb-5">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Secondary &amp; Higher Secondary</span>
              </div>

              <div className="space-y-6">
                {educationList.slice(1).map((item, idx) => (
                  <div key={idx} className="pb-5 last:pb-0 border-b last:border-b-0 border-white/[0.06]">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-heading font-semibold text-white text-base">
                        {item.degree}
                      </h4>
                      <span className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold shrink-0">
                        {item.score}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 mt-1">
                      {item.institution}
                    </p>
                    <span className="text-xs font-mono text-zinc-500 block mt-1.5">
                      {item.period} • {item.location}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialized Training / Certification */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#141418]/90 border border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-400 mb-4">
                <Award className="w-4 h-4 text-amber-400" />
                <span>Specialized Government Training</span>
              </div>

              {certifications.map((cert, cIdx) => (
                <div key={cIdx}>
                  <h4 className="font-heading font-semibold text-white text-base">
                    {cert.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-mono text-indigo-300 mt-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light mt-2.5">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
