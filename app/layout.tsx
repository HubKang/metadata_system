import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";

export const metadata: Metadata = {
  title: "데이터 거버넌스 | 표준 관리",
  description: "Enterprise-grade Data Governance Web Application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            <div className="mx-auto w-full max-w-[1400px] px-8 py-8">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
