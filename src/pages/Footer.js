import React from "react";
import logoImg from "../assets/Combined Shape.png";
import "./All.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logoImg} alt="Logo" className="footer-logo-img" />
          <p>Айболит - ветеринарная клиника</p>
        </div>
        <div className="footer-column">
          <h4>Покупка</h4>
          <a href="/write">Консультация в онлайне</a>
        </div>
        <div className="footer-column">
          <h4>Услуги и цены</h4>
          <a href="/history">История компании</a>
          <a href="/collective">Наши специалисты</a>
          <a href="/write">Онлайн-оплата</a>
        </div>
        <div className="footer-column">
          <h4>Отзывы</h4>
          <a href="/contacts">Контакты</a>
          <a href="/blog">Блог</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-contact">
          <p>aibolit34.ru</p>
          <p>aibolit34@gmail.com</p>
        </div>
      </div>
      <p className="footer-signature">Made with ❤️ UnitBean</p>
    </footer>
  );
}

export default Footer;
