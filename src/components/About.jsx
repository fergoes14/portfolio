import React, { useEffect, useState } from "react";

import '../styles/About.css';

function About() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Após o componente ser montado, adiciona a classe da animação
    setAnimationClass("title");
  }, []);
  return (
    <section class="about">
      <div class="about-content">
        <div class="about-text">
          <h2 className="title">Sobre Mim</h2>
          <p  className="title">
            Olá! Eu sou Fernando de Goes, apaixonado por tecnologia e com uma jornada de aprendizado que começou como estagiário na Prefeitura de Votorantim. Desde lá, mergulhei de cabeça no mundo da programação e da cibersegurança, desenvolvendo habilidades em ReactJS, JavaScript, HTML, CSS, MongoDB, e muito mais.

            Trabalhei em projetos que envolvem desde a criação de dashboards interativos até o desenvolvimento de aplicações para resolver problemas do dia a dia, como o projeto "Coworking Universidades Sorocaba". Acredito que a chave para o sucesso está na combinação de boas práticas de codificação com uma constante busca por inovação.

            Com um forte interesse em hacking e segurança digital, sempre busco maneiras de aplicar essas paixões para criar soluções cada vez mais robustas e seguras. Estou sempre em busca de novos desafios e de me aprimorar para ajudar a transformar ideias em realidade.

            Se você está procurando por alguém que seja dedicado, criativo e que tenha uma visão estratégica para o futuro da tecnologia, estou aqui para conversar!
          </p>
        </div>
        <div class="about-image">
          <img src="https://i.imgur.com/1V7wmkR.png" alt="Minha Imagem" />
        </div>
        
      </div>
    </section>
  );
}

export default About;
