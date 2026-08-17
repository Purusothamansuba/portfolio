import React, { useEffect, useState } from "react";
import { 
  X, 
  Printer, 
  Download, 
  Copy, 
  Check, 
  ExternalLink, 
  Mail, 
  Phone,
  Sparkles,
  Award
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, projects, skills, education, certifications } = portfolioData;
  const [copiedMd, setCopiedMd] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playSound("click");
    window.print();
  };

  const handleCopyMarkdown = () => {
    const md = `# PURUSHOTHAMAN P
**Computer Science and Engineering**
${personal.phone} | ${personal.email} | ${personal.socialLinks.github} | ${personal.socialLinks.linkedin} | ${personal.socialLinks.leetcode}

---

## CAREER OBJECTIVE
${personal.objective}

---

## EDUCATION
${education
  .map(
    (e) => `### ${e.degree}
${e.institution}
**${e.score}**
`
  )
  .join("\n")}

---

## PROJECTS

### Songify Frontend
https://songify-frontend-v2.vercel.app/
- Built a responsive music streaming frontend using React, TypeScript, Vite, and Tailwind CSS
- Implemented music player controls, playlists, liked songs, and search functionality
- Integrated frontend with Django REST API backend
- Deployed on Vercel for scalable hosting

### Songify Backend
https://songify-backend-3nly.onrender.com/api/songs/
- Developed a Django REST API backend for managing songs, playlists, likes, and listening history
- Integrated Supabase for database and storage
- Designed scalable API architecture with modular apps
- Deployed backend on Render with production configuration

### Code Analyser
https://code-analyser-ecru.vercel.app/
- Built an intelligent code analysis platform using machine learning and rule-based analysis techniques
- Analyzes source code quality, structure, maintainability, and complexity
- Detects coding issues and patterns using hybrid ML and static analysis models
- Designed scalable developer tooling workflows with modern frontend and backend integration

### Medical Report Analyzer
- Developed a medical report analyzer using OCR, Random Forest, and local LLMs.
- Extracts report data, detects abnormalities, and generates summaries.
- Built an end-to-end document processing and interpretation pipeline.

---

## ACHIEVEMENTS
- **LeetCode:** Problems Solved: 650+ | Contest Rating: 1850+ | Level: Knight (Knight badge in LeetCode)
- **Profile:** https://leetcode.com/u/Purushothaman491/

---

## TECHNICAL SKILLS
- **Programming:** C++, Python, TypeScript, JavaScript
- **Web Technologies:** Flask, Django, FastAPI, React, Tailwind CSS
- **Database Technologies:** PostgreSQL, Supabase, MongoDB
- **Tools & Systems:** Vibe coding, basic bash, Linux, Git & GitHub

---

## CERTIFICATIONS
- Programming in Modern C++ — NPTEL
- Introduction to Machine Learning — NPTEL

---

## INTERESTS
- AI and ML
- Systems Programming
`;

    navigator.clipboard.writeText(md);
    setCopiedMd(true);
    playSound("success");
    setTimeout(() => setCopiedMd(false), 2000);
  };

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
          maxWidth: "850px",
          height: "90vh"
        }}
      >
        {/* Modal Top Bar */}
        <div 
          style={{
            padding: "1rem 1.75rem",
            background: "var(--bg-glass-strong)",
            borderBottom: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Sparkles size={18} style={{ color: "var(--accent-cyan)" }} />
            <h3 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
              Official Resume Preview
            </h3>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary btn-sm"
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={handleCopyMarkdown}
              className="btn btn-secondary btn-sm"
              title="Copy Markdown representation"
            >
              {copiedMd ? <Check size={15} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={15} />}
              <span>{copiedMd ? "Copied!" : "Copy MD"}</span>
            </button>

            <button
              onClick={onClose}
              className="btn-icon"
              style={{ width: "36px", height: "36px" }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document */}
        <div 
          id="printable-resume"
          style={{
            padding: "2.5rem 3rem",
            overflowY: "auto",
            background: "var(--bg-secondary)",
            color: "var(--text-primary)",
            lineHeight: 1.6
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: "2px solid var(--border-subtle)", paddingBottom: "1.5rem", marginBottom: "1.5rem" }}>
            <h1 style={{ fontSize: "2.3rem", fontWeight: 900, marginBottom: "0.25rem", letterSpacing: "0.02em" }}>
              {personal.name.toUpperCase()}
            </h1>
            <div style={{ fontSize: "1.15rem", color: "var(--accent-cyan)", fontWeight: 600, marginBottom: "0.75rem" }}>
              {personal.department}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.9rem 1.4rem", fontSize: "0.85rem", fontFamily: "var(--font-mono)", color: "var(--text-secondary)" }}>
              <span>📞 {personal.phone}</span>
              <span>📧 {personal.email}</span>
              <span>🐙 github.com/{personal.handle}</span>
              <span>💼 linkedin.com/in/purushothaman-p</span>
              <span style={{ color: "var(--accent-amber)" }}>★ LeetCode Knight (1850+)</span>
            </div>
          </div>

          {/* Career Objective */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.5rem" }}>
              Career Objective
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              {personal.objective}
            </p>
          </div>

          {/* Education */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.75rem" }}>
              Education
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {education.map((e, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "0.85rem 1rem"
                  }}
                >
                  <div style={{ fontSize: "0.98rem", fontWeight: 700 }}>{e.degree}</div>
                  <div style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>{e.institution}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--accent-emerald)", fontWeight: 700, marginTop: "0.25rem", fontFamily: "var(--font-mono)" }}>
                    {e.score}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.75rem" }}>
              Key Projects
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {projects.slice(0, 4).map((p) => (
                <div key={p.id}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap" }}>
                    <h4 style={{ fontSize: "1.05rem", fontWeight: 700 }}>
                      {p.title}
                    </h4>
                    {p.demoUrl && (
                      <span style={{ fontSize: "0.8rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                        {p.demoUrl}
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", margin: "0.2rem 0 0.35rem 0" }}>
                    {p.tagline}
                  </p>
                  <ul style={{ paddingLeft: "1.25rem", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                    {p.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div style={{ marginBottom: "1.75rem" }}>
            <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.6rem" }}>
              Achievements
            </h3>
            <div style={{ background: "rgba(245, 158, 11, 0.08)", border: "1px solid rgba(245, 158, 11, 0.25)", borderRadius: "var(--radius-md)", padding: "1rem" }}>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: "var(--accent-amber)", marginBottom: "0.25rem" }}>
                LeetCode Knight (Rating: 1850+)
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Solved <strong>650+ complex algorithmic challenges</strong>. Active participant in global contests. Profile: <a href="https://leetcode.com/u/Purushothaman491/" target="_blank" rel="noreferrer" style={{ color: "var(--accent-cyan)" }}>leetcode.com/u/Purushothaman491/</a>
              </p>
            </div>
          </div>

          {/* Technical Skills & Certifications */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.6rem" }}>
                Technical Skills
              </h3>
              <div style={{ fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <div><strong>Programming:</strong> C++, Python, TypeScript, JavaScript</div>
                <div><strong>Web:</strong> Django, Flask, FastAPI, React, Tailwind CSS</div>
                <div><strong>Databases:</strong> PostgreSQL, Supabase, MongoDB</div>
                <div><strong>Tools:</strong> Vibe coding, Bash, Git & GitHub</div>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--accent-cyan)", marginBottom: "0.6rem" }}>
                Certifications & Interests
              </h3>
              <div style={{ fontSize: "0.88rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                <div><strong>Certifications:</strong> Modern C++ (NPTEL), Machine Learning (NPTEL)</div>
                <div><strong>Interests:</strong> AI and ML, Systems Programming, Embedded Architectures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

