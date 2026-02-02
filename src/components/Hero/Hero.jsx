import React from "react";
import "./Hero.css";
import profile from "../../assets/photo_2025-09-02_18-28-16.jpg";
import { FaFileAlt, FaPaperPlane, FaFacebookF, FaLinkedinIn, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <img src={profile} alt="profile" className="hero-img" />
      </div>
      <div className="hero-right">
        <h1 className="hero-title fade-in-right">
          Hello! I’m <span className="highlight">Menna Khalifa</span>,<br />
          Crafting <span className="highlight">interactive</span> and <span className="highlight">modern</span> web experiences.
        </h1>
        <p className="hero-paragraph fade-in-right" style={{animationDelay: "0.5s"}}>
          I turn ideas into clean, efficient, and user-friendly Front-End projects. Let’s create something amazing together!
        </p>
        <div className="social-icons fade-in-right" style={{animationDelay: "0.8s"}}>
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://www.linkedin.com/in/menna-khalifa-amer/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://github.com/Menna-Khalifa" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://wa.me/0123456789" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
        </div>
        <div className="hero-buttons fade-in-right" style={{animationDelay: "1s"}}>
          <a href="/CV.pdf" target="_blank" rel="noreferrer" className="btn">
            <FaFileAlt className="btn-icon" /> View CV
          </a>
          <a href="#contact" className="btn hire">
            <FaPaperPlane className="btn-icon" /> Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}
