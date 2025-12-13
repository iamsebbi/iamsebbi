import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import BlurImage from "../components/BlurImage";
import { projects, projectsRow2 } from "../constants/services";

// --- COMPONENTA CARD ---
const ProjectCard = ({ project, setCursorActive, setCursorText, index = 0 }) => {
  const [isCardActive, setIsCardActive] = useState(false);
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative w-full md:w-1/2 h-[50vh] md:h-full group overflow-hidden border-r border-white/5 border-b"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      onMouseEnter={() => {
        setCursorActive(true);
        setCursorText("about projects*");
      }}
      onMouseLeave={() => {
        setCursorActive(false);
      }}
    >
      {/* BlurImage Component */}
      <BlurImage
        src={project.image}
        alt={project.title}
        grayscale={true}
        blurAmount="blur-xl"
        showNoise={true}
        onTap={() => navigate(`/services/${project.slug}`)}
        onActiveChange={setIsCardActive}
      />
      
      {/* Overlay întunecat */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-all duration-500 pointer-events-none" />
      
      {/* Titlu și categorie - stânga-jos pe mobil și desktop, ascuns când activ pe mobil */}
      <div className={`absolute inset-0 flex flex-col z-10 pointer-events-none transition-all duration-500 ease-out
        justify-end items-start pb-6 pl-4 pr-4
        md:pb-10 md:pl-10 md:pr-10
        ${isCardActive ? "opacity-0" : "opacity-100"}
        md:opacity-0 md:group-hover:opacity-100`}
      >
        <span className={`works-category text-[#007AFF] font-bold uppercase tracking-widest mb-1 transition-all duration-500
          text-xs
          md:translate-y-4 md:group-hover:translate-y-0
          md:text-sm md:tracking-wider`}
        >
          {project.category}
        </span>
        <h3 className={`font-bold text-white px-0 transition-all duration-500
          works-title !text-[2.5rem] md:!text-[6rem]
          md:translate-y-4 md:group-hover:translate-y-0 md:delay-75
          text-left leading-[1.1] uppercase tracking-tight break-words`}
        >
          {project.title}
        </h3>
      </div>
    </motion.div>
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
              className="pointer-events-none"
              forceHover={true}
            >
              {cursorText}
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. BUTONUL CENTRAL (Intersecția celor 4) */}
      <div className="absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
        <Button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="pointer-events-auto !bg-black/80 !backdrop-blur-2xl !border-white/30 hover:!bg-black"
        >
          See all services*
        </Button>
      </div>

      {/* 3. GRIDUL DE PROIECTE */}
      <div className="flex flex-col md:flex-row h-screen w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            setCursorActive={setCursorActive}
            setCursorText={setCursorText}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row h-screen w-full">
        {projectsRow2.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index + projects.length}
            setCursorActive={setCursorActive}
            setCursorText={setCursorText}
          />
        ))}
      </div>
    </section>
  );
};

export default Works;
