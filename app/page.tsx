import { PageHeader } from "@/components/layout/page-header";
import { SectionCard } from "@/components/common/section-card";
import { StatCard } from "@/components/common/stat-card";
import { dashboardMock } from "@/lib/mock/dashboard";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        eyebrow="Data Intelligence Overview"
        title="표준 관리 대시보드"
        description="표준 용어·도메인·단어 관리 현황을 한눈에 확인하고 품질 이슈를 신속히 조치하세요."
        actions={
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.1em] text-slate-500">Last synchronized</p>
            <p className="text-sm font-semibold text-slate-800">{dashboardMock.lastSyncAt}</p>
          </div>
        }
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
        {dashboardMock.stats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <SectionCard
          className="xl:col-span-2"
          title="데이터 무결성 경고"
          description="표준 정책 위반 가능성이 있는 항목입니다."
        >
          <div className="space-y-3">
            {dashboardMock.alerts.map((alert) => (
              <div key={alert.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="font-semibold text-slate-900">{alert.title}</p>
                  <span className="rounded-full bg-rose-50 px-2 py-1 text-xs font-semibold text-rose-700">
                    {alert.count ?? 0}건
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600">{alert.message}</p>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard title="최근 거버넌스 활동" description="검토/승인/등록 이벤트 타임라인">
          <div className="space-y-4">
            {dashboardMock.activities.map((activity) => (
              <div key={activity.id} className="border-l-2 border-blue-100 pl-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-800">{activity.actor}</p>
                  <span className="text-xs font-medium text-slate-500">{activity.time}</span>
                </div>
                <p className="mt-1 text-sm text-slate-700">{activity.summary}</p>
                {activity.meta ? <p className="mt-1 text-xs text-slate-500">{activity.meta}</p> : null}
              </div>
            ))}
          </div>
        </SectionCard>
      </section>
    </div>
  );
}
