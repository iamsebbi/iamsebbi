import React, { useState } from "react";
import { motion } from "framer-motion";

// Magnification effect calculator (like macOS Dock)
const getMagnification = (index, hoveredIndex, maxScale = 1.5) => {
  if (hoveredIndex === null) return 1;
  const distance = Math.abs(index - hoveredIndex);
  if (distance === 0) return maxScale;
  if (distance === 1) return 1 + (maxScale - 1) * 0.6;
  if (distance === 2) return 1 + (maxScale - 1) * 0.3;
  if (distance === 3) return 1 + (maxScale - 1) * 0.15;
  return 1;
};

/**
 * MagnifyText Component
 * 
 * A text component with macOS Dock-style magnification effect on hover.
 * Features intro animation from bold to light weight and dynamic letter spacing.
 * 
 * @param {string} text - The text to display
 * @param {string} className - Additional CSS classes for the container
 * @param {number} minWeight - Minimum font weight (default: 300)
 * @param {number} maxWeight - Maximum font weight on hover (default: 900)
 * @param {number} maxScale - Maximum scale on hover (default: 1.5)
 * @param {boolean} enableIntro - Enable intro animation (default: true)
 * @param {number} introDelay - Base delay for intro animation (default: 0.5)
 * @param {number} introStagger - Stagger delay between letters (default: 0.05)
 * @param {string} as - HTML tag to render as (default: "span")
 */
const MagnifyText = ({
  text,
  className = "",
  minWeight = 300,
  maxWeight = 900,
  maxScale = 1.5,
  enableIntro = true,
  introDelay = 0.5,
  introStagger = 0.05,
  as = "span",
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const Component = motion[as];

  // Calculate translateX offset to prevent overlap
  const getTranslateX = (index, hoveredIndex, maxScale) => {
    if (hoveredIndex === null) return 0;
    
    const distance = index - hoveredIndex;
    const scaleDiff = maxScale - 1;
    
    // Letters to the right of hovered letter move right
    if (distance > 0) {
      if (distance === 1) return scaleDiff * 40;
      if (distance === 2) return scaleDiff * 30;
      if (distance === 3) return scaleDiff * 15;
    }
    // Letters to the left of hovered letter move left
    else if (distance < 0) {
      if (distance === -1) return -scaleDiff * 40;
      if (distance === -2) return -scaleDiff * 30;
      if (distance === -3) return -scaleDiff * 15;
    }
    
    return 0;
  };

  return (
    <Component className={`inline-flex ${className}`}>
      {text.split("").map((char, i) => {
        const scale = getMagnification(i, hoveredIndex, maxScale);
        const weight = minWeight + (scale - 1) * (maxWeight - minWeight);
        const translateX = getTranslateX(i, hoveredIndex, maxScale);

        return (
          <motion.span
            key={i}
            className="inline-block origin-bottom"
            initial={enableIntro ? { fontWeight: maxWeight } : { fontWeight: minWeight }}
            animate={{
              scale,
              fontWeight: hoveredIndex !== null ? weight : minWeight,
              x: translateX,
            }}
            transition={
              hoveredIndex !== null
                ? { type: "spring", stiffness: 300, damping: 20 }
                : enableIntro
                ? { fontWeight: { duration: 3, delay: introDelay + i * introStagger, ease: [0.22, 1, 0.36, 1] } }
                : {}
            }
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ fontWeight: minWeight }}
          >
            {char}
          </motion.span>
        );
      })}
    </Component>
  );
};

export default MagnifyText;
