import React from "react";
import './Produtos.css'

export function Produtos() {
    const listaProdutos = [
        {
            nome: 'Motores Monofásicos',
            marca: 'WEG / Voges',
            img: 'caminho-da-img'
        },
        {
            nome: 'Bombas Centrifugas',
            marca: 'Schneider / Darka',
            img: 'caminho-da-img'
        },
        {
            nome: 'Selos Mecânicos',
            marca: 'Diersos Tamanhos',
            img: 'caminho-da-img'
        },
        {
            nome: 'Motores Monofásicos',
            marca: 'Partida e Marcha',
            img: 'caminho-da-img'
        },
    ];

    return (
        <section className="produtos" id="produtos">
            <div className="produtos-container">
                <h2>Nossos <span>Produtos</span></h2>
                <div className="produtos-grid">
                    {listaProdutos.map((prod, index) => (
                        <div className="card-produto" key={index}>
                            <div className="prod-img">
                                {/* <img src={prod.img} alt={prod.nome} /> */}
                                <span style={{color: '#999', fontSize: '0.8rem'}}>Foto em breve</span>
                            </div>
                                <h4>{prod.nome}</h4>
                                <span className="marca-prod">{prod.marca}</span>
                                <a href="#contato" className="btn-consultar">Consultar Preços</a>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}