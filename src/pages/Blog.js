import React, { useState, useEffect } from "react";
import { Search, ArrowLeft, X } from "lucide-react";
import dogChum from "../assets/Чумка-у-собак.jpg"
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "../pages/All.css";
import id2 from "../assets/a27f946964fc5103ee5ec83d50bdec73.jpg";
import id3 from "../assets/Пироплазмоз-у-собак-e1730102618328.png";
import id4 from "../assets/cat fip.jpeg"
import id5 from "../assets/bird.png";
import id6 from "../assets/homa.jpg";
  import id7 from "../assets/mbd.jpeg";
import id8 from "../assets/dogg.jpg";
import id9 from "../assets/vik.jpg";
import id10 from "../assets/doggg.jpeg";
import id11 from "../assets/birdd.png";
import id12 from "../assets/snake.jpg";

function Blog() {
  const [diseases, setDiseases] = useState([]);
  const [filteredDiseases, setFilteredDiseases] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [animalFilter, setAnimalFilter] = useState("all");

  // Категории животных для фильтра
  const animalCategories = [
    { id: "all", name: "Все животные" },
    { id: "dog", name: "Собаки" },
    { id: "cat", name: "Кошки" },
    { id: "bird", name: "Птицы" },
    { id: "rodent", name: "Грызуны" },
    { id: "exotic", name: "Экзотические" },
  ];

  // Имитация загрузки данных 
  useEffect(() => {
    // Симуляция API запроса
    setTimeout(() => {
      const diseaseData = [
        {
          id: 1,
          animalType: "dog",
          name: "Чумка (Distemper)",
          symptoms: "Температура, выделения из глаз и носа, кашель, рвота, диарея, неврологические симптомы",
          description: "Вирусное заболевание, которое поражает желудочно-кишечный тракт, дыхательную систему и нервную систему.",
          emergency: "Немедленно обратитесь к ветеринару. Изолируйте животное. Следите за гидратацией. Симптоматическое лечение может включать жаропонижающие и противорвотные препараты по назначению врача.",
          prevention: "Вакцинация является наиболее эффективным методом профилактики. Щенков вакцинируют в возрасте 6-8 недель с последующими ревакцинациями.",
          imageUrl: dogChum
        },
        {
          id: 2,
          animalType: "cat",
          name: "Панлейкопения (кошачья чумка)",
          symptoms: "Высокая температура, рвота, отказ от еды, обезвоживание, кровавый понос",
          description: "Высококонтагиозное вирусное заболевание, поражающее клетки быстрого деления, прежде всего костный мозг и кишечник.",
          emergency: "Срочно обратитесь к ветеринару! Поддерживайте гидратацию, обеспечьте покой и тепло. Без лечения смертность очень высока.",
          prevention: "Обязательная вакцинация котят, начиная с 8-12 недельного возраста с последующими ревакцинациями.",
          imageUrl:id2
        },
        {
          id: 3,
          animalType: "dog",
          name: "Пироплазмоз (бабезиоз)",
          symptoms: "Высокая температура, слабость, потеря аппетита, темно-желтая или оранжевая моча, анемия, увеличение селезенки",
          description: "Заболевание, вызываемое простейшими Babesia canis, которые поражают эритроциты. Переносится клещами.",
          emergency: "Немедленно к ветеринару! Каждый час промедления уменьшает шансы на выживание. Лечение включает специфические препараты и поддерживающую терапию.",
          prevention: "Регулярная обработка от клещей специальными средствами. Осмотр животного после прогулки.",
          imageUrl: id3
        },
        {
          id: 4,
          animalType: "cat",
          name: "Инфекционный перитонит кошек (FIP)",
          symptoms: "Накопление жидкости в брюшной полости, одышка, потеря веса, повышенная температура",
          description: "Вирусное заболевание, вызываемое мутировавшим коронавирусом кошек (FCoV).",
          emergency: "Обратитесь к ветеринару немедленно. Лечение симптоматическое, направлено на поддержание качества жизни.",
          prevention: "Специфической профилактики нет. Рекомендуется изоляция больных животных и соблюдение гигиены.",
          imageUrl: id4
        },
        {
          id: 5,
          animalType: "bird",
          name: "Псевдочума птиц (болезнь Ньюкасла)",
          symptoms: "Респираторные проблемы, нервные явления, диарея, снижение яйценоскости",
          description: "Высококонтагиозное вирусное заболевание, поражающее птиц различных видов.",
          emergency: "При подозрении немедленно изолируйте птицу и обратитесь к ветеринарному врачу. Заболевание подлежит обязательной регистрации.",
          prevention: "Вакцинация, карантинирование новых птиц, соблюдение санитарно-гигиенических норм.",
          imageUrl: id5
        },
        {
          id: 6,
          animalType: "rodent",
          name: "Мокрый хвост (илеит)",
          symptoms: "Влажный хвост, диарея, вялость, обезвоживание, взъерошенная шерсть",
          description: "Бактериальная инфекция кишечника, характерная для грызунов, особенно крыс.",
          emergency: "Срочно обратитесь к ветеринару. Поддерживайте гидратацию. Без лечения антибиотиками смертность очень высока.",
          prevention: "Соблюдение гигиены, исключение стрессов, качественное питание, карантин для новых животных.",
          imageUrl: id6
        },
        {
          id: 7,
          animalType: "exotic",
          name: "Метаболическая болезнь костей",
          symptoms: "Деформации скелета, хрупкость костей, тремор, мышечная слабость, параличи",
          description: "Нарушение баланса кальция и фосфора в организме рептилий из-за неправильного питания и содержания.",
          emergency: "Обратитесь к ветеринару, специализирующемуся на экзотических животных. Необходимо экстренное восполнение кальция и коррекция условий содержания.",
          prevention: "Правильное УФ-освещение, сбалансированное питание с добавками кальция и витамина D3.",
          imageUrl:id7
        },
        {
          id: 8,
          animalType: "dog",
          name: "Парвовирусный энтерит",
          symptoms: "Сильная рвота, кровавый понос, обезвоживание, лихорадка, слабость",
          description: "Высококонтагиозное вирусное заболевание, поражающее желудочно-кишечный тракт, преимущественно у молодых собак.",
          emergency: "Немедленно обратитесь в ветеринарную клинику! Без лечения летальность может достигать 90%. Требуется интенсивная терапия.",
          prevention: "Вакцинация щенков начиная с 6-8 недельного возраста с последующими ревакцинациями.",
          imageUrl: id8
        },
        {
          id: 9,
          animalType: "cat",
          name: "Вирусный иммунодефицит кошек (FIV)",
          symptoms: "Рецидивирующие инфекции, лихорадка, увеличение лимфоузлов, потеря веса, стоматиты",
          description: "Ретровирусное заболевание кошек, аналогичное ВИЧ у людей, но не передающееся человеку.",
          emergency: "При выявлении симптомов обратитесь к ветеринару. Экстренной терапии нет, но важно начать поддерживающее лечение.",
          prevention: "Тестирование кошек перед совместным содержанием, предотвращение драк и укусов, стерилизация/кастрация.",
          imageUrl: id9
        },
        {
          id: 10,
          animalType: "dog",
          name: "Аденовироз собак",
          symptoms: "Конъюнктивит, кашель, выделения из носа, увеличение миндалин, рвота, диарея",
          description: "Вирусное заболевание, поражающее дыхательную, пищеварительную системы и глаза собак.",
          emergency: "Обратитесь к ветеринару. Поддерживающая терапия включает жаропонижающие средства, увлажнение слизистых, симптоматическое лечение.",
          prevention: "Вакцинация, особенно для собак в группах риска (питомники, выставки, гостиницы для животных).",
          imageUrl: id10
        },
        {
          id: 11,
          animalType: "bird",
          name: "Аспергиллез",
          symptoms: "Затрудненное дыхание, хрипы, потеря голоса, вялость, отказ от еды",
          description: "Грибковая инфекция, поражающая дыхательную систему птиц.",
          emergency: "Срочно обратитесь к ветеринару. Необходимо противогрибковое лечение и поддерживающая терапия.",
          prevention: "Поддержание чистоты в клетке, хорошая вентиляция, предотвращение сырости, качественный корм.",
          imageUrl: id11
        },
        {
          id: 12,
          animalType: "exotic",
          name: "Гнилостный стоматит у рептилий",
          symptoms: "Отек и покраснение десен, некроз тканей во рту, отказ от еды, выделения изо рта",
          description: "Бактериальная инфекция ротовой полости, часто связанная с плохими условиями содержания.",
          emergency: "Обратитесь к ветеринару-герпетологу. Лечение включает антибиотики, промывание рта антисептиками, коррекцию условий содержания.",
          prevention: "Правильные условия содержания, температурный режим, влажность, полноценное питание.",
          imageUrl: id12
        }
      ];
      
      setDiseases(diseaseData);
      setFilteredDiseases(diseaseData);
      setLoading(false);
    }, 1000);
  }, []);

  // Обработчик изменения поиска
  useEffect(() => {
    const filtered = diseases.filter(disease => {
      const matchesSearch = disease.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          disease.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          disease.symptoms.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesAnimal = animalFilter === "all" || disease.animalType === animalFilter;
      
      return matchesSearch && matchesAnimal;
    });
    
    setFilteredDiseases(filtered);
  }, [searchQuery, diseases, animalFilter]);

  // Открытие модального окна с подробностями о болезни
  const handleShowDetails = (disease) => {
    setSelectedDisease(disease);
    setShowModal(true);
    document.body.style.overflow = "hidden"; // Блокировка прокрутки страницы
  };

  // Закрытие модального окна
  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Восстановление прокрутки
  };

  // Определение класса для карточки болезни в зависимости от типа животного
  const getDiseaseCardClass = (animalType) => {
    switch(animalType) {
      case "dog": return "disease-card dog";
      case "cat": return "disease-card cat";
      case "bird": return "disease-card bird";
      case "rodent": return "disease-card rodent";
      case "exotic": return "disease-card exotic";
      default: return "disease-card";
    }
  };

  return (
    <div className="app">
      <Header />
      
      <main className="blog-content">
        <h1 className="page-title">Справочник болезней животных</h1>
        <p className="page-description">
          Информация о распространенных заболеваниях домашних и экзотических животных, их симптомах и первой помощи
        </p>
        
        <div className="filters-container">
          <div className="search-box">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Поиск по болезням..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <X 
                className="clear-search" 
                size={18} 
                onClick={() => setSearchQuery("")}
              />
            )}
          </div>
          
          <div className="animal-filters">
            {animalCategories.map(category => (
              <button
                key={category.id}
                className={`animal-filter-btn ${animalFilter === category.id ? 'active' : ''}`}
                onClick={() => setAnimalFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Загружаем информацию...</p>
          </div>
        ) : filteredDiseases.length > 0 ? (
          <div className="diseases-grid">
            {filteredDiseases.map(disease => (
              <div 
                key={disease.id} 
                className={getDiseaseCardClass(disease.animalType)}
              >
                <div className="disease-image">
                  <img src={disease.imageUrl} alt={disease.name} />
                </div>
                <h3>{disease.name}</h3>
                <p className="disease-symptoms"><strong>Симптомы:</strong> {disease.symptoms}</p>
                <button 
                  className="details-btn"
                  onClick={() => handleShowDetails(disease)}
                >
                  Узнать подробнее
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>Болезни не найдены</h3>
            <p>Пожалуйста, измените параметры поиска или выберите другую категорию животных</p>
          </div>
        )}
        
        {/* Модальное окно с подробной информацией */}
        {showModal && selectedDisease && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div 
              className={`modal-content ${selectedDisease.animalType}`} 
              onClick={e => e.stopPropagation()}
            >
              <button className="close-modal" onClick={handleCloseModal}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <h2>{selectedDisease.name}</h2>
                <div className="animal-type-badge">{animalCategories.find(cat => cat.id === selectedDisease.animalType)?.name}</div>
              </div>
              
              <div className="modal-body">
                <div className="disease-image-large">
                  <img src={selectedDisease.imageUrl} alt={selectedDisease.name} />
                </div>
                
                <div className="disease-details">
                  <section className="detail-section">
                    <h3>Описание</h3>
                    <p>{selectedDisease.description}</p>
                  </section>
                  
                  <section className="detail-section">
                    <h3>Симптомы</h3>
                    <p>{selectedDisease.symptoms}</p>
                  </section>
                  
                  <section className="detail-section emergency">
                    <h3>Экстренная помощь</h3>
                    <div className="emergency-box">
                      <p>{selectedDisease.emergency}</p>
                    </div>
                  </section>
                  
                  <section className="detail-section">
                    <h3>Профилактика</h3>
                    <p>{selectedDisease.prevention}</p>
                  </section>
                </div>
              </div>
              
              <div className="modal-footer">
                <button className="back-btn" onClick={handleCloseModal}>
                  <ArrowLeft size={18} />
                  Вернуться к списку
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}

export default Blog;