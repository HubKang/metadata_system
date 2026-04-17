"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  Database,
  FolderTree,
  Gauge,
  RefreshCcw,
  Settings,
  Signature,
  ShieldCheck,
} from "lucide-react";
import { sidebarNavItems } from "@/lib/mock/dashboard";
import type { NavKey } from "@/lib/types";

const iconMap: Record<NavKey, React.ComponentType<{ className?: string }>> = {
  dashboard: Gauge,
  taxonomy: FolderTree,
  standards: Database,
  requests: Signature,
  validation: BarChart3,
  sync: RefreshCcw,
  settings: Settings,
};

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col border-r border-slate-200 bg-slate-50/95 px-4 py-5">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xl font-semibold tracking-tight text-blue-700">데이터 거버넌스</p>
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">Enterprise Admin</p>
        </div>
      </div>

      <button className="mb-6 rounded-xl bg-blue-600 px-4 py-3 text-left text-sm font-semibold text-white shadow-md transition hover:bg-blue-700">
        + New Registration
      </button>

      <nav className="space-y-1">
        {sidebarNavItems.map((item) => {
          const active = pathname === item.href;
          const Icon = iconMap[item.key];

          return (
            <Link
              key={item.key}
              href={item.href}
              className={[
                "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition",
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
              ].join(" ")}
            >
              <Icon className={["h-4 w-4", active ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"].join(" ")} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl border border-slate-200 bg-white p-3">
        <p className="text-xs font-semibold text-slate-900">관리자</p>
        <p className="mt-0.5 text-xs text-slate-500">MASTER ADMIN</p>
      </div>
    </aside>
  );
}
