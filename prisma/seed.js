const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  await prisma.booking.deleteMany();
  await prisma.payment.deleteMany();
  await prisma.class.deleteMany();
  await prisma.product.deleteMany();
  await prisma.member.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await hash("admin123", 10);

  await prisma.user.create({
    data: {
      name: "Administrador FitTrack",
      email: "admin@fittrack.com",
      password: passwordHash,
      role: "admin",
    },
  });

  const members = [
    {
      name: "Alejandro Pérez",
      email: "alejandro@fittrack.com",
      membershipType: "ORO",
      status: true,
      dietPlan: "Alta en proteínas",
      payments: [
        { amount: 49.99, currency: "USD", status: "COMPLETED" },
      ],
    },
    {
      name: "Camila Santos",
      email: "camila@fittrack.com",
      membershipType: "PLATA",
      status: false,
      dietPlan: "Balanceada",
      payments: [
        { amount: 39.99, currency: "USD", status: "COMPLETED" },
        { amount: 39.99, currency: "USD", status: "PENDING" },
      ],
    },
    {
      name: "Luis Morales",
      email: "luis@fittrack.com",
      membershipType: "BRONCE",
      status: true,
      dietPlan: "Control de carbohidratos",
      payments: [
        { amount: 29.99, currency: "USD", status: "COMPLETED" },
      ],
    },
  ];

  const savedMembers = [];

  for (const member of members) {
    const saved = await prisma.member.create({
      data: {
        name: member.name,
        email: member.email,
        membershipType: member.membershipType,
        status: member.status,
        dietPlan: member.dietPlan,
        payments: {
          create: member.payments,
        },
      },
    });

    savedMembers.push(saved);
  }

  await prisma.product.createMany({
    data: [
      {
        name: "Suplemento Proteico",
        description: "Aumenta tu recuperación y tus ganancias musculares.",
        price: 29.99,
        stock: 24,
      },
      {
        name: "Set de Bandas",
        description: "Ideal para entrenamiento funcional y movilidad.",
        price: 19.5,
        stock: 18,
      },
      {
        name: "Guantes de Entrenamiento",
        description: "Soporte y comodidad para tus levantamientos.",
        price: 24.0,
        stock: 12,
      },
    ],
  });

  await prisma.class.createMany({
    data: [
      {
        title: "HIIT Matutino",
        instructor: "Laura Gómez",
        startTime: new Date("2026-05-02T07:30:00.000Z"),
        capacity: 16,
        bookedCount: 4,
      },
      {
        title: "Yoga en Pantalla",
        instructor: "David Rivera",
        startTime: new Date("2026-05-02T10:00:00.000Z"),
        capacity: 20,
        bookedCount: 6,
      },
      {
        title: "Ciclo Indoor",
        instructor: "Mariana Cruz",
        startTime: new Date("2026-05-02T18:00:00.000Z"),
        capacity: 14,
        bookedCount: 2,
      },
    ],
  });

  console.log("Seed completed: members, products, classes created.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
