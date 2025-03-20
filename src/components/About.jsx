import React, { useEffect, useState } from "react";
import "../styles/About.css";

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
          <h2 className={animationClass}>
            Transforme suas ideias em soluções digitais de alto impacto!
          </h2>

          <p className={animationClass}>
            Olá, sou <strong>Fernando de Goes</strong>, um desenvolvedor
            apaixonado por Tecnologia da Informação e especializado em{" "}
            <strong>desenvolvimento web</strong>. Acredito que a tecnologia tem
            o poder de transformar negócios e criar experiências incríveis para
            os usuários. Com minha experiência em{" "}
            <strong>ReactJS, JavaScript, MongoDB, HTML, CSS e Node.js</strong>,
            posso ajudar sua empresa a criar sites e aplicações personalizadas
            que atendem às suas necessidades e superam as expectativas dos seus
            clientes.
          </p>

          <p className={animationClass}>
            Ao longo da minha jornada como estagiário e freelancer, tive a
            oportunidade de trabalhar em projetos reais, aplicando meus
            conhecimentos para entregar soluções eficientes, de alto desempenho
            e com um design impactante. Estou sempre em busca de aprimorar
            minhas habilidades, garantindo que seu projeto seja construído com
            as tecnologias mais atuais e melhores práticas do mercado.
          </p>

          <h3 className={animationClass}>
            O que eu posso oferecer para o seu negócio:
          </h3>
          <ul className={animationClass}>
            <li>
              <strong>Sites Responsivos e Atraentes:</strong> Com foco em
              experiências incríveis em qualquer dispositivo.
            </li>
            <li>
              <strong>Desenvolvimento Personalizado:</strong> Soluções feitas
              sob medida para as necessidades do seu negócio.
            </li>
            <li>
              <strong>Desempenho e Escalabilidade:</strong> Sites rápidos,
              eficientes e preparados para crescer com o seu negócio.
            </li>
            <li>
              <strong>Compromisso com a Qualidade:</strong> Dedicação em cada
              etapa, do planejamento à entrega, com atenção aos detalhes e
              qualidade garantida.
            </li>
          </ul>

          <p className={animationClass}>
            Se você está buscando um profissional dedicado, apaixonado e sempre
            em busca de novas soluções para o seu negócio, ficarei feliz em
            conversar mais sobre como posso ajudar a levar o seu projeto
            adiante.
          </p>

          <p className={animationClass}>
            <strong>Vamos trabalhar juntos para criar algo incrível!</strong>
          </p>
        </div>
        <div className="about-image">
          <img src="https://i.imgur.com/1V7wmkR.png" alt="Minha Imagem" />
        </div>
      </div>
    </section>
  );
}

export default About;
