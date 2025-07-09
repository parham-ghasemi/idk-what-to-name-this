import { useState } from "react";
import "./NavBar.scss";

const NavBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      setCurrentSection(id);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentSection, setCurrentSection] = useState("about");

  const sections = [
    { id: "about", label: "معرفی مرکز" },
    { id: "departments", label: "بخش‌ها" },
    { id: "specialists", label: "متخصصان" },
    { id: "insurance", label: "بیمه" },
  ];

  return (
    <div className="medical-center-navbar">
      {sections.map((section) => (
        <div
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className={`medical-center-navbar__item ${
            section.id === currentSection
              ? "medical-center-navbar__item--active"
              : ""
          }`}
        >
          {section.label}
        </div>
      ))}
    </div>
  );
};

export default NavBar;
