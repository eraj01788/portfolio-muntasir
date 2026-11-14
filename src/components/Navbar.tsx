import React, { useState, useEffect } from "react";
import { Download, Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { profileData } from "../data/profile";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Approach", href: "#approach" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(section);
          return;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-2xl shadow-black/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1 shrink-0"
            aria-label="Muntasir Hossain Home"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-cyan-500/20 border border-white/10 group-hover:border-indigo-400/50 transition-all duration-300 shadow-inner group-hover:scale-105 shrink-0">
              <span className="font-heading font-bold text-base bg-gradient-to-r from-white via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
                MH
              </span>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#09090B] animate-pulse" />
            </div>

            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm sm:text-base tracking-tight text-white group-hover:text-indigo-200 transition-colors whitespace-nowrap">
                {profileData.name}
              </span>
              <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
                AI / ML &amp; Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#141418]/80 backdrop-blur-md border border-white/[0.08] rounded-full px-3 py-1.5 shadow-inner shrink-0">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap ${
                    isActive
                      ? "text-white bg-indigo-600/35 border border-indigo-400/35 shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Download CV & Contact */}
          <div className="hidden sm:flex items-center gap-3.5 lg:gap-4 shrink-0">
            <a
              href={profileData.cvUrl}
              download="Muntasir_Hossain_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center gap-2.5 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-indigo-500/10 border border-indigo-500/30 text-indigo-200 hover:text-white hover:border-indigo-400 hover:bg-indigo-600/20 transition-all duration-300 shadow-sm hover:shadow-indigo-500/20 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
            >
              <Download className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="whitespace-nowrap">Download CV</span>
            </a>

            <button
              onClick={() => handleNavClick("#contact")}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all duration-300 shadow-md shadow-indigo-600/30 hover:shadow-indigo-500/40 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 whitespace-nowrap shrink-0"
            >
              <span className="whitespace-nowrap">Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden px-4 pt-4 pb-8 bg-[#0E0E12]/98 backdrop-blur-xl border-b border-white/10 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-2 mb-6">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors text-left ${
                    isActive
                      ? "bg-indigo-600/20 text-indigo-300 border border-indigo-500/30"
                      : "text-zinc-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <div className="w-2 h-2 rounded-full bg-indigo-400" />}
                </button>
              );
            })}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href={profileData.cvUrl}
              download="Muntasir_Hossain_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 text-sm font-semibold rounded-xl bg-zinc-900 border border-white/10 text-zinc-200 hover:text-white hover:bg-zinc-800 whitespace-nowrap"
            >
              <Download className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="whitespace-nowrap">Download CV (PDF)</span>
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 text-sm font-semibold rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Contact Muntasir</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
