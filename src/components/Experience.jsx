import React, { useState } from "react";
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  Sparkles, 
  CheckCircle2, 
  Download,
  Award,
  BookOpen
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

export default function Experience({ onOpenResume }) {
  const { experience, education, certifications, achievements } = portfolioData;
  const [activeTab, setActiveTab] = useState("experience"); // experience, education, achievements

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// QUALIFICATIONS & MILESTONES</span>
          <h2 className="section-title">
            Experience & <span className="text-gradient-cyan">Education</span>
          </h2>
          <p className="section-desc">
            Academic credentials at Chennai Institute of Technology, LeetCode Knight achievements, and engineering projects.
          </p>
        </div>

        {/* Tab Switcher */}
        <div 
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "3rem"
          }}
        >
          <div 
            style={{
              display: "inline-flex",
              background: "var(--bg-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-full)",
              padding: "0.4rem"
            }}
          >
            <button
              onClick={() => {
                playSound("click");
                setActiveTab("experience");
              }}
              onMouseEnter={() => playSound("hover")}
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: 600,
                fontFamily: "var(--font-sub)",
                background: activeTab === "experience" ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "transparent",
                color: activeTab === "experience" ? "#ffffff" : "var(--text-secondary)",
                boxShadow: activeTab === "experience" ? "0 2px 10px rgba(6, 182, 212, 0.4)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease"
              }}
            >
              <Briefcase size={16} />
              <span>Engineering Experience</span>
            </button>

            <button
              onClick={() => {
                playSound("click");
                setActiveTab("education");
              }}
              onMouseEnter={() => playSound("hover")}
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: 600,
                fontFamily: "var(--font-sub)",
                background: activeTab === "education" ? "linear-gradient(135deg, #8b5cf6, #ec4899)" : "transparent",
                color: activeTab === "education" ? "#ffffff" : "var(--text-secondary)",
                boxShadow: activeTab === "education" ? "0 2px 10px rgba(139, 92, 246, 0.4)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease"
              }}
            >
              <GraduationCap size={16} />
              <span>Education & Schooling</span>
            </button>

            <button
              onClick={() => {
                playSound("click");
                setActiveTab("achievements");
              }}
              onMouseEnter={() => playSound("hover")}
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: 600,
                fontFamily: "var(--font-sub)",
                background: activeTab === "achievements" ? "linear-gradient(135deg, #10b981, #06b6d4)" : "transparent",
                color: activeTab === "achievements" ? "#ffffff" : "var(--text-secondary)",
                boxShadow: activeTab === "achievements" ? "0 2px 10px rgba(16, 185, 129, 0.4)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease"
              }}
            >
              <Award size={16} />
              <span>Achievements & Awards</span>
            </button>

            <button
              onClick={() => {
                playSound("click");
                setActiveTab("certifications");
              }}
              onMouseEnter={() => playSound("hover")}
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.9rem",
                fontWeight: 600,
                fontFamily: "var(--font-sub)",
                background: activeTab === "certifications" ? "linear-gradient(135deg, #f59e0b, #f43f5e)" : "transparent",
                color: activeTab === "certifications" ? "#ffffff" : "var(--text-secondary)",
                boxShadow: activeTab === "certifications" ? "0 2px 10px rgba(244, 63, 94, 0.4)" : "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease"
              }}
            >
              <CheckCircle2 size={16} />
              <span>Certifications</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Engineering Experience */}
        {activeTab === "experience" && (
          <div 
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              position: "relative"
            }}
          >
            <div 
              style={{
                position: "absolute",
                left: "24px",
                top: "10px",
                bottom: "20px",
                width: "2px",
                background: "linear-gradient(to bottom, #06b6d4, #8b5cf6, transparent)",
                borderRadius: "var(--radius-full)"
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {experience.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    position: "relative",
                    paddingLeft: "4.5rem"
                  }}
                >
                  <div 
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0",
                      width: "50px",
                      height: "50px",
                      borderRadius: "16px",
                      background: idx === 0 ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "linear-gradient(135deg, #8b5cf6, #ec4899)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      boxShadow: idx === 0 ? "0 0 20px rgba(6, 182, 212, 0.5)" : "0 0 20px rgba(139, 92, 246, 0.5)",
                      zIndex: 2
                    }}
                  >
                    {idx === 0 ? <Briefcase size={22} /> : <Award size={22} />}
                  </div>

                  <div 
                    className="glass-card glow-border"
                    onMouseEnter={() => playSound("hover")}
                    style={{
                      padding: "2rem",
                      borderRadius: "var(--radius-xl)"
                    }}
                  >
                    <div 
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                        marginBottom: "1rem"
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>
                          {item.role}
                        </h3>
                        <div style={{ fontSize: "1.05rem", color: "var(--accent-cyan)", fontWeight: 600 }}>
                          {item.organization}
                        </div>
                      </div>

                      <div 
                        className="badge badge-cyan"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.8rem"
                        }}
                      >
                        <Calendar size={13} />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <p style={{ fontSize: "0.98rem", lineHeight: 1.6, marginBottom: "1.5rem", color: "var(--text-secondary)" }}>
                      {item.description}
                    </p>

                    <div style={{ marginBottom: "1.5rem" }}>
                      <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.4rem" }}>
                        <Award size={16} style={{ color: "var(--accent-emerald)" }} />
                        <span>Key Deliverables & Highlights</span>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        {item.achievements.map((ach, i) => (
                          <div 
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                              fontSize: "0.92rem",
                              lineHeight: 1.5,
                              color: "var(--text-secondary)"
                            }}
                          >
                            <CheckCircle2 size={16} style={{ color: "var(--accent-emerald)", flexShrink: 0, marginTop: "3px" }} />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {item.skills.map((skill, sIdx) => (
                        <span 
                          key={sIdx}
                          style={{
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid var(--border-subtle)",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "var(--radius-sm)",
                            fontSize: "0.78rem",
                            fontFamily: "var(--font-mono)",
                            color: "var(--text-secondary)"
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Education & Schooling */}
        {activeTab === "education" && (
          <div 
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              position: "relative"
            }}
          >
            <div 
              style={{
                position: "absolute",
                left: "24px",
                top: "10px",
                bottom: "20px",
                width: "2px",
                background: "linear-gradient(to bottom, #8b5cf6, #ec4899, transparent)",
                borderRadius: "var(--radius-full)"
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              {education.map((edu, idx) => (
                <div 
                  key={idx}
                  style={{
                    position: "relative",
                    paddingLeft: "4.5rem"
                  }}
                >
                  <div 
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "0",
                      width: "50px",
                      height: "50px",
                      borderRadius: "16px",
                      background: idx === 0 ? "linear-gradient(135deg, #8b5cf6, #3b82f6)" : "linear-gradient(135deg, #ec4899, #f59e0b)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
                      zIndex: 2
                    }}
                  >
                    <GraduationCap size={24} />
                  </div>

                  <div 
                    className="glass-card glow-border"
                    onMouseEnter={() => playSound("hover")}
                    style={{
                      padding: "2rem",
                      borderRadius: "var(--radius-xl)"
                    }}
                  >
                    <div 
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        gap: "0.75rem",
                        marginBottom: "0.75rem"
                      }}
                    >
                      <div>
                        <h3 style={{ fontSize: "1.35rem", fontWeight: 800 }}>
                          {edu.degree}
                        </h3>
                        <div style={{ fontSize: "1.05rem", color: "var(--accent-violet)", fontWeight: 600 }}>
                          {edu.institution}
                        </div>
                      </div>

                      <div 
                        className="badge badge-emerald"
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 700,
                          fontFamily: "var(--font-mono)"
                        }}
                      >
                        {edu.score}
                      </div>
                    </div>

                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {edu.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Achievements & Certifications */}
        {activeTab === "achievements" && (
          <div 
            style={{
              maxWidth: "860px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "1.5rem"
            }}
          >
            {/* LeetCode & Academic Cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {achievements.map((ach, idx) => (
                <div
                  key={idx}
                  className="glass-card glow-border"
                  onMouseEnter={() => playSound("hover")}
                  style={{
                    padding: "1.75rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "var(--radius-xl)"
                  }}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <div 
                        style={{
                          width: "42px",
                          height: "42px",
                          borderRadius: "12px",
                          background: idx === 0 ? "rgba(245, 158, 11, 0.15)" : "rgba(6, 182, 212, 0.15)",
                          color: idx === 0 ? "var(--accent-amber)" : "var(--accent-cyan)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <Award size={22} />
                      </div>
                      <span className="badge badge-cyan" style={{ fontFamily: "var(--font-mono)" }}>
                        {ach.metric}
                      </span>
                    </div>

                    <h4 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                      {ach.title}
                    </h4>
                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {ach.desc}
                    </p>
                  </div>

                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playSound("click")}
                      className="btn btn-secondary btn-sm"
                      style={{ marginTop: "1.25rem", alignSelf: "flex-start", textDecoration: "none" }}
                    >
                      <span>View LeetCode Profile</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Tab 4: Certifications */}
        {activeTab === "certifications" && (
          <div 
            style={{
              maxWidth: "860px",
              margin: "0 auto"
            }}
          >
            <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <BookOpen size={20} style={{ color: "var(--accent-emerald)" }} />
              <span>Professional Certifications & Badges</span>
            </h4>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {certifications.map((cert, idx) => (
                <div
                  key={`cert-${idx}`}
                  className="glass-card glow-border fade-in-up"
                  onMouseEnter={() => playSound("hover")}
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "var(--radius-xl)",
                    animationDelay: `${idx * 0.08}s`,
                    animationFillMode: "both"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <span className={cert.issuer === "MongoDB" ? "badge badge-emerald" : cert.issuer === "Cisco" ? "badge badge-cyan" : "badge badge-violet"} style={{ fontSize: "0.75rem" }}>
                      {cert.issuer}
                    </span>
                    <span style={{ fontSize: "0.78rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                      {cert.tag}
                    </span>
                  </div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.4 }}>
                    {cert.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Resume Action */}
        <div 
          style={{
            textAlign: "center",
            marginTop: "3.5rem"
          }}
        >
          <button
            onClick={() => {
              playSound("modal");
              onOpenResume();
            }}
            className="btn btn-primary"
          >
            <Download size={18} />
            <span>Download & View Full Resume (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
}

