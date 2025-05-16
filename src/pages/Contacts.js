import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../pages/All.css";
import { Link } from "react-router-dom";

function Contacts() {
  return (
    <div className="app">
      <Header />
      <main className="contacts">
        <h1>Контакты</h1>
        <nav className="breadcrumb">
          <Link to="/about">О нас</Link> <span>Специалисты</span>
        </nav>
        <p>Здесь будет информация для связи с нами: телефон, email, адрес.</p>
        <section className="contact-info">
          <div className="contact-address">
            <h3>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ai ai-CheckIn"
              >
                <path d="M12 2a6 6 0 0 0-6 6c0 1.419.302 2.348 1.125 3.375L12 17l4.875-5.625C17.698 10.348 18 9.419 18 8a6 6 0 0 0-6-6z" />
                <path d="M5 15.143C3.149 15.87 2 16.881 2 18c0 2.21 4.477 4 10 4s10-1.79 10-4c0-1.119-1.149-2.13-3-2.857" />
                <circle cx="12" cy="8" r="1" />
              </svg>
              Айболит на Краснополянской
            </h3>
            <p>Дзержинский район, ул. Краснополянская, 30</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ai ai-Phone"
              >
                <path d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.207 29.207 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.462.462 0 0 1-.553.088 14.557 14.557 0 0 1-5.36-5.367.463.463 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465z" />
              </svg>
              Тел: 96 22 92
            </p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ai ai-History"
              >
                <path d="M4.266 16.06a8.923 8.923 0 0 0 3.915 3.978 8.706 8.706 0 0 0 5.471.832 8.795 8.795 0 0 0 4.887-2.64 9.067 9.067 0 0 0 2.388-5.079 9.135 9.135 0 0 0-1.044-5.53 8.903 8.903 0 0 0-4.069-3.815 8.7 8.7 0 0 0-5.5-.608c-1.85.401-3.366 1.313-4.62 2.755-.151.16-.735.806-1.22 1.781M7.5 8l-3.609.72L3 5m9 4v4l3 2" />
              </svg>
              Круглосуточно
            </p>
          </div>
        </section>
        <section className="map-section">
          <iframe
            title="Clinic Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.123!2d37.617!3d55.755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzE4LjAiTiAzN8KwMzcnMDQuMCJF!5e0!3m2!1sen!2sru!4v1623456789!5m2!1sen!2sru"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contacts;
