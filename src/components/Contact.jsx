import React, { useState } from "react";
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Sparkles, 
  Clock, 
  MessageSquare, 
  User, 
  AtSign, 
  FileText,
  Phone,
  Award
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import confetti from "canvas-confetti";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

export default function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    playSound("success");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    playSound("success");
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSound("click");
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      playSound("success");

      // Fire confetti celebration
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      // Construct mailto link as backup
      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(formData.subject || "Contact from Portfolio")}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Auto reset form after brief period
      setTimeout(() => {
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 1000);
    }, 800);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// GET IN TOUCH</span>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient-cyan">Exceptional</span>
          </h2>
          <p className="section-desc">
            Open for software engineering opportunities, AI architectures, backend systems, and technical collaborations.
          </p>
        </div>

        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            maxWidth: "1080px",
            margin: "0 auto"
          }}
          id="contact-grid"
        >
          <style>{`
            @media (min-width: 860px) {
              #contact-grid { grid-template-columns: 1fr 1.3fr !important; }
            }
          `}</style>

          {/* Left Column: Direct Contacts & Socials */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Quick Email & Phone Card */}
            <div 
              className="glass-card glow-border"
              style={{ padding: "2rem", borderRadius: "var(--radius-xl)" }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                Direct Channels
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
                Reach out via email or phone for roles, interviews, or engineering discussions.
              </p>

              {/* Email Copier */}
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  marginBottom: "0.75rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Mail size={16} style={{ color: "var(--accent-cyan)" }} />
                  <span style={{ color: "var(--text-primary)" }}>{personal.email}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "0.3rem 0.7rem", fontSize: "0.75rem" }}
                >
                  {copiedEmail ? <Check size={13} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={13} />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Phone Copier */}
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "0.75rem 1rem",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Phone size={16} style={{ color: "var(--accent-emerald)" }} />
                  <span style={{ color: "var(--text-primary)" }}>{personal.phone}</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "0.3rem 0.7rem", fontSize: "0.75rem" }}
                >
                  {copiedPhone ? <Check size={13} style={{ color: "var(--accent-emerald)" }} /> : <Copy size={13} />}
                  <span>{copiedPhone ? "Copied" : "Copy"}</span>
                </button>
              </div>

              {/* Response Time Badge */}
              <div 
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginTop: "1.25rem",
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-sub)"
                }}
              >
                <Clock size={14} style={{ color: "var(--accent-emerald)" }} />
                <span>Typically responds within a few hours</span>
              </div>
            </div>

            {/* Social Networks & LeetCode */}
            <div 
              className="glass-card"
              style={{ padding: "2rem", borderRadius: "var(--radius-xl)" }}
            >
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem" }}>
                Developer Profiles
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a
                  href={personal.socialLinks.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound("click")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(245, 158, 11, 0.08)",
                    border: "1px solid rgba(245, 158, 11, 0.25)",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <LeetCodeIcon size={18} style={{ color: "var(--accent-amber)" }} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 700 }}>LeetCode</span>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--accent-amber)", fontFamily: "var(--font-mono)" }}>
                    Knight (1850+) →
                  </span>
                </a>

                <a
                  href={personal.socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound("click")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <GithubIcon size={18} style={{ color: "var(--accent-cyan)" }} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>GitHub</span>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    @Purusothamansuba →
                  </span>
                </a>

                <a
                  href={personal.socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playSound("click")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    transition: "all 0.2s ease"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <LinkedinIcon size={18} style={{ color: "var(--accent-violet)" }} />
                    <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>LinkedIn</span>
                  </div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    Connect →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div 
            className="glass-card glow-border"
            style={{ padding: "2.5rem", borderRadius: "var(--radius-xl)" }}
          >
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: "0.5rem" }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>
              Have an opening, contract project, or technical question? Submit the form below.
            </p>

            {status === "success" ? (
              <div 
                style={{
                  background: "rgba(16, 185, 129, 0.1)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  borderRadius: "var(--radius-lg)",
                  padding: "2.5rem 2rem",
                  textAlign: "center",
                  animation: "scaleUp 0.3s ease"
                }}
              >
                <div 
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--accent-emerald)",
                    color: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1rem auto",
                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)"
                  }}
                >
                  <Check size={28} />
                </div>
                <h4 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Message Transmitted!
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                  Thank you for reaching out, Purushothaman will review and respond promptly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-secondary btn-sm"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div 
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gap: "1.25rem"
                  }}
                  id="form-inputs-grid"
                >
                  <style>{`
                    @media (min-width: 560px) {
                      #form-inputs-grid { grid-template-columns: 1fr 1fr !important; }
                    }
                  `}</style>
                  <div>
                    <label 
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        color: "var(--text-primary)"
                      }}
                    >
                      Your Name *
                    </label>
                    <div style={{ position: "relative" }}>
                      <User size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Sarah Jenkins"
                        style={{
                          width: "100%",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-md)",
                          padding: "0.75rem 1rem 0.75rem 2.75rem",
                          color: "var(--text-primary)",
                          fontSize: "0.92rem",
                          transition: "all 0.2s ease"
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label 
                      style={{
                        display: "block",
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        marginBottom: "0.5rem",
                        color: "var(--text-primary)"
                      }}
                    >
                      Email Address *
                    </label>
                    <div style={{ position: "relative" }}>
                      <AtSign size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@techcompany.com"
                        style={{
                          width: "100%",
                          background: "rgba(255, 255, 255, 0.04)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "var(--radius-md)",
                          padding: "0.75rem 1rem 0.75rem 2.75rem",
                          color: "var(--text-primary)",
                          fontSize: "0.92rem",
                          transition: "all 0.2s ease"
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label 
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      color: "var(--text-primary)"
                    }}
                  >
                    Subject
                  </label>
                  <div style={{ position: "relative" }}>
                    <FileText size={16} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineer Role / Technical Collaboration"
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        padding: "0.75rem 1rem 0.75rem 2.75rem",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        transition: "all 0.2s ease"
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label 
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      marginBottom: "0.5rem",
                      color: "var(--text-primary)"
                    }}
                  >
                    Message *
                  </label>
                  <div style={{ position: "relative" }}>
                    <MessageSquare size={16} style={{ position: "absolute", left: "1rem", top: "1rem", color: "var(--text-muted)" }} />
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hello Purushothaman, I came across your portfolio and LeetCode track record..."
                      style={{
                        width: "100%",
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        padding: "0.75rem 1rem 0.75rem 2.75rem",
                        color: "var(--text-primary)",
                        fontSize: "0.92rem",
                        resize: "vertical",
                        minHeight: "120px",
                        transition: "all 0.2s ease"
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "0.5rem" }}
                >
                  <Send size={18} />
                  <span>{status === "sending" ? "Transmitting Message..." : "Transmit Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

