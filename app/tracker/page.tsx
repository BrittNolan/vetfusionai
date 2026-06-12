import type { Metadata } from "next";
import { PlatformPage } from "@/components/platform-page";

export const metadata: Metadata = {
  title: "Tracker",
  description:
    "Active patient, treatment, recheck, inventory, and follow-up tracking.",
};

export default function TrackerPage() {
  return (
    <PlatformPage
      route="/tracker"
      title="Tracker"
      description="Active patient, treatment, recheck, inventory, and follow-up tracking — so what is active, what changed, and what is overdue stays visible to the whole team."
      capabilities={[
        "Active patient and treatment tracking with due times",
        "Recheck, callback, and escalation follow-through",
        "Med follow-through: changes, missed doses, refill needs",
        "Inventory and reorder visibility with vendor blockers",
        "Population-health watch lists and trends",
      ]}
    />
  );
}
