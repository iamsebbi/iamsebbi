import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { scrollToSection } from "../utils/scroll";
import heroBg from "../assets/images/hero-bg.jpg";

const Hero = () => {
  const noiseBg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`;

  const handleScrollToContact = () => {
    scrollToSection("contact");
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-black"
    >
      {/* === BACKGROUND === */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Background"
          className="w-full h-full object-cover opacity-60 blur-2xl scale-125"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: noiseBg,
            backgroundRepeat: "repeat",
            backgroundSize: "50px",
          }}
        />
      </div>

      {/* === CONȚINUT === */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center md:items-baseline gap-0 md:gap-4 mb-10"
        >
          <span className="hero-hello font-sans font-bold tracking-tighter leading-none">
            hello
          </span>
          <h1 className="hero-title font-sans font-bold tracking-tighter leading-none -mt-2 md:mt-0">
            @iamsebbi
            <span className="ml-1 text-white">*</span>
          </h1>
        </motion.div>

        {/* BUTONUL INTEGRAT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.5,
            type: "spring",
            stiffness: 200,
          }}
        >
          {/* Folosim componenta reutilizabilă Button */}
          {/* Nu trebuie să specificăm icon={ArrowRight} pentru că e default */}
          <Button
            onClick={handleScrollToContact}
            className="w-40 justify-between" 
          >
            let's talk*
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
