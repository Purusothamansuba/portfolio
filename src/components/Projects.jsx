import React, { useState } from "react";
import { 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Search, 
  Filter, 
  FolderGit2, 
  Layers, 
  Code2, 
  Info,
  Server,
  Cpu,
  BrainCircuit,
  Globe,
  CheckCircle2,
  Play
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";
import TiltCard from "./TiltCard";

export default function Projects({ onSelectProject }) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const categories = [
    { id: "all", name: "All Projects (10+)" },
    { id: "web", name: "Full Stack & Web Apps" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "systems", name: "Systems & C++" }
  ];

  const filteredProjects = projects.filter((proj) => {
    const matchesFilter = filter === "all" || proj.category === filter;
    const matchesSearch = 
      proj.title.toLowerCase().includes(search.toLowerCase()) ||
      proj.tagline.toLowerCase().includes(search.toLowerCase()) ||
      proj.tech.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// PRODUCTION SOFTWARE & OPEN SOURCE</span>
          <h2 className="section-title">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
          <p className="section-desc">
            Production full-stack applications, intelligent AI pipelines, and high-performance C++ systems libraries.
          </p>
        </div>

        {/* Featured Project Spotlight Hero Card removed */}

        {/* Filter Controls & Live Search */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
            marginBottom: "3rem"
          }}
        >
          {/* Filter Pills */}
          <div 
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              background: "var(--bg-card)",
              padding: "0.4rem",
              borderRadius: "var(--radius-full)",
              border: "1px solid var(--border-subtle)"
            }}
          >
            {categories.map((cat) => {
              const isSelected = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playSound("click");
                    setFilter(cat.id);
                  }}
                  onMouseEnter={() => playSound("hover")}
                  style={{
                    padding: "0.5rem 1.2rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-sub)",
                    background: isSelected ? "linear-gradient(135deg, #06b6d4, #8b5cf6)" : "transparent",
                    color: isSelected ? "#ffffff" : "var(--text-secondary)",
                    boxShadow: isSelected ? "0 2px 10px rgba(6, 182, 212, 0.4)" : "none",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{ position: "relative", minWidth: "260px" }}>
            <Search 
              size={16} 
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--text-muted)"
              }}
            />
            <input
              type="text"
              placeholder="Search by tech, name (e.g. Django, C++)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-full)",
                padding: "0.6rem 1rem 0.6rem 2.6rem",
                color: "var(--text-primary)",
                fontSize: "0.88rem",
                fontFamily: "var(--font-mono)",
                transition: "border-color 0.2s ease"
              }}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "1.75rem"
          }}
          id="project-cards-grid"
        >
          <style>{`
            @media (max-width: 480px) {
              #project-cards-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          {filteredProjects.map((project, idx) => (
            <TiltCard key={`${filter}-${project.id}`} maxTilt={6}>
              <div
                className="glass-card glow-border fade-in-up"
                onMouseEnter={() => playSound("hover")}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "2rem",
                  borderRadius: "var(--radius-xl)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "both"
                }}
              >
                <div>
                  {/* Top Bar with Badge & Category */}
                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1.25rem"
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <div 
                        className="animate-float"
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: project.accentColor ? `${project.accentColor}18` : "rgba(6, 182, 212, 0.12)",
                          color: project.accentColor || "var(--accent-cyan)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <FolderGit2 size={20} />
                      </div>
                      <span 
                        className="badge"
                        style={{
                          background: `${project.accentColor || "#06b6d4"}15`,
                          color: project.accentColor || "var(--accent-cyan)",
                          border: `1px solid ${project.accentColor || "#06b6d4"}35`,
                          fontSize: "0.75rem"
                        }}
                      >
                        {project.badge || "Project"}
                      </span>
                    </div>
                    {/* Live badge removed */}
                  </div>

                  {/* Title & Tagline */}
                  <h3 
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      marginBottom: "0.4rem",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {project.title}
                  </h3>

                  <p 
                    style={{
                      fontSize: "0.92rem",
                      color: "var(--accent-cyan)",
                      fontWeight: 600,
                      marginBottom: "0.85rem",
                      lineHeight: 1.4
                    }}
                  >
                    {project.tagline}
                  </p>

                  <p 
                    style={{
                      fontSize: "0.92rem",
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      marginBottom: "1.5rem"
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack Chips */}
                  <div 
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                      marginBottom: "1.75rem"
                    }}
                  >
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-sm)",
                          padding: "0.25rem 0.6rem",
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          color: "var(--text-secondary)"
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div 
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border-subtle)"
                  }}
                >
                  <button
                    onClick={() => {
                      playSound("modal");
                      onSelectProject(project);
                    }}
                    className="btn btn-secondary btn-sm"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      fontSize: "0.82rem"
                    }}
                  >
                    <Info size={14} />
                    <span>Architecture & Details</span>
                  </button>

                  <div style={{ display: "flex", gap: "0.4rem" }}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => playSound("click")}
                        className="btn-icon"
                        style={{ width: "36px", height: "36px" }}
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}                    {/* Live icon link removed */}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div 
            className="glass-card"
            style={{
              padding: "4rem 2rem",
              textAlign: "center",
              marginTop: "2rem"
            }}
          >
            <FolderGit2 size={40} style={{ color: "var(--text-muted)", marginBottom: "1rem" }} />
            <h3 style={{ fontSize: "1.3rem", marginBottom: "0.5rem" }}>No projects found</h3>
            <p style={{ color: "var(--text-secondary)" }}>
              No repositories matched your search query "<strong>{search}</strong>".
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

