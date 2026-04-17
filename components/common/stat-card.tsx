import type { DashboardStat } from "@/lib/types";

interface StatCardProps {
  stat: DashboardStat;
}

const toneClass: Record<NonNullable<DashboardStat["deltaTone"]>, string> = {
  neutral: "text-slate-500",
  positive: "text-blue-700",
  warning: "text-amber-700",
  danger: "text-rose-700",
};

export function StatCard({ stat }: StatCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{stat.label}</p>
      <div className="mt-4 flex items-end gap-2">
        <p className="text-4xl font-bold tracking-tight text-slate-950">{stat.value}</p>
        {stat.delta ? (
          <span className={["mb-1 text-sm font-semibold", toneClass[stat.deltaTone ?? "neutral"]].join(" ")}>
            {stat.delta}
          </span>
        ) : null}
      </div>
    </article>
  );
}
