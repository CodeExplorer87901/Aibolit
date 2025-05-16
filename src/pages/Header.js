import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Combined Shape.png";
import "./All.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <img className="logo" src={logoImg} alt="pets" />
        <button
          className="burger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav>
          <Link to="/">На Главный</Link>
          <div className="dropdown">
            <Link to="/about" className="dropdown-toggle">
              О нас
            </Link>
            <div className="dropdown-menu">
              <Link to="/collective">Коллектив</Link>
              <Link to="/history">История компании</Link>
            </div>
          </div>
          <Link to="/contacts">Контакты</Link>
          <Link to="/blog">Блог</Link>
        </nav>
      </header>

      <aside className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-menu"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          ✖
        </button>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/history">О нас</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/contacts">Контакты</Link>
          <Link to="/blog">Блог</Link>
        </nav>
      </aside>
    </>
  );
}

export default Header;
