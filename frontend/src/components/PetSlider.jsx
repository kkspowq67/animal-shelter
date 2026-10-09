import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const PetSlider = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/pets')
      .then(res => res.json())
      .then(data => setPets(data.slice(0, 6))) // Берем первых 6 питомцев
      .catch(err => console.error("Ошибка загрузки:", err));
  }, []);

  if (pets.length === 0) return <div style={{ padding: '20px', textAlign: 'center' }}>Загрузка слайдера...</div>;

  return (
    <div className="section">
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>
        Наши питомцы ищут дом
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {pets.map((pet) => (
          <SwiperSlide key={pet.id}>
            <motion.div 
              className="card"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', borderRadius: '8px', marginBottom: '15px' }}>
                <img 
                  src={pet.imageUrl || 'https://via.placeholder.com/300x220?text=Фото+питомца'} 
                  alt={pet.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '22px' }}>{pet.name}</h3>
              <p style={{ margin: '0 0 5px 0', color: 'var(--moss)' }}>
                <strong>Вид:</strong> {pet.species}
              </p>
              <p style={{ margin: '0 0 5px 0', color: 'var(--moss)' }}>
                <strong>Возраст:</strong> {pet.age} г.
              </p>
              <p style={{ margin: '0 0 15px 0', color: 'var(--moss)' }}>
                <strong>Пол:</strong> {pet.gender}
              </p>
              <button 
                className="btn-primary" 
                style={{ marginTop: 'auto', width: '100%' }}
                onClick={() => alert(`Вы хотите забрать ${pet.name}! Заполните анкету.`)}
              >
                Забрать домой
              </button>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PetSlider;