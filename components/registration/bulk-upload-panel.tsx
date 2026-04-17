import type { BulkPreviewItem } from "@/lib/types";
import { SectionCard } from "@/components/common/section-card";

interface BulkUploadPanelProps {
  previewRows: BulkPreviewItem[];
}

export function BulkUploadPanel({ previewRows }: BulkUploadPanelProps) {
  return (
    <SectionCard title="엑셀 일괄 등록" description="템플릿 기반으로 대량 표준 등록을 처리합니다.">
      <div className="space-y-5">
        <div className="rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-12 text-center">
          <p className="text-lg font-semibold text-slate-800">엑셀 파일 드래그 & 드롭</p>
          <p className="mt-2 text-sm text-slate-500">또는 파일 찾기 (.xlsx, .xls 지원)</p>
          <button type="button" className="mt-5 rounded-lg border border-blue-200 bg-white px-5 py-2 text-sm font-semibold text-blue-700">
            파일 업로드
          </button>
        </div>

        <div>
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-700">업로드 미리보기 (최근 {previewRows.length}건)</p>
            <p className="text-xs text-slate-500">총 {previewRows.length}건 대기 중</p>
          </div>
          <div className="space-y-2">
            {previewRows.map((item) => (
              <div key={item.id} className="grid grid-cols-[42px_1.2fr_1fr_120px_62px] items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm">
                <span className="font-semibold text-slate-500">{item.id}</span>
                <span className="font-medium text-slate-900">{item.logicalName}</span>
                <span className="text-slate-500">{item.physicalName}</span>
                <span className="text-blue-700">{item.domain}</span>
                <span className={[
                  "rounded-full px-2 py-1 text-center text-xs font-semibold",
                  item.valid ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700",
                ].join(" ")}>
                  {item.valid ? "정상" : "검토"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
