import React, { useState, useRef } from "react";

const CursorTooltip = ({ children, tooltipText }) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Referință pentru a evita re-randarea inutilă dacă am folosi logica complexă
  // Dar pentru simplitate, folosim state aici.

  const handleMouseMove = (e) => {
    // Actualizăm poziția bazată pe coordonatele clientului (fereastra browserului)
    // Adăugăm un mic offset (+15px) ca tooltip-ul să nu stea chiar sub săgeată
    setPosition({
      x: e.clientX + 15,
      y: e.clientY + 15,
    });
  };

  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
      style={{ display: "inline-block" }} // Important pentru a nu ocupa toată lățimea
    >
      {children}

      {visible && (
        <div
          style={{
            position: "fixed", // Folosim fixed pentru a fi relativ la fereastră, nu la părinte
            top: position.y,
            left: position.x,
            pointerEvents: "none", // CRUCIAL: Mouse-ul trebuie să ignore tooltip-ul
            zIndex: 9999, // Să fie mereu deasupra
            backgroundColor: "#333",
            color: "#fff",
            padding: "8px 12px",
            borderRadius: "4px",
            fontSize: "12px",
            whiteSpace: "nowrap",
            transform: "translate(0, 0)", // Optimizare GPU
          }}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default CursorTooltip;
