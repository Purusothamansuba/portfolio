import React from "react";
import { 
  ArrowUp, 
  Mail, 
  Heart, 
  Sparkles, 
  Code2
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

export default function Footer({ onOpenResume }) {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    playSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer 
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "var(--bg-secondary)",
        padding: "4rem 0 2.5rem 0",
        position: "relative",
        zIndex: 10
      }}
    >
      <div className="container">
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginBottom: "3rem"
          }}
          id="footer-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              #footer-grid { grid-template-columns: 2fr 1fr 1fr !important; }
            }
          `}</style>

          {/* Left Column: Brand & Bio */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div 
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #06b6d4, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-mono)"
                }}
              >
                P
              </div>
              <span style={{ fontWeight: 800, fontSize: "1.2rem" }}>
                Purushothaman<span style={{ color: "var(--accent-cyan)" }}>.dev</span>
              </span>
            </div>
            <p style={{ maxWidth: "420px", fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "1.5rem" }}>
              Engineering high-performance software, C++ mathematical libraries, and AI-driven applications with meticulous attention to detail.
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span 
                className="badge badge-emerald badge-pulse"
                style={{ fontSize: "0.75rem", padding: "0.3rem 0.8rem 0.3rem 1.2rem" }}
              >
                All Systems Operational
              </span>
            </div>
          </div>

          {/* Middle Column: Quick Links */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
              {["about", "skills", "projects", "leetcode", "experience", "contact"].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => playSound("click")}
                    style={{
                      color: "var(--text-secondary)",
                      textTransform: "capitalize",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-cyan)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                  >
                    {sec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Interactive & Social */}
          <div>
            <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>
              Interactive Tools
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <button
                onClick={() => {
                  playSound("modal");
                  onOpenResume();
                }}
                className="btn-secondary btn-sm"
                style={{ justifyContent: "flex-start" }}
              >
                <Code2 size={14} style={{ color: "var(--accent-violet)" }} />
                <span>View Full Resume</span>
              </button>

              <a
                href={personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="btn-secondary btn-sm"
                style={{ justifyContent: "flex-start", textDecoration: "none" }}
              >
                <LeetCodeIcon size={14} style={{ color: "var(--accent-amber)" }} />
                <span>LeetCode Profile</span>
              </a>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1.25rem" }}>
              <a
                href={personal.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                style={{ width: "36px", height: "36px" }}
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personal.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                style={{ width: "36px", height: "36px" }}
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="btn-icon"
                style={{ width: "36px", height: "36px" }}
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.82rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)"
          }}
        >
          <div>
            © {new Date().getFullYear()} Purushothaman. Crafted with precision & performance.
          </div>

          <button
            onClick={scrollToTop}
            className="btn btn-secondary btn-sm"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8rem",
              borderRadius: "var(--radius-full)"
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

