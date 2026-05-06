import React from "react";
import './Footer.css';
import logo from '../../assets/logo-dark.png';

export function Footer() {
    const anoAtual = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container-footer">
                <div className="footer-col">
                    <img src={logo} alt="SPJ Motores" className="footer-logo" />
                    <p>Especialistas em manutenção de motores elétricos e bombas d'agua com mais de 10 anos de experiência em Jacareí.</p>
                    <div className="footer-socials">
                        <a href="https://www.instagram.com/spj_motores/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a>
                        <a href="https://www.facebook.com/spj.motores" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a>
                        <a href="https://wa.me/55129981499071" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#servicos">Serviços</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Localização</h4>
                    <p>R. José Benedito Duarte, 22 - Vila Pinheiro</p>
                    <p>Jacareí - SP, 12307-200</p>
                    <p><strong>(12) 998149-9071</strong></p>
                </div>

                
            </div>
            <div className="footer-bottom">
                    <p>&copy; {anoAtual} SPJ Motores Elétricos. Todos os direitos reservados</p>
                    <p>Desenvolvido por <a href="#">@Lumex</a></p>
                </div>
        </footer>
    )
}