import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Button from "../components/Button";
import profileImage from "../assets/images/profile.jpg";

const About = () => {
  // Configurație animații
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    // AM MODIFICAT AICI: 'md:flex-row' -> 'md:flex-row-reverse'
    // Asta pune imaginea (primul copil din HTML) în dreapta pe ecrane mari.
    <section
      id="about"
      className="min-h-screen bg-black flex flex-col md:flex-row-reverse text-white overflow-hidden"
    >
      {/* --- 1. POZA (Rămâne prima în cod pentru a fi sus pe mobil) --- */}
      <motion.div
        className="w-full md:w-1/2 h-[60vh] md:h-screen relative"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* 👇 AICI ESTE MODIFICAREA */}
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-40" />
      </motion.div>

      {/* --- 2. CONȚINUT TEXT (Apare în stânga datorită flex-row-reverse) --- */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-20 bg-black">
        <motion.div
          className="max-w-xl w-full"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Section Label */}
          <motion.div
            variants={fadeIn}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-white/40"></span>
            <span className="about-label text-gray-400 uppercase tracking-widest font-semibold">
              About me
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeIn}
            className="about-heading font-bold mb-6 leading-tight"
          >
            Creative Developer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              & UI/UX Designer
            </span>
          </motion.h2>

          {/* Short Description */}
          <motion.p
            variants={fadeIn}
            className="about-paragraph text-gray-400 leading-relaxed mb-8"
          >
            Passionate about creating unique digital experiences, I combine art with 
            technology to transform visions into reality. Every project 
            is an opportunity to innovate and exceed expectations.
          </motion.p>

          {/* Technical Skills */}
          <motion.div variants={fadeIn} className="mb-10">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4">
              Technical Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {["React", "JavaScript", "TypeScript", "Node.js", "Next.js", "Tailwind CSS", "Figma", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-gray-300 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Experience Stats */}
          <motion.div
            variants={fadeIn}
            className="grid grid-cols-3 gap-8 mb-12 border-t border-white/10 pt-8"
          >
            <div>
              <h4 className="about-stat font-bold text-white">5+</h4>
              <p className="footer-text text-gray-500 mt-1">Years Experience</p>
            </div>
            <div>
              <h4 className="about-stat font-bold text-white">40+</h4>
              <p className="footer-text text-gray-500 mt-1">Projects</p>
            </div>
            <div>
              <h4 className="about-stat font-bold text-white">100%</h4>
              <p className="footer-text text-gray-500 mt-1">Satisfaction</p>
            </div>
          </motion.div>

          <motion.div variants={fadeIn}>
            <Button
              icon={Download}
              rotateIcon={false}
              onClick={() => console.log("Download CV")}
            >
              Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
