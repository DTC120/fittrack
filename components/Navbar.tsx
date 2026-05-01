"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-slate-950">F</span>
          FitTrack
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex dark:text-slate-300">
          <a href="/dashboard" className="transition hover:text-slate-900 dark:hover:text-white">
            Dashboard
          </a>
          <a href="#store" className="transition hover:text-slate-900 dark:hover:text-white">
            Tienda
          </a>
          <a href="#classes" className="transition hover:text-slate-900 dark:hover:text-white">
            Clases
          </a>
          <a href="/profile" className="transition hover:text-slate-900 dark:hover:text-white">
            Perfil
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {isLoading ? (
            <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 dark:bg-slate-800 dark:text-slate-100">
              Cargando...
            </span>
          ) : session?.user ? (
            <>
              <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 md:inline-flex dark:bg-slate-800 dark:text-slate-100">
                {session.user.name ?? session.user.email}
              </span>
              <button
                type="button"
                onClick={() => signOut()}
                className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-brand-400"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => signIn()}
              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
            >
              Iniciar sesión
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
