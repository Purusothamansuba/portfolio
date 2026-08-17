import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  Mail, 
  Check, 
  Copy, 
  Sparkles, 
  Download, 
  Code2, 
  Cpu, 
  Activity, 
  Layers, 
  Award, 
  Globe 
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

export default function Hero({ onOpenResume }) {
  const { personal, stats } = portfolioData;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const roles = personal.roles;
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        if (currentText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex, personal.roles]);

  // 3D Tilt Card Physics
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = (y / (rect.height / 2)) * -10;
    const tiltY = (x / (rect.width / 2)) * 10;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    playSound("success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="hero" 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "7.5rem",
        paddingBottom: "4rem",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Ambient background glow orbs */}
      <div 
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, rgba(6, 182, 212, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />
      <div 
        className="animate-float"
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "450px",
          height: "450px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center"
          }}
          id="hero-grid"
        >
          <style>{`
            @media (min-width: 992px) {
              #hero-grid { grid-template-columns: 1.2fr 0.8fr !important; }
            }
          `}</style>

          {/* Left Column: Hero Introduction */}
          <div>
            {/* Badges Ribbon */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
              <div 
                className="badge badge-emerald badge-pulse"
                style={{
                  padding: "0.45rem 1rem 0.45rem 1.4rem",
                  fontSize: "0.85rem"
                }}
              >
                <span>{personal.status}</span>
              </div>

              <a
                href={personal.socialLinks.leetcode}
                target="_blank"
                rel="noreferrer"
                className="badge badge-cyan"
                style={{ fontSize: "0.82rem", textDecoration: "none" }}
                title="View LeetCode Knight Profile"
              >
                <Award size={13} style={{ color: "var(--accent-amber)" }} />
                <span>LeetCode Knight (1950+)</span>
              </a>
            </div>

            {/* Main Greeting & Name */}
            <h1 
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "1rem"
              }}
            >
              Hi, I'm <span className="text-gradient-cyan">{personal.name}</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div 
              style={{
                minHeight: "44px",
                fontSize: "clamp(1.25rem, 2.5vw, 1.9rem)",
                fontFamily: "var(--font-mono)",
                fontWeight: 600,
                color: "var(--accent-violet)",
                display: "flex",
                alignItems: "center",
                gap: "0.2rem",
                marginBottom: "1.5rem"
              }}
            >
              <span style={{ color: "var(--text-muted)" }}>&gt;</span>
              <span>{currentText}</span>
              <span className="terminal-cursor" />
            </div>

            {/* Objective / Bio */}
            <p 
              style={{
                fontSize: "1.1rem",
                maxWidth: "620px",
                lineHeight: 1.7,
                marginBottom: "2.25rem",
                color: "var(--text-secondary)"
              }}
            >
              {personal.objective}
            </p>

            {/* Action Buttons */}
            <div 
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2.5rem"
              }}
            >
              <a 
                href="#projects" 
                onClick={() => playSound("click")}
                onMouseEnter={() => playSound("hover")}
                className="btn btn-primary"
                style={{ textDecoration: "none" }}
              >
                <span>Explore Shipped Projects</span>
                <ArrowRight size={18} />
              </a>

              <a 
                href="#leetcode"
                onClick={() => playSound("click")}
                onMouseEnter={() => playSound("hover")}
                className="btn btn-secondary"
                style={{ textDecoration: "none" }}
              >
                <Award size={18} style={{ color: "var(--accent-amber)" }} />
                <span>LeetCode Knight (1950+)</span>
              </a>

              <button
                onClick={() => {
                  playSound("modal");
                  onOpenResume();
                }}
                onMouseEnter={() => playSound("hover")}
                className="btn btn-secondary"
              >
                <Download size={18} />
                <span>Resume (PDF)</span>
              </button>
            </div>

            {/* Quick Contact & Social Handles */}
            <div 
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "0.75rem"
              }}
            >
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.35rem 0.75rem",
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-mono)"
                }}
              >
                <Mail size={15} style={{ color: "var(--accent-cyan)" }} />
                <span>{personal.email}</span>
                <button
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  style={{
                    marginLeft: "0.25rem",
                    color: copiedEmail ? "var(--accent-emerald)" : "var(--text-muted)",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => playSound("hover")}
                  className="btn-icon"
                  title="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => playSound("hover")}
                  className="btn-icon"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={personal.socialLinks.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => playSound("hover")}
                  className="btn-icon"
                  title="LeetCode Profile (Knight - 1950+)"
                  style={{ color: "var(--accent-amber)" }}
                >
                  <LeetCodeIcon size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Holographic Card */}
          <div 
            style={{
              perspective: "1000px",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-card glow-border"
              style={{
                width: "100%",
                maxWidth: "420px",
                padding: "2rem",
                borderRadius: "var(--radius-xl)",
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition: "transform 0.15s ease-out, box-shadow 0.3s ease",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 30px rgba(6, 182, 212, 0.2)"
              }}
            >
              {/* Card Header & Avatar */}
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.25rem",
                  marginBottom: "1.75rem"
                }}
              >
                <div 
                  className="animate-pulse-glow"
                  style={{
                    position: "relative",
                    width: "80px",
                    height: "80px",
                    borderRadius: "22px",
                    padding: "3px",
                    background: "linear-gradient(135deg, #06b6d4, #8b5cf6, #10b981)",
                    boxShadow: "0 0 20px rgba(6, 182, 212, 0.4)"
                  }}
                >
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "19px",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                  <div 
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      background: "var(--accent-emerald)",
                      border: "3px solid var(--bg-card)",
                      boxShadow: "0 0 8px #10b981"
                    }}
                  />
                </div>

                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.2rem" }}>
                    {personal.name}
                  </h3>
                  <div 
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--accent-cyan)"
                    }}
                  >
                    Chennai Institute of Technology
                  </div>
                  <div 
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginTop: "0.25rem"
                    }}
                  >
                    📍 {personal.location}
                  </div>
                </div>
              </div>

              {/* Holographic Stats Grid */}
              <div 
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  marginBottom: "1.75rem"
                }}
              >
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "var(--radius-md)",
                      padding: "0.85rem",
                      textAlign: "center"
                    }}
                  >
                    <div style={{ fontSize: "1.4rem", fontWeight: 800, color: idx === 0 ? "var(--accent-amber)" : idx === 2 ? "var(--accent-violet)" : idx === 1 ? "var(--accent-cyan)" : "var(--accent-emerald)" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontFamily: "var(--font-sub)", marginTop: "0.3rem", lineHeight: 1.2 }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Verified Badge */}
              <div 
                style={{
                  background: "rgba(6, 182, 212, 0.06)",
                  border: "1px solid rgba(6, 182, 212, 0.2)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.85rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <Sparkles size={16} style={{ color: "var(--accent-cyan)" }} />
                  <span style={{ fontSize: "0.82rem", fontWeight: 600 }}>NPTEL Certified (C++ & ML)</span>
                </div>
                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--accent-emerald)" }}>
                  Verified ✓
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Ribbon */}
        <div 
          className="glass-card"
          style={{
            marginTop: "4.5rem",
            padding: "1.75rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            borderRadius: "var(--radius-lg)"
          }}
        >
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderRight: idx < stats.length - 1 ? "1px solid var(--border-subtle)" : "none",
                paddingRight: "1rem"
              }}
            >
              <div 
                className="animate-float"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  animationDelay: `${idx * 0.5}s`,
                  background: idx === 0 ? "rgba(245, 158, 11, 0.12)" : idx === 1 ? "rgba(6, 182, 212, 0.12)" : idx === 2 ? "rgba(139, 92, 246, 0.12)" : "rgba(16, 185, 129, 0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: idx === 0 ? "var(--accent-amber)" : idx === 1 ? "var(--accent-cyan)" : idx === 2 ? "var(--accent-violet)" : "var(--accent-emerald)"
                }}
              >
                {idx === 0 ? <Award size={24} /> : idx === 1 ? <Code2 size={24} /> : idx === 2 ? <Activity size={24} /> : <Check size={24} />}
              </div>
              <div>
                <div style={{ fontSize: "1.6rem", fontWeight: 800, lineHeight: 1.1 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

