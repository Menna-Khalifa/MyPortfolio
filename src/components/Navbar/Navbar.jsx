import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 86; // offset for fixed navbar
      window.scrollTo({ top, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = "home";
      sections.forEach((section) => {
        const elem = document.getElementById(section.toLowerCase());
        if (elem) {
          const top = elem.offsetTop - 100;
          const bottom = top + elem.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            current = section.toLowerCase();
          }
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">myportfolio</div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => handleScroll(section.toLowerCase())}
            className={activeSection === section.toLowerCase() ? "active" : ""}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}
