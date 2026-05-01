import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth";
import Navbar from "@/components/Navbar";
import Dashboard from "@/components/Dashboard";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/dashboard");
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Navbar />
      <section className="mx-auto max-w-7xl px-6 py-10 sm:px-8">
        <div className="space-y-3 text-slate-900 dark:text-slate-200">
          <p className="text-sm uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">Panel seguro</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl dark:text-white">Dashboard administrativo</h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Esta sección está protegida y solo es accesible para usuarios autenticados.
          </p>
        </div>
      </section>
      <section className="border-t border-slate-800 py-10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <Dashboard />
        </div>
      </section>
    </main>
  );
}
