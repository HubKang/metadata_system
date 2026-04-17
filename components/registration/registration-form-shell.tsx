import type { ReactNode } from "react";

interface RegistrationFormShellProps {
  title: string;
  description: string;
  actions?: ReactNode;
  tabs: ReactNode;
  main: ReactNode;
  side: ReactNode;
  bottom: ReactNode;
}

export function RegistrationFormShell({ title, description, actions, tabs, main, side, bottom }: RegistrationFormShellProps) {
  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">{title}</h1>
          <p className="mt-2 max-w-3xl text-base text-slate-600">{description}</p>
        </div>
        {actions ? <div>{actions}</div> : null}
      </header>

      <div>{tabs}</div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-6">{main}</div>
        <aside className="space-y-4">{side}</aside>
      </div>

      <footer className="flex items-center justify-between border-t border-slate-200 pt-6">{bottom}</footer>
    </div>
  );
}
