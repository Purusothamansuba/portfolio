import React from "react";
import { 
  Award, 
  Binary, 
  TrendingUp, 
  ExternalLink, 
  Code2, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  Flame,
  Layers
} from "lucide-react";
import { LeetCodeIcon, GithubIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

import TiltCard from "./TiltCard";

export default function LeetCodeSpotlight() {
  const { leetcodeStats, personal } = portfolioData;

  return (
    <section id="leetcode" className="section" style={{ position: "relative" }}>
      {/* Background ambient lighting */}
      <div 
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "550px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(245, 158, 11, 0.12) 0%, rgba(245, 158, 11, 0) 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag" style={{ color: "var(--accent-amber)" }}>// COMPETITIVE PROGRAMMING</span>
          <h2 className="section-title">
            Algorithmic <span style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #f97316 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Mastery</span>
          </h2>
          <p className="section-desc">
            Rigorous problem-solving capabilities verified by global algorithmic contest ratings and hundreds of solved challenges.
          </p>
        </div>

        {/* Main Card */}
        <div 
          style={{
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          {/* Knight Badge Hologram Card */}
          <TiltCard maxTilt={6}>
            <div 
              className="glass-card glow-border zoom-in"
              onMouseEnter={() => playSound("hover")}
              style={{
                padding: "3rem",
                borderRadius: "var(--radius-xl)",
                display: "flex",
                flexDirection: "column",
                background: "var(--bg-glass-strong)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                boxShadow: "var(--shadow-glass), 0 0 30px rgba(245, 158, 11, 0.15)",
                height: "100%",
                alignItems: "center",
                textAlign: "center",
                animationDelay: "0.1s"
              }}
            >
              {/* Badge Header */}
              <div style={{ display: "flex", alignItems: "center", flexDirection: "column", gap: "1.5rem", marginBottom: "2rem" }}>
                <div 
                  className="animate-float"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20px",
                    background: "linear-gradient(135deg, #f59e0b, #f97316)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 35px rgba(245, 158, 11, 0.5)"
                  }}
                >
                  <Award size={40} />
                </div>

                <div 
                  className="badge"
                  style={{
                    background: "rgba(245, 158, 11, 0.15)",
                    color: "var(--accent-amber)",
                    border: "1px solid rgba(245, 158, 11, 0.35)",
                    fontSize: "0.9rem",
                    padding: "0.5rem 1.2rem"
                  }}
                >
                  Knight Level Badge
                </div>
              </div>

              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, marginBottom: "0.75rem" }}>
                LeetCode Knight
              </h3>
              <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: "600px" }}>
                Achieved top contest rating through disciplined problem-solving and rigorous understanding of Data Structures & Algorithms.
              </p>

              {/* Stats Counters */}
              <div 
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  marginBottom: "2.5rem",
                  width: "100%",
                  maxWidth: "600px"
                }}
              >
                <div 
                  className="fade-in-up"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.25rem",
                    textAlign: "center",
                    animationDelay: "0.3s"
                  }}
                >
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent-amber)", fontFamily: "var(--font-mono)" }}>
                    {leetcodeStats.rating}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                    Contest Rating
                  </div>
                </div>

                <div 
                  className="fade-in-up"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-md)",
                    padding: "1.25rem",
                    textAlign: "center",
                    animationDelay: "0.45s"
                  }}
                >
                  <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
                    {leetcodeStats.solved}
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                    Problems Solved
                  </div>
                </div>
              </div>

              <a
                href={personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                onClick={() => playSound("click")}
                className="btn btn-primary"
                style={{
                  background: "linear-gradient(135deg, #f59e0b, #f97316)",
                  boxShadow: "0 4px 20px rgba(245, 158, 11, 0.35)",
                  textDecoration: "none",
                  padding: "0.85rem 2rem",
                  fontSize: "1.05rem"
                }}
              >
                <LeetCodeIcon size={20} />
                <span>Verify on LeetCode Profile</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

