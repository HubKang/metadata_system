"use client";

import { useMemo, useState } from "react";
import { SectionCard } from "@/components/common/section-card";
import { RegistryTabs } from "@/components/registration/registry-tabs";
import { RegistrationFormShell } from "@/components/registration/registration-form-shell";
import { TermRegistrationForm } from "@/components/registration/term-registration-form";
import { DomainRegistrationForm } from "@/components/registration/domain-registration-form";
import { WordRegistrationForm } from "@/components/registration/word-registration-form";
import { BulkUploadPanel } from "@/components/registration/bulk-upload-panel";
import {
  myRegistrationStatus,
  registrationGuides,
  registrationTabs,
  registrationTemplate,
  uploadPreview,
} from "@/lib/mock/registration";
import type { RegistrationTab } from "@/lib/types";

const tabTitle: Record<RegistrationTab, string> = {
  term: "용어 등록",
  domain: "도메인 등록",
  word: "단어 등록",
  bulk: "일괄 업로드",
};

export default function RegistrationRequestPage() {
  const [activeTab, setActiveTab] = useState<RegistrationTab>("term");

  const content = useMemo(() => {
    switch (activeTab) {
      case "term":
        return <TermRegistrationForm />;
      case "domain":
        return <DomainRegistrationForm />;
      case "word":
        return <WordRegistrationForm />;
      case "bulk":
        return <BulkUploadPanel previewRows={uploadPreview} />;
      default:
        return null;
    }
  }, [activeTab]);

  return (
    <RegistrationFormShell
      title="데이터 표준 등록 신청"
      description="기업 표준 분류체계에 따라 신규 용어, 도메인, 단어를 등록합니다. 대량 등록이 필요한 경우 엑셀 일괄 등록을 이용해 주세요."
      actions={
        <button className="rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50">
          템플릿 다운로드
        </button>
      }
      tabs={<RegistryTabs items={registrationTabs} activeTab={activeTab} onChange={setActiveTab} />}
      main={content}
      side={
        <>
          <SectionCard title="등록 가이드라인" className="bg-blue-50/60">
            <ol className="space-y-3">
              {registrationGuides[activeTab].map((guide, index) => (
                <li key={guide.id} className="text-sm text-slate-700">
                  <p className="font-semibold text-blue-700">{String(index + 1).padStart(2, "0")}</p>
                  <p className="mt-1 font-semibold text-slate-900">{guide.title}</p>
                  <p className="mt-1 text-slate-600">{guide.description}</p>
                </li>
              ))}
            </ol>
          </SectionCard>

          <SectionCard title="나의 신청 현황">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">심사 대기</p>
                <p className="mt-1 text-2xl font-bold text-slate-900">{myRegistrationStatus.waiting}</p>
              </div>
              <div className="rounded-lg bg-slate-50 p-3">
                <p className="text-xs text-slate-500">반려 건수</p>
                <p className="mt-1 text-2xl font-bold text-rose-700">{myRegistrationStatus.rejected}</p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="템플릿 정보">
            <p className="text-sm text-slate-600">파일명: {registrationTemplate.fileName}</p>
            <p className="mt-2 text-xs text-slate-500">최종 업데이트: {registrationTemplate.updatedAt}</p>
          </SectionCard>
        </>
      }
      bottom={
        <>
          <button className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800">등록 취소</button>
          <div className="flex items-center gap-2">
            <button className="rounded-xl border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700">임시 저장</button>
            <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
              {tabTitle[activeTab]} 신청 완료
            </button>
          </div>
        </>
      }
    />
  );
}
