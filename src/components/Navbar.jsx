import React from "react";
import { motion } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";

const Navbar = () => {
  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "works", label: "Works" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50">
      <nav
        className="
        flex items-center gap-1 px-1.5 py-1.5 rounded-full
        
        /* --- DARK GLASSMORPHISM --- */
        /* Fundal: #161617 (Apple Dark Grey) cu opacitate 80% */
        bg-[#161617]/80
        
        /* Blur și Saturație pentru efectul 'Vibrancy' */
        backdrop-blur-[20px] 
        backdrop-saturate-[180%]
        
        /* Border subtil alb (12% opacitate) pentru contrast pe fundal negru */
        border border-white/10
        
        shadow-[0_8px_32px_rgba(0,0,0,0.5)]
      "
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className={`
                relative px-5 py-2.5 text-sm font-medium rounded-full transition-colors duration-300
                ${
                  isActive
                    ? "text-black" /* Text Negru pe pastila Albă */
                    : "text-[#86868b] hover:text-white" /* Text Gri -> Alb la hover */
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  /* Pastila Albă pentru contrast maxim în Dark Mode */
                  className="absolute inset-0 bg-white rounded-full shadow-sm"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}

              <span className="relative z-10">{link.label}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
