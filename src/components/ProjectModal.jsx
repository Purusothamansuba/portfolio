import React, { useEffect } from "react";
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Code2, 
  Sparkles,
  Layers,
  Cpu
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { playSound } from "../utils/audio";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={() => {
        playSound("click");
        onClose();
      }}
    >
      <div 
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: "90vh",
          overflowY: "auto"
        }}
      >
        {/* Modal Header */}
        <div 
          style={{
            padding: "1.5rem 2rem",
            background: "var(--bg-glass-strong)",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "sticky",
            top: 0,
            zIndex: 10,
            backdropFilter: "blur(12px)"
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span 
              className="badge badge-cyan"
              style={{ fontSize: "0.75rem" }}
            >
              {project.badge || "Project Showcase"}
            </span>
            <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
              #{project.category}
            </span>
          </div>

          <button
            onClick={() => {
              playSound("click");
              onClose();
            }}
            className="btn-icon"
            style={{ width: "36px", height: "36px" }}
            aria-label="Close Project Modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Content */}
        <div style={{ padding: "2rem" }}>
          <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
            {project.title}
          </h2>
          <p style={{ fontSize: "1.1rem", color: "var(--accent-cyan)", marginBottom: "1.5rem", fontWeight: 500 }}>
            {project.tagline}
          </p>

          <p style={{ fontSize: "1rem", lineHeight: 1.7, marginBottom: "2rem", color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          {/* Key Architectural Highlights */}
          <div style={{ marginBottom: "2rem" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Sparkles size={18} style={{ color: "var(--accent-cyan)" }} />
              <span>Architectural Highlights & Engineering Impact</span>
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {project.highlights.map((highlight, i) => (
                <div 
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.85rem 1rem"
                  }}
                >
                  <CheckCircle2 size={18} style={{ color: "var(--accent-emerald)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.95rem", lineHeight: 1.5, color: "var(--text-primary)" }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Breakdown */}
          <div style={{ marginBottom: "2.25rem" }}>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Layers size={18} style={{ color: "var(--accent-violet)" }} />
              <span>Technologies Used</span>
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  style={{
                    background: "rgba(139, 92, 246, 0.12)",
                    border: "1px solid rgba(139, 92, 246, 0.3)",
                    color: "var(--accent-violet)",
                    padding: "0.4rem 0.9rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-mono)"
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div 
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--border-subtle)"
            }}
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="btn btn-primary"
                style={{ textDecoration: "none" }}
              >
                <GithubIcon size={18} />
                <span>View Source on GitHub</span>
              </a>
            )}

            {project.frontendRepo && (
              <a
                href={project.frontendRepo}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="btn btn-secondary"
                style={{ textDecoration: "none" }}
              >
                <Code2 size={18} />
                <span>Frontend Repo</span>
              </a>
            )}

            {/* Demo link removed as requested */}
          </div>
        </div>
      </div>
    </div>
  );
}
