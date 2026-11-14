import React from "react";

export const AmbientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Radial mesh glow */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-indigo-600/10 rounded-full blur-[130px] opacity-70" />
      <div className="absolute top-1/3 right-1/4 translate-x-1/3 w-[600px] h-[550px] bg-violet-600/10 rounded-full blur-[140px] opacity-60" />
      <div className="absolute bottom-1/4 left-1/3 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-600/8 rounded-full blur-[150px] opacity-60" />

      {/* Subtle grid layer */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Top subtle border beam */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
    </div>
  );
};

