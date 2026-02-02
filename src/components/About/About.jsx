import React, { useEffect } from "react";
import "./About.css";

export default function About() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.3 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-content reveal">
        <h2 className="about-title">
          About <span>Me</span>
        </h2>

        <p className="about-text">
          I’m <strong>Menna Khalifa</strong>, a dedicated Front-End Developer with a strong
          focus on building modern, scalable, and visually engaging web applications.
          I specialize in <strong>React</strong> and modern front-end technologies, with
          a deep understanding of responsive design, component-based architecture,
          and clean, maintainable code.
          <br /><br />
          My work revolves around creating smooth user experiences through
          interactive interfaces, subtle animations, and performance-aware
          implementations. I pay close attention to details, ensuring every element
          feels intentional, polished, and aligned with user expectations.
          <br /><br />
          In addition to front-end development, I have hands-on experience with
          <strong> Windows Forms using C#</strong>, database integration, and a solid
          foundation in <strong>.NET MVC back-end development</strong>, which allows me
          to collaborate effectively across the full stack.
          
        </p>
      </div>
    </section>
  );
}
