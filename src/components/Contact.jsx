import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const handleWhatsAppClick = () => {
    const message = "Olá, Fernando! Encontrei seu portfólio e gostaria de saber mais sobre seu trabalho como desenvolvedor. Podemos conversar?"
      ;
    const phoneNumber = "15998103788"; // Número de telefone no formato internacional sem espaços
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <p className="contact-description">
        Você pode me contatar através dos canais abaixo. Fique à vontade para
        mandar uma mensagem, estou sempre disponível para conversar sobre
        projetos e outras oportunidades!
      </p>

      <div className="contact-info">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">fergoes02@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaWhatsapp className="contact-icon" />
          <span className="contact-text">(15) 99810-3788</span>
        </div>
      </div>

      <button className="contact-button" onClick={handleWhatsAppClick}>
        Entrar em Contato
      </button>
    </section>
  );
}

export default Contact;
