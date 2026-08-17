import React, { useRef, useState } from "react";

export default function TiltCard({ children, className = "", style = {}, maxTilt = 15 }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate tilt angles based on mouse position relative to center
    const tiltX = (y / (rect.height / 2)) * -maxTilt;
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 }); // Reset to flat
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Adds an inner subtle translation to make elements pop when tilted */}
        <div style={{ width: "100%", height: "100%", transform: isHovered ? "translateZ(30px)" : "translateZ(0)", transition: "transform 0.3s ease-out" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
