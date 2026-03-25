import { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";

export function Header() {
  const [active, setActive] = useState(false);

  function toggleMenu() {
    setActive(!active);
  }

  function closeMenu() {
    setActive(false);
  }

  return (
    <header className="header">
      <img src={logo} alt="SPJ Motores" className="logo" />

      <nav className={active ? "nav nav-active" : "nav"}>
        <ul>
          <li>
            <a href="#servicos" onClick={closeMenu}>
              Serviços
            </a>
          </li>
          <li>
            <a href="#produtos" onClick={closeMenu}>
              Produtos
            </a>
          </li>
          <li>
            <a href="#sobre" onClick={closeMenu}>
              sobre
            </a>
          </li>
          <li>
            <a href="#orcamento" className="btn-header" onClick={closeMenu}>
              Orçamento
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile" onClick={toggleMenu}>
        <i className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
      </button>
    </header>
  );
}
