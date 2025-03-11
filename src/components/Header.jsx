import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Fernando Goes</h1>
      <nav>
        <a href="#about">Sobre Mim</a>
        <a href="#projects">Projetos</a>
        <a href="#skills">Habilidades</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;

