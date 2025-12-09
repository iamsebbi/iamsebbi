import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Button from "../components/Button";
import { projects, projectsRow2 } from "../constants/projects";

// --- COMPONENTA CARD ---
const ProjectCard = ({ project, setCursorActive, setCursorText }) => {
  return (
    <div
      className="relative w-full md:w-1/2 h-[50vh] md:h-full group overflow-hidden border-r border-white/5 border-b"
      onMouseEnter={() => {
        setCursorActive(true);
        setCursorText("open project*");
      }}
      onMouseLeave={() => {
        setCursorActive(false);
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-10 left-10 z-10 pointer-events-none translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
        <span className="works-category text-indigo-400 font-bold uppercase tracking-widest mb-2 block">
          {project.category}
        </span>
        <h3 className="works-title font-bold text-white">{project.title}</h3>
      </div>
    </div>
  );
};

// --- COMPONENTA WORKS ---
const Works = () => {
  const [cursorActive, setCursorActive] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cursorX = useSpring(mouseX, { damping: 25, stiffness: 400, mass: 0.5 });
  const cursorY = useSpring(mouseY, { damping: 25, stiffness: 400, mass: 0.5 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section
      id="works"
      className="bg-black relative w-full cursor-none min-h-screen"
    >
      {/* 1. CUSTOM CURSOR - MODIFICARE AICI */}
      {/* Am adăugat 'hidden md:block' pentru a ascunde complet cursorul/tooltip-ul pe mobil */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 z-50 pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* Dot mic */}
          <motion.div
            className="absolute w-3 h-3 bg-white rounded-full mix-blend-difference"
            animate={{
              scale: cursorActive ? 0 : 1,
              opacity: cursorActive ? 0 : 1,
            }}
          />
          {/* Tooltip mare */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: cursorActive ? 1 : 0,
              opacity: cursorActive ? 1 : 0,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Button
              className="pointer-events-none !bg-black/40 !backdrop-blur-xl !border-white/20"
              forceHover={true}
            >
              {cursorText}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. BUTONUL CENTRAL (Intersecția celor 4) - RĂMAS NESCHIMBAT */}
      <div className="absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={() => console.log("Navigare la pagina Proiecte")}
          className="pointer-events-auto !bg-black/80 !backdrop-blur-2xl !border-white/30 hover:!bg-black"
        >
          See all projects*
        </Button>
      </div>

      {/* 3. GRIDUL DE PROIECTE */}
      <div className="flex flex-col md:flex-row h-screen w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setCursorActive={setCursorActive}
            setCursorText={setCursorText}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row h-screen w-full">
        {projectsRow2.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            setCursorActive={setCursorActive}
            setCursorText={setCursorText}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
