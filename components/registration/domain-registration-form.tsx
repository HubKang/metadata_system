import { SectionCard } from "@/components/common/section-card";

export function DomainRegistrationForm() {
  return (
    <SectionCard title="도메인 기본 정보" description="신규 표준 도메인을 정의합니다.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
          도메인 분류
          <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
            <option>업무 공통</option>
            <option>고객 정보</option>
            <option>재무 회계</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          도메인명
          <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: 고객식별번호" />
        </label>
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-700">자동생성</p>
          <button type="button" className="w-full rounded-lg border border-blue-200 bg-blue-50 px-3 py-2.5 text-sm font-semibold text-blue-700">
            물리명 자동 생성
          </button>
        </div>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          논리 데이터 타입
          <select className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
            <option>VARCHAR</option>
            <option>NUMBER</option>
            <option>DATE</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          데이터 길이
          <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: 20" />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
          설명
          <textarea className="min-h-24 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="도메인의 목적과 규칙을 입력해 주세요." />
        </label>
      </div>
    </SectionCard>
  );
}
