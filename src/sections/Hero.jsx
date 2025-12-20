import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "../components/Button";
import MagnifyText from "../components/MagnifyText";
import { scrollToSection } from "../utils/scroll";

// Animation configurations
const TEXT_ANIMATION = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] },
};

const BUTTON_ANIMATION = {
  initial: { opacity: 0, scale: 0.9, y: 20 },
  animate: { opacity: 1, scale: 1, y: 0 },
  transition: { duration: 0.6, delay: 0.5, type: "spring", stiffness: 200 },
};

const SCROLL_INDICATOR_ANIMATION = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { duration: 0.8, delay: 0.8 },
      y: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};

const Hero = () => {
  const handleScrollToWorks = () => scrollToSection("works");
  const videoRef = React.useRef(null);

  // Intersection Observer pentru a opri/porni videoul
  React.useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Secțiunea este vizibilă - pornește videoul
            videoElement.play().catch((err) => {
              console.log("Video autoplay prevented:", err);
            });
          } else {
            // Secțiunea nu mai este vizibilă - oprește videoul
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.25, // Trigger când 25% din secțiune este vizibilă
      }
    );

    observer.observe(videoElement.parentElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center px-6 overflow-hidden bg-black"
    >
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/heroVideo.mp4"
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        {/* Hero Text */}
        <motion.div
          {...TEXT_ANIMATION}
          className="flex flex-col md:flex-row items-center md:items-baseline gap-0 md:gap-4 mb-10 cursor-default"
        >
          <MagnifyText
            text="hello"
            className="hero-hello font-sans tracking-tighter leading-none"
            minWeight={300}
            maxWeight={900}
            introDelay={0.5}
          />
          <h1 className="hero-title font-sans tracking-tighter leading-none -mt-2 md:mt-0 inline-flex">
            <MagnifyText
              text="@iamsebbi"
              as="span"
              className="font-sans tracking-tighter leading-none"
              minWeight={300}
              maxWeight={900}
              introDelay={0.5}
            />
            <motion.span
              className="ml-1 text-white inline-block origin-bottom"
              initial={{ fontWeight: 900, rotate: 0 }}
              animate={{ fontWeight: 300 }}
              transition={{
                fontWeight: {
                  duration: 1.2,
                  delay: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              whileHover={{
                rotate: [0, -10, 10, -10, 0],
                scale: 1.3,
                transition: { duration: 0.5 },
              }}
            >
              *
            </motion.span>
          </h1>
        </motion.div>

        {/* CTA Button */}
        <motion.div {...BUTTON_ANIMATION}>
          <Button
            onClick={handleScrollToWorks}
            glassTheme="hero"
            className="w-36 justify-between !text-2xl md:!text-xl"
          >
            About
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="scroll-indicator absolute bottom-24 md:bottom-8 inset-x-0 mx-auto w-fit z-10 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <ChevronDown
          className="w-8 h-8 text-white/60 hover:text-white transition-colors"
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
