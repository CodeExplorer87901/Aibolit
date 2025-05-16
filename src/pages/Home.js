import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Combined Shape.png";
import ImgPets from "../assets/image.png";
import ManDog from "../assets/image@2x.png";
import Dog from "../assets/image@3x (1).png";
import Carrot from "../assets/img.png";
import Cat from "../assets/cat.png";
import "./All.css";

import {
  Clock,
  List,
  Award,
  Beaker,
  HomeIcon,
  Monitor,
  Calendar,
  ShoppingBag,
  Scissors,
  Stethoscope,
  Brain,
  Bone,
  PawPrint,
  Eye,
  BookOpen,
  Baby,
  Camera,
  FlaskConical,
  Syringe,
  Landmark,
  PenTool,
  Pill,
  Paintbrush,
  Heart,
} from "lucide-react";

function WhyChooseUs() {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const features = [
    {
      id: 1,
      icon: <Clock size={42} />,
      title: "Работаем круглосуточно",
      description:
        "Мы готовы в любое время суток принять домашних питомцев и их хозяев",
    },
    {
      id: 2,
      icon: <List size={42} />,
      title: "Широкий спектр услуг",
      description:
        "Кроме широкопрофильных докторов в клинике развиты узкие направления в ветеринарии",
    },
    {
      id: 3,
      icon: <Award size={42} />,
      title: "Большой опыт",
      description:
        "30 высококвалифицированных врачей нашей клиники работают уже 18 лет!",
    },
    {
      id: 4,
      icon: <Beaker size={42} />,
      title: "Собственная лаборатория",
      description:
        "Оборудованная профессиональным оснащением для быстрого анализа",
    },
    {
      id: 5,
      icon: <HomeIcon size={42} />,
      title: "Оснащенные стационары",
      description:
        "Обычный и инфекционный стационар с подогревом и кислородными камерами",
    },
    {
      id: 6,
      icon: <Monitor size={42} />,
      title: "Новейшее оборудование",
      description: "Современный эндоскоп KARL STORZ и цифровой рентген",
    },
    {
      id: 7,
      icon: <Calendar size={42} />,
      title: "Запись на прием онлайн",
      description: "Запись онлайн или вызов на дом",
    },
    {
      id: 8,
      icon: <ShoppingBag size={42} />,
      title: "Аптека и зоомагазин",
      description: "Аптека и бутик с одеждой и косметикой для питомцев",
    },
    {
      id: 9,
      icon: <Scissors size={42} />,
      title: "Груминг-салон",
      description: "Гигиенические и косметические процедуры для питомцев",
    },
  ];

  return (
    <div className="why-choose-us-container">
      <h2 className="why-choose-us-title">Почему хозяева выбирают нас?</h2>
      <div className="features-grid">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`feature-card ${
              hoveredFeature === feature.id ? "hovered" : ""
            }`}
            onMouseEnter={() => setHoveredFeature(feature.id)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="feature-content">
              <div
                className={`feature-icon ${
                  hoveredFeature === feature.id ? "icon-hovered" : ""
                }`}
              >
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MedicalServices() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const services = [
    {
      id: 1,
      name: "Терапия",
      icon: <Stethoscope size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 2,
      name: "Хирургия",
      icon: <Scissors size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 3,
      name: "Неврология",
      icon: <Brain size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 4,
      name: "Ортопедия",
      icon: <Bone size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 6,
      name: "Офтальмология",
      icon: <Eye size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 7,
      name: "Кардиология",
      icon: <Heart size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 8,
      name: "Стоматология",
      icon: <BookOpen size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 9,
      name: "Репродуктология",
      icon: <Baby size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 10,
      name: "Визуальная диагностика",
      icon: <Camera size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 11,
      name: "Лаборатория",
      icon: <FlaskConical size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 12,
      name: "Онкология",
      icon: <Syringe size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 13,
      name: "Эндокринология",
      icon: <Landmark size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 14,
      name: "Экзотические животные",
      icon: <PenTool size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 15,
      name: "Аптека",
      icon: <Pill size={32} />,
      services: 26,
      link: "/write",
    },
    {
      id: 16,
      name: "Груминг",
      icon: <Paintbrush size={32} />,
      services: 26,
      link: "/write",
    },
  ];

  return (
    <div className="medical-services-container">
      <h2 className="services-title">Наши услуги</h2>
      <div className="services-grid">
        {services.map((service) =>
          service.link ? (
            <Link
              key={service.id}
              to={service.link}
              className={`service-card ${
                service.highlighted ? "highlighted" : ""
              } ${hoveredCard === service.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h3 className="service-title">{service.name}</h3>
              <div
                className={`service-icon ${
                  hoveredCard === service.id ? "icon-hovered" : ""
                }`}
              >
                {service.icon}
              </div>
              <p className="service-count">{service.services} услуг</p>
            </Link>
          ) : (
            <div
              key={service.id}
              className={`service-card ${
                service.highlighted ? "highlighted" : ""
              } ${hoveredCard === service.id ? "hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <h3 className="service-title">{service.name}</h3>
              <div
                className={`service-icon ${
                  hoveredCard === service.id ? "icon-hovered" : ""
                }`}
              >
                {service.icon}
              </div>
              <p className="service-count">{service.services} услуг</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="contact-address">
            <h3>Айболит на Краснополянской</h3>
            <p>Дзержинский район, ул. Краснополянская, 30</p>
            <p>Тел: 96 22 92</p>
            <p>Круглосуточно</p>
          </div>
          <div className="contact-address">
            <h3>Айболит на Тульской</h3>
            <p>Советский район, ул. Карла Маркса, 7</p>
            <p>Тел: 96 22 92</p>
            <p>Круглосуточно</p>
          </div>
        </div>
        <div className="map-container">
          <iframe
            title="Clinic Map"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [menuOpen, setMenuOpen] = useState(false);
  const slides = {
    1: {
      title: "Айболит\nкруглосуточная\nветклиника",
      buttonText: "Записаться",
      img: ImgPets,
      link: "/write",
    },
    2: {
      title: "Профессиональные\nврачи",
      buttonText: "Подробнее",
      img: ManDog,
      link: "/collective",
    },
    3: {
      title: "Скидки и акции\nдля постоянных\nклиентов",
      buttonText: "Узнать больше",
      img: Carrot,
      link: "/",
    },
    4: {
      title: "Профессиональные\nветврачи\nи оборудование",
      buttonText: "Записаться",
      img: Cat,
      link: "/write",
    },
  };

  const currentSlide = slides[activeSlide];

  return (
    <div className="app">
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
          <Link to="/">Главная</Link>
          <div className="dropdown">
            <Link to="/" className="dropdown-toggle">
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
          <Link to="/contacts">Контакты</Link>
          <Link to="/blog">Блог</Link>
        </nav>
      </aside>

      <div className="content">
        <div className="side-nav">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={activeSlide === num ? "active" : ""}
              onClick={() => setActiveSlide(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <div className="main">
          <h1 className="ai">
            {currentSlide.title.split("\n").map((line, idx) => (
              <React.Fragment key={idx}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h1>
          <Link to={currentSlide.link} className="main-btn">
            {currentSlide.buttonText}
          </Link>
          <img src={currentSlide.img} alt="slide" className="main-img" />
        </div>
      </div>

      <WhyChooseUs />
      <MedicalServices />
      <ContactSection />

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
    </div>
  );
}

export default HomePage;
