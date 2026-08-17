import React, { useState } from "react";
import { 
  Code2, 
  FileCode, 
  Flame, 
  Atom, 
  Server, 
  Binary, 
  Cpu, 
  BrainCircuit, 
  Palette, 
  Database, 
  GitBranch, 
  Zap, 
  Network, 
  Music, 
  Terminal,
  Search,
  Filter,
  Sparkles
} from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

const iconMap = {
  Code2,
  FileCode,
  Flame,
  Atom,
  Server,
  Binary,
  Cpu,
  BrainCircuit,
  Palette,
  Database,
  GitBranch,
  Zap,
  Network,
  Music,
  Terminal,
  Sparkles
};

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSkills = skills.list.filter((skill) => {
    const matchesCategory = selectedCategory === "all" || skill.category === selectedCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          skill.tag.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const isAllSkills = selectedCategory === "all" && searchTerm === "";

  const row1 = [];
  const row2 = [];
  const row3 = [];
  
  if (isAllSkills) {
    skills.list.forEach((skill, index) => {
      if (index % 3 === 0) row1.push(skill);
      else if (index % 3 === 1) row2.push(skill);
      else row3.push(skill);
    });
  }

  const MarqueeRow = ({ items, direction = "left", speed = "40s" }) => {
    return (
      <div style={{
        display: "flex",
        overflow: "hidden",
        width: "100%",
        position: "relative",
        marginBottom: "1.25rem",
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
      }}>
        <div 
          style={{
            display: "flex",
            gap: "1.25rem",
            width: "max-content",
            animation: `marquee-${direction} ${speed} linear infinite`
          }}
        >
          {[...items, ...items].map((skill, idx) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={`${skill.name}-${idx}`}
                className="glass-card glow-border"
                onMouseEnter={() => playSound("hover")}
                style={{
                  width: "280px",
                  flexShrink: 0,
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease"
                }}
              >
                <div>
                  <div 
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem"
                    }}
                  >
                    <div 
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: skill.category === "database" ? "rgba(139, 92, 246, 0.12)" : skill.category === "programming" ? "rgba(16, 185, 129, 0.12)" : skill.category === "web" ? "rgba(6, 182, 212, 0.12)" : skill.category === "aiml" ? "rgba(244, 63, 94, 0.12)" : "rgba(245, 158, 11, 0.12)",
                        color: skill.category === "database" ? "var(--accent-violet)" : skill.category === "programming" ? "var(--accent-emerald)" : skill.category === "web" ? "var(--accent-cyan)" : skill.category === "aiml" ? "var(--accent-rose)" : "var(--accent-amber)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <IconComponent size={22} />
                    </div>
                    <span 
                      className={
                        skill.category === "database" ? "badge badge-violet" :
                        skill.category === "programming" ? "badge badge-emerald" :
                        skill.category === "web" ? "badge badge-cyan" : 
                        skill.category === "aiml" ? "badge badge-rose" : "badge"
                      }
                      style={{ fontSize: "0.72rem" }}
                    >
                      {skill.tag}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {skill.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// TECHNICAL CAPABILITIES</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient-cyan">Tech Stack</span>
          </h2>
          <p className="section-desc">
            A comprehensive matrix of programming languages, system architectures, frontend frameworks, and AI toolsets.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
            marginBottom: "2.5rem"
          }}
        >
          {/* Category Tabs */}
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
            {skills.categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playSound("click");
                    setSelectedCategory(cat.id);
                  }}
                  onMouseEnter={() => playSound("hover")}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "var(--radius-full)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-sub)",
                    background: isSelected ? "linear-gradient(135deg, #06b6d4, #3b82f6)" : "transparent",
                    color: isSelected ? "#ffffff" : "var(--text-secondary)",
                    boxShadow: isSelected ? "0 2px 10px rgba(6, 182, 212, 0.4)" : "none",
                    transition: "all 0.2s ease"
                  }}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div 
            style={{
              position: "relative",
              minWidth: "240px"
            }}
          >
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
              placeholder="Filter skills (e.g., C++, AI)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

        {/* Skills Display */}
        {isAllSkills ? (
          <div 
            style={{ 
              perspective: "1200px", 
              transformStyle: "preserve-3d",
              padding: "1rem 0"
            }}
          >
            <div 
              style={{
                transform: "rotateX(8deg) rotateY(-5deg) rotateZ(1deg)",
                transition: "all 0.4s ease-out"
              }}
            >
              <MarqueeRow items={row1} direction="left" speed="35s" />
              <MarqueeRow items={row2} direction="right" speed="40s" />
              <MarqueeRow items={row3} direction="left" speed="38s" />
            </div>
          </div>
        ) : (
          <div 
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.25rem"
            }}
          >
            {filteredSkills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={`${selectedCategory}-${skill.name}`}
                  className="glass-card glow-border fade-in-up"
                  onMouseEnter={() => playSound("hover")}
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.25s ease",
                    animationDelay: `${idx * 0.05}s`,
                    animationFillMode: "both"
                  }}
                >
                  <div>
                    <div 
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "1rem"
                      }}
                    >
                      <div 
                        style={{
                          width: "44px",
                          height: "44px",
                          borderRadius: "12px",
                          background: skill.category === "database" ? "rgba(139, 92, 246, 0.12)" : skill.category === "programming" ? "rgba(16, 185, 129, 0.12)" : skill.category === "web" ? "rgba(6, 182, 212, 0.12)" : skill.category === "aiml" ? "rgba(244, 63, 94, 0.12)" : "rgba(245, 158, 11, 0.12)",
                          color: skill.category === "database" ? "var(--accent-violet)" : skill.category === "programming" ? "var(--accent-emerald)" : skill.category === "web" ? "var(--accent-cyan)" : skill.category === "aiml" ? "var(--accent-rose)" : "var(--accent-amber)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}
                      >
                        <IconComponent size={22} />
                      </div>

                      <span 
                        className={
                          skill.category === "database" ? "badge badge-violet" :
                          skill.category === "programming" ? "badge badge-emerald" :
                          skill.category === "web" ? "badge badge-cyan" : 
                          skill.category === "aiml" ? "badge badge-rose" : "badge"
                        }
                        style={{ fontSize: "0.72rem" }}
                      >
                        {skill.tag}
                      </span>
                    </div>

                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>
                      {skill.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {filteredSkills.length === 0 && (
          <div 
            className="glass-card"
            style={{
              padding: "3rem",
              textAlign: "center",
              marginTop: "2rem"
            }}
          >
            <p style={{ color: "var(--text-muted)" }}>
              No skills found matching "<strong>{searchTerm}</strong>".
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
