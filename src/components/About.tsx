import React from "react";
import { 
  Bot, 
  Server, 
  Eye, 
  GraduationCap, 
  CheckCircle2, 
  Code2, 
  Globe 
} from "lucide-react";
import { profileData } from "../data/profile";

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 lg:py-36 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-mono mb-4">
            <Code2 className="w-4 h-4" />
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            From Low-Level Systems to Multimodal Intelligence
          </h2>
        </div>

        {/* Two-column layout: Story + 3 Clear Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          
          {/* Left: Narrative & Core Competencies */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
            {profileData.bioParagraphs.map((para, idx) => (
              <p key={idx} className="text-zinc-300/95 leading-relaxed">
                {para}
              </p>
            ))}

            {/* Core Competencies Checklist */}
            <div className="pt-4 space-y-4">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
                Demonstrated Engineering Contributions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base font-normal text-zinc-300">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Creator of MoneyFlow (Live Multimodal AI SaaS)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Indexed 1M+ vectors with FAISS IVF-PQ &amp; DINOv2</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Multilingual voice expense logging (Bengali &amp; English)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Sub-120ms nearest-neighbor visual search queries</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Automated OpenCV image-to-SVG vectorization pipelines</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span>Memory profiling &amp; zero-allocation 60 FPS mobile loops</span>
                </div>
              </div>
            </div>

            {/* Quick Metadata Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-sm sm:text-base font-medium text-white flex items-center gap-1.5 mt-1">
                  <Globe className="w-4 h-4 text-indigo-400" />
                  {profileData.location}
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Education
                </span>
                <span className="text-sm sm:text-base font-medium text-white flex items-center gap-1.5 mt-1">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  B.Sc. in CSSE (AIUB)
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                  Academic Result
                </span>
                <span className="text-sm sm:text-base font-medium text-emerald-400 font-mono mt-1 block">
                  CGPA 3.75 / 4.00 (Honors)
                </span>
              </div>
            </div>

          </div>

          {/* Right: 3 Spacious Focus Cards */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            <div className="p-7 sm:p-8 rounded-3xl bg-[#141418]/90 border border-white/[0.08] hover:border-indigo-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                <Bot className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold text-white text-lg sm:text-xl mb-2">
                Multimodal AI &amp; Production SaaS
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Architecting end-to-end platforms like MoneyFlow, leveraging Google Gemini for voice transcription in Bengali/English, camera receipt vision OCR, and 1-tap financial SMS parsing.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#141418]/90 border border-white/[0.08] hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold text-white text-lg sm:text-xl mb-2">
                High-Scale Vector Retrieval &amp; CV
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Engineering vector search pipelines indexing 1M+ visual representations with OpenCLIP, DINOv2, and FAISS IVF-PQ to deliver sub-120ms visual discovery at VolksByte.
              </p>
            </div>

            <div className="p-7 sm:p-8 rounded-3xl bg-[#141418]/90 border border-white/[0.08] hover:border-violet-500/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-semibold text-white text-lg sm:text-xl mb-2">
                Systems &amp; Low-Latency Performance
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">
                Building asynchronous FastAPI microservices, multi-tenant PostgreSQL schemas, and drawing on years of low-level 60 FPS mobile memory optimization in Unity and C#.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
