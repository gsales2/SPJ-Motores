import React from "react";
import './Produtos.css'
import fotoRolamento from '../../assets/rolamento.webp';
import fotoThorq from '../../assets/thorq.jpeg';
import fotoPeriferica from '../../assets/motobomba_periferica.webp';
import fotoBombaPiscina from '../../assets/bomba_piscina.webp';
import fotoNautilus from '../../assets/motobomba_nautilus.jpeg';
import fotoBoia from '../../assets/boianivel.jpeg';
import fotoSappo from '../../assets/bomba_sappo.webp';
import fotoSeta from '../../assets/seta.png';


export function Produtos() {
    const listaProdutos = [
        {
            nome: 'Rolamentos NSK',
            marca: 'NSK Brasil',
            img: fotoRolamento
        },
        {
            nome: 'Motores de Alta Performance',
            marca: 'THORQ3',
            img: fotoThorq
        },
        {
            nome: 'Motobombas Periféricas',
            marca: 'Claw',
            img: fotoPeriferica
        },
        {
            nome: 'Motobombas para Piscina',
            marca: 'SODRAMAR',
            img: fotoBombaPiscina
        },
        {
            nome: 'Motobombas Autoescorvantes',
            marca: 'Nautilus',
            img: fotoNautilus
        },
        {
            nome: 'Boia de Nível',
            marca: 'ANAUGER',
            img: fotoBoia
        },
        {
            nome: 'Bombas Sappo',
            marca: 'ANAUGER',
            img: fotoSappo
        },
        {
            nome: 'E MUITO MAIS',
            marca: 'Clique aqui e descubra',
            img: fotoSeta
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