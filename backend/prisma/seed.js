const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.application.deleteMany();
  await prisma.pet.deleteMany();

  const pets = [];
  for (let i = 1; i <= 30; i++) {
    pets.push({
      name: `Питомец ${i}`,
      species: i % 2 === 0 ? 'Собака' : 'Кошка',
      breed: 'Метис',
      age: Math.floor(Math.random() * 10) + 1,
      gender: i % 3 === 0 ? 'Мальчик' : 'Девочка',
      description: 'Очень ласковый и игривый питомец, ищет любящую семью.',
      status: 'available',
      imageUrl: `/images/pet${(i % 6) + 1}.jpg`
    });
  }

  await prisma.pet.createMany({ data: pets });
  console.log('База данных успешно наполнена 30 питомцами!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());