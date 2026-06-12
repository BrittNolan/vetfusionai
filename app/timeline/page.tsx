import type { Metadata } from "next";
import { PlatformPage } from "@/components/platform-page";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Chronological patient and case history view for review and continuity.",
};

export default function TimelinePage() {
  return (
    <PlatformPage
      route="/timeline"
      title="Timeline"
      description="A chronological patient and case history view for review and continuity — so any veterinarian or caregiver can see the whole story of a case at a glance."
      capabilities={[
        "Chronological case history across visits and caregivers",
        "Diagnostics, treatments, and record events in sequence",
        "Continuity view for staff handoffs and rounds",
        "Review-ready history for high-volume and chronic cases",
        "Supports clinical review packets and case audits",
      ]}
    />
  );
}
