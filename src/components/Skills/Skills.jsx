import React, { useState, useEffect, useRef } from "react";
import "./Skills.css";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaCogs,
  FaDatabase,
} from "react-icons/fa";

const allSkills = [
  // Front-End
  { name: "HTML5", level: 90, icon: <FaHtml5 />, category: "Front-End" },
  { name: "CSS3", level: 90, icon: <FaCss3Alt />, category: "Front-End" },
  { name: "JavaScript (ES6+)", level: 85, icon: <FaJs />, category: "Front-End" },
  { name: "Bootstrap", level: 90, icon: <FaBootstrap />, category: "Front-End" },
  { name: "React.js", level: 85, icon: <FaReact />, category: "Front-End" },
  { name: "Tailwind CSS", level: 75, icon: <FaCss3Alt />, category: "Front-End" },
  { name: "Responsive & Interactive UI", level: 90, icon: <FaCogs />, category: "Front-End" },
  { name: "UI/UX Design & Figma", level: 95, icon: <FaFigma />, category: "Front-End" },

  // Desktop
  { name: "C#", level: 80, icon: <FaCogs />, category: "Desktop" },
  { name: "Windows Forms", level: 75, icon: <FaCogs />, category: "Desktop" },
  { name: "CRUD Operations", level: 85, icon: <FaDatabase />, category: "Desktop" },

  // Back-End
  { name: "ASP.NET Core (Basics)", level: 60, icon: <FaCogs />, category: "Back-End" },
  { name: "ASP.NET MVC", level: 75, icon: <FaCogs />, category: "Back-End" },
  { name: "Razor Pages", level: 80, icon: <FaCogs />, category: "Back-End" },
  { name: "SQL Server (Basic Queries & CRUD)", level: 95, icon: <FaDatabase />, category: "Back-End" },
  { name: "PHP", level: 60, icon: <FaCogs />, category: "Back-End" },
  { name: "Laravel (Basic)", level: 60, icon: <FaCogs />, category: "Back-End" },

  // Tools & Version Control
  { name: "Git", level: 80, icon: <FaGitAlt />, category: "Tools" },
  { name: "GitHub", level: 80, icon: <FaGithub />, category: "Tools" },
  { name: "Visual Studio Code", level: 90, icon: <FaCogs />, category: "Tools" },
  { name: "Visual Studio", level: 84, icon: <FaCogs />, category: "Tools" }
];

const categories = ["All", "Front-End", "Desktop", "Back-End", "Tools"];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(allSkills);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredSkills(allSkills);
    } else {
      setFilteredSkills(allSkills.filter(skill => skill.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  const cardRef = useRef();
  const [inView, setInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const animatedRef = useRef(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          setInView(true);

          let start = 0;
          const end = skill.level;
          const duration = 1200; 
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            if (start >= end) {
              start = end;
              clearInterval(timer);
            }
            setProgress(start);
          }, stepTime);
        }
      },
      { threshold: 0.4 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, [skill.level]);

  return (
    <div
      ref={cardRef}
      className={`skill-card ${inView ? "fade-slide-in" : "fade-slide-out"}`}
    >
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <h3>{skill.name}</h3>
      </div>

      <div className="progress-wrapper">
        <div className="progress-bg">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <span className="percent">{progress}%</span>
      </div>
    </div>
  );
}
