import React, { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  Search, 
  Menu, 
  X, 
  FileText,
  Award,
  Sparkles,
  Layers,
  Briefcase,
  FolderGit2
} from "lucide-react";
import { LeetCodeIcon } from "./Icons";
import { playSound, isSoundEnabled, setSoundEnabled } from "../utils/audio";

export default function Navbar({ onOpenCommand, onOpenResume, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    setSoundOn(isSoundEnabled());
  }, []);

  const toggleSound = () => {
    const next = !soundOn;
    setSoundOn(next);
    setSoundEnabled(next);
    if (next) playSound("click");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "projects", "leetcode", "skills", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "LeetCode", href: "#leetcode", id: "leetcode" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  const handleNavClick = (e, href) => {
    playSound("click");
    setMobileMenuOpen(false);
  };

  return (
    <header 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "0.75rem 1rem" : "1.25rem 1.5rem",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      }}
    >
      <div 
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        {/* Brand Logo */}
        <a 
          href="#hero" 
          onClick={() => playSound("click")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none"
          }}
        >
          <div 
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 15px rgba(6, 182, 212, 0.4)",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1.2rem",
              fontFamily: "var(--font-mono)"
            }}
          >
            P
          </div>
          <div>
            <span style={{ 
              fontWeight: 800, 
              fontSize: "1.15rem", 
              letterSpacing: "-0.02em",
              display: "block" 
            }}>
              Purushothaman<span style={{ color: "var(--accent-cyan)" }}>.dev</span>
            </span>
            <span style={{ 
              fontSize: "0.72rem", 
              color: "var(--text-muted)", 
              fontFamily: "var(--font-mono)",
              display: "block",
              lineHeight: 1
            }}>
              software & ai systems
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          className="glass-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "0.25rem",
            padding: "0.4rem 0.6rem",
            borderRadius: "var(--radius-full)",
            margin: "0 1rem"
          }}
          id="desktop-nav"
        >
          <style>{`
            @media (min-width: 900px) {
              #desktop-nav { display: flex !important; }
            }
          `}</style>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => playSound("hover")}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  color: isActive ? "#ffffff" : "var(--text-secondary)",
                  background: isActive ? "linear-gradient(135deg, rgba(6, 182, 212, 0.8), rgba(139, 92, 246, 0.8))" : "transparent",
                  boxShadow: isActive ? "0 2px 10px rgba(6, 182, 212, 0.3)" : "none",
                  transition: "all 0.2s ease",
                  textDecoration: "none"
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          {/* Quick Search / Command Palette Button */}
          <button
            onClick={() => {
              playSound("modal");
              onOpenCommand();
            }}
            onMouseEnter={() => playSound("hover")}
            className="btn-secondary"
            title="Open Command Palette (Cmd + K)"
            style={{
              padding: "0.5rem 0.85rem",
              borderRadius: "var(--radius-full)",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.82rem",
              fontFamily: "var(--font-mono)"
            }}
          >
            <Search size={15} style={{ color: "var(--accent-cyan)" }} />
            <span style={{ display: "none" }} id="cmd-label">Search</span>
            <kbd style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "4px",
              padding: "0.15rem 0.4rem",
              fontSize: "0.7rem"
            }}>⌘K</kbd>
          </button>
          <style>{`
            @media (min-width: 640px) {
              #cmd-label { display: inline !important; }
            }
          `}</style>

          {/* Sound FX Toggle */}
          <button
            onClick={toggleSound}
            className="btn-icon"
            title={soundOn ? "Mute UI sounds" : "Enable UI sounds"}
            aria-label="Toggle Sound Effects"
          >
            {soundOn ? <Volume2 size={18} style={{ color: "var(--accent-cyan)" }} /> : <VolumeX size={18} />}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              playSound("click");
              onToggleTheme();
            }}
            className="btn-icon"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} style={{ color: "var(--accent-amber)" }} /> : <Moon size={18} style={{ color: "var(--accent-violet)" }} />}
          </button>

          {/* Resume CTA */}
          <button
            onClick={() => {
              playSound("modal");
              onOpenResume();
            }}
            className="btn btn-primary btn-sm"
            style={{ display: "none" }}
            id="nav-resume-btn"
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>
          <style>{`
            @media (min-width: 640px) {
              #nav-resume-btn { display: inline-flex !important; }
            }
          `}</style>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => {
              playSound("click");
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="btn-icon"
            style={{ display: "flex" }}
            id="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            <style>{`
              @media (min-width: 900px) {
                #mobile-toggle { display: none !important; }
              }
            `}</style>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="glass-card"
          style={{
            margin: "0.75rem auto 0 auto",
            maxWidth: "1240px",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            animation: "fadeIn 0.2s ease-out"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0.75rem 1rem",
                borderRadius: "var(--radius-md)",
                background: activeSection === link.id ? "rgba(6, 182, 212, 0.12)" : "transparent",
                color: activeSection === link.id ? "var(--accent-cyan)" : "var(--text-primary)",
                fontWeight: 600,
                textDecoration: "none"
              }}
            >
              <span>{link.name}</span>
              <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}>→</span>
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "0.5rem" }}
          >
            <FileText size={16} />
            <span>View Full Resume</span>
          </button>
        </div>
      )}
    </header>
  );
}

