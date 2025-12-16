import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp, Sparkles } from "lucide-react";
import Button from "./Button";
import { FOOTER_LINKS } from "../constants/navigation";
import { scrollToTop } from "../utils/scroll";

const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit" })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-black border-t border-white/10 pt-24 pb-12 overflow-hidden">
      {/* Background Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-24 items-start">
          {/* 1. BRANDING */}
          <div className="space-y-4">
            <h3 className="footer-brand font-bold text-white tracking-tight">
              @iamsebbi
            </h3>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <p className="footer-text text-gray-400">
                Available for new projects
              </p>
            </div>
          </div>

          {/* 2. NAVIGATION */}
          <div className="flex flex-col space-y-3 md:items-center lg:items-start">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="footer-text text-gray-400 hover:text-white transition-colors duration-300 w-fit uppercase tracking-wider font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* 3. TIME & BUTTON */}
          <div className="flex flex-col md:items-end gap-6">
            <Button
              onClick={scrollToTop}
              icon={ArrowUp}
              // 1. DEZACTIVĂM ROTAȚIA
              // Săgeata ArrowUp va sta drept în sus (0 grade) permanent.
              rotateIcon={false}
              glassTheme="hero"
              // 2. STILIZARE RESPONSIVE
              // Mobile: w-full și justify-between (text stânga, icon dreapta)
              // Desktop: w-auto și justify-center
              className="w-full justify-between md:w-auto md:justify-center"
            >
              Back to top
            </Button>

            {/* Ora Locală */}
            <div className="flex flex-col md:items-end">
              <span className="footer-label text-gray-500 uppercase tracking-widest mb-1">
                Local time
              </span>
              <span className="footer-time font-mono text-white/80">
                {time}{" "}
                <span className="footer-text text-gray-600 ml-1">RO</span>
              </span>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 footer-text text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} @iamsebbi. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5">
            <span>Made by me</span>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Sparkles size={14} className="text-yellow-500 fill-yellow-500" />
            </motion.div>
            <span>with react</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
