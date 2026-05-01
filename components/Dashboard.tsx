"use client";

import { useMemo, useState } from "react";

const membersData = [
  {
    id: "member_1",
    name: "Alejandro Pérez",
    email: "alejandro@fittrack.com",
    membershipType: "Oro",
    status: true,
    dietPlan: "Alta en proteínas",
    lastPayment: "2026-04-21",
  },
  {
    id: "member_2",
    name: "Camila Santos",
    email: "camila@fittrack.com",
    membershipType: "Plata",
    status: false,
    dietPlan: "Balanceada",
    lastPayment: "2026-03-30",
  },
  {
    id: "member_3",
    name: "Luis Morales",
    email: "luis@fittrack.com",
    membershipType: "Bronce",
    status: true,
    dietPlan: "Control de carbohidratos",
    lastPayment: "2026-04-15",
  },
];

const membershipOptions = ["Todos", "Oro", "Plata", "Bronce"];

export default function Dashboard() {
  const [membershipFilter, setMembershipFilter] = useState("Todos");
  const [activeOnly, setActiveOnly] = useState(false);

  const filteredMembers = useMemo(
    () =>
      membersData.filter((member) => {
        const membershipMatch = membershipFilter === "Todos" || member.membershipType === membershipFilter;
        const statusMatch = !activeOnly || member.status;
        return membershipMatch && statusMatch;
      }),
    [membershipFilter, activeOnly]
  );

  return (
    <div className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Gestión de miembros</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Miembros activos y pagos</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={membershipFilter}
                onChange={(event) => setMembershipFilter(event.target.value)}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-brand-500"
              >
                {membershipOptions.map((option) => (
                  <option key={option} value={option} className="bg-slate-950 text-slate-100">
                    {option}
                  </option>
                ))}
              </select>
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input type="checkbox" checked={activeOnly} onChange={(event) => setActiveOnly(event.target.checked)} className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-brand-500" />
                Solo activos
              </label>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80">
            <table className="min-w-full divide-y divide-slate-800 text-sm text-slate-200">
              <thead className="bg-slate-900/90 text-slate-300">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Nombre</th>
                  <th className="px-4 py-3 text-left font-semibold">Membresía</th>
                  <th className="px-4 py-3 text-left font-semibold">Último pago</th>
                  <th className="px-4 py-3 text-left font-semibold">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-slate-900/70">
                    <td className="px-4 py-4">{member.name}</td>
                    <td className="px-4 py-4">{member.membershipType}</td>
                    <td className="px-4 py-4">{member.lastPayment}</td>
                    <td className="px-4 py-4">
                      <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${member.status ? "bg-emerald-500/15 text-emerald-300" : "bg-rose-500/15 text-rose-300"}`}>
                        {member.status ? "Activo" : "Suspendido"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-300">Resumen</p>
            <p className="mt-2 text-3xl font-semibold text-white">Estadísticas rápidas</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/5">
              <p className="text-sm text-slate-400">Miembros totales</p>
              <p className="mt-3 text-3xl font-semibold text-white">{membersData.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/5">
              <p className="text-sm text-slate-400">Pagos al día</p>
              <p className="mt-3 text-3xl font-semibold text-white">{membersData.filter((member) => member.status).length}</p>
            </div>
            <div className="rounded-3xl bg-slate-900/80 p-5 ring-1 ring-white/5">
              <p className="text-sm text-slate-400">Reservas recientes</p>
              <p className="mt-3 text-3xl font-semibold text-white">8</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
