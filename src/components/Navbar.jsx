import React from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import useScrollSpy from "../hooks/useScrollSpy";
import { NAV_LINKS } from "../constants/navigation";
import { scrollToSection } from "../utils/scroll";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sectionIds = NAV_LINKS.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);
  const isHomePage = location.pathname === "/";

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    
    if (isHomePage) {
      // On homepage, just scroll
      scrollToSection(id);
    } else {
      // On other pages, navigate to home with hash
      navigate(`/#${id}`);
      // After navigation, scroll to section
      setTimeout(() => scrollToSection(id), 100);
    }
  };

  return (
    <div className="fixed top-6 inset-x-0 max-w-fit mx-auto z-50">
      <nav className="glass-navbar flex items-center gap-1 px-1.5 py-1.5 rounded-full">
        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.id && isHomePage;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollToSection(e, link.id)}
              className={`
                nav-link relative px-5 py-2.5 font-medium rounded-full transition-colors duration-300
                ${
                  isActive
                    ? "text-black"
                    : "text-[#86868b] md:hover:text-white"
                }
              `}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
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
