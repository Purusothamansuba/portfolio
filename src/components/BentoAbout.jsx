import React, { useState, useEffect } from "react";
import { 
  Cpu, 
  BrainCircuit, 
  Layers, 
  Globe, 
  Clock, 
  Code2, 
  Sparkles, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Award,
  GraduationCap
} from "lucide-react";
import { GithubIcon, LeetCodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";
import TiltCard from "./TiltCard";

export default function BentoAbout() {
  const { personal, bentoHighlights, education, certifications } = portfolioData;
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      };
      setTime(new Intl.DateTimeFormat([], options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// PROFILE & COMPETENCIES</span>
          <h2 className="section-title">
            About <span className="text-gradient-cyan">{personal.name}</span>
          </h2>
          <p className="section-desc">
            Computer Science & Engineering at Chennai Institute of Technology | LeetCode Knight | AI & Systems Specialist.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Bento Item 1: LeetCode Knight & Algorithmic Problem Solving (Span 2) */}
          <TiltCard className="bento-col-span-2 bento-lg-col-2" maxTilt={8}>
            <div 
              className="glass-card glow-border slide-in-left"
              style={{ padding: "2.25rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}
              onMouseEnter={() => playSound("hover")}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div 
                    className="animate-float"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(245, 158, 11, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-amber)"
                    }}
                  >
                    <Award size={26} />
                  </div>
                  <span className="badge badge-cyan">LeetCode Knight Badge</span>
                </div>

                <h3 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
                  Algorithmic Mastery (Rating: 1850+)
                </h3>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                  Earned the distinguished <strong>Knight Badge</strong> on LeetCode with over <strong>650+ complex algorithmic challenges</strong> solved. Deep intuition for dynamic programming, graph theory, tree backtracking, and low-level cache-aware memory patterns.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "1rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                  <span style={{ color: "var(--accent-amber)" }}>★ Contest: 1850+</span>
                  <span style={{ color: "var(--accent-cyan)" }}>• 650+ Solved</span>
                  <span style={{ color: "var(--accent-emerald)" }}>• Knight Level</span>
                </div>

                <a
                  href={personal.socialLinks.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound("click")}
                  className="btn btn-secondary btn-sm"
                  style={{ textDecoration: "none" }}
                >
                  <span>View LeetCode Profile</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Bento Item 2: Education & Academic Excellence */}
          <TiltCard maxTilt={10}>
            <div 
              className="glass-card fade-in-up"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", animationDelay: "0.1s" }}
              onMouseEnter={() => playSound("hover")}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div 
                    className="animate-float"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(139, 92, 246, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-violet)"
                    }}
                  >
                    <GraduationCap size={26} />
                  </div>
                  <span className="badge badge-violet">CGPA: 8.64</span>
                </div>

                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
                  Chennai Institute of Technology
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  B.E. Computer Science and Engineering. Class 12th State Board: <strong>587/600 (Cutoff: 198/200)</strong>.
                </p>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                <span className="badge badge-violet" style={{ fontSize: "0.75rem" }}>Core CS</span>
                <span className="badge badge-emerald" style={{ fontSize: "0.75rem" }}>OS & Memory</span>
                <span className="badge badge-cyan" style={{ fontSize: "0.75rem" }}>Algorithms</span>
              </div>
            </div>
          </TiltCard>

          {/* Bento Item 3: Certifications & Deep Tech */}
          <TiltCard maxTilt={10}>
            <div 
              className="glass-card fade-in-up"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", animationDelay: "0.2s" }}
              onMouseEnter={() => playSound("hover")}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div 
                    className="animate-float"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-emerald)"
                    }}
                  >
                    <CheckCircle2 size={26} />
                  </div>
                  <span className="badge badge-emerald">NPTEL Certified</span>
                </div>

                <h3 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
                  Certified Specializations
                </h3>
                <ul style={{ listStyle: "none", fontSize: "0.92rem", lineHeight: 1.6, marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
                  <li style={{ marginBottom: "0.4rem" }}>• <strong>Programming in Modern C++</strong> (NPTEL)</li>
                  <li>• <strong>Introduction to Machine Learning</strong> (NPTEL)</li>
                </ul>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                <span className="badge badge-emerald" style={{ fontSize: "0.75rem" }}>C++17/20</span>
                <span className="badge badge-cyan" style={{ fontSize: "0.75rem" }}>Machine Learning</span>
              </div>
            </div>
          </TiltCard>

          {/* Bento Item 4: AI & Backend Convergence (Span 2) */}
          <TiltCard className="bento-col-span-2 bento-lg-col-2" maxTilt={8}>
            <div 
              className="glass-card glow-border zoom-in"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", animationDelay: "0.15s" }}
              onMouseEnter={() => playSound("hover")}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <div 
                    className="animate-float"
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(6, 182, 212, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-cyan)"
                    }}
                  >
                    <BrainCircuit size={26} />
                  </div>
                  <span className="badge badge-cyan">Full-Stack & Systems</span>
                </div>

                <h3 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                  Production Software & Developer Tooling
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.25rem" }}>
                  From <strong>Songify</strong> (React, TypeScript, Django REST, Supabase) and <strong>Code Analyser</strong> (ML & static quality analysis) to high-speed <strong>NDArray for C++</strong> and <strong>Medical Report Analyzer</strong>.
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                <div style={{ display: "flex", gap: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
                  <span style={{ color: "var(--accent-cyan)" }}>Django REST</span>
                  <span style={{ color: "var(--accent-violet)" }}>FastAPI</span>
                  <span style={{ color: "var(--accent-emerald)" }}>Supabase</span>
                  <span style={{ color: "var(--accent-amber)" }}>C++20</span>
                </div>

                <a
                  href="#projects"
                  onClick={() => playSound("click")}
                  className="btn btn-secondary btn-sm"
                  style={{ textDecoration: "none" }}
                >
                  <span>Explore Projects</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </TiltCard>

          {/* Bento Item 5: Location & Timezone (Span 2) */}
          <TiltCard className="bento-col-span-2 bento-lg-col-2" maxTilt={8}>
            <div 
              className="glass-card slide-in-right"
              style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", animationDelay: "0.2s" }}
              onMouseEnter={() => playSound("hover")}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Globe size={22} style={{ color: "var(--accent-emerald)" }} />
                    <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: "0.95rem" }}>
                      Chennai, India (IST)
                    </span>
                  </div>
                  <span className="badge badge-emerald badge-pulse">Available for Opportunities</span>
                </div>

                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
                  Open for high-impact software engineering roles, AI systems, backend microservices, and modern web architectures.
                </p>
              </div>

              <div 
                style={{
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid rgba(16, 185, 129, 0.2)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Clock size={16} style={{ color: "var(--accent-emerald)" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>Current Local Time</span>
                </div>
                <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--accent-emerald)", fontSize: "0.95rem" }}>
                  {time || "Loading..."}
                </span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

