const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
require('dotenv').config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// 1. GET /api/pets - Получить всех питомцев (с фильтрацией)
app.get('/api/pets', async (req, res) => {
  try {
    const { species, gender } = req.query;
    const where = {};
    if (species) where.species = species;
    if (gender) where.gender = gender;

    const pets = await prisma.pet.findMany({ where });
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// 2. GET /api/pets/:id - Получить одного питомца
app.get('/api/pets/:id', async (req, res) => {
  try {
    const pet = await prisma.pet.findUnique({
      where: { id: Number(req.params.id) }
    });
    if (!pet) return res.status(404).json({ error: 'Питомец не найден' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// 3. POST /api/applications - Оставить заявку "Хочу забрать домой"
app.post('/api/applications', async (req, res) => {
  try {
    const { petId, userName, phone, email, message } = req.body;
    const application = await prisma.application.create({
      data: { petId, userName, phone, email, message }
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(400).json({ error: 'Ошибка при создании заявки' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));