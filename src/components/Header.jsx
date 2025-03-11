import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Fernando Goes</h1>
      <nav>
        <a><Link to="/">Início</Link></a>
        <a> <Link to="/about">Sobre Mim</Link></a>
        <a> <Link to="/projects">Projetos</Link></a>
        <a><Link to="/contact">Contato</Link> </a>

      </nav>
    </header>
  );
}

export default Header;

