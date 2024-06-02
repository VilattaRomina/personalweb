import "./SideNav.css";
import { useState, useEffect } from "react";

const SideNav = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["presentation", "experiences", "skills", "menu"];

  const handleSectionClick = (index) => {
    setActiveSection(index);
    document.getElementById(sections[index]).scrollIntoView({ behavior: "smooth" });
  };

  // Creo instancia de IntersectionObserver para detectar la sección visible
  const intersectionObserver = new IntersectionObserver((entries) => {
    // Busco el índice de la sección visible
    const visibleSectionIndex = entries.findIndex((entry) => entry.isIntersecting);
    const debouncedSetActiveSection = () => {
        if ( visibleSectionIndex !== activeSection) {
          setActiveSection(visibleSectionIndex);
        }
      };

      setTimeout(debouncedSetActiveSection, 50); // tiempo de espera para evitar cambios bruscos
    }, {
      root: null, 
      threshold: 0.45, // 50% de la sección visible
    });

  // Observo cada elemento de sección
  useEffect(() => {
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        intersectionObserver.observe(sectionElement);
      }
    });

    // Al desmontar el componente, dejo de observar los elementos
    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          intersectionObserver.unobserve(sectionElement);
        }
      });
    };
  }, [sections]);

  return (
    <nav className="side-nav">
      {sections.map((section, index) => (
        <button
          key={index}
          className={`nav-link ${activeSection === index ? "active" : ""}`}
          onClick={() => handleSectionClick(index)}
        >
        </button>
      ))}
    </nav>
  );
};

export default SideNav;
