import { SectionCard } from "@/components/common/section-card";

export function WordRegistrationForm() {
  return (
    <>
      <SectionCard title="기본 정보" description="신규 표준 단어를 등록하고 분류체계를 지정합니다.">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm font-medium text-slate-700">
            논리명
            <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: 고객명" />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            물리명
            <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: CUST_NM" />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700 md:col-span-2">
            영문 풀네임
            <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: Customer Name" />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            한자명
            <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="예: 顧客名" />
          </label>
          <label className="space-y-2 text-sm font-medium text-slate-700">
            유의어
            <input className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5" placeholder="콤마(,)로 구분" />
          </label>
        </div>
      </SectionCard>

      <SectionCard title="정의 및 설명">
        <textarea
          className="min-h-36 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5"
          placeholder="해당 단어의 명확한 정의와 업무적 활용 범위를 입력하세요."
        />
      </SectionCard>
    </>
  );
}
