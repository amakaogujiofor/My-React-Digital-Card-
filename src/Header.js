import React from "react";

export default function Header() {
  return (
    <div className="header">
      <img src="./amaka.hero.jpeg" alt="amaka-ogujiofor" className="hero" />
      <h1>Amaka Ogujiofor</h1>
      <h3 className="role">Frontend Developer</h3>
      <a
        href="https://amakaogujiofor.netlify.app"
        target="_blank"
        rel="noreferrer"
        className="web-link"
      >
        amakaogujiofor.netlify.app
      </a>
      <div className="email-container">
        <a href="mailto:amakaogujiofor@gmail.com" className="email-link">
          <i class="fas fa-envelope mail-logo"></i> Email
        </a>
      </div>
    </div>
  );
}
