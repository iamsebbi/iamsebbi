import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds, offsetPercent = 0.4) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * offsetPercent;

      // Find the candidate section
      // Logic: The section that contains the 'scrollPosition' point
      const currentSectionId = sectionIds.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          // Check if our point (viewport top + 40% height) is within the section
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (currentSectionId) {
        setActiveId(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Init

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offsetPercent]);

  return activeId;
};

export default useScrollSpy;
