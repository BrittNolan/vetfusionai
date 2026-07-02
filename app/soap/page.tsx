import type { Metadata } from "next";
import { PlatformPage } from "@/components/platform-page";

export const metadata: Metadata = {
  title: "SOAP Workspace",
  description:
    "SOAP workspace for AI-assisted draft structure, medical-record review, and finalization workflow.",
};

export default function SoapPage() {
  return (
    <PlatformPage
      route="/soap"
      illustration="/illustrations/soap.webp"
      title="SOAP workspace"
      description="AI-assisted draft structure, medical-record review, and finalization workflow — built so drafts move through quality checks and DVM review into clean, finalized records."
      capabilities={[
        "Structured SOAP drafts from technician notes, doctor findings, and diagnostics",
        "Brief recheck SOAPs for stable monitoring visits",
        "Quality-control flags: missing data, dose verification, pending diagnostics",
        "DVM review and finalization workflow on every record",
        "Discharge and follow-up draft language",
      ]}
    />
  );
}
