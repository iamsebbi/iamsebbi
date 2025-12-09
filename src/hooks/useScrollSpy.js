import { useState, useEffect } from "react";

const useScrollSpy = (sectionIds, offset = 100) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Verificăm poziția fiecărei secțiuni
      const currentSectionId = sectionIds.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Dacă partea de sus a secțiunii e aproape de partea de sus a ecranului
          // (plus offset-ul pentru navbar)
          return rect.top <= offset && rect.bottom >= offset;
        }
        return false;
      });

      if (currentSectionId) {
        setActiveId(currentSectionId);
      }
    };

    // Ascultăm evenimentul de scroll
    window.addEventListener("scroll", handleScroll);

    // Declanșăm o dată la încărcare
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
