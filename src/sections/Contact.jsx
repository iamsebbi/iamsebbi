import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  SendHorizontal,
} from "lucide-react";
import Button from "../components/Button";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit form!");
  };

  return (
    <section
      id="contact"
      className="relative flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24"
    >
      {/* Container cu Max Width Extins */}
      <div className="container mx-auto max-w-screen-2xl relative z-10 w-full">
        {/* Grid cu Gap Masiv */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-32 xl:gap-48 items-stretch">
          {/* === COLOANA STÂNGA - Info === */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10 sm:space-y-12 lg:space-y-14 h-full flex flex-col justify-between p-6 sm:p-8 lg:p-10"
          >
            {/* Header */}
            <div className="flex items-start gap-4 sm:gap-6 md:gap-8 mb-2">
              <ArrowRight
                strokeWidth={1.5}
                className="
                  text-white 
                  transition-transform duration-500 hover:translate-x-4
                  flex-shrink-0
                  w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32
                  mt-0 -ml-2
                "
              />
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none">
                Let's get <br className="hidden sm:block" /> in touch*
              </h2>
            </div>

            {/* Email & Social */}
            <div className="space-y-10 sm:space-y-12">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium">
                  Email Drop
                </p>
                <a
                  href="mailto:contact@iamsebbi.com"
                  className="text-xl sm:text-2xl md:text-3xl text-white font-medium hover:text-[#007AFF] transition-colors flex items-center gap-3 group break-all"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-[#007AFF] transition-colors flex-shrink-0" />
                  prisecarusebastiann@gmail.com
                </a>
              </div>

              <div className="space-y-4">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest font-medium">
                  Follow Me
                </p>
                <div className="flex gap-4 sm:gap-6">
                  {SOCIAL_LINKS.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      aria-label={item.label}
                      className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-110"
                    >
                      <item.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Globe SVG */}
              <div className="pt-2 sm:pt-4">
                <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-4 sm:mb-5 font-medium">
                  Global Presence
                </p>
                <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center justify-between sm:justify-start flex-nowrap">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="flex-1 sm:flex-none w-full sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 max-w-[100px] sm:max-w-none flex items-center justify-center"
                    >
                      <img
                        src="/globe.svg"
                        alt={`Globe ${num}`}
                        className="w-full h-full filter invert opacity-80"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* === COLOANA DREAPTĂ - Formular === */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.5)] p-6 sm:p-8 md:p-10 w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-medium ml-1 block">
                  Nume
                </label>
                <input
                  type="text"
                  placeholder="Ex: Alex Popescu"
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-medium ml-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="alex@exemplu.ro"
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs sm:text-sm text-gray-400 font-medium ml-1 block">
                  Mesaj
                </label>
                <textarea
                  rows="4"
                  placeholder="Povestește-mi despre proiectul tău..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all duration-300 resize-none min-h-[100px] sm:min-h-[120px]"
                  required
                ></textarea>
              </div>

              <div className="pt-2 sm:pt-4">
                <Button icon={SendHorizontal} rotateIcon={false}>
                  Submit
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
