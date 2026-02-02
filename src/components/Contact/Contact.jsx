import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <div className="contact-container">
        {/* Form Card */}
        <div className="contact-card form-card">
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Info Card */}
        <div className="contact-card info-card">
          <h3>Get in touch</h3>
          <p>Feel free to contact me via any of the platforms below!</p>
          <div className="social-links">
            <a href="mailto:mennakhalifa93@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope /> Email
            </a>
            <a href="https://github.com/Menna-Khalifa" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/menna-khalifa-amer/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
