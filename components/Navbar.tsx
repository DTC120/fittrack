"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 text-slate-950">F</span>
          FitTrack
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#dashboard" className="transition hover:text-white">
            Dashboard
          </a>
          <a href="#store" className="transition hover:text-white">
            Tienda
          </a>
          <a href="#classes" className="transition hover:text-white">
            Clases
          </a>
          <a href="#profile" className="transition hover:text-white">
            Perfil
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/api/auth/signin"
            className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-slate-700"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </header>
  );
}
