import type { Metadata } from "next";
import { PlatformPage } from "@/components/platform-page";

export const metadata: Metadata = {
  title: "Import",
  description:
    "Bulk patient, record, inventory, or workflow import support.",
};

export default function ImportPage() {
  return (
    <PlatformPage
      route="/import"
      title="Import"
      description="Bulk patient, record, inventory, or workflow import support — for bringing existing records and trackers into a structured, reviewable system without retyping everything."
      capabilities={[
        "Bulk patient and case record import",
        "Inventory and supply list import",
        "Existing tracker and spreadsheet migration",
        "Workflow and template import during setup",
        "Structured mapping so nothing is lost in transition",
      ]}
    />
  );
}
