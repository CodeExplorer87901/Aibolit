import React, { useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../pages/All.css";

function Share() {
  const [promoCode, setPromoCode] = useState("");
  const [promoStatus, setPromoStatus] = useState(null);

  const promotions = [
    {
      id: 1,
      title: "Скидка 20% на первый визит",
      description: "Новым клиентам — скидка на любой приём в клинике!",
      code: "NEW20",
      image: "https://via.placeholder.com/300x200?text=New+Client",
    },
    {
      id: 2,
      title: "Бесплатная вакцинация",
      description: "При записи на комплексный осмотр — вакцинация в подарок.",
      code: "VACCINEFREE",
      image: "https://via.placeholder.com/300x200?text=Vaccination",
    },
    {
      id: 3,
      title: "Груминг со скидкой 15%",
      description: "Уход за вашим питомцем по сниженной цене.",
      code: "GROOM15",
      image: "https://via.placeholder.com/300x200?text=Grooming",
    },
    {
      id: 4,
      title: "Скидка 10% на аптеку",
      description: "Покупайте лекарства и товары для питомцев дешевле.",
      code: "PHARM10",
      image: "https://via.placeholder.com/300x200?text=Pharmacy",
    },
  ];

  const handlePromoSubmit = (e) => {
    e.preventDefault();
    // Mock validation: Check if the promo code matches any promotion
    const isValid = promotions.some((promo) => promo.code === promoCode.toUpperCase());
    setPromoStatus(isValid ? "success" : "error");
    if (isValid) {
      alert(`Промокод ${promoCode} успешно применён!`);
    } else {
      alert("Неверный промокод. Попробуйте снова.");
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="share-container">
        <h2 className="share-title">Скидки и акции для постоянных клиентов</h2>
        <div className="promo-code-section">
          <h3 className="promo-code-title">Введите промокод</h3>
          <form className="promo-code-form" onSubmit={handlePromoSubmit}>
            <input
              type="text"
              placeholder="Введите ваш промокод"
              value={promoCode}
              onChange={(e) => {
                setPromoCode(e.target.value);
                setPromoStatus(null); // Reset status on input change
              }}
              className={`promo-input ${promoStatus === "success" ? "success" : promoStatus === "error" ? "error" : ""}`}
            />
            <button type="submit" className="promo-submit-btn">
              Применить
            </button>
          </form>
          {promoStatus === "success" && <p className="promo-feedback success">Промокод успешно применён!</p>}
          {promoStatus === "error" && <p className="promo-feedback error">Неверный промокод</p>}
        </div>
        <div className="promotions-grid">
          {promotions.map((promo) => (
            <div key={promo.id} className="promotion-card">
              <img src={promo.image} alt={promo.title} className="promotion-image" />
              <div className="promotion-content">
                <h3 className="promotion-title">{promo.title}</h3>
                <p className="promotion-description">{promo.description}</p>
                <p className="promotion-code">Код: <strong>{promo.code}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Share;