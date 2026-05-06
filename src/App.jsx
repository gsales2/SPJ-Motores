import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero'; 
import { Servicos } from './components/Servicos/Servicos';
import { Contato } from './components/Contato/Contato';
import { Produtos } from './components/Produtos/Produtos';
import { Sobre } from './components/Sobre/Sobre';
import { Footer } from './components/Footer/Footer'
import { Mapa } from './components/Mapa/Mapa'
import './index.css'; 

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Servicos />
      <Produtos />
      <Sobre />
      <Contato />
      <Mapa />
      <Footer />

      <a
      href='https://wa.me/5512997687950'
      className='whatsapp-fixed'
      target='_blank'
      rel='noreferrer'
      aria-label='Falar no WhatsApp'
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
    </div>
  );
}