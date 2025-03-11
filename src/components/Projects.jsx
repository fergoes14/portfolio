import React from "react";
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-container"> {/* Adicionado o container para os projetos */}
        <div className="project-card">
          <h3>Projeto 1</h3>
          <p>Descrição do projeto</p>
          <a href="https://github.com/seu-usuario/projeto1" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
        <div className="project-card">
          <h3>Projeto 2</h3>
          <p>Descrição do projeto</p>
          <a href="https://github.com/seu-usuario/projeto2" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
        <div className="project-card">
          <h3>Projeto 3</h3>
          <p>Descrição do projeto</p>
          <a href="https://github.com/seu-usuario/projeto3" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
        <div className="project-card">
          <h3>Projeto 4</h3>
          <p>Descrição do projeto</p>
          <a href="https://github.com/seu-usuario/projeto4" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;



