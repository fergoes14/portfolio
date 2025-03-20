import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Fernando Goes</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/about">Sobre Mim</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
