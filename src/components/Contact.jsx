import React from "react";
import '../styles/Contact.css';

function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contato</h2>
            <form>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Mensagem</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}

export default Contact;
