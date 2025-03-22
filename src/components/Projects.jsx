import React from "react";
import '../styles/Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Meus Projetos</h2>
      <div className="project-container"> {/* Adicionado o container para os projetos */}

        <div className="project-card">
          <h3>Jump Pixel</h3>
          <div className="project-image-container">
            <img src="https://i.imgur.com/LQRitJP.png" alt="Projeto" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Game baseado no flappy-bird apenas para pc em React</p>
          <a href="hhttps://github.com/fergoes14/jump-pixel" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        <div className="project-card">
          <h3>Nathy personalizados</h3>
          <div className="project-image-container">
            <img src="https://i.imgur.com/acPmuAn.png" alt="Projeto" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Vitrine em andamento para uma papelaria personalizada</p>

          <a href="https://nathypersonalizados.netlify.app/" target="_blank" rel="noopener noreferrer">nathypersonalizados.netlify.app</a>
        </div>

        <div className="project-card">

          <h3>Portfólio</h3>


          <div className="project-image-container">
            <img src="https://i.imgur.com/7PrgUml.png" alt="Projeto" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Código completo do Portfólio</p>
          <a href="https://github.com/fergoes14/portfolio.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        <div className="project-card">

          <h3>API Clima</h3>
          <div className="project-image-container">
            <img src="https://i.imgur.com/1KzH7sb.png" alt="Projeto" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Dashboard Interativo em React</p>
          <a href="https://github.com/fergoes14/dashboard.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        <div className="project-card">

          <h3>Fundamentos React</h3>
          <div className="project-image-container">
            <img src="https://i.imgur.com/88ZlbHW.png" alt="Projeto" className="project-image" /> {/* Imagem do projeto */}
          </div>
          <p>Apenas componentes de estudos basicos do React</p>
          <a href="https://github.com/fergoes14/fundamentos-react.git" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
        </div>

        {/* Adicionar outros projetos aqui com a mesma estrutura */}
      </div>
    </section>
  );
}

export default Projects;




