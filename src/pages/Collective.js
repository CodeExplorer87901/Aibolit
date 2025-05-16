import React from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../pages/All.css";
import { Link } from "react-router-dom";
import Group from "../assets/group-photo.png";
import col from "../assets/Ellipse.png";
import col1 from "../assets/Ellipse (1).png";
import col2 from "../assets/Ellipse (2).png";
import col3 from "../assets/Ellipse (3).png";

function Collective() {
  const specialists = [
    {
      id: 1,
      photo: col, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Терапевт, УЗИ-сканист, хирург, ортопед",
      experience: "10 лет",
    },
    {
      id: 2,
      photo: col1, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Анестезиолог, стоматолог, хирург",
      experience: "8 лет",
    },
    {
      id: 3,
      photo: col2, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Терапевт, УЗИ-сканист, хирург, ортопед",
      experience: "10 лет",
    },
    {
      id: 4,
      photo: col3, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Анестезиолог, стоматолог, хирург",
      experience: "8 лет",
    },
    {
      id: 1,
      photo: col, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Терапевт, УЗИ-сканист, хирург, ортопед",
      experience: "10 лет",
    },
    {
      id: 2,
      photo: col1, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Анестезиолог, стоматолог, хирург",
      experience: "8 лет",
    },
    {
      id: 3,
      photo: col2, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Терапевт, УЗИ-сканист, хирург, ортопед",
      experience: "10 лет",
    },
    {
      id: 4,
      photo: col3, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Анестезиолог, стоматолог, хирург",
      experience: "8 лет",
    },
    {
      id: 1,
      photo: col, // Temporary placeholder image
      name: "Александр Андреев",
      role: "Терапевт, УЗИ-сканист, хирург, ортопед",
      experience: "10 лет",
    },
  ];

  return (
    <div className="app">
      <Header />
      <main className="collective">
        <h1>Коллектив</h1>
        <nav className="breadcrumb">
          <Link to="/about">О нас</Link> <span>Специалисты</span>
        </nav>
        <div className="content-wrapper">
          <div className="right-content">
            <img src={Group} alt="Team" className="team-photo" />{" "}
            {/* Temporary placeholder */}
            <section className="about-section">
              <h2>О нас</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
            <section className="specialists-section">
              <h2>Специалисты</h2>
              <div className="specialists-grid">
                {specialists.map((specialist) => (
                  <div key={specialist.id} className="specialist-card">
                    <img
                      src={specialist.photo}
                      alt={specialist.name}
                      className="specialist-photo"
                    />
                    <h3>{specialist.name}</h3>
                    <p className="specialist-role">{specialist.role}</p>
                    <p className="specialist-experience">
                      {specialist.experience}
                    </p>
                    <button className="learn-more-btn">Узнать подробнее</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Collective;
