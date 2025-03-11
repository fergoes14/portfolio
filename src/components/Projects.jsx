import React from "react";
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-container"> {/* Adicionado o container para os projetos */}
        <div className="project-card">

          <h3>Projeto 1</h3>
          <div className="project-image-container">
            <img src="https://i.imgur.com/fc7GzZX.png" alt="Projeto 1" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Descrição do projeto</p>
          <a href="https://github.com/fergoes14/portfolio.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        <div className="project-card">

          <h3>Projeto 1</h3>
          <div className="project-image-container">
            <img src="https://i.imgur.com/Buz0LMR.png" alt="Projeto 1" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Descrição do projeto</p>
          <a href="https://github.com/seu-usuario/projeto1" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Adicionar outros projetos aqui com a mesma estrutura */}
      </div>
    </section>
  );
}

export default Projects;




