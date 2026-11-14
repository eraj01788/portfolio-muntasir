import React from "react";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import { profileData } from "../data/profile";
import profilePhoto from "../assets/images/profile.png";

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-32 pb-24 lg:pt-40 lg:pb-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs sm:text-sm font-mono font-medium mb-8 backdrop-blur-sm shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{profileData.availability}</span>
            </div>

            {/* Greeting */}
            <div className="flex items-center gap-2.5 mb-3">
              <span className="text-zinc-400 text-base sm:text-lg font-medium tracking-wide">
                Hello, I'm
              </span>
              <div className="h-[1px] w-10 bg-zinc-600" />
            </div>

            {/* Main Name & Title */}
            <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-4">
              {profileData.name}
            </h1>

            <div className="mb-6">
              <p className="font-heading text-xl sm:text-3xl lg:text-3xl font-semibold bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                {profileData.title}
              </p>
            </div>

            {/* Mobile-Only Portrait */}
            <div className="lg:hidden w-full max-w-xs mx-auto my-8">
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl backdrop-blur-xl border border-white/10">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0E0E12]">
                  <img
                    src={profilePhoto}
                    alt="Muntasir Hossain — AI & Full-Stack Systems Engineer"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed max-w-2xl mb-8 font-light">
              {profileData.subheadline}
            </p>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-mono text-zinc-400 mb-10 pb-6 border-b border-white/[0.08] w-full max-w-2xl">
              <span className="inline-flex items-center gap-2 text-zinc-300">
                <MapPin className="w-4 h-4 text-indigo-400" />
                {profileData.location}
              </span>
              <span className="text-zinc-600">•</span>
              <a
                href={`mailto:${profileData.email}`}
                className="inline-flex items-center gap-2 text-zinc-300 hover:text-indigo-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                {profileData.email}
              </a>
              <span className="text-zinc-600">•</span>
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                5+ Years Experience
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("#projects")}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl bg-indigo-600 text-white font-medium text-sm sm:text-base shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 w-full sm:w-auto whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <a
                href={profileData.cvUrl}
                download="Muntasir_Hossain_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-4 rounded-xl bg-[#141418] border border-white/10 text-zinc-200 font-medium text-sm sm:text-base hover:border-indigo-500/40 hover:bg-white/[0.03] hover:text-white hover:-translate-y-0.5 transition-all duration-300 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 w-full sm:w-auto whitespace-nowrap shrink-0"
              >
                <Download className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="whitespace-nowrap">Download CV (PDF)</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2.5 mt-2 sm:mt-0">
                <a
                  href={profileData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141418] border border-white/10 text-zinc-400 hover:text-white hover:border-indigo-400 hover:bg-indigo-600/10 transition-all duration-300"
                  aria-label="Muntasir Hossain LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#141418] border border-white/10 text-zinc-400 hover:text-white hover:border-indigo-400 hover:bg-indigo-600/10 transition-all duration-300"
                  aria-label="Muntasir Hossain GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
              {profileData.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#141418]/60 border border-white/[0.06] backdrop-blur-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-zinc-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Desktop Right Column: Profile Portrait Frame */}
          <div className="hidden lg:flex lg:col-span-5 justify-end z-10">
            <div className="relative w-full max-w-md">

              {/* Ambient Glow behind the photo */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-violet-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 animate-pulse-subtle" />

              {/* Main Portrait Card */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-white/15 via-white/5 to-white/10 shadow-2xl backdrop-blur-xl border border-white/10">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#0E0E12]">

                  {/* Actual Photo */}
                  <img
                    src={profilePhoto}
                    alt="Muntasir Hossain — AI & Full-Stack Systems Engineer"
                    className="w-full h-full object-cover object-center filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
