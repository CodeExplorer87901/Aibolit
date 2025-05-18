import React, { useState, useEffect } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../pages/All.css";
import { Link } from "react-router-dom";

function AppointmentForm() {
  const [step, setStep] = useState("select");

  const [formData, setFormData] = useState({
    phone: "",
    fullName: "",
    contactPhone: "",
    date: "",
    time: "",
    problem: "",
    payment: "card",
  });

  useEffect(() => {
    // Получаем выбранную услугу из localStorage
    const selected = localStorage.getItem("selectedServiceDetail");
    if (selected) {
      setFormData((prev) => ({ ...prev, problem: selected }));
      // Можно очистить localStorage, если нужно только один раз подставлять:
      // localStorage.removeItem("selectedServiceDetail");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isOrderFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.contactPhone.trim() !== "" &&
      formData.date.trim() !== "" &&
      formData.time.trim() !== "" &&
      formData.problem.trim() !== ""
    );
  };

  const handleSubmit = () => {
    if (isOrderFormValid()) {
      setStep("success");
    } else {
      alert("Пожалуйста, заполните все поля формы перед подтверждением.");
    }
  };

  return (
    <div className="appointment-container">
      {step === "select" && (
        <div className="appointment-options">
          <button className="back-button">← НАЗАД</button>
          <h2>Запись на приём</h2>
          <div className="card" onClick={() => setStep("auth")}>
            Онлайн - Записаться <span>2000 ₽</span>
          </div>
          <div className="card">
            <Link to="/contacts">
            Приём в клинике      <span>Бесплатно</span>
            </Link>
          </div>
        </div>
      )}

      {step === "auth" && (
        <div className="auth-step animate-in">
          <h2>Регистрация / Вход</h2>
          <p>Пожалуйста, введите ваш номер телефона для подтверждения</p>
          <input
            type="tel"
            name="phone"
            placeholder="Введите номер: +7 / +996"
            value={formData.phone}
            onChange={handleChange}
          />
          <button onClick={() => setStep("order")}>Далее</button>
        </div>
      )}

      {step === "order" && (
        <div className="order-step animate-in">
          <button className="back-button" onClick={() => setStep("auth")}>
            ← Назад
          </button>
          <h2>Оформление заказа</h2>
          <p>Заполните данные для записи на приём</p>
          <label>ФИО</label>
          <input
            type="text"
            name="fullName"
            placeholder="Введите ваше полное имя"
            value={formData.fullName}
            onChange={handleChange}
          />
          <label>Номер телефона для связи</label>
          <input
            type="tel"
            name="contactPhone"
            placeholder="Введите номер"
            value={formData.contactPhone}
            onChange={handleChange}
          />
          <label>Укажите желаемые дату и время приёма</label>
          <div className="datetime-group">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
          <label>Кратко опишите проблему</label>
          <textarea
            name="problem"
            placeholder="Опишите жалобу или причину обращения"
            value={formData.problem}
            onChange={handleChange}
          />
          <label>Способ оплаты</label>
          <select
            name="payment"
            value={formData.payment}
            onChange={handleChange}
          >
            <option value="card">Оплата картой</option>
            <option value="cash">Наличные</option>
            <option value="online">Онлайн перевод</option>
          </select>
          <button className="submit-button" onClick={handleSubmit}>
            Подтвердить
          </button>
        </div>
      )}

      {step === "success" && (
        <div className="order-step animate-in">
          <h2>Успешно!</h2>
          <p>Ваша заявка успешно отправлена.</p>
          <p>
            Врач свяжется с вами в ближайшее время для подтверждения
            консультации.
          </p>
        </div>
      )}
    </div>
  );
}

function Write() {
  return (
    <div className="app">
      <Header />
      <AppointmentForm />
      <Footer />
    </div>
  );
}

export default Write;
