"use client";

import type { RegistrationTab } from "@/lib/types";

interface RegistryTabsProps {
  items: { key: RegistrationTab; label: string }[];
  activeTab: RegistrationTab;
  onChange: (tab: RegistrationTab) => void;
}

export function RegistryTabs({ items, activeTab, onChange }: RegistryTabsProps) {
  return (
    <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1">
      {items.map((item) => {
        const active = item.key === activeTab;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={[
              "rounded-lg px-5 py-2.5 text-sm font-semibold transition",
              active ? "bg-white text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-800",
            ].join(" ")}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
