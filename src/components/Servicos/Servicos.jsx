import React from "react";
import './Servicos.css'

export function Servicos() {
    const listaServicos = [
        {
            titulo: "Motores Elétricos",
            descricao: "Manutenção em geral, troca de rolamentos, pintura e rebobinamento (isolamento B/F/H).",
            icone: "fa-solid fa-gear"
        },
        {
            titulo: "Bombas d'Água",
            descricao: "Especialistas em bombas de irrigação, reservatório, piscina e sistemas de incêndio.",
            icone: "fa-solid fa-droplet"
        },
        {
            titulo: "Assistencia Anauger",
            descricao: "Assistencia Técnica autorizada e especializada em toda a linha de produtos Anauger.",
            icone: "fa-solid fa-wrench"
        }
    ];

    return (
        <section className="servicos" id="servicos">
            <div className="servicos-container">
                <h2 className="titulo-secao">Nossos <span>Serviços</span></h2>
                <div className="servicos-grid">
                    {listaServicos.map((servico, index) => (
                        <div className="card-servico" key={index}>
                            <div className="icon-box">
                                <i className={servico.icone}></i>
                            </div>
                            <h3>{servico.titulo}</h3>
                            <p>{servico.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}