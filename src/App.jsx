import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero'; 
import { Servicos } from './components/Servicos/Servicos'
import { Contato } from './components/Contato/Contato'
import './index.css'; 

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Servicos />
      <Contato />

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