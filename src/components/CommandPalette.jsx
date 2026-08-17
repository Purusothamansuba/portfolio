import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  Terminal, 
  FileText, 
  FolderGit2, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  Mail, 
  ArrowRight, 
  Layers, 
  User, 
  Briefcase, 
  X,
  Code2,
  Award,
  GraduationCap,
  Phone
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from "./Icons";
import { portfolioData } from "../data/portfolioData";
import { playSound } from "../utils/audio";

export default function CommandPalette({ 
  isOpen, 
  onClose, 
  onToggleTheme, 
  theme, 
  onOpenResume, 
  onSelectProject 
}) {
  const { personal, projects } = portfolioData;
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const actions = [
    {
      id: "sec-about",
      title: "Jump to About & Education (CIT)",
      category: "Navigation",
      icon: User,
      action: () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "sec-skills",
      title: "Jump to Skills Matrix (C++, Python, Django, React)",
      category: "Navigation",
      icon: Layers,
      action: () => {
        document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "sec-projects",
      title: "Jump to Projects (Songify, Code Analyser, Medical AI)",
      category: "Navigation",
      icon: FolderGit2,
      action: () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "sec-leetcode",
      title: "Jump to LeetCode Spotlight (Knight 1850+)",
      category: "Navigation",
      icon: Award,
      action: () => {
        document.getElementById("leetcode")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "sec-experience",
      title: "Jump to Experience, Education & Achievements",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "sec-contact",
      title: "Jump to Contact Hub",
      category: "Navigation",
      icon: Mail,
      action: () => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }
    },
    {
      id: "resume",
      title: "Open Printable Resume (Official PDF Format)",
      category: "Actions",
      icon: FileText,
      action: () => onOpenResume()
    },
    {
      id: "leetcode",
      title: "Open LeetCode Profile (Knight Badge - 1850+ Rating, 650+ Solved)",
      category: "External",
      icon: LeetCodeIcon,
      action: () => window.open(personal.socialLinks.leetcode, "_blank")
    },
    {
      id: "theme",
      title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
      category: "Actions",
      icon: theme === "dark" ? Sun : Moon,
      action: () => onToggleTheme()
    },
    {
      id: "copy-email",
      title: `Copy Email (${personal.email})`,
      category: "Actions",
      icon: Mail,
      action: () => {
        navigator.clipboard.writeText(personal.email);
        playSound("success");
      }
    },
    {
      id: "copy-phone",
      title: `Copy Phone Number (${personal.phone})`,
      category: "Actions",
      icon: Phone,
      action: () => {
        navigator.clipboard.writeText(personal.phone);
        playSound("success");
      }
    },
    {
      id: "github-profile",
      title: "Open GitHub Profile (@Purusothamansuba)",
      category: "External",
      icon: GithubIcon,
      action: () => window.open(personal.socialLinks.github, "_blank")
    },
    {
      id: "linkedin-profile",
      title: "Open LinkedIn Profile",
      category: "External",
      icon: LinkedinIcon,
      action: () => window.open(personal.socialLinks.linkedin, "_blank")
    },
    ...projects.map((p) => ({
      id: `proj-${p.id}`,
      title: `Project: ${p.title} - ${p.tagline}`,
      category: "Projects",
      icon: Code2,
      action: () => onSelectProject(p)
    }))
  ];

  const filtered = actions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1 < filtered.length ? prev + 1 : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filtered.length - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[selectedIndex]) {
        playSound("click");
        filtered[selectedIndex].action();
        onClose();
      }
    }
  };

  if (!isOpen) return null;

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
          maxWidth: "620px"
        }}
      >
        {/* Search Bar Input */}
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1.25rem 1.5rem",
            borderBottom: "1px solid var(--border-subtle)",
            background: "var(--bg-glass-strong)"
          }}
        >
          <Search size={20} style={{ color: "var(--accent-cyan)" }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, project, or section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              color: "var(--text-primary)",
              fontSize: "1.05rem",
              fontFamily: "var(--font-main)"
            }}
          />
          <button
            onClick={onClose}
            className="btn-icon"
            style={{ width: "32px", height: "32px" }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div 
          style={{
            maxHeight: "380px",
            overflowY: "auto",
            padding: "0.75rem"
          }}
        >
          {filtered.length === 0 ? (
            <div style={{ padding: "2rem", textAlign: "center", color: "var(--text-muted)" }}>
              No matching commands or projects found for "{query}".
            </div>
          ) : (
            filtered.map((item, idx) => {
              const IconComp = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    playSound("click");
                    item.action();
                    onClose();
                  }}
                  onMouseEnter={() => {
                    setSelectedIndex(idx);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.75rem 1rem",
                    borderRadius: "var(--radius-md)",
                    background: isSelected ? "rgba(6, 182, 212, 0.14)" : "transparent",
                    border: isSelected ? "1px solid rgba(6, 182, 212, 0.3)" : "1px solid transparent",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    marginBottom: "0.25rem"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div 
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "8px",
                        background: isSelected ? "var(--accent-cyan)" : "rgba(255, 255, 255, 0.05)",
                        color: isSelected ? "#000000" : "var(--accent-cyan)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.15s ease"
                      }}
                    >
                      <IconComp size={16} />
                    </div>
                    <span 
                      style={{
                        fontSize: "0.92rem",
                        fontWeight: isSelected ? 600 : 500,
                        color: isSelected ? "#ffffff" : "var(--text-primary)"
                      }}
                    >
                      {item.title}
                    </span>
                  </div>

                  <span 
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                      background: "rgba(255, 255, 255, 0.04)",
                      padding: "0.2rem 0.5rem",
                      borderRadius: "4px"
                    }}
                  >
                    {item.category}
                  </span>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div 
          style={{
            padding: "0.75rem 1.25rem",
            background: "var(--bg-card)",
            borderTop: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "0.75rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-mono)"
          }}
        >
          <div style={{ display: "flex", gap: "1rem" }}>
            <span><kbd style={{ background: "rgba(255,255,255,0.08)", padding: "2px 4px", borderRadius: "3px" }}>↑↓</kbd> Navigate</span>
            <span><kbd style={{ background: "rgba(255,255,255,0.08)", padding: "2px 4px", borderRadius: "3px" }}>↵</kbd> Select</span>
            <span><kbd style={{ background: "rgba(255,255,255,0.08)", padding: "2px 4px", borderRadius: "3px" }}>ESC</kbd> Close</span>
          </div>
          <span>Spotlight v2.5</span>
        </div>
      </div>
    </div>
  );
}

