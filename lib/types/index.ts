export type NavKey =
  | "dashboard"
  | "taxonomy"
  | "standards"
  | "requests"
  | "validation"
  | "sync"
  | "settings";

export type AlertSeverity = "low" | "medium" | "high" | "critical";

export interface SidebarNavItem {
  key: NavKey;
  label: string;
  href: string;
  badge?: string;
}

export interface DashboardStat {
  id: string;
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "neutral" | "positive" | "warning" | "danger";
}

export interface IntegrityAlert {
  id: string;
  title: string;
  message: string;
  severity: AlertSeverity;
  count?: number;
}

export interface GovernanceActivity {
  id: string;
  actor: string;
  summary: string;
  time: string;
  meta?: string;
}

export interface DashboardMock {
  stats: DashboardStat[];
  alerts: IntegrityAlert[];
  activities: GovernanceActivity[];
  lastSyncAt: string;
}

export type RegistrationTab = "term" | "domain" | "word" | "bulk";

export interface RegistrationGuide {
  id: string;
  title: string;
  description: string;
}

export interface RegistrationMyStatus {
  waiting: number;
  rejected: number;
}

export interface BulkPreviewItem {
  id: string;
  logicalName: string;
  physicalName: string;
  domain: string;
  valid: boolean;
}

export interface RegistrationTemplate {
  fileName: string;
  updatedAt: string;
}
