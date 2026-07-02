// Single source of truth for the platform tools — consumed by the homepage
// Platform section (cards + hover preview) and the platform pages (prev/next
// click-through). Order here is the canonical tour order.

export type PlatformTool = {
  route: string;
  category: string;
  title: string;
  body: string;
  capabilities: string[];
  illustration: string;
};

export const platformTools: PlatformTool[] = [
  {
    route: "/soap",
    category: "Records",
    title: "SOAP workspace",
    body: "AI-assisted draft structure, medical-record review, and finalization workflow.",
    capabilities: [
      "Structured SOAP drafts from notes, findings & diagnostics",
      "Quality-control flags before review",
      "DVM review & finalization on every record",
    ],
    illustration: "/illustrations/soap.webp",
  },
  {
    route: "/tracker",
    category: "Tracking",
    title: "Tracker",
    body: "Active patient, treatment, recheck, inventory, and follow-up tracking.",
    capabilities: [
      "Active treatment tracking with due times",
      "Recheck, callback & escalation follow-through",
      "Inventory & reorder visibility",
    ],
    illustration: "/illustrations/tracker.webp",
  },
  {
    route: "/import",
    category: "Migration",
    title: "Import",
    body: "Bulk patient, record, inventory, or workflow import support.",
    capabilities: [
      "Bulk patient & case record import",
      "Existing tracker & spreadsheet migration",
      "Structured mapping so nothing is lost",
    ],
    illustration: "/illustrations/import.webp",
  },
  {
    route: "/timeline",
    category: "History",
    title: "Timeline",
    body: "Chronological patient and case history view for review and continuity.",
    capabilities: [
      "Chronological case history across visits",
      "Diagnostics & treatments in sequence",
      "Continuity view for handoffs & rounds",
    ],
    illustration: "/illustrations/timeline.webp",
  },
  {
    route: "/dashboard",
    category: "Overview",
    title: "Dashboard",
    body: "Operational visibility for medical, inventory, business operations, risk, and continuity.",
    capabilities: [
      "High-visibility case & review surfaces",
      "Inventory & procurement status",
      "Leadership review packets",
    ],
    illustration: "/illustrations/dashboard.webp",
  },
];
