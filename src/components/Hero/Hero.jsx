import React from 'react'
import './Hero.css'

export function Hero() {
    return (
        <section className='hero' id='home'>
            <div className="hero-content">
                <h1>Motores & Bombas <span>com quem entende</span></h1>
                <p>Manutenção especializada com 10 anos de tradição em Jacareí</p>
                <div className="hero-btns">
                    <a href="#contato" className="btn-hero">
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        </section>
    )
}