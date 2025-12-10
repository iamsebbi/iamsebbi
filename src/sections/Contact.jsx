import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, SendHorizontal } from "lucide-react";
import Button from "../components/Button";
import { SOCIAL_LINKS } from "../constants/social";
import globeIcon from "../assets/images/globe.svg";

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
            <div className="flex items-start gap-1 sm:gap-2 md:gap-3 mb-2">
              <ArrowUpRight
                strokeWidth={1.5}
                className="
                  text-white 
                  flex-shrink-0
                  w-36 h-36 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-46 lg:h-46
                  -mt-2 -ml-3
                "
              />
              <h2 className="contact-title font-bold text-white tracking-tighter leading-none">
                Let's get <br className="hidden sm:block" /> in touch*
              </h2>
            </div>

            {/* Email & Social */}
            <div className="space-y-10 sm:space-y-12">
              <div className="space-y-3">
                <p className="contact-label text-gray-500 uppercase tracking-widest font-medium">
                  Email Drop
                </p>
                <a
                  href="mailto:contact@iamsebbi.com"
                  className="contact-email text-white font-medium hover:text-[#007AFF] transition-colors flex items-center gap-3 group break-all"
                >
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 group-hover:text-[#007AFF] transition-colors flex-shrink-0" />
                  prisecarusebastiann@gmail.com
                </a>
              </div>

              <div className="space-y-4">
                <p className="contact-label text-gray-500 uppercase tracking-widest font-medium">
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
                <p className="contact-label text-gray-500 uppercase tracking-widest mb-4 sm:mb-5 font-medium">
                  Global Presence
                </p>
                <div className="flex gap-4 sm:gap-6 lg:gap-8 items-center justify-between sm:justify-start flex-nowrap">
                  {[1, 2, 3].map((num) => (
                    <div
                      key={num}
                      className="flex-1 sm:flex-none w-full sm:w-24 lg:w-28 h-20 sm:h-24 lg:h-28 max-w-[100px] sm:max-w-none flex items-center justify-center"
                    >
                      <img
                        src={globeIcon}
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
                <label className="contact-label text-gray-400 font-medium ml-1 block">
                  Nume
                </label>
                <input
                  type="text"
                  placeholder="Ex: Alex Popescu"
                  className="contact-input w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="contact-label text-gray-400 font-medium ml-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="alex@exemplu.ro"
                  className="contact-input w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="contact-label text-gray-400 font-medium ml-1 block">
                  Mesaj
                </label>
                <textarea
                  rows="4"
                  placeholder="Povestește-mi despre proiectul tău..."
                  className="contact-input w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#007AFF]/50 focus:bg-white/10 transition-all duration-300 resize-none min-h-[100px] sm:min-h-[120px]"
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
