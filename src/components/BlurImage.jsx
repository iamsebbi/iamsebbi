import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

const BlurImage = ({
  src,
  alt = "",
  className = "",
  blurAmount = "blur-xl",
  grayscale = true,
  showNoise = true,
  noiseOpacity = "opacity-15",
  transitionDuration = "duration-700",
  scaleOnHover = true,
  onTap,
  onActiveChange,
  forceActive = false, // Prop nou pentru a forța starea active din exterior
  category = "about projects", // Categoria proiectului
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Actualizează isActive când forceActive se schimbă
  useEffect(() => {
    if (forceActive) {
      setIsActive(true);
    } else if (!forceActive && isMobile) {
      // Reset blur când cardul iese din focus pe mobil
      setIsActive(false);
    }
  }, [forceActive, isMobile]);

  // Notify parent when isActive changes
  useEffect(() => {
    onActiveChange?.(isActive);
  }, [isActive, onActiveChange]);

  const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`;

  const handleTap = () => {
    if (isMobile) {
      if (!isActive) {
        // First tap: unblur image
        setIsActive(true);
      } else {
        // Second tap: navigate
        onTap?.();
      }
    } else {
      // Desktop: navigate immediately on click
      onTap?.();
    }
  };

  const handleOpenClick = (e) => {
    e.stopPropagation();
    onTap?.();
  };

  // Mobile: blur vizibil inițial, după tap dispare
  // Desktop: blur apare la hover
  const showBlur = isMobile ? !isActive : false;
  const showClear = isMobile ? isActive : true;

  return (
    <div 
      className="absolute inset-0 w-full h-full"
      onClick={handleTap}
      onMouseLeave={() => isMobile && !forceActive && setIsActive(false)}
    >
      {/* Imaginea clară */}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-all ${transitionDuration} ease-in-out 
          ${scaleOnHover ? "group-hover:scale-110" : ""} 
          ${grayscale && !isMobile ? "grayscale group-hover:grayscale-0" : ""} 
          ${isActive && isMobile ? "scale-110 grayscale-0" : ""}
          ${!isActive && isMobile ? "grayscale" : ""}
          ${showClear ? "opacity-100" : "opacity-0"}
          ${className}`}
      />

      {/* Imaginea blurată - fade in smooth */}
      <img
        src={src}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover ${blurAmount} transition-opacity duration-1000 ease-out
          ${scaleOnHover ? "scale-110" : ""}
          ${isMobile ? "grayscale" : ""}
          ${isMobile ? (showBlur ? "opacity-100" : "opacity-0") : "opacity-0 group-hover:opacity-100"}`}
      />

      {/* Noise overlay */}
      {showNoise && (
        <div
          className={`absolute inset-0 transition-opacity ${transitionDuration} pointer-events-none mix-blend-overlay
            ${isMobile ? (showBlur ? noiseOpacity : "opacity-0") : `opacity-0 group-hover:${noiseOpacity}`}`}
          style={{
            backgroundImage: noiseBg,
            backgroundRepeat: "repeat",
            backgroundSize: "50px",
          }}
        />
      )}

      {/* Buton Open - doar pe mobil când e activ */}
      {isMobile && isActive && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative inline-flex">
            {/* Backdrop blur - apare cu delay */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                backdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%) brightness(1.1)',
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            />
            
            {/* Butonul cu glassmorphism (fără backdrop blur) */}
            <Button
              onClick={handleOpenClick}
              hideIcon={true}
              glassTheme="hero"
              className="text-xl px-8 py-3 relative z-10"
            >
              {category}*
            </Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default BlurImage;
