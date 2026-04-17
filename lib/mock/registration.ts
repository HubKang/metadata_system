import type {
  BulkPreviewItem,
  RegistrationGuide,
  RegistrationMyStatus,
  RegistrationTab,
  RegistrationTemplate,
} from "@/lib/types";

export const registrationTabs: { key: RegistrationTab; label: string }[] = [
  { key: "term", label: "용어 등록" },
  { key: "domain", label: "도메인 등록" },
  { key: "word", label: "단어 등록" },
  { key: "bulk", label: "일괄 업로드" },
];

export const registrationGuides: Record<RegistrationTab, RegistrationGuide[]> = {
  term: [
    { id: "naming", title: "명명 규칙 준수", description: "물리명은 대문자 + 언더바(SNAKE_CASE) 규칙을 사용하세요." },
    { id: "domain", title: "도메인 정합성", description: "정의하려는 의미와 맞는 표준 도메인을 선택해 주세요." },
    { id: "duplicate", title: "사전 중복 확인", description: "기존 등록 용어와 중복되지 않는지 검색해 확인하세요." },
  ],
  domain: [
    { id: "domain-name", title: "도메인명 표준화", description: "도메인명은 업무 의미와 데이터 타입이 드러나야 합니다." },
    { id: "constraints", title: "기술 속성 명시", description: "길이, 범위, 포맷 등 제약 조건을 구체적으로 작성하세요." },
    { id: "group", title: "도메인 그룹 연결", description: "분류체계와 연계 가능한 도메인 그룹을 지정해 주세요." },
  ],
  word: [
    { id: "logical", title: "논리명 우선", description: "업무에서 실제 사용하는 의미 중심 명칭을 등록하세요." },
    { id: "synonym", title: "유의어 관리", description: "유사 단어는 유의어로 관리하여 검색성을 높이세요." },
    { id: "classify", title: "분류체계 연계", description: "엔터티/속성 분류를 지정해 재사용성을 높이세요." },
  ],
  bulk: [
    { id: "template", title: "템플릿 사용", description: "반드시 제공된 템플릿으로 업로드하세요." },
    { id: "header", title: "헤더 유지", description: "컬럼 헤더명은 변경하지 마세요." },
    { id: "validation", title: "사전 검토", description: "업로드 전 물리명, 도메인, 길이 값 유효성을 점검하세요." },
  ],
};

export const myRegistrationStatus: RegistrationMyStatus = {
  waiting: 12,
  rejected: 0,
};

export const uploadPreview: BulkPreviewItem[] = [
  { id: "01", logicalName: "상품주문번호", physicalName: "PROD_ORD_NO", domain: "ID 도메인", valid: true },
  { id: "02", logicalName: "주문결제상태코드", physicalName: "ORD_PAY_STAT_CD", domain: "코드 도메인", valid: true },
  { id: "03", logicalName: "배송지우편번호", physicalName: "DLV_ZIP_CD", domain: "주소 도메인", valid: false },
];

export const registrationTemplate: RegistrationTemplate = {
  fileName: "standard_registration_template.xlsx",
  updatedAt: "2026-04-17",
};
