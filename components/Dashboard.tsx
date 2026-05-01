"use client";

import { useEffect, useMemo, useState } from "react";

const membershipOptions = ["Todos", "Oro", "Plata", "Bronce"];
const membershipLabels: Record<string, string> = {
  ORO: "Oro",
  PLATA: "Plata",
  BRONCE: "Bronce",
};

interface Member {
  id: string;
  name: string;
  email: string;
  membershipType: string;
  status: boolean;
  dietPlan?: string | null;
  lastPayment?: string | null;
  paymentsCount: number;
}

export default function Dashboard() {
  const [membershipFilter, setMembershipFilter] = useState("Todos");
  const [activeOnly, setActiveOnly] = useState(false);
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMembers() {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/members");
        if (!response.ok) {
          throw new Error("No se pudo cargar la lista de miembros.");
        }

        const data: Member[] = await response.json();
        setMembers(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }

    loadMembers();
  }, []);

  const filteredMembers = useMemo(
    () =>
      members.filter((member) => {
        const membershipMatch = membershipFilter === "Todos" || membershipLabels[member.membershipType] === membershipFilter;
        const statusMatch = !activeOnly || member.status;
        return membershipMatch && statusMatch;
      }),
    [members, membershipFilter, activeOnly]
  );

  const totalPaidMembers = members.filter((member) => member.status).length;

  return (
    <div className="space-y-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-950/10 dark:border-slate-800 dark:bg-slate-900/80 dark:shadow-slate-950/20">
      <div className="grid gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">Gestión de miembros</p>
              <h3 className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">Miembros activos y pagos</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <select
                value={membershipFilter}
                onChange={(event) => setMembershipFilter(event.target.value)}
                className="rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              >
                {membershipOptions.map((option) => (
                  <option key={option} value={option} className="bg-slate-950 text-slate-100">
                    {option}
                  </option>
                ))}
              </select>
              <label className="flex items-center gap-2 text-sm text-slate-300">
                <input
                  type="checkbox"
                  checked={activeOnly}
                  onChange={(event) => setActiveOnly(event.target.checked)}
                  className="h-4 w-4 rounded border-slate-600 bg-slate-900 text-brand-500"
                />
                Solo activos
              </label>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950/95">
            {isLoading ? (
              <div className="p-8 text-center text-slate-500 dark:text-slate-300">Cargando miembros...</div>
            ) : error ? (
              <div className="p-8 text-center text-rose-600">{error}</div>
            ) : (
              <table className="min-w-full divide-y divide-slate-200 text-sm text-slate-700 dark:divide-slate-800 dark:text-slate-200">
                <thead className="bg-slate-100 text-slate-600 dark:bg-slate-900/90 dark:text-slate-300">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Nombre</th>
                    <th className="px-4 py-3 text-left font-semibold">Membresía</th>
                    <th className="px-4 py-3 text-left font-semibold">Último pago</th>
                    <th className="px-4 py-3 text-left font-semibold">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {filteredMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-slate-100 dark:hover:bg-slate-900/70">
                      <td className="px-4 py-4">{member.name}</td>
                      <td className="px-4 py-4">{membershipLabels[member.membershipType] || member.membershipType}</td>
                      <td className="px-4 py-4">{member.lastPayment ? new Date(member.lastPayment).toLocaleDateString("es-ES") : "Sin pago"}</td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            member.status ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-rose-500/15 text-rose-700 dark:text-rose-300"
                          }`}
                        >
                          {member.status ? "Activo" : "Suspendido"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950/95">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-brand-700 dark:text-brand-200">Resumen</p>
            <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">Estadísticas rápidas</p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-3xl bg-slate-100 p-5 ring-1 ring-slate-200 dark:bg-slate-900/80 dark:ring-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Miembros totales</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{members.length}</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-5 ring-1 ring-slate-200 dark:bg-slate-900/80 dark:ring-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Pagos al día</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{totalPaidMembers}</p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-5 ring-1 ring-slate-200 dark:bg-slate-900/80 dark:ring-white/5">
              <p className="text-sm text-slate-500 dark:text-slate-400">Transacciones registradas</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">{members.reduce((sum, member) => sum + member.paymentsCount, 0)}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
