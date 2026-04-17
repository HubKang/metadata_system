import { SectionCard } from "@/components/common/section-card";

export function TermRegistrationForm() {
  return (
    <SectionCard title="기본 정보 입력" description="표준 용어 등록을 위한 필수 정보를 입력하세요.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          표준 용어명(논리)
          <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: 고객명" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          영문 용어명(물리)
          <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: CUST_NM" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          도메인 선택
          <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
            <option>이름 (VARCHAR 100)</option>
            <option>식별번호 (VARCHAR 20)</option>
            <option>코드값 (VARCHAR 30)</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          분류어
          <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="검색 또는 직접 입력" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
          용어 정의 및 설명
          <textarea
            className="min-h-32 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5"
            placeholder="해당 용어의 의미와 비즈니스 규칙을 상세히 입력해 주세요."
          />
        </label>
      </div>
    </SectionCard>
  );
}
