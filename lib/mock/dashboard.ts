import type { DashboardMock, SidebarNavItem } from "@/lib/types";

export const sidebarNavItems: SidebarNavItem[] = [
  { key: "dashboard", label: "대시보드", href: "/" },
  { key: "taxonomy", label: "표준 분류체계", href: "/taxonomy" },
  { key: "standards", label: "표준 데이터 관리", href: "/standards" },
  { key: "requests", label: "등록 신청", href: "/requests/new" },
  { key: "validation", label: "검증 및 분석", href: "/validation" },
  { key: "sync", label: "데이터 동기화", href: "/sync" },
  { key: "settings", label: "설정", href: "/settings" },
];

export const dashboardMock: DashboardMock = {
  stats: [
    { id: "total-terms", label: "전체 표준 용어", value: "12,403", delta: "+2.4%", deltaTone: "positive" },
    { id: "total-domains", label: "전체 도메인", value: "452", delta: "Stable", deltaTone: "neutral" },
    { id: "total-words", label: "표준 단어 수", value: "8,920", delta: "+125", deltaTone: "positive" },
    { id: "compliance", label: "전체 준수율", value: "94.2%", delta: "전월 대비 +1.1%", deltaTone: "positive" },
    { id: "non-standard", label: "비표준 항목", value: "128", delta: "CRITICAL", deltaTone: "danger" },
  ],
  alerts: [
    {
      id: "dup-term",
      title: "중복 용어 감지",
      message: "사용자_ID, 고객_번호 간 의미 중복 가능성이 감지되었습니다.",
      severity: "high",
      count: 3,
    },
    {
      id: "mapping-gap",
      title: "매핑 누락 경고",
      message: "영업 CRM 신규 필드 12개가 표준 매핑 대기 상태입니다.",
      severity: "medium",
      count: 12,
    },
  ],
  activities: [
    {
      id: "act-1",
      actor: "박지성 선임",
      summary: "고객_개인정보_보호등급 표준 용어 등록 완료",
      time: "NOW",
      meta: "도메인: 공통코드 > 보안등급",
    },
    {
      id: "act-2",
      actor: "시스템 자동화",
      summary: "ERP 데이터 정합성 정기 검증 완료 (통과율 99.8%)",
      time: "14:20",
      meta: "검증 보고서: Verification_Report_20231124.pdf",
    },
    {
      id: "act-3",
      actor: "이영표 차장",
      summary: "상품_원가_환율 용어 정의 변경 승인 요청",
      time: "11:05",
      meta: "사유: IFRS 변경 대응",
    },
  ],
  lastSyncAt: "2026-04-17 08:30:15",
};
