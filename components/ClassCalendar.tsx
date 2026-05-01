"use client";

import { useState } from "react";

interface ClassItem {
  id: string;
  title: string;
  instructor: string;
  startTime: string;
  capacity: number;
}

interface ClassCalendarProps {
  classes: ClassItem[];
}

export default function ClassCalendar({ classes }: ClassCalendarProps) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {classes.map((item) => {
        const start = new Date(item.startTime).toLocaleString("es-ES", {
          weekday: "short",
          day: "numeric",
          month: "short",
          hour: "2-digit",
          minute: "2-digit",
        });

        return (
          <article key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6 transition hover:border-brand-500">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Clase</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              </div>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">{item.capacity} cupos</span>
            </div>
            <div className="mt-6 space-y-3 text-slate-400">
              <p>
                <span className="font-semibold text-slate-200">Instructor:</span> {item.instructor}
              </p>
              <p>
                <span className="font-semibold text-slate-200">Horario:</span> {start}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSelected(item.id)}
              className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition ${
                selected === item.id
                  ? "bg-brand-500 text-slate-950"
                  : "bg-slate-800 text-slate-200 hover:bg-slate-700"
              }`}
            >
              {selected === item.id ? "Reservado" : "Reservar"}
            </button>
          </article>
        );
      })}
    </div>
  );
}
