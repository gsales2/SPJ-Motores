import React, { useRef } from "react";
import emailjs from '@emailjs/browser'
import './Contato.css'

export function Contato() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                alert('Mensagem enviada com sucesso! A SPJ Motores entrará em contato.');
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert('Erro ao enviar e-mail. Tente novamente mais tarde.')
            });
    };

    return (
        <section className="contato" id="contato">
            <div className="container-contato">
                <div className="info-contato">
                    <h2>Fale <span>Conosco</span></h2>
                    <p>Tire suas dúvidas ou peça um orçamento sem compromisso</p>

                    <div className="item-info">
                        <i className="fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Endereço</h4>
                            <p>R. José Benedito Duarte, 22 - Vila Pinheiro, Jacareí - SP</p>
                        </div>
                    </div>

                    <div className="item-info">
                        <i className="fa-brands fa-whatsapp"></i>
                        <div>
                            <h4>WhatsApp</h4>
                            <p>(12) 998149-9071</p>
                        </div>
                    </div>

                    <div className="item-info">
                        <i className="fa-solid fa-clock"></i>
                        <div>
                            <h4>Horário de Atendimento</h4>
                            <p>Segunda a Sexta: 08h às 18h</p>
                        </div>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form-contato">
                    <h3>Envie uma <span>Mensagem</span></h3>

                    <div className="input-group">
                        <input type="text" name="from_name" placeholder="Seu Nome" aria-label="Nome" required />
                    </div>

                    <div className="input-group">
                        <input type="email" name="reply_to" placeholder="Seu E-mail" aria-label="Email" required />
                    </div>

                    <div className="input-group">
                        <textarea name="message" placeholder="Como podemos ajudar?" rows="5" required></textarea>
                    </div>

                    <button type="submit" className="btn-enviar">Enviar Mensagem</button>
                </form>
            </div>
            {/* <div className="form-contato">
                    <h3>Envie uma <span>Mensagem</span></h3>
                    <div className="input-group">
                        <input type="text" placeholder="Seu Nome" required />
                    </div>
                    <div className="input-group">
                        <input type="email" placeholder="Seu E-mail" required />
                    </div>
                    <div className="input-group">
                        <textarea placeholder="Como podemos ajudar?" rows='5' required></textarea>
                    </div>
                    <button type="submit" className="btn-enviar">Enviar Mensagem</button>
                </div> */}
        </section >
    )
}