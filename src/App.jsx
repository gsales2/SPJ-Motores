import React from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero'; 
import { Servicos } from './components/Servicos/Servicos'
import './index.css'; 

export default function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Servicos />
    </div>
  );
}