import React from 'react';
import PetSlider from './components/PetSlider';
import FadeInSection from './components/FadeInSection';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Шапка */}
      <header>
        <h1>Приют для животных "Верный друг"</h1>
        <nav>
          <a href="#home">Главная</a>
          <a href="#about">О нас</a>
          <a href="#help">Как помочь</a>
          <a href="#contacts">Контакты</a>
        </nav>
      </header>

      {/* ГЛАВНАЯ СТРАНИЦА */}
      <main id="home">
        {/* Слайдер с питомцами */}
        <PetSlider />

        {/* Кнопка на симулятор */}
        <FadeInSection>
          <section className="section" style={{ textAlign: 'center' }}>
            <h2>Хотите забрать питомца домой?</h2>
            <p style={{ marginBottom: '25px', fontSize: '18px', maxWidth: '700px', margin: '0 auto 25px' }}>
              Попробуйте наш игровой симулятор приюта! Выберите питомца, заполните анкету 
              и заберите его к новому хозяину.
            </p>
            <a 
              href={`${import.meta.env.BASE_URL}shelter-game/shelter-game.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ 
                display: 'inline-block', 
                textDecoration: 'none',
                padding: '18px 40px',
                fontSize: '20px',
                borderRadius: '40px'
              }}
            >
               Выберите питомца
            </a>
          </section>
        </FadeInSection>

        {/* Блок "Почему стоит взять питомца" */}
        <FadeInSection>
          <section className="section section-alt">
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>
              Почему стоит взять питомца из приюта?
            </h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
              Каждый год тысячи животных оказываются на улице. Взяв питомца из приюта, вы не только 
              спасаете жизнь, но и получаете верного друга. Все наши животные привиты, стерилизованы 
              и проходят медицинское обследование перед передачей в новую семью.
            </p>
          </section>
        </FadeInSection>

        {/* Блок "Как забрать питомца" */}
        <FadeInSection>
          <section className="section">
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '30px' }}>
              Как забрать питомца домой?
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
              <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                <h3>1. Выберите питомца</h3>
                <p>Просмотрите каталог и найдите того, кто вам понравился.</p>
              </div>
              <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                <h3>2. Заполните анкету</h3>
                <p>Оставьте заявку на сайте, чтобы мы могли с вами связаться.</p>
              </div>
              <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                <h3>3. Познакомьтесь</h3>
                <p>Приезжайте в приют, чтобы познакомиться с питомцем лично.</p>
              </div>
            </div>
          </section>
        </FadeInSection>

        {/* О НАС */}
        <FadeInSection>
          <section id="about" className="section section-alt">
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>
              О нас
            </h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6', textAlign: 'center' }}>
              Приют "Верный друг" существует с 2015 года. За это время мы нашли новый дом для более чем 
              2000 животных. Наша команда состоит из волонтеров и ветеринаров, которые заботятся о 
              животных 24/7. Мы существуем на пожертвования и помощь неравнодушных людей.
            </p>
          </section>
        </FadeInSection>

        {/* КАК ПОМОЧЬ */}
        <FadeInSection>
          <section id="help" className="section">
            <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '20px' }}>
              Как помочь приюту?
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
              <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                <h3>Взять питомца</h3>
                <p>Самый лучший способ помочь — подарить животному дом.</p>
              </div>
              <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                <h3>Стать волонтером</h3>
                <p>Помогайте с выгулом, уходом и социализацией животных.</p>
              </div>
              <div className="card" style={{ flex: '1 1 250px', textAlign: 'center' }}>
                <h3>Пожертвование</h3>
                <p>Любая сумма поможет нам закупить корм и лекарства.</p>
              </div>
            </div>
          </section>
        </FadeInSection>
      </main>

      {/* Подвал */}
      <footer id="contacts">
        <h3>Контакты</h3>
        <p>г. Москва, ул. Добрая, д. 15</p>
        <p>Телефон: +7 (999) 123-45-67</p>
        <p>Email: info@verniy-drug.ru</p>
        <p style={{ marginTop: '20px', fontSize: '14px' }}>
          © 2026 Приют "Верный друг". Все права защищены.
        </p>
      </footer>
    </div>
  );
}

export default App;