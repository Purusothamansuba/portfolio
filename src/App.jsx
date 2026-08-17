import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoAbout from "./components/BentoAbout";
import LeetCodeSpotlight from "./components/LeetCodeSpotlight";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import ProjectModal from "./components/ProjectModal";
import ResumeModal from "./components/ResumeModal";
import ParticleBackground from "./components/ParticleBackground";
import { playSound } from "./utils/audio";

function App() {
  const [theme, setTheme] = useState("light");
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      // Cmd + K or Ctrl + K for Command Palette
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
        if (!isCommandOpen) playSound("modal");
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [isCommandOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`app ${theme}`}>
      {/* Abstract Animated Background */}
      <ParticleBackground theme={theme} />

      {/* Main Application Layout */}
      <Navbar
        onOpenCommand={() => setIsCommandOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <BentoAbout />
        <Projects onSelectProject={(p) => setSelectedProject(p)} />
        <LeetCodeSpotlight />
        <Skills />
        <Experience onOpenResume={() => setIsResumeOpen(true)} />
        <Contact />
      </main>

      <Footer />

      {/* Modals & Overlays */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onToggleTheme={toggleTheme}
        theme={theme}
        onOpenResume={() => {
          setIsCommandOpen(false);
          setIsResumeOpen(true);
        }}
        onSelectProject={(p) => {
          setIsCommandOpen(false);
          setSelectedProject(p);
        }}
      />

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
