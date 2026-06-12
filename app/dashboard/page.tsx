import type { Metadata } from "next";
import { PlatformPage } from "@/components/platform-page";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Operational visibility for medical, inventory, business operations, risk, and continuity workflows.",
};

export default function DashboardPage() {
  return (
    <PlatformPage
      route="/dashboard"
      title="Dashboard"
      description="Operational visibility for medical, inventory, business operations, risk, and continuity workflows — the leadership view of everything the care system depends on."
      capabilities={[
        "High-visibility case lists and clinical review surfaces",
        "Inventory, supply, and procurement blocker status",
        "AP/AR task visibility and payroll handoff status",
        "Risk registers, decision logs, and admin continuity",
        "Weekly and monthly leadership review packets",
      ]}
    />
  );
}
