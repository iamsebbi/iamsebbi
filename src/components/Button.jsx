import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Button = ({
  children = "Buton",
  onClick,
  icon: Icon = ArrowRight,
  className = "",
  rotateIcon = true,
  initialRotate = null,
  iconSize = "w-5 h-5",
  iconClassName = "",
  // PROP NOU:
  forceHover = false, // Permite controlul extern al stării de hover
  hideIcon = false, // Ascunde iconița, afișează doar text
  glassTheme = null, // 'hero' sau 'dark' pentru teme glassmorphism
}) => {
  const startAngle =
    initialRotate !== null ? initialRotate : rotateIcon ? -45 : 0;

  // Determine glass class based on theme
  const glassClass = glassTheme === 'hero' 
    ? 'glass-button-hero' 
    : glassTheme === 'dark' 
    ? 'glass-button-dark' 
    : '';

  return (
    <motion.button
      onClick={onClick}
      // Logica: Dacă forceHover e true, setăm manual starea "hover".
      // Altfel, lăsăm comportamentul natural (whileHover).
      animate={forceHover ? "hover" : "initial"}
      whileHover={forceHover ? undefined : "hover"}
      initial="initial"
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`group flex items-center gap-3 ${hideIcon ? "px-5" : "pl-5 pr-2"} py-2 
                  ${glassClass || 'bg-white/10 backdrop-blur-xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.4)]'}
                  rounded-full transition-colors duration-300 ${className}`}
    >
      <span className="button-text font-medium text-white/90 tracking-tight group-hover:text-white transition-colors whitespace-nowrap text-lg md:text-base">
        {children}
      </span>

      {!hideIcon && (
        <div className="flex items-center justify-center w-9 h-9 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-shadow duration-300">
          <motion.div
            variants={{
              initial: { rotate: startAngle },
              hover: {
                rotate: rotateIcon ? 0 : startAngle,
                scale: rotateIcon ? 1 : 1.1,
              },
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          >
            <Icon
              className={`${iconSize} text-black ${iconClassName}`}
              strokeWidth={2.5}
            />
          </motion.div>
        </div>
      )}
    </motion.button>
  );
};

export default Button;
