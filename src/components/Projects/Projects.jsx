// Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Projects.css";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaFigma,
  FaCut
} from "react-icons/fa";

const projectsData = [
  {
    name: "Bookify – Hotel Reservation System",
    role: "Front-End Developer",
    skills: [
      { name: "Razor", icon: <FaCut /> },
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "Git", icon: <FaGitAlt /> },
      
    ],
    description:
      "Designed complete UI/UX in Figma, covering layouts, screens, and user flows. Built responsive interfaces using HTML, CSS, JavaScript, Bootstrap, and Tailwind CSS. Converted designs into dynamic Razor Pages with clean layout structure. Developed interactive pages for browsing, reservations, and booking workflows. Applied responsive design and cross-browser compatibility best practices.",
    images: [
      "/images/1.png",
      "/images/2.png",
      "/images/3.png",
      "/images/4.png",
      "/images/5.png"
    ],
    github: "https://github.com/Menna-Khalifa/Hotel_Reservation_System",
    live: "https://dynamic-nougat-30bc4c.netlify.app/"
  }
];

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const prev = () =>
    setIndex((i) => (i - 1 + project.images.length) % project.images.length);
  const next = () =>
    setIndex((i) => (i + 1) % project.images.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
  }, []);

  return (
    <article
      className={`project-card ${visible ? "show" : ""}`}
      ref={cardRef}
    >
      <div className="project-top">
        <div className="slider-viewport">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {project.images.map((img, i) => (
              <div className="slide" key={i}>
                <img src={img} alt={`${project.name} screenshot ${i + 1}`} />
              </div>
            ))}
          </div>

          {project.images.length > 1 && (
            <>
              <button className="arrow left" onClick={prev}>&lt;</button>
              <button className="arrow right" onClick={next}>&gt;</button>
            </>
          )}
        </div>
      </div>

      <div className="project-bottom">
        <h3 className="proj-title">{project.name}</h3>

        <div className="proj-skills">
          {project.skills.map((s, i) => (
            <div className="skill-badge" key={i}>
              {s.icon} <span>{s.name}</span>
            </div>
          ))}
        </div>

        <div className="proj-meta">
          <span className="label">Role :</span>
          <span className="meta-text">{project.role}</span>
        </div>

        <p className="proj-desc">{project.description}</p>

        <div className="proj-actions">
          <a className="btn ghost" href={project.github} target="_blank" rel="noreferrer">
            <FaGithub /> GitHub
          </a>
          <a className="btn demo" href={project.live} target="_blank" rel="noreferrer">
            <FaExternalLinkAlt /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section className="projects container" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-list">
        {projectsData.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </section>
  );
}
