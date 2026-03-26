import React from "react";
import './Produtos.css'
import fotoMotor from '../../assets/motor.webp';
import fotoBomba from '../../assets/selos.webp';
import fotoSelos from '../../assets/bomba.webp';
import fotoMotor2 from '../../assets/motor2.webp';


export function Produtos() {
    const listaProdutos = [
        {
            nome: 'Motores Monofásicos',
            marca: 'WEG / Voges',
            img: fotoMotor
        },
        {
            nome: 'Bombas Centrifugas',
            marca: 'Schneider / Darka',
            img: fotoBomba
        },
        {
            nome: 'Selos Mecânicos',
            marca: 'Diersos Tamanhos',
            img: fotoSelos
        },
        {
            nome: 'Motores Monofásicos',
            marca: 'Partida e Marcha',
            img: fotoMotor2
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
                                <img src={prod.img} alt={prod.nome} />
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