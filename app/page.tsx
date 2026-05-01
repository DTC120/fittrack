import ClassCalendar from "@/components/ClassCalendar";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

const featuredProducts = [
  {
    id: "prod_1",
    name: "Suplemento Proteico",
    description: "Aumenta tu recuperación y tus ganancias musculares.",
    price: 29.99,
    stock: 24,
  },
  {
    id: "prod_2",
    name: "Set de Bandas",
    description: "Ideal para entrenamiento funcional y movilidad.",
    price: 19.5,
    stock: 18,
  },
  {
    id: "prod_3",
    name: "Guantes de Entrenamiento",
    description: "Soporte y comodidad para tus levantamientos.",
    price: 24.0,
    stock: 12,
  },
];

const upcomingClasses = [
  {
    id: "class_1",
    title: "HIIT Matutino",
    instructor: "Laura Gómez",
    startTime: "2026-05-02T07:30:00.000Z",
    capacity: 16,
  },
  {
    id: "class_2",
    title: "Yoga en Pantalla",
    instructor: "David Rivera",
    startTime: "2026-05-02T10:00:00.000Z",
    capacity: 20,
  },
  {
    id: "class_3",
    title: "Ciclo Indoor",
    instructor: "Mariana Cruz",
    startTime: "2026-05-02T18:00:00.000Z",
    capacity: 14,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-brand-500/15 px-4 py-1.5 text-sm font-semibold text-brand-700 dark:text-brand-200">
              Bienvenido a FitTrack
            </span>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">
              Gestiona tu gimnasio, tienda y programación de clases en un solo lugar.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
              FitTrack es un prototipo moderno creado con Next.js, Prisma y Tailwind CSS para impulsar la experiencia de tu comunidad fitness.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="/dashboard" className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400">
                Ver Dashboard
              </a>
              <a href="#store" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
                Explorar Tienda
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/20">
            <div className="space-y-6">
              <div className="flex items-center justify-between text-slate-700 dark:text-slate-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">Métricas de progreso</p>
                  <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Tu rendimiento en un vistazo</h2>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-100 p-5 ring-1 ring-slate-200 dark:bg-slate-950/90 dark:ring-white/5">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Sesiones esta semana</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">12</p>
                </div>
                <div className="rounded-3xl bg-slate-100 p-5 ring-1 ring-slate-200 dark:bg-slate-950/90 dark:ring-white/5">
                  <p className="text-sm text-slate-500 dark:text-slate-400">Compras realizadas</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">4</p>
                </div>
              </div>
              <div className="rounded-3xl bg-brand-500/10 p-5 ring-1 ring-brand-500/20">
                <p className="text-sm uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">Meta mensual</p>
                <p className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">Mejorar la retención de miembros y aumentar compras en la tienda.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
<div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Dashboard de administración</p>
                <h2 className="mt-2 text-3xl font-semibold text-white">Control de miembros y pagos</h2>
              </div>
              <p className="text-slate-400">
                Accede al panel administrativo para ver miembros reales, pagos y reservas. Esta sección requiere autenticación.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/dashboard"
                  className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
                >
                  Ir al Dashboard
                </a>
                <a
                  href="/api/auth/signin"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/90 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
                >
                  Iniciar sesión
                </a>
              </div>
            </div>
        </div>
      </section>

      <section id="store" className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Tienda</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Catálogo de productos</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Clases</p>
            <h2 className="mt-2 text-3xl font-semibold text-white">Calendario dinámico</h2>
          </div>
          <ClassCalendar classes={upcomingClasses} />
        </div>
      </section>
    </main>
  );
}
