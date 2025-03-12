import React, { useEffect, useState } from "react";
import '../styles/About.css';

function About() {
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Após o componente ser montado, adiciona a classe da animação
    setAnimationClass("title"); // Adiciona a classe de animação
  }, []);

  return (
    <section className="about">
      <div className="about-content">
        <div className="about-text">
          <h2 className={animationClass}>Sobre Mim</h2>
          <p className={animationClass}>
            Meu nome é Fernando de Goes e sou um desenvolvedor apaixonado por Tecnologia da Informação. Desde que comecei minha trajetória na área, sempre fui fascinado pela forma como a tecnologia pode transformar o mundo ao nosso redor. Minha curiosidade me levou a me aprofundar em diversas ferramentas e tecnologias, com foco no desenvolvimento web.

            Tenho experiência em ReactJS, JavaScript, MongoDB, HTML, CSS e Node.js, com um grande interesse em aprimorar minhas habilidades e aprender mais sobre cada uma dessas tecnologias. Durante meu tempo como estagiário e freelancer, pude aplicar esses conhecimentos em projetos reais, sempre com o objetivo de entregar soluções eficientes e de qualidade.

            Além disso, sou uma pessoa dedicada e comprometida em crescer profissionalmente. Estou em busca de novas oportunidades para expandir minhas competências e contribuir com o time de desenvolvimento. Acredito que a combinação da minha paixão por tecnologia e o meu desejo contínuo de aprender podem agregar muito à sua equipe.

            Fico à disposição para conversar mais sobre como posso contribuir para o sucesso de sua empresa e estou ansioso para a oportunidade de discutir em mais detalhes as minhas habilidades e experiências.          </p>
        </div>
        <div className="about-image">
          <img src="https://i.imgur.com/1V7wmkR.png" alt="Minha Imagem" />
        </div>
      </div>
    </section>
  );
}

export default About;
