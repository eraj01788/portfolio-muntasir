import React from "react";
import { AmbientBackground } from "./components/ui/AmbientBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { EngineeringApproach } from "./components/EngineeringApproach";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-[#F5F5F5] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Fixed Ambient Glow & Grid Background */}
      <AmbientBackground />

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <EngineeringApproach />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
