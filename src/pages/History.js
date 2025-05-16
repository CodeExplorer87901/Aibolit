import React, { useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../pages/All.css";
import { Link } from "react-router-dom";
import CatUnder from "../assets/cat-under.png";

function History() {
  const [activeSubheading, setActiveSubheading] = useState(null);

  const toggleSubheading = (id) => {
    setActiveSubheading(activeSubheading === id ? null : id);
  };

  return (
    <div className="app">
      <Header />
      <div className="history-container">
        <div className="back-button">
          <Link to="/">← НАЗАД</Link>
        </div>

        <div className="history-content">
          <div className="history-sidebar">
            <h1 className="company-title">История компании</h1>

            <div className="subheadings">
              <div
                className={`subheading ${
                  activeSubheading === 1 ? "active" : ""
                }`}
                onClick={() => toggleSubheading(1)}
              >
                <span>ПОДЗАГОЛОВОК 1</span>
                <span className="arrow">
                  {activeSubheading === 1 ? "▲" : "▼"}
                </span>
              </div>

              <div
                className={`subheading ${
                  activeSubheading === 2 ? "active" : ""
                }`}
                onClick={() => toggleSubheading(2)}
              >
                <span>ПОДЗАГОЛОВОК 2</span>
                <span className="arrow">
                  {activeSubheading === 2 ? "▲" : "▼"}
                </span>
              </div>

              <div
                className={`subheading ${
                  activeSubheading === 3 ? "active" : ""
                }`}
                onClick={() => toggleSubheading(3)}
              >
                <span>ПОДЗАГОЛОВОК 3</span>
                <span className="arrow">
                  {activeSubheading === 3 ? "▲" : "▼"}
                </span>
              </div>
            </div>
          </div>

          <div className="history-main">
            <div className="history-image">
              <img src={CatUnder} alt="Кот под одеялом" />
            </div>

            <div className="content-area">
              {activeSubheading === 1 && (
                <div className="content-section animate-fade-in">
                  <h2>Подзаголовок 1</h2>
                  <p>
                    Терапия - область гуманной и ветеринарной медицины,
                    занимающаяся непосредственно лечением патологий, облегчением
                    состояния больного и устранением симптомов заболеваний.
                  </p>

                  <p>
                    Терапевтическое отделение клиники АйБолит занимается
                    диагностикой и лечением следующих болезней:
                  </p>
                  <ul>
                    <li>органов пищеварения;</li>
                    <li>органов сердечно-сосудистой системы;</li>
                    <li>органов дыхательной системы;</li>
                    <li>нервной системы;</li>
                    <li>органов мочевыделительной системы;</li>
                    <li>эндокринной системы;</li>
                    <li>нарушение обмена веществ;</li>
                    <li>кожи и ее производных;</li>
                    <li>органов чувств;</li>
                    <li>репродуктивной области;</li>
                    <li>инфекционной и инвазионной природы;</li>
                    <li>токсикологической природы.</li>
                  </ul>
                </div>
              )}

              {activeSubheading === 2 && (
                <div className="content-section animate-fade-in">
                  <h2>Подзаголовок 2</h2>
                  <p>
                    В нашей клинике имеются как врачи-терапевты общей практики,
                    так и узкие специалисты по ряду
                    <br /> перечисленных областей, что дает возможность
                    излечивать тяжелые и редкие случаи патологий.
                  </p>
                  <p>
                    Врач-терапевт подходит к лечению животного комплексно,
                    предварительно изучив его анамнез, учитывая возраст, пол,
                    породу, наличие хронических болезней, условия содержания,
                    типа кормления, оценив общее состояние питомца, полностью
                    осмотрев его и назначив необходимую диагностику и
                    соответствующее лечение. <br />
                    Врачи клиники имеют широкий спектр диагностических
                    возможностей, что является идеальным условием для постановки
                    точного диагноза, а значит и назначения того лечения,
                    которое наиболее эффективно справится с данным конкретным
                    клиническим случаем. <br />
                    Некоторую диагностику можно провести тут же на месте в
                    течение буквально нескольких минут, что немаловажно для
                    экстренных случаев и значительно экономят время владельцам:{" "}
                    <br />
                    - гематологический и биохимический анализы крови;
                    <br />
                    - исследование Т4 и кортизол;
                    <br />
                    - анализ газов крови;
                    <br />
                    - рентген;
                    <br />
                    - ультразвуковое исследование брюшной полости и сердца;
                    <br />
                    - микроскопия мазков и соскобов;
                    <br />
                    - люминесцентный тест на лишай;
                    <br />
                    - экспресс-анализы на основные вирусные заболевания.
                    <br />
                  </p>
                </div>
              )}

              {activeSubheading === 3 && (
                <div className="content-section animate-fade-in">
                  <h2>Подзаголовок 3</h2>
                  <p>
                    Мы постоянно развиваемся, внедряем современные технологии и
                    заботимся о комфорте не только животных, но и их владельцев.
                  </p>
                </div>
              )}

              {!activeSubheading && (
                <div className="content-section animate-fade-in">
                  <h2>О нашей компании</h2>
                  <p>
                    Наша ветеринарная клиника была основана в 2010 году с целью
                    предоставления качественной и доступной помощи домашним
                    животным.
                  </p>
                  <p>
                    За годы работы мы собрали команду профессионалов, которые
                    искренне любят животных и готовы помочь каждому пациенту.
                  </p>
                  <p>
                    Мы постоянно развиваемся, внедряем современные технологии и
                    заботимся о комфорте не только животных, но и их владельцев.
                  </p>
                  <p className="instruction-text">
                    Нажмите на любой подзаголовок слева для отображения
                    подробной информации.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default History;
