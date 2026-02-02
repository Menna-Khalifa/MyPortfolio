import React, { useRef, useEffect, useState } from "react";
import "./Experience.css";

const experienceData = [
  {
    title: "Full-Stack Web Development Trainee",
    company: "Digital Training Center (DTC), Mansoura University",
    period: "Jun 2024 – Nov 2024",
    description: [
      "Designed and developed responsive web interfaces using HTML, CSS, JavaScript, Bootstrap, Tailwind, and React.",
      "Implemented interactive UI components and dynamic features to enhance user experience.",
      "Studied basic PHP concepts and gained a simple introduction to Laravel and WordPress for backend fundamentals.",
    ]
  },
  {
    title: ".NET Full-Stack Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI Round 3)",
    period: "Jun 2025 – Dec 2025",
    description: [
      "Built front-end applications using C#, Windows Forms, and MVC architecture for desktop and web interfaces.",
      "Learned backend fundamentals with ASP.NET Core, Razor Pages, and SQL Server for front-end and database integration.",
      "Developed CRUD operations, form validations, and interactive user interfaces for real-world applications.",
    ]
  },
  {
    title: "Freelance Front-End Developer",
    company: "Self-Employed",
    period: "2025 – Present",
    description: [
      "Developed responsive landing pages, login systems, and small web applications using HTML, CSS, JavaScript, and React.",
      "Collaborated with clients to gather requirements and deliver functional software."
    ]
  }
];

export default function Experience() {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setInView(true);
        });
      },
      { threshold: 0.15 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`experience container reveal ${inView ? "in-view" : ""}`}
      id="experience"
      ref={ref}
    >
      <h2 className="section-title">Experience</h2>
      <div className="timeline-wrap">
        {experienceData.map((exp, i) => (
          <div
            className={`timeline-item ${i % 2 === 0 ? "left" : "right"}`}
            key={i}
          >
            <div className="timeline-card">
              <div className="meta">
                <div className="role">{exp.title}</div>
                <div className="company">{exp.company}</div>
              </div>
              <div className="period">{exp.period}</div>
              <ul className="desc">
                {exp.description.map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
