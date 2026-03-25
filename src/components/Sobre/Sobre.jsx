import React from "react";
import './Sobre.css'

export function Sobre() {
    return (
        <section className="sobre" id="sobre">
            <div className="container-sobre">
                <div className="sobre-img">
                    <img src="../../src/assets/hero.avif" alt="Oficina SPJ Motores"/>
                </div>
                <div className="sobre-texto">
                    <h2>Sobre a <span>SPJ Motores</span></h2>
                    <p>Com mais de <span>10 anos de atuação em Jacareí</span>, a SPJ Motores nasceu com o objetivo de oferecer soluções rápidas e definitivas em manutenção industrial e residencial</p>
                    <p>Nossa oficina conta com bancadas de teste modernas e uma equipe técnica especiaizada em rebobinamento e mecânica de precisão, garantindo que seu equipamento volte a operar com performance máxima</p>
                    <div className="sobre-stats">
                        <div><strong>10+</strong><span>Anos</span></div>
                        <div><strong>5K+</strong><span>Serviços</span></div>
                    </div>
                </div>
            </div>
        </section>
    )
}