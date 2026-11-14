import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { profileData } from "../data/profile";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#070709] py-14 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="font-heading font-bold text-xl text-white">
                {profileData.name}
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-xs sm:text-sm font-mono text-indigo-400">
                AI / ML &amp; Software Engineer
              </span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg font-light leading-relaxed">
              Engineering Large Language Models, multimodal computer vision systems, and scalable production microservices.
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-4">
            
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-400 hover:text-white hover:border-indigo-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-400 hover:text-white hover:border-indigo-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06] text-zinc-400 hover:text-white hover:border-indigo-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-mono text-zinc-300 hover:text-white hover:bg-white/[0.08] hover:border-indigo-500/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              aria-label="Back to top of page"
            >
              <span>Top</span>
              <ArrowUp className="w-4 h-4 text-indigo-400" />
            </button>

          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="mt-10 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm font-mono text-zinc-500">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Crafted with strict TypeScript, React &amp; Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
