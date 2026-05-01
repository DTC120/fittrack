# FitTrack

FitTrack es un prototipo inicial para un sistema de gestión de gimnasio, tienda en línea y clases.

## Stack recomendado

- Next.js (React)
- Tailwind CSS
- Prisma ORM
- PostgreSQL
- Auth.js (NextAuth)

## Cómo empezar

1. Instala dependencias:

```bash
npm install
```

2. Configura tu base de datos en `.env`.

3. Genera Prisma Client y aplica migraciones:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

4. Inicia la aplicación:

```bash
npm run dev
```

## Estructura inicial

- `app/` - interfaz de usuario con página principal.
- `prisma/schema.prisma` - modelo de datos con `Member`, `Product`, `Class`, `Payment` y `Booking`.
- `app/api/auth/[...nextauth]/route.ts` - autenticación con Auth.js.
- `components/` - componentes reutilizables de UI.

## Funcionalidades incluidas

- Dashboard de administración
- Vista de miembros filtrable
- Catálogo de tienda
- Calendario de clases con reservas
- Modo claro/oscuro
