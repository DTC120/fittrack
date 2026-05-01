import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Navbar from "@/components/Navbar";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/profile");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">Perfil</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">Tu cuenta FitTrack</h1>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              Aquí puedes revisar tu información de usuario y acceder al dashboard seguro.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/95">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Datos de usuario</h2>
              <dl className="mt-6 grid gap-4 text-sm text-slate-700 dark:text-slate-300">
                <div>
                  <dt className="font-semibold text-slate-200">Nombre</dt>
                  <dd>{session?.user?.name ?? "Sin nombre"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Correo electrónico</dt>
                  <dd>{session?.user?.email ?? "Sin correo"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Rol</dt>
                  <dd>{(session?.user as any)?.role ?? "Usuario"}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-200">Sesión expira</dt>
                  <dd>{session?.expires ? new Date(session.expires).toLocaleString("es-ES") : "No disponible"}</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/95">
              <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Accesos rápidos</h2>
              <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-300">
                <p>
                  Usa el botón de cerrar sesión en el menú superior cuando termines.
                </p>
                <a
                  href="/dashboard"
                  className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
                >
                  Ir al Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
