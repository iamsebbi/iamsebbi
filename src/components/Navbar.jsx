import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Briefcase, User, Mail } from "lucide-react";
import useScrollSpy from "../hooks/useScrollSpy";
import { NAV_LINKS } from "../constants/navigation";
import { scrollToSection } from "../utils/scroll";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionIds = NAV_LINKS.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);
  const isHomePage = location.pathname === "/";

  const iconMap = {
    Home: Home,
    Briefcase: Briefcase,
    User: User,
    Mail: Mail,
  };

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    
    if (isHomePage) {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  return (
    <div className="fixed bottom-6 md:top-6 md:bottom-auto inset-x-0 max-w-fit mx-auto z-50">
      <nav className="glass-navbar flex items-center gap-1.5 px-2 py-2" style={{ borderRadius: '50px' }}>
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id && isHomePage;
          const IconComponent = iconMap[link.icon];

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollToSection(e, link.id)}
              className={`
                nav-link relative px-6 py-2.5 rounded-full transition-all duration-300 lowercase
                ${
                  isActive
                    ? "text-black font-semibold"
                    : "text-white/75 font-medium md:hover:text-white md:hover:scale-105"
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/95 rounded-full shadow-lg"
                  style={{
                    boxShadow: `
                      0 2px 8px rgba(255, 255, 255, 0.3),
                      0 4px 16px rgba(255, 255, 255, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.8)
                    `,
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 35,
                    mass: 0.8
                  }}
                />
              )}

              <span className="relative z-10 tracking-wide flex items-center gap-2">
                {/* Icon only on mobile */}
                <IconComponent className="w-5 h-5 md:hidden" strokeWidth={2} />
                
                {/* Text only on desktop */}
                <span className="hidden md:inline">
                  {link.label}
                  {isActive && <span className="ml-0.5 opacity-60">*</span>}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
